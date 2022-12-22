import {useQuery} from "@apollo/client"
import React, {createContext, useState} from "react"
import {CHECK_LOGGED_IN} from "../graphql/queries/userQueries"

export const AuthContext = createContext([])

export const AuthProvider = (props) => {
  const {data} = useQuery(CHECK_LOGGED_IN)

  const [loggedIn, setLoggedIn] = useState(false)
  const [isKycVerified, setIsKycVerified] = useState(false)
  const [sameWallet, setSameWallet] = useState(false)
  const [isUsCitizen, setIsUsCitizen] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <AuthContext.Provider
      value={{
        checkAuth: [loggedIn, setLoggedIn],
        checkKyc: [isKycVerified, setIsKycVerified],
        checkSameWallet: [sameWallet, setSameWallet],
        checkUsCitizen: [isUsCitizen, setIsUsCitizen],
        userData: [user, setUser]
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

