import {useWeb3React} from '@web3-react/core'
import React, {useState} from 'react'
import {GrEdit} from "@react-icons/all-files/gr/GrEdit";
import UpdateModal from './UpdateModal';

const UserSection = ({userData, setLoading}) => {
  const {account} = useWeb3React()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="w-[150px] mt-[-5rem]">
        <img
          className="w-[150px] h-[150px] mb-2"
          src={userData.profileImageURL ? userData.profileImageURL : "https://dynamic-assets.coinbase.com/085ce26e1eba2ccb210ea85df739a0ca2ef782747e47d618c64e92b168b94512df469956de1b667d93b2aa05ce77947e7bf1b4e0c7276371aa88ef9406036166/asset_icons/57f28803aad363f419a950a5f5b99acfd4fba8b683c01b9450baab43c9fa97ea.png"}
        />
        <div className="flex w-max items-center justify-center hover:underline cursor-pointer" onClick={showModal}>
          <p className="font-bold text-lg mb-0 mr-2">@{userData?.username}</p>
          <GrEdit size={15} />
          <UpdateModal
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
            setLoading={setLoading}
            userData={userData}
          />
        </div>
      </div>
      <div>
        <div className="px-4 py-2 rounded-full inline-flex border ">
          {userData?.walletAddress}
        </div>
      </div>
    </div>
  )
}

export default UserSection
