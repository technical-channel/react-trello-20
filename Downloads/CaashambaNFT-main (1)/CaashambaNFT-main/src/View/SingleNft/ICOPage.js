import {useMutation, useQuery} from "@apollo/client";
import {useWeb3React} from "@web3-react/core";
import {Button, Form, Input, Modal, Progress} from "antd";
import moment from "moment";
import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import {CREATE_ICO_SALE} from "../../graphql/mutations/icoMutations";
import {ico, ICO_SALE, USER_ICOS} from "../../graphql/queries/icoQueries";
import useAuth from "../../hooks/useAuth";
import useToken from "../../hooks/useToken";
import {AuthContext} from "../../providers/AuthProvider";
import {allocationError, decimalConverter, fromWeiConverter, fundError, getNetworkChainID, getNetworkName, walletError} from "../../utils/utility";

const ICOPage = () => {
  const {address, icoIndex} = useParams()
  const [investAmount, setInvestAmount] = useState(0)
  const [buyAmount, setBuyAmount] = useState(0)
  const [icoData, setIcoData] = useState(null)
  const {switchNetwork} = useAuth()

  const {userData} = useContext(AuthContext)
  const [user, setUser] = userData;

  const {sellIcoToken, fetchICOData, approveBusdContract, checkBusdBalance} = useToken()
  const {account, active, chainId} = useWeb3React()
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [loading, setLoading] = useState(false)
  const [createIcoSale] = useMutation(CREATE_ICO_SALE)

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
  };

  const payAmount = (amount) => {
    setInvestAmount(((1 / data?.ico?.presaleRate) * amount).toFixed(4))
    setBuyAmount(amount)
  }

  const handleCancel = () => {
    setOpen(false);
  };
  const {data} = useQuery(ico, {
    variables: {
      contractAddress: address,
      icoIndex: icoIndex
    },
    refetchQueries: [
      {
        query: ICO_SALE,
        variables: {
          walletAddress: address
        }
      }
    ]
  })

  useEffect(() => {
    if (data) {
      fetchIcoData()
    }
  }, [data])

  const fetchIcoData = () => {
    console.log(data?.ico?.chainId)
    fetchICOData(icoIndex, data?.ico?.chainId).then((res) => {
      console.log(res)
      const data = {
        presaleRate: fromWeiConverter(res[0]),
        maxAllocation: fromWeiConverter(res[2]),
        remainingSoldOutToken: fromWeiConverter(res[4]),
        payOutCurrency: res[6],
        totalCollectedFund: fromWeiConverter(res[5]),
        profitMargin: res[8]
      }
      setIcoData(data)
    }).then(() => {
      setLoading(false)
    })
      .catch((err) => {
        console.log(err)
      })
  }

  const investIco = () => {
    if (active) {
      if (data?.ico?.network === getNetworkName(chainId)) {
        checkBusdBalance().then((res) => {
          if (fromWeiConverter(res) >= investAmount) {
            console.log(buyAmount, icoData?.remainingSoldOutToken)
            if (buyAmount <= icoData?.remainingSoldOutToken) {
              setLoading(true)
              approveBusdContract(investAmount.toString()).send({from: account}).then((res) => {
                console.log(decimalConverter(investAmount.toString()))
                sellIcoToken(icoIndex, decimalConverter(investAmount.toString())).send({
                  from: account
                }).then(() => {
                  createIcoSale({
                    variables: {
                      tokenId: parseInt(icoIndex),
                      buyerAddress: account,
                      amount: parseFloat(investAmount)
                    },
                    refetchQueries: [
                      {
                        query: ICO_SALE,
                        variables: {
                          walletAddress: account,
                        }
                      },
                      {
                        query: USER_ICOS,
                        variables: {
                          owner: user?.walletAddress.toLowerCase(),
                        }
                      }
                    ]
                  }).then(() => {
                    setLoading(false)
                    fetchIcoData()
                  })
                }).catch((err) => {
                  setLoading(false)
                  console.log(err)
                })
              }).catch((err) => {
                console.log(err)
                setLoading(false)
              })
            } else {
              allocationError()
            }
          } else {
            fundError()
          }
        }).catch((err) => {
          console.log(err)
        })
      } else {
        switchNetwork(getNetworkChainID(data?.ico?.network))
      }
    } else {
      walletError()
    }
  }

  if (loading) {
    return <Loading />
  } else {
    return (
      <div className="flex px-[6rem] section__padding items-start">
        <div className=" flex flex-1  p-[50px] justify-center items-center  border-r border-[#a6a6a61a] changa-font">
          <div className="flex flex-col w-[500px]">
            <img
              src={data?.ico?.icon}
              className="w-full rounded-md"
              alt="item"
            />
            <div className="mt-8 text-left">
              <h1 className="text-[20px] underline">Description</h1>
              <p className="text-[14px] font-normal font-sans">{data?.ico?.description}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-start items-start mx-[10rem] my-[5rem] relative">
          <div className="text-left bg-white px-10 py-5 rounded w-[70%]">
            <div>
              <div className=" text-left font-bold  text-[30px] changa-font">
                <h1 className="m-0">{data?.ico?.propertyName}</h1>
              </div>

              {/*<h1 className="text-[20px]">{icoData?.totalCollectedFund}/{icoData?.maxAllocation}</h1>*/}

              {/*<Progress
              percent={(icoData?.maxAllocation - icoData?.totalCollectedFund)}
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
            />*/}
            </div>

            {
              icoData?.remainingSoldOutToken !== 0 ?
                <div className="mt-5">
                  <h1 className="text-md">Buy Token</h1>
                  <div className="w-full text-center">
                    <div>
                      <Form.Item>
                        <Input onChange={(e) => payAmount(e.target.value)} type="number" placeholder="Amount" style={{marginBottom: "8px", borderRadius: "5px"}} />
                      </Form.Item>
                      <div className="mt-5 flex flex-col gap-1">
                        <div className="flex justify-between">
                          <p className="font-bold text-[14px] mb-0">1BUSD:</p>
                          <p className="text-[14px] mb-0">{data?.ico?.presaleRate} {data?.ico?.propertySymbol}</p>
                        </div>
                        {
                          investAmount !== 0 &&
                          <>
                            <div className="flex justify-between">
                              <p className="font-bold text-[14px] mb-0">You will pay:</p>
                              <p className="text-[14px] mb-0">{investAmount} BUSD</p>
                            </div>
                          </>
                        }
                      </div>
                    </div>

                    <Button onClick={() => investIco()} >Buy Tokens</Button>
                  </div>
                </div>
                : <h1 className="w-full text-center font-bold text-xl text-[#00978a] underline my-4">This Sale has ended</h1>
            }
            <div className="mt-5 flex flex-col gap-1">
              <h1 className="text-[20px] font-bold underline">Information</h1>
              <div className="flex justify-between">
                <p className="font-bold text-[14px] mb-0">Maximum Allocation:</p>
                <p className="text-[14px] mb-0">{icoData?.maxAllocation}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold text-[14px] mb-0">Allocation Left:</p>
                <p className="text-[14px] mb-0">{icoData?.remainingSoldOutToken}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold text-[14px] mb-0">Total Collected Fund:</p>
                <p className="text-[14px] mb-0">{icoData?.totalCollectedFund}</p>
              </div>
            </div>
          </div>
        </div >
      </div>
    )
  }
}

export default ICOPage;
