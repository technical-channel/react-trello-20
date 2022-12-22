import {Button, Form, Input, InputNumber, notification, Radio, Select, Switch, Upload} from "antd";
import {useHistory, useNavigate} from "react-router-dom";
import React, {useContext, useState} from "react";
import {
  InboxOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {AiOutlineTag, AiOutlineFieldTime} from "react-icons/ai";
import {useWeb3React} from "@web3-react/core";
import useStorage from "../../hooks/useStorage";
import useNFT from "../../hooks/useNFT";
import {useMutation} from "@apollo/client"
import {createNft} from "../../graphql/mutations/nftMutations";
import {NFT_CONTRACT} from "../../config/constant/contract";
import {getNetworkName} from "../../utils/utility";
import Loading from "../../components/Loading/Loading";
import {ChainsInfo} from "../../config/config-chains";
import NftForm from "./components/NftForm";
import ICOForm from "./components/ICOForm";
import {AuthContext} from "../../providers/AuthProvider";

function UploadPage() {
  const {checkUsCitizen} = useContext(AuthContext)
  const [previewURL, setPreviewURL] = useState(null);
  const [fileList, setFileList] = useState(null)
  const [loading, setLoading] = useState(false);
  const {active, account, chainId} = useWeb3React()
  const {uploadOnIpfs, downloadJSONOnIpfs} = useStorage()
  const [submitNft] = useMutation(createNft);
  const [walletError, setWalletError] = useState(false)
  const [isUsCitizen, setIsUsCitizen] = checkUsCitizen
  const [nft, setNft] = useState(true)
  const {mintNFT} = useNFT();
  const navigate = useNavigate()

  const beforeUpload = (file, fileList) => {
    // setFile(file);
    setFileList(file);
    setPreviewURL(URL.createObjectURL(file));
    console.log(file);
    return false;
  };

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Wallet Not Connected',
      description:
        'Please connect your metamask wallet',
    });
  };

  const handleSubmit = (values) => {
    console.log(values)
    let title = values.title;
    let description = values.description;
    let price = values.price
    let royalty = values.royalties
    let businessPlan = values.businessPlan
    let location = values.location
    let category = values.categories
    // let properties = values.properties || [];

    let imageFormObj = new FormData();
    imageFormObj.append("image", fileList);

    const metadata = {
      title: title,
      description: description,
      image: imageFormObj.get("image"),
      creator: account,
      // properties: properties,
    };

    if (active) {
      setLoading(true)
      uploadOnIpfs(metadata).then(async (url) => {
        await mintNFT(url, price, royalty)
          .then(async (res) => {
            const data = await downloadJSONOnIpfs(url);
            console.log(res)
            console.log(data)
            let tokenId = res.events.Transfer.returnValues.tokenId;
            submitNft({
              variables: {
                name: title,
                tokenId: parseInt(tokenId),
                collectionAddress: ChainsInfo[chainId]?.NFT_CONTRACT,
                url: url,
                imageUrl: data.image,
                chainId: chainId,
                network: getNetworkName(chainId),
                collectionAddress: ChainsInfo[chainId]?.NFT_CONTRACT,
                creatorAddress: account,
                ownerAddress: account,
                isMarketPlace: false,
                price: price,
                isAuction: false,
                businessPlan: businessPlan,
                location: location,
                category: category,
                description: description
              },
            }).then((res) => {
              setLoading(false);
              navigate(`/item/${getNetworkName(chainId)}/${ChainsInfo[chainId]?.NFT_CONTRACT}/${tokenId}`)
            });
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      });
    }
    else {
      openNotificationWithIcon("error")
    }
  }
  if (loading) {
    return (
      <Loading />
    )
  } else {
    return (
      <>
        <div className="bg-white ">
          <div className="max-w-[1300px] mx-auto py-10  ">
            <div className="text-center  ">
              <h1 className="my-5 font-bold text-4xl">Create New {!isUsCitizen ? "NFT" : "Token Sale"}</h1>
            </div>
            <div>
              {!isUsCitizen ?
                <NftForm handleSubmit={handleSubmit} previewURL={previewURL} beforeUpload={beforeUpload} />
                : <ICOForm setLoading={setLoading} />
              }

            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UploadPage;
