import {useMutation, useQuery} from "@apollo/client";
import {useWeb3React} from "@web3-react/core";
import React, {useEffect, useState} from "react";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import Web3 from "web3";
import {ChainsInfo} from "../../config/config-chains";
import {getSingleNft} from "../../graphql/queries/nftQueries";
import useNFT from "../../hooks/useNFT";
import useStorage from "../../hooks/useStorage";
import {getErc721Contract} from "../../utils/contractHelper";
import {getNetworkChainID, truncateAddress} from "../../utils/utility";
import {changeNftOwner, nftSaleStatus} from "../../graphql/mutations/nftMutations"
import {message} from "antd";
import OwnerNftBtn from "./components/OwnerNftBtn";
import BuyNftBtn from "./components/BuyNftBtn";
import Loading from "../../components/Loading/Loading";

function ItemPage() {
  const {network, address, tokenId} = useParams();
  const {downloadJSONOnIpfs} = useStorage();
  const [metadata, setMetadata] = useState({});
  const {active, account} = useWeb3React()
  const [loading, setLoading] = useState(true);
  const [currencySymbol, setCurrencySymbol] = useState(ChainsInfo[getNetworkChainID(network)].CURRENCY_SYMBOL)
  const {purchaseNFT} = useNFT()
  const navigate = useNavigate()

  const {data} = useQuery(getSingleNft, {
    variables: {
      tokenId: parseInt(tokenId),
      network: network,
      collectionAddress: address
    }
  })

  const auth = localStorage.getItem("auth") || null
  const kyc = localStorage.getItem("kyc") || null

  useEffect(() => {
    getErc721Contract(
      ChainsInfo[getNetworkChainID(network)].NFT_CONTRACT,
      ChainsInfo[getNetworkChainID(network)].RPC_PROVIDER_URL
    )
      .methods.storeData(tokenId)
      .call()
      .then(async (res) => {
        console.log(res.jsonData);
        let metadata_ = await downloadJSONOnIpfs(res.jsonData);
        console.log(metadata_);
        setMetadata(metadata_);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [active, tokenId])
  if (loading) {
    return <Loading />
  }
  else {
    return (
      <div className="flex px-[6rem] section__padding">
        <div className=" flex flex-1  p-[50px] justify-center items-center  border-r border-[#a6a6a61a] ">
          <img
            src={metadata?.image}
            className="w-full h-full rounded-md"
            alt="item"
          />
        </div>
        <div className="flex flex-col flex-1 justify-start items-start m-[5rem] relative ">
          <div className=" text-left font-bold  text-[28px] changa-font">
            <h1 className="m-0">{metadata?.title}</h1>
            <p className="text-[18px]">
              From <span>{data?.getSpecificNFT?.data[0]?.price} {currencySymbol}</span>
            </p>
          </div>
          <div className="text-left">
            <div>
              <p className="text-lg font-bold">Creator</p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={metadata?.image}
                className="rounded-full w-[50px]"
                alt="creator"
              />
              <p className="m-0 font-semibold">{truncateAddress(metadata?.creator)}</p>
            </div>
          </div>
          <div className="text-left py-10  leading-[2rem]  ">
            <div>
              <p className="text-lg font-bold">Description</p>
            </div>
            <p>{metadata?.description}</p>
          </div>
          {console.log(data)}
          {
            data?.getSpecificNFT?.data[0]?.ownerAddress === account ?
              <OwnerNftBtn data={data} currencySymbol={currencySymbol} setLoading={setLoading} /> :
              <BuyNftBtn data={data} currencySymbol={currencySymbol} setLoading={setLoading} />
          }
        </div>
      </div>
    );
  }
}

export default ItemPage;
