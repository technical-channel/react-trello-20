import React, {useContext, useEffect, useRef, useState} from "react";
import {NftCard} from "../../components/Card/NftCard";

import {BiNetworkChart, BiMoney} from "react-icons/bi";
import {Menu, Checkbox, Col, Row, Form, InputNumber, Button, Empty, Spin} from "antd";
import {useLazyQuery, useQuery} from "@apollo/client";
import FilterSection from "./components/FilterSection";
import {filterNfts, getAllNfts} from "../../graphql/queries/nftQueries";
import {AuthContext} from "../../providers/AuthProvider";
import {FILTER_ICOS, ICOs} from "../../graphql/queries/icoQueries";
import {ICOCard} from "./components/ICOCard";
import Loading from "../../components/Loading/Loading";

function ExplorePage() {
  const {checkUsCitizen} = useContext(AuthContext)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [network, setNetwork] = useState("")
  const [isAuction, setIsAuction] = useState(null)
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState({priceMin: null, priceMax: null})
  const [totalNfts, setTotalNfts] = useState(0)
  const [data, setData] = useState([])
  const [isUsCitizen, setIsUsCitizen] = checkUsCitizen
  const [pageLoading, setPageLoading] = useState(true)
  const [getData] = useLazyQuery(filterNfts, {
    variables: {
      limit: limit,
      page: page,
      network: network,
      priceMin: price.priceMin,
      priceMax: price.priceMax,
      isAuction: isAuction,
      category: category,
    }
  });

  const [getIcoData] = useLazyQuery(FILTER_ICOS, {
    variables: {
      limit: limit,
      page: page,
      network: network,
      category: category
    }
  })

  // const [isUsCitizen, setIsUsCitizen] = checkUsCitizen

  const [getAllData, {loading}] = useLazyQuery(getAllNfts)
  const ItemContainer = useRef()

  useEffect(() => {
    getAllData().then((res) => {
      setTotalNfts(res.data.getAllNFT.data.length)
    })
  }, [])

  useEffect(() => {
    if (isUsCitizen) {
      getIcoData().then((res) => {
        setData(res.data)
        setPageLoading(false)
      });
    } else {
      getData().then((res) => {
        setData(res.data)
        setPageLoading(false)
      })
    }
  }, [limit, page, network, category, price, isUsCitizen])

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // })

  // async function handleScroll() {
  //   const el = ItemContainer.current
  //   const bottom = (window.innerHeight + window.scrollY) >= el.offsetHeight
  //   if (bottom) {
  //     if (totalNfts > limit && !loading) {
  //       setLimit(limit + 5)
  //     }
  //   }
  // }


  if (pageLoading) {
    return <Loading />
  } else {
    return (
      <div className="bg-white ">
        <div>
          <div className="h-[300px] bg-black">
            <div className="h-[350px] relative overflow-hidden  shadow-lg cursor-pointer">
              <img
                className="object-cover w-full h-full "
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="Agricultural"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#00b36e]  opacity-[0.8] flex justify-center items-center">
                <h4 className=" text-[80px] font-bold tracking-tight text-white">
                  Agricultural
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[80px] max-w-[1500px] w-full mx-auto flex justify-center">
          {/* //Heading */}
          {/* NFT Card */}
          <div className="max-w-[300px] w-full ">
            <div className="sticky-top w-full">
              {" "}
              <FilterSection
                limit={limit}
                setLimit={setLimit}
                price={price}
                setPrice={setPrice}
                network={network}
                setNetwork={setNetwork}
                category={category}
                setCategory={setCategory}
                isUsCitizen={isUsCitizen}
              />
            </div>
          </div>

          <div ref={ItemContainer}>
            {!isUsCitizen ?
              data?.filtersNFT?.data.length !== 0 ?
                <div className="flex flex-col px-10">
                  <div className="grid grid-cols-4 gap-4 w-[1000px] mx-auto">
                    {data?.filtersNFT?.data.map((item, key) => (
                      <NftCard item={item} key={key} />
                    ))}
                  </div>
                  {loading ? <Spin /> : null}
                </div>
                : (
                  <div className="flex justify-center align-center w-full w-[1000px] mx-auto">
                    <Empty />
                  </div>
                )
              :
              data?.filterICOs?.length !== 0 ?
                <div className="flex flex-col px-10 py-10">
                  <div className="grid grid-cols-4 gap-4 w-[1000px] mx-auto py-10 mb-5">
                    {data?.filterICOs?.map((item, key) => (
                      <ICOCard item={item} key={key} />
                    ))}
                  </div>
                  {loading ? <Spin /> : null}
                </div>
                : (
                  <div className="flex justify-center align-center w-full w-[1000px] mx-auto">
                    <Empty />
                  </div>
                )
            }
          </div>
        </div>

      </div>
    );
  }
}

export default ExplorePage;
