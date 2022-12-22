import { useWeb3React } from "@web3-react/core";
import { ChainsInfo } from "../config/config-chains";
import { toHex } from "../utils/utility";

function useWeb3() {
  const { activate, deactivate, account, active, chainId, library } =
    useWeb3React();
  const switchNetwork = async () => {
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHex(chainId) }],
      });
    } catch (switchError) {
      //   if (switchError.code === 4902) {
      //     try {
      //       await library.provider.request({
      //         method: "wallet_addEthereumChain",
      //         params: [networkParams[toHex(chainId)]],
      //       });
      //     } catch (error) {
      //       console.log(error);
      //     }
    }
  };

  const signCreate = async () => {
    try {
      const typedData = [
        {
          type: "uint256", // Any valid solidity type
          name: "tokenId", // Any string label you want
          value: "0", // The value to sign
        },
        {
          type: "uint256",
          name: "price",
          value: "10000000000000000",
        },
        {
          type: "string",
          name: "uri",
          value: "ritikchhipa5",
        },
      ];
      //  {

      // types: {
      //   LazyNFTVoucher: [
      //     { name: "tokenId", type: "uint256" },
      //     { name: "price", type: "uint256" },
      //     { name: "uri", type: "string" },
      //   ],
      // },
      // primaryType: "LazyNFTVoucher",
      // domain: {
      //   name: "Voucher-Domain",
      //   version: "3",
      //   // verifyingContract: ChainsInfo[chainId].NFT_ADDRESS,
      //   chainId,
      //   verifyingContract: "0xB3Ef1DA51626340BADc8B5ff209C473E192481F1",
      // },
      // message: {
      //   tokenId: "0",
      //   price: "10000000000000000",
      //   uri: "ritikchhipa5",
      // },
      // };

      // ["0","10000000000000000","ritikchhipa5","0xcbb0d39390ba240c146745ecc3fb2f392f274bc4d76fcdb4c06654412a0261893da35b8893b0e415df3414ca942e5e99c3f522d76a27cc4d2ab001554d9268ef1c"]

      const result = await library.provider.request({
        method: "eth_signTypedData",
        params: [typedData, account],
        from: account,
      });
      console.log(result, "Verify Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return {
    switchNetwork,
    signCreate,
  };
}

export default useWeb3;
