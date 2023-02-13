import Web3 from "web3";
import {
  ICOContractAddress,
  USDTTokenAddress,
} from "../config/Contracts/contract";
import ICO_ABI from "../config/ABI/ICO_ABI";
import { USDT_ABI } from "../config/ABI/USDT_ABI";
import { Provider } from "react-redux";

const getContract = (contractAddress, ABI, provider) => {
  const web3_ = new Web3(provider);
  return new web3_.eth.Contract(ABI, contractAddress);
};

export const metacadeBuyContract = (provider) => {
  return getContract(
    ICOContractAddress,

    ICO_ABI,
    provider
  ).methods.SaleICOToken("100000000000000000");
};

export const usdtContractApprove = (provider) => {
  return getContract(USDTTokenAddress, USDT_ABI, provider).methods.approve(
    ICOContractAddress,
    "100000000000000000"
  );
};

export const SaleToken = (provider) => {
  return getContract(
    ICOContractAddress,
    ICO_ABI,
    provider
  ).methods.SaleICOTokenByETH("110424");
};

export const GetTokonomicStatus = (provider) => {
  return getContract(ICOContractAddress, ICO_ABI, provider)
    .methods.getTokenomics()
    .call();
};

export const GetRefundstatus = (provider) => {
  return getContract(ICOContractAddress, ICO_ABI, provider)
    .methods.isRefundDone()
    .call();
};

// isVestingDone
export const GetVestingStatus = (provider) => {
  return getContract(ICOContractAddress, ICO_ABI, provider)
    .methods.isVestingDone()
    .call();
};

export const GetApprove = (provider, ammount, USDTTokenAddress) => {
  return getContract(USDTTokenAddress, USDT_ABI, provider).methods.approve(
    ICOContractAddress,
    new Web3().utils.toWei(ammount.toString(), "ether")
  );
};

export const sellICOToken = (provider, ammount) => {
  return getContract(
    ICOContractAddress,
    ICO_ABI,
    provider
  ).methods.SaleICOToken(new Web3().utils.toWei(ammount.toString(), "ether"));
};
// approve
export const getWalletBalance = (provider, account) => {
  const web3_ = new Web3(provider);
  return new web3_.eth.getBalance(account);
};

// balaceof
// export const getAccountbalance = (provider, account) => {
//   const web3_ = new Web3(provider);
//   return new web3_.eth.balanceOf(account);
// };
