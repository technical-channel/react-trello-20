import { useWeb3React } from "@web3-react/core";

import { useHistory } from "react-router-dom";
import { injected } from "../utils/connectors";

export const useAuth = () => {
  const { activate, deactivate, account } = useWeb3React();
  // const history = useHistory();

  const login = () => {
    activate(injected);
    console.log(account);
    localStorage.setItem("walletConnect", JSON.stringify({ isConnect: true }));
  };
  const logout = async () => {
    localStorage.setItem("walletConnect", JSON.stringify({ isConnect: false }));
    deactivate();
  };
  return { login, logout };
};

export default useAuth;
