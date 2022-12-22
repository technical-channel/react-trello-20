import {useWeb3React} from '@web3-react/core';
import React, {useState} from 'react'
import useAuth from '../../hooks/useAuth';
import PolygonLogo from "../../assets/polygon.svg"
import {Modal} from 'antd';

const ethImage = "https://www.pinksale.finance/static/media/ic-eth.9270fc02.svg"
const polygonImage = "https://www.pinksale.finance/static/media/ic-matic.910e1faf.png"

const NetworkButton = () => {
  const {active, chainId} = useWeb3React()
  const {connectWallet, switchNetwork} = useAuth()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="">
      {!active ?
        <button onClick={connectWallet} className="w-max bg-[#f5f5f7] ml-5 py-2 px-2 font-bold">
          <span>
            CONNECT WALLET
          </span>
        </button> :
        <>
          <div className="w-max bg-[#f5f5f7] ml-5 py-2 px-2 flex items-center font-bold cursor-pointer gap-3" onClick={showModal}>
            <img src={chainId === 5 ? ethImage : polygonImage} className="w-[30px] " />
            <span className="text-base">{chainId === 5 ? "Ethereum" : "Polygon"}</span>
          </div>
          <NetworksModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} switchNetwork={switchNetwork} />
        </>
      }
    </div>
  )
}

const NetworksModal = ({isModalOpen, setIsModalOpen, switchNetwork}) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal footer={null} open={isModalOpen} onCancel={handleCancel}>
      <div className="flex py-10 gap-2">
        <div onClick={() => {switchNetwork(5); handleCancel()}} className="w-1/2 bg-[#f5f5f7] py-2 px-2 font-bold flex flex-col items-center gap-3 justify-center cursor-pointer">
          <img src={ethImage} className="h-20" alt="" />
          <p>Ethereum</p>
        </div>

        <div onClick={() => {switchNetwork(80001); handleCancel()}} className="w-1/2 bg-[#f5f5f7] py-2 px-2 font-bold flex flex-col items-center gap-3 justify-center cursor-pointer">
          <img src={polygonImage} className="h-20" alt="" />
          <p>Polygon</p>
        </div>
      </div>
    </Modal >
  )
}
export default NetworkButton;
