import {useQuery} from "@apollo/client";
import React, {useContext, useEffect} from "react";
import {Navigate} from 'react-router';
import {CHECK_LOGGED_IN} from "./graphql/queries/userQueries";
import {AuthContext} from "./providers/AuthProvider";

function ProtectedRoute({children}) {
  const {checkAuth, checkSameWallet, checkUsCitizen, checkKyc, userData} = useContext(AuthContext)
  const [loggedIn, setLoggedIn] = checkAuth
  const [isKycVerified, setIsKycVerified] = checkKyc
  const {data, loading, error} = useQuery(CHECK_LOGGED_IN)

  const isLoggedIn = localStorage.getItem("loggedIn") === "true" ? true : false
  // const isKycVerified = localStorage.getItem("isKycVerified") === "true" ? true : false

  return (
    !loading && (
      isLoggedIn ?
        !isKycVerified ? <Navigate to='/kyc-verify' /> : children
        : <Navigate to='/login' />
    )
  )
}

export default ProtectedRoute;
// isLoggedIn && !isKycVerified ? children : <Navigate to='/kyc-verify' />
// {isLoggedIn ? children : <Navigate to='/login' />}
      // {isLoggedIn ? children : <Navigate to='/login' />}
      // {isLoggedIn && !isKycVerified ? <Navigate to='/kyc-verify' /> : children}
