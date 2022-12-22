import Web3 from "web3";
import {notification} from "antd";

export const truncateAddress = (address) => {
  if (!address) return "No Account";
  const match = address.match(
    /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

export const getNetworkName = (chainId) => {
  switch (chainId) {
    case 5:
      return "ethereum";
    case 80001:
      return "polygon";
    default:
      return "none";
  }
};

export const getNetworkChainID = (network) => {
  switch (network) {
    case "ethereum":
      return "5";
    case "polygon":
      return "80001";
    default:
      return "none";
  }
};

export const toHex = (num) => {
  const val = Number(num);
  return "0x" + val.toString(16);
};

export const decimalConverter = (value) => {
  return new Web3().utils.toWei(value, "ether")
}

export const fromWeiConverter = (value) => {
  return value / Math.pow(10, 18);
}

export const walletError = () => {
  notification["error"]({
    message: 'Wallet Not Connected',
    description:
      'Please connect your metamask wallet',
  });
}

export const allocationError = () => {
  notification["error"]({
    message: 'Enter amount according to left allocation',
  });
}

export const fundError = () => {
  notification["error"]({
    message: "You dont have enough fund in your wallet",
  });
}
