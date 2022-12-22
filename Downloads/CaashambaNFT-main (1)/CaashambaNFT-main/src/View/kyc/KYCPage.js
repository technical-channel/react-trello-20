import React, {useContext, useEffect, useState} from "react";
import {
  message,
} from "antd";
import {useLazyQuery, useMutation} from "@apollo/client";
import moment from "moment";
import {createKYC} from "../../graphql/mutations/userMutations";
import axios from "axios";
import KycForm from "./components/kycForm";
import {REST_API} from "../../config/constant/url";
import KycSubmitted from "./components/kycSubmitted";
import {GET_USER_DETAILS} from "../../graphql/queries/userQueries";
import Loading from "../../components/Loading/Loading";
import KycApproved from "./components/kycApproved";
import KycDenied from "./components/kycDenied";
import {AuthContext} from "../../providers/AuthProvider";

function KYCPage() {
  const [underProgress, setUnderProgress] = useState(false)
  const {userData} = useContext(AuthContext)
  const [user, setUser] = userData
  const [handlekycverification, {loading: submitLoading}] = useMutation(createKYC);
  const [fileUrl, setFileUrl] = useState("")
  const [getUserDetails, {data, loading}] = useLazyQuery(GET_USER_DETAILS, {
    skip: !user,
    variables: {
      email: user?.email
    }
  })

  useEffect(() => {
    getUserDetails()
  }, [])

  const handleUpload = (e) => {
    const formData = new FormData();
    formData.append("file_name", e.target.files[0]);
    axios.post(REST_API + "/uploadId", formData, {
      headers: {
        'Content-Type': "multipart/form-data"
      }
    })
      .then((res) => {
        setFileUrl(`${REST_API}/public/${res.data}`)
      })
      .catch(() => {
        message.error("Please upload pdf file.");
      })
  };

  const handleKycVerification = async (values) => {
    console.log(values);
    await handlekycverification({
      variables: {
        email: user?.email,
        address: values.address,
        maritalStatus: values.maritalstatus,
        gender: values.gender,
        dateOfBirth: moment(values.datepicker).format("YYYY-MM-DD"),
        identifyProofType: values.proofIdentity,
        isUsaCitizen: values.citizen,
        documentUrl: fileUrl,
      },
      refetchQueries: [{
        query: GET_USER_DETAILS,
        variables: {
          email: user?.email
        }
      }],
    })
      .then((res) => {
        console.log(res.data.createKYC.status);
        const status = res.data.createKYC.status;
        if (status === 201) {
          getUserDetails()
        } else if (status == 404) {
          message.error("Your age must be greater than or equal to 18 years");
        } else if (status == 400) {
          message.error("Kyc not  crated..");
        }
      })
      .catch((err) => {
        message.error("Kyc not  crated..");
      });
  };

  console.log(data)
  if (loading || submitLoading) {
    return <Loading />
  } else {
    if (data && data?.getSpecificUser?.data[0]?.isKycSubmitted && data?.getSpecificUser?.data[0]?.isKYCVerification) {
      return (
        <>
          <KycApproved />
        </>
      );
    }
    else if (data?.getSpecificUser?.data[0].isKycSubmitted && data?.getSpecificUser?.data[0].isKYCVerification === false) {
      return (
        <>
          <KycDenied />
        </>
      );
    }
    else if (data?.getSpecificUser?.data[0].isKycSubmitted && data?.getSpecificUser?.data[0].isKYCVerification === null) {
      return (
        <>
          <KycSubmitted />
        </>
      );
    }
    else {
      return (
        <>
          <KycForm handleKycVerification={handleKycVerification} handleUpload={handleUpload} />
        </>
      );
    }
  }
}

export default KYCPage;
