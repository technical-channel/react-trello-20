import {useWeb3React} from "@web3-react/core";
import Web3 from "web3";
import {ChainsInfo} from "../config/config-chains";
import {ROYLITIES_ADDRESS} from "../config/constant/address";
import {
  NFT_CONTRACT,
  NFT_MARKETPLACE_CONTRACT,
} from "../config/constant/contract";
import {getErc1155Contract, getErc721Contract} from "../utils/contractHelper";
import {getNetworkChainID} from "../utils/utility";
import useContract from "./useContract";

function useNFT(address) {
  const {account, library, chainId, active} = useWeb3React();


  const checkBalance = async () => {
    const web3 = new Web3(library.provider);
    return await web3.eth.getBalance(account)
  }

  const mintNFT = (metadata, price, royalties) => {
    console.log(chainId)
    return getErc721Contract(ChainsInfo[chainId].NFT_CONTRACT, library.provider)
      .methods.directMint(
        account,
        metadata,
        0,
        account
      )
      .send({
        from: account,
        value: 0,
      });
  };

  const getTotalPrice = (price) => {
    return getErc721Contract(ChainsInfo[chainId].NFT_CONTRACT, library.provider)
      .methods.getTotalPrice(new Web3().utils.toWei(price.toString(), "ether"))
      .call();
  };
  const getNFTFinalRate = (price, tokenId) => {
    return getErc1155Contract(ChainsInfo[chainId].NFT_MARKETPLACE_CONTRACT, library.provider)
      .methods.getNFTFinalRate(
        new Web3().utils.toWei(price.toString(), "ether"),
        tokenId
      )
      .call();
  };
  const nftApprove = (tokenId) => {
    return getErc721Contract(ChainsInfo[chainId].NFT_CONTRACT, library.provider).methods.approve(
      ChainsInfo[chainId].NFT_MARKETPLACE_CONTRACT,
      tokenId
    );
  };
  const putOnSale = (tokenId, price) => {
    console.log(new Web3().utils.toWei(price, "ether"))
    return getErc1155Contract(
      ChainsInfo[chainId].NFT_MARKETPLACE_CONTRACT,
      library.provider
    ).methods.putOnSale(tokenId, new Web3().utils.toWei(price, "ether"));
  };

  const purchaseNFT = (tokenId) => {
    return getErc1155Contract(
      ChainsInfo[chainId].NFT_MARKETPLACE_CONTRACT,
      library.provider
    ).methods.purchaseNFT(tokenId);
  };
  const removeFromSale = (tokenId) => {
    return getErc1155Contract(
      ChainsInfo[chainId].NFT_MARKETPLACE_CONTRACT,
      library.provider
    ).methods.removeFromSale(tokenId);
  };

  const putOnAuction = (tokenId, bidPrice, auctionTime) => {
    return getErc1155Contract(
      ChainsInfo[chainId].NFT_MARKETPLACE_CONTRACT,
      library.provider
    ).methods.putOnAuction(
      tokenId,
      new Web3().utils.toWei(bidPrice, "ether"),
      auctionTime
    );
  };

  // const checkNftData = (tokenId) => {
  //   return getErc1155Contract(
  //     NFT_MARKETPLACE_CONTRACT,
  //     library.provider
  //   ).methods.items(
  //     tokenId,
  //     new Web3().utils.toWei(bidPrice, "ether"),
  //     auctionTime
  //   ).call()
  // }

  // NFT purchanse logic
  const nftPurchased = (NFTOwner, network, NFTData, NFTAuction, NFTSeller) => {
    // eslint-disable-next-line no-lone-blocks
    console.log(NFTOwner, network, NFTData, NFTAuction, NFTSeller);

    return active
      ? NFTOwner ===
        ChainsInfo[getNetworkChainID(network)]?.NFT_MARKETPLACE_ADDRESS
        ? NFTData.isAuction
          ? NFTAuction === account
            ? "transfer_nft"
            : "place_bid"
          : NFTSeller === account
            ? "remove_sale"
            : "buy_now"
        : NFTOwner === account
          ? NFTData.isAuction
            ? "putOnAuction"
            : "putOnSale"
          : "not_listed"
      : "connect_wallet";
  };

  return {
    mintNFT,
    getTotalPrice,
    nftApprove,
    putOnAuction,
    putOnSale,
    nftPurchased,
    purchaseNFT,
    removeFromSale,
    getNFTFinalRate,
    // checkNftData
    checkBalance
  };
}

export default useNFT;
