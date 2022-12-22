import React, {useContext, useEffect} from "react";
import {Button, Dropdown, Menu, message} from "antd";
import {GiHamburgerMenu} from "react-icons/gi";
import {Link, Navigate, useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {useWeb3React} from "@web3-react/core";
import {AuthContext} from "../../providers/AuthProvider";
import PageBlocker from "../PageBlocker";
import {chainIdChecker} from "../../utils/utility";
import {useLazyQuery, useQuery} from "@apollo/client";
import {CHECK_LOGGED_IN, GET_USER_DETAILS} from "../../graphql/queries/userQueries";
import NetworkButton from "./NetworkButton";

function Header() {
  const {logout, connectWallet, disConnectWallet, checkWallet} = useAuth()

  const {checkAuth, checkSameWallet, checkUsCitizen, checkKyc, userData} = useContext(AuthContext)
  const [loggedIn, setLoggedIn] = checkAuth
  const [sameWallet, setSameWallet] = checkSameWallet
  const [isUsCitizen, setIsUsCitizen] = checkUsCitizen
  const [isKycVerified, setIsKycVerified] = checkKyc
  const [user, setUser] = userData
  const {active, account, chainId} = useWeb3React()
  const navigate = useNavigate();

  useEffect(() => {
    if (active) {
      checkWallet()
    } else {
      setSameWallet(true)
    }
  }, [active, account, chainId])

  return (
    <div className="h-[80px] border bg-white ">
      {sameWallet === false && <PageBlocker userWallet={user?.walletAddress} />}
      <div className=" md:max-w-[1400px] h-full w-[100%] mx-auto  flex items-center  w-full justify-between ">
        <Link to="/">
          <img src={process.env.PUBLIC_URL + "/assets/logo.png"} width={100} />
        </Link>
        <div className=" hidden md:flex items-center gap-6 uppercase">
          <div className="flex gap-6">
            {loggedIn ? <Link to="/">Home</Link> : null}
            {loggedIn ? <Link to="/explore">Explore</Link> : null}
            {loggedIn ? <Link to="/create">Create</Link> : null}
          </div>
        </div>
        {
          loggedIn ?
            <div className="flex items-center">
              <Dropdown
                overlay={(
                  <Menu>
                    <Menu.Item key="0" onClick={() => navigate("/profile")}>
                      Profile
                    </Menu.Item>
                    <Menu.Item key="1" onClick={() => navigate("/kyc-verify")}>
                      Kyc
                    </Menu.Item>
                    <Menu.Item key="2" onClick={() => {logout()}}>
                      Logout
                    </Menu.Item>
                  </Menu>
                )}
                placement="bottom"
              >
                <div className="cursor-pointer uppercase font-semibold flex flex-col justify-center h-[40px] max-w-[180px] px-4 w-full  text-white bg-gradient-to-r from-[#054784] to-[#00988a]">
                  {"Welcome User"}
                </div>
              </Dropdown>
              <NetworkButton />
            </div>

            :

            <div onClick={() => navigate("/login")} className="cursor-pointer uppercase font-semibold flex flex-col justify-center h-[40px] max-w-[180px] px-4 w-full  text-white bg-gradient-to-r from-[#054784] to-[#00988a]">
              {"Member Login"}
            </div>
        }

        <div className="block md:hidden">
          <GiHamburgerMenu size={40} />
        </div>
      </div>
    </div>
  );
}

export default Header;
