import React, {useState} from 'react'
import {Modal} from "antd";
import Dragger from 'antd/lib/upload/Dragger';
import {
  InboxOutlined,
  UserOutlined
} from "@ant-design/icons";
import useStorage from '../../../hooks/useStorage';
import {useMutation} from '@apollo/client';
import {UPDATE_USER} from '../../../graphql/mutations/userMutations';
import {GET_USER_DETAILS} from '../../../graphql/queries/userQueries';


const UpdateModal = ({isModalOpen, handleCancel, setLoading, userData}) => {
  const [bannerImageUrl, setBannerImageUrl] = useState("")
  const [profileImageUrl, setProfileImageUrl] = useState("")
  const [UpdateUser] = useMutation(UPDATE_USER)

  const [backgroundImageObject, setBackgroundImageObject] = useState(null)
  const [profileImageObject, setProfileImageObject] = useState(null)
  const {uploadOnIpfs, downloadJSONOnIpfs} = useStorage()

  const profileImageUpload = (file) => {
    let imageFormObj = new FormData();
    imageFormObj.append("image", file);
    setProfileImageObject(imageFormObj)
    // uploadOnIpfs(imageFormObj.get("image")).then(async (url) => {
    //   const data = await downloadIpfs(url);
    //   console.log(data)
    // })
  };

  const updateUser = () => {
    setLoading(true)
    const metadata = {
      profileImage: profileImageObject.get("image")
    }

    uploadOnIpfs(metadata).then(async (url) => {
      const data = await downloadJSONOnIpfs(url);
      UpdateUser({
        variables: {
          email: userData?.email,
          profileImageUrl: data.profileImage
        },
        refetchQueries: [
          {
            query: GET_USER_DETAILS,
            variables: {
              email: userData?.email
            }
          }
        ]
      }).then(() => {
        handleCancel()
        setLoading(false)
      }).catch(() => setLoading(false))
    }).catch(() => setLoading(false))

  }

  return (
    <Modal open={isModalOpen} onOk={updateUser} onCancel={() => handleCancel()}>
      <Dragger
        multiple={false}
        name="files"
        beforeUpload={(file) => {profileImageUpload(file)}}

        style={{
          marginTop: "2rem"
        }}>
        <p className="ant-upload-drag-icon">
          <UserOutlined />
        </p>
        <p className="ant-upload-text">Click to upload profile image</p>
      </Dragger>
    </Modal>
  )
}

export default UpdateModal;
