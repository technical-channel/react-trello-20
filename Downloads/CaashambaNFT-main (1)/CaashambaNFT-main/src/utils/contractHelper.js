import ERC1155ABI from "../config/abi/erc1155.json";
import NFT from "../config/abi/NFT.json"
import TokenABI from "../config/abi/ERC20.json"
import SellerABI from "../config/abi/seller.json"

import Web3 from "web3";
const getContract = (abi, address, provider) => {
  const web3 = new Web3(provider);
  return new web3.eth.Contract(abi, address);
};

export const getErc721Contract = (address, provider) => {
  return getContract(NFT, address, provider);
};
export const getErc1155Contract = (address, provider) => {
  return getContract(ERC1155ABI, address, provider);
};

export const getTokenContract = (address, provider) => {
  return getContract(TokenABI, address, provider);
}

export const getSellerContract = (address, provider) => {
  return getContract(SellerABI, address, provider);
}
