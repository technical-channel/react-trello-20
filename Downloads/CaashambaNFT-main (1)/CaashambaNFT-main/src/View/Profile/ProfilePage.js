import {useLazyQuery, useQuery} from "@apollo/client";
import {useWeb3React} from "@web3-react/core";
import React, {useContext, useEffect, useState} from "react";
import {GET_USER_DETAILS, GET_USER_NFTs} from "../../graphql/queries/userQueries";

import {NftCard} from "../../components/Card/NftCard";
import Banner from "./components/Banner";
import UserSection from "./components/UserSection";
import NftSection from "./components/NftSection";
import Loading from "../../components/Loading/Loading";
import {Empty} from "antd";
import {ICOs, ICO_SALE, USER_ICOS} from "../../graphql/queries/icoQueries";
import {AuthContext} from "../../providers/AuthProvider";
import IcoSaleSection from "./components/IcoSaleSection";
import {ICOCard} from "../Explore/components/ICOCard";

function ProfilePage() {
  const {checkUsCitizen, userData} = useContext(AuthContext)

  const [user, setUser] = userData;
  const {account, active} = useWeb3React()
  const [loading, setLoading] = useState(false)
  const [isUsCitizen, setIsUsCitizen] = checkUsCitizen

  const {data: userinfo, loading: userLoading} = useQuery(GET_USER_DETAILS, {
    skip: !user,
    variables: {
      email: user?.email
    }
  })

  const {data: sales} = useQuery(ICO_SALE, {
    skip: !user,
    variables: {
      walletAddress: user?.walletAddress,
    }
  })
  console.log(sales)

  const {data: userIcos, loading: userIcosLoading} = useQuery(USER_ICOS, {
    skip: !user,
    variables: {
      owner: user?.walletAddress.toLowerCase(),
    }
  })


  const {data: nfts, loading: nftsLoading} = useQuery(GET_USER_NFTs, {
    skip: !user,
    variables: {
      ownerAddress: user?.walletAddress,
      limit: 10,
      page: 1
    }
  })


  if (!user || userLoading || nftsLoading || loading) {
    return <Loading />
  } else {
    return (
      <div className="bg-white h-full">
        <Banner userData={userinfo?.getSpecificUser?.data[0]} setLoading={setLoading} />
        <div className="max-w-[1300px] w-full mx-auto h-max">
          <UserSection userData={userinfo?.getSpecificUser?.data[0]} setLoading={setLoading} />
          {
            !isUsCitizen ?
              nfts?.getNFTsOfOwner?.data?.length !== 0 ?
                <NftSection nfts={nfts?.getNFTsOfOwner?.data} />
                : <Empty className="py-10" />
              :
              <div height>
                <div>
                  <h1 className="text-left text-4xl font-bold mt-8 text-[#00948a] underline">Sales Owned By you</h1>
                  <div className="grid grid-cols-5 gap-4 mx-auto">
                    {
                      userIcos?.userIcos.length !== 0 ?
                        userIcos.userIcos.map((d, i) => (
                          <ICOCard item={d} />
                        )) : <Empty />
                    }
                  </div>
                </div>

                {sales?.userICOSale.length !== 0 &&
                  <IcoSaleSection sales={sales ? sales?.userICOSale : []} />}
              </div>
          }
        </div>
      </div>
    );
  }
}

export default ProfilePage;
