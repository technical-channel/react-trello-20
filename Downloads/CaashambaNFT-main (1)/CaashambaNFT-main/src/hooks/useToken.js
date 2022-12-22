import {useWeb3React} from "@web3-react/core";
import {CAASHAMBA_TOKEN, ERC14014_SELLER_CONTRACT} from "../config/constant/contract";
import {getSellerContract, getTokenContract} from "../utils/contractHelper";
import {ethers} from "ethers";
import Web3 from "web3";
import erc1404 from "../config/abi/ERC1404.json"
import {ChainsInfo} from "../config/config-chains";
import {erc1404Bytecode} from "../config/bytecode/ERC1404Bytecode";

const useToken = () => {
  const {account, library, chainId, active} = useWeb3React();

  const approveContract = (tokenAddress) => {
    return getTokenContract(tokenAddress, library.provider).methods.approve(ChainsInfo[chainId].ERC14014_SELLER_CONTRACT, new Web3().utils.toWei("100", "ether"))
  }

  const checkBusdBalance = () => {
    return getTokenContract(ChainsInfo[chainId].BUSD, library.provider).methods.balanceOf(account).call()
  }

  const approveBusdContract = (amount) => {
    return getTokenContract(ChainsInfo[chainId].BUSD, library.provider).methods.approve(ChainsInfo[chainId].ERC14014_SELLER_CONTRACT, new Web3().utils.toWei(amount, "ether"))
  }

  const startNewICOSale = (numericList) => {
    return getSellerContract(ChainsInfo[chainId].ERC14014_SELLER_CONTRACT, library.provider)
      .methods.startNewICOSale(numericList)
  }

  const sellIcoToken = (ico, amount) => {
    return getSellerContract(ChainsInfo[chainId].ERC14014_SELLER_CONTRACT, library.provider)
      .methods.SaleICOToken(ico, amount)
  }

  const deployERC1404 = (name, symbol) => {
    const web3 = new Web3(library.provider);
    const contract = new web3.eth.Contract(erc1404)
    return contract.deploy({
      data: erc1404Bytecode,
      arguments: [
        name,
        symbol
      ]
    })
  }

  const fetchICOData = (index, chainIdd) => {
    console.log(chainIdd)
    return getSellerContract(ChainsInfo[chainIdd].ERC14014_SELLER_CONTRACT, ChainsInfo[chainIdd].RPC_PROVIDER_URL).methods.sellDataset(index).call()
  }

  return {
    startNewICOSale,
    sellIcoToken,
    approveContract,
    deployERC1404,
    fetchICOData,
    approveBusdContract,
    checkBusdBalance
  }
}

export default useToken;
