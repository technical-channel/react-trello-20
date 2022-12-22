import {useMutation} from '@apollo/client'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Upload} from 'antd'
import React, {useState} from 'react'
import {UPDATE_USER} from '../../../graphql/mutations/userMutations'
import {GET_USER_DETAILS} from '../../../graphql/queries/userQueries'
import useStorage from '../../../hooks/useStorage'
import {faPen} from '@fortawesome/free-solid-svg-icons'

const Banner = ({userData, setLoading}) => {
  const [UpdateUser] = useMutation(UPDATE_USER)
  const {uploadOnIpfs, downloadJSONOnIpfs} = useStorage()
  const [pencilVisible, setPencilVisible] = useState(false)

  const handleUpload = (e) => {
    let imageFormObj = new FormData();
    imageFormObj.append("image", e.target.files[0]);

    setLoading(true)
    const metadata = {
      bannerImage: imageFormObj.get("image"),
    }

    uploadOnIpfs(metadata).then(async (url) => {
      const data = await downloadJSONOnIpfs(url);

      UpdateUser({
        variables: {
          email: userData?.email,
          backgroundImageUrl: data.bannerImage,
        },
        refetchQueries: [
          {
            query: GET_USER_DETAILS,
            variables: {
              email: userData?.email
            }
          }
        ]
      }).then((res) => {
        setLoading(false)
      }).catch((err) => {
        setLoading(false)
      })
    }).catch(() => {
      setLoading(false)
    })
  }

  const image = userData?.backgroundImageURL ? userData?.backgroundImageURL : "https://i.seadn.io/gcs/files/a4d47358614137dade5562049f0907de.png?auto=format&w=1920"
  return (
    <div className={`w-full bg-[url(${image})]  h-[300px] flex justify-center items-center`}>
      <div className="hover:bg-black/[.7] cursor-pointer w-full h-full flex justify-center items-center" onMouseOver={() => setPencilVisible(true)} onMouseOut={() => setPencilVisible(false)}>
        <input type="file" className="visibility-0 w-full h-full opacity-0 cursor-pointer" onChange={(e) => handleUpload(e)} />
        {
          pencilVisible ?
            <div className="text-white absolute text-2xl">
              <FontAwesomeIcon icon={faPen} />
            </div>
            : null
        }
      </div>
    </div >
  )
}
export default Banner
