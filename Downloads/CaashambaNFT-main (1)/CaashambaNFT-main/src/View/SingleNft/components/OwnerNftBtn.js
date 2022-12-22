import React from "react";
import {useMutation} from "@apollo/client";
import {useWeb3React} from "@web3-react/core";
import {useParams} from "react-router-dom";
import {nftSaleStatus} from "../../../graphql/mutations/nftMutations";
import useNFT from "../../../hooks/useNFT";
import {getSingleNft} from "../../../graphql/queries/nftQueries";
import {GET_USER_NFTs} from "../../../graphql/queries/userQueries";
import {getNetworkChainID, getNetworkName} from "../../../utils/utility";
import useAuth from "../../../hooks/useAuth";

const OwnerNftBtn = ({data, currencySymbol, buyNft, setLoading}) => {
  const {network, address, tokenId} = useParams();
  const {putOnSale, nftApprove, removeFromSale} = useNFT()
  const {account, active, chainId} = useWeb3React()
  const [updateSaleStatus] = useMutation(nftSaleStatus);
  const {switchNetwork} = useAuth()
  const isMarketPlace = data?.getSpecificNFT?.data[0]?.isMarketPlace

  const handlePutOnSale = () => {
    const price = data?.getSpecificNFT?.data[0]?.price
    const collectionAddress = data?.getSpecificNFT?.data[0]?.collectionAddress
    if (data?.getSpecificNFT?.data[0]?.network === getNetworkName(chainId)) {
      setLoading(true)
      nftApprove(tokenId).send({from: account}).then(() => {
        putOnSale(tokenId, price.toString()).send({from: account})
          .then((res) => {
            updateSaleStatus({
              variables: {
                collectionAddress: collectionAddress,
                tokenId: parseInt(tokenId),
                isMarketPlace: !isMarketPlace
              },
              refetchQueries: [
                {
                  query: getSingleNft, variables: {
                    tokenId: parseInt(tokenId),
                    network: network,
                    collectionAddress: address
                  },
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
            }).then(() => {
              setLoading(false)
            }).catch((err) => {
              setLoading(false)
            })
          })
          .catch((err) => {
            setLoading(false)
          })
      })
    } else {
      switchNetwork(getNetworkChainID(data?.getSpecificNFT?.data[0]?.network))
    }
  }

  const handleRemoveFromSale = () => {
    const collectionAddress = data?.getSpecificNFT?.data[0]?.collectionAddress
    setLoading(true)
    removeFromSale(tokenId).send({from: account})
      .then((res) => {
        updateSaleStatus({
          variables: {
            collectionAddress: collectionAddress,
            tokenId: parseInt(tokenId),
            isMarketPlace: !isMarketPlace
          },
          refetchQueries: [{
            query: getSingleNft, variables: {
              tokenId: parseInt(tokenId),
              network: network,
              collectionAddress: address
            }
          }],
        }).then(() => {
          setLoading(false)
        })
      })
      .catch(() => {
        setLoading(false)
      })
  }

  return (
    <div className="">
      <div className="cursor-pointer uppercase font-semibold flex flex-col justify-center h-[40px] max-w-[300px] px-4 text-white bg-gradient-to-r from-[#054784] to-[#00988a] w-max"
        onClick={data?.getSpecificNFT?.data[0]?.isMarketPlace ? handleRemoveFromSale : handlePutOnSale}
      >
        {
          active ?
            data?.getSpecificNFT?.data[0]?.network === getNetworkName(chainId) ?
              data?.getSpecificNFT?.data[0]?.isMarketPlace ?
                "Remove From Sale" :
                `Put On Sale`
              : `Switch network to ${data?.getSpecificNFT?.data[0]?.network}`
            : "Connect Wallet"
        }
      </div>
    </div>
  )
}

export default OwnerNftBtn;
