import React from "react";
import {useMutation} from "@apollo/client";
import {useWeb3React} from "@web3-react/core";
import {useParams} from "react-router-dom";
import {changeNftOwner} from "../../../graphql/mutations/nftMutations";
import useNFT from "../../../hooks/useNFT";
import Web3 from "web3";
import {message} from "antd";
import {getSingleNft} from "../../../graphql/queries/nftQueries";
import {GET_USER_NFTs} from "../../../graphql/queries/userQueries";
import useAuth from "../../../hooks/useAuth";
import {fundError, getNetworkChainID, getNetworkName} from "../../../utils/utility";

const BuyNftBtn = ({data, currencySymbol, setLoading}) => {
  const {purchaseNFT, checkBalance} = useNFT()
  const {connectWallet, switchNetwork} = useAuth()
  const {account, active, chainId} = useWeb3React()
  const [updateNftOwner] = useMutation(changeNftOwner);
  const {network, address, tokenId} = useParams();

  const handleBuy = () => {
    if (active) {
      if (data?.getSpecificNFT?.data[0]?.network === getNetworkName(chainId)) {
        buyNft()
      } else {
        switchNetwork(getNetworkChainID(data?.getSpecificNFT?.data[0]?.network))
      }
    } else {
      connectWallet()
    }
  }

  const buyNft = async () => {
    const collectionAddress = data?.getSpecificNFT?.data[0]?.collectionAddress
    const price = new Web3().utils.toWei(data?.getSpecificNFT?.data[0]?.price.toString(), 'ether')

    if (active) {
      await checkBalance().then((res) => {
        console.log(res)
        if (parseInt(res) >= parseInt(price)) {
          setLoading(true)
          purchaseNFT(tokenId).send({from: account, value: price})
            .then((res) => {
              updateNftOwner({
                variables: {
                  collectionAddress: collectionAddress,
                  tokenId: parseInt(tokenId),
                  ownerAddress: account
                },
                refetchQueries: [
                  {
                    query: getSingleNft, variables: {
                      tokenId: parseInt(tokenId),
                      network: network,
                      collectionAddress: address
                    }
                  },
                  {
                    query: GET_USER_NFTs,
                    variables: {
                      ownerAddress: account,
                      limit: 10,
                      page: 1
                    }
                  }
                ],
              })
                .then(() => {
                  setLoading(false)
                })
                .catch(() => {
                  setLoading(false)
                })
            })
            .catch(() => {
              setLoading(false)
            })
        } else {
          fundError()
        }
      })
    } else {
      connectWallet()
    }
  }

  return (
    <div className="">
      <div className="cursor-pointer uppercase font-semibold flex flex-col justify-center h-[40px] max-w-[300px] px-4 w-full  text-white bg-gradient-to-r from-[#054784] to-[#00988a]" onClick={() => handleBuy()}>
        {
          active ?
            data?.getSpecificNFT?.data[0]?.network === getNetworkName(chainId) ?
              `Buy For ${data?.getSpecificNFT?.data[0]?.price} ${currencySymbol}`
              : `Switch network to ${data?.getSpecificNFT?.data[0]?.network}`
            : "Connect Wallet"
        }
      </div>
    </div>
  )
  // }
}
export default BuyNftBtn;
