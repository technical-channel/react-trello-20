import {useWeb3React} from "@web3-react/core";
import {injected} from "../utils/connectors";
// import { useHistory } from "react-router-dom";
// import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
// import { Register } from "../graphql/mutations/nftMutations";
import {message} from "antd";
// import { CheckWallet, SignIn, UserInfo } from "../graphql/queries/userQueries";
// import RegisterModal from "../components/modal/RegisterModal";
import {useContext, useState} from "react";
import {AuthContext} from "../providers/AuthProvider";
import {useNavigate} from "react-router-dom";
import {useLazyQuery, useMutation, useQuery} from "@apollo/client";
import {CHECK_LOGGED_IN, GET_USER_DETAILS} from "../graphql/queries/userQueries";
import {toHex} from "../utils/utility";
import {LOGOUT} from "../graphql/mutations/userMutations";

// import { ConnectWallet } from "../Redux/actions";
export const useAuth = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const {activate, deactivate, account, active, chainId, library} = useWeb3React();

  const {checkAuth, checkSameWallet, userData} = useContext(AuthContext)
  const [fetchUserDetails] = useLazyQuery(GET_USER_DETAILS)
  const [Logout] = useMutation(LOGOUT)
  const [loggedIn, setLoggedIn] = checkAuth;
  const [sameWallet, setSameWallet] = checkSameWallet
  const [user, setUser] = userData
  // const history = useHistory();
  // const [checkWallet] = useLazyQuery(CheckWallet);
  // const [signIn] = useLazyQuery(SignIn);

  // let [register] = useMutation(Register, {
  //   errorPolicy: "all",
  // });
  //
  const connectWallet = async () => {
    await activate(injected);
    localStorage.setItem("walletConnected", true);
  };

  const checkWallet = () => {
    if (user) {
      const userWallet = user?.walletAddress
      console.log(userWallet)
      if (userWallet.toLowerCase() !== account.toLowerCase()) {
        setSameWallet(false)
      }
      else {
        setSameWallet(true)
      }
    }
  }

  const disConnectWallet = () => {
    deactivate();
  };

  const changeLoginModalState = (state) => {
    console.log(state);
    setOpen(state);
  };

  const switchNetwork = async (chainId) => {
    console.log(chainId)
    console.log(chainId);
    await library.provider.request({
      method: "wallet_switchEthereumChain",
      params: [{chainId: toHex(parseInt(chainId))}],
    });
  };

  const logout = async () => {
    setLoggedIn(false)   // refreshState();
    Logout(
      {
        refetchQueries: [
          {
            query: CHECK_LOGGED_IN
          }
        ]
      }
    ).then(() => {
      localStorage.clear()
    })
    navigate('/login')
    deactivate();

  };
  return {
    // login,
    logout,
    // UserRegister,
    open,
    changeLoginModalState,
    connectWallet,
    disConnectWallet,
    checkWallet,
    switchNetwork
  };
};

export default useAuth;
