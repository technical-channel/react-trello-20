import React, { useContext, useEffect } from "react";
import "./App.css";
import RoutesComponent from "./Router/routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Web3ReactProvider } from "@web3-react/core";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
import { GRAPHQL_API } from "./config/constant/url";
import { AuthContext, AuthProvider } from "./providers/AuthProvider";
import { CHECK_LOGGED_IN } from "./graphql/queries/userQueries";

function App() {
  function getLibrary(provider) {
    const library = new ethers.providers.Web3Provider(provider);
    library.pollingInterval = 12000; // frequency provider is polling
    return library;
  }

  const { data, loading, error } = useQuery(CHECK_LOGGED_IN);

  const { checkAuth, checkSameWallet, checkUsCitizen, checkKyc, userData } =
    useContext(AuthContext);
  const [loggedIn, setLoggedIn] = checkAuth;
  const [sameWallet, setSameWallet] = checkSameWallet;
  const [isUsCitizen, setIsUsCitizen] = checkUsCitizen;
  const [isKycVerified, setIsKycVerified] = checkKyc;
  const [user, setUser] = userData;

  useEffect(() => {
    console.log(loading, data);
    console.log(data?.checkUserLoggedIn);
    if (data?.checkUserLoggedIn) {
      setUser(data?.checkUserLoggedIn);
      setLoggedIn(true);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem(
        "isKycVerified",
        data?.checkUserLoggedIn?.isKYCVerification
      );
      console.log(data?.checkUserLoggedIn?.isKYCVerification);
      setIsKycVerified(data?.checkUserLoggedIn?.isKYCVerification);
      console.log(data);
      // if (data?.checkUserLoggedIn?.kyc) {
      setIsUsCitizen(data?.checkUserLoggedIn?.kyc?.isUSACitizen);
      // }
    } else {
      localStorage.setItem("loggedIn", false);
      setLoggedIn(false);
    }
    if (error) {
      console.log(error);
      localStorage.setItem("loggedIn", false);
      setLoggedIn(false);
      localStorage.setItem("isKycVerified", false);
    }
  }, [data, loading]);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <Header />
        <div>
          <RoutesComponent />
        </div>
        <Footer />
      </div>
    </Web3ReactProvider>
  );
}

export default App;
