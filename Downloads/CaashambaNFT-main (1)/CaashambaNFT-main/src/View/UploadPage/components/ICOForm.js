import {useMutation, useQuery} from "@apollo/client"
import {useWeb3React} from "@web3-react/core"
import {Button, DatePicker, Form, Input, InputNumber, message, Select, Slider, Upload} from "antd"
import React, {useContext, useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import Web3 from "web3"
import Loading from "../../../components/Loading/Loading"
import {createIco} from "../../../graphql/mutations/icoMutations"
import useToken from "../../../hooks/useToken"
import {traceTransaction} from "../../../utils/contractHelper"
import {decimalConverter, getNetworkName, walletError} from "../../../utils/utility"
import {
  InboxOutlined,
} from "@ant-design/icons";
import useStorage from "../../../hooks/useStorage"
import {ERC14014_SELLER_CONTRACT} from "../../../config/constant/contract"
import {ChainsInfo} from "../../../config/config-chains"
import {AuthContext} from "../../../providers/AuthProvider"
import {GET_ALL_CATEGORIES} from "../../../graphql/queries/userQueries"
import {ADMIN_QUERY, FILTER_ICOS} from "../../../graphql/queries/icoQueries"

const {TextArea} = Input;
const ICOForm = ({setLoading}) => {
  const {userData} = useContext(AuthContext)
  const [user, setUser] = userData
  const {startNewICOSale, approveContract, deployERC1404} = useToken()
  const {account, active, chainId} = useWeb3React()
  const [addIco] = useMutation(createIco)
  const navigate = useNavigate()
  const [previewURL, setPreviewURL] = useState(null);
  const [fileList, setFileList] = useState(null)
  const {uploadOnIpfs, downloadJSONOnIpfs} = useStorage()
  const [categoryOptions, setCategoryOptions] = useState([])
  const [marks, setMarks] = useState({})
  const beforeUpload = (file, fileList) => {
    // setFile(file);
    setFileList(file);
    setPreviewURL(URL.createObjectURL(file));
    console.log(file);
    return false;
  };
  const {data: categories, error, loading} = useQuery(GET_ALL_CATEGORIES)
  const {data: adminProfit} = useQuery(ADMIN_QUERY, {
    variables: {
      id: "63996b874737d27ab030037a"
    }
  })


  const calculateMargin = () => {
    var points = []
    const maxProfit = adminProfit.getAdminProfitMargin.maximumRoyalty
    const digit = maxProfit / 4

    const customMarks = {
      0: 0,
      25: (maxProfit / 100) * 25,
      50: (maxProfit / 100) * 50,
      75: (maxProfit / 100) * 75,
      100: (maxProfit / 100) * 100
    };
    setMarks(customMarks)
  }
  useEffect(() => {
    if (categories) {
      getCategories()
    }
    if (adminProfit) {
      calculateMargin()
    }
  }, [categories, adminProfit])

  const getCategories = () => {
    setCategoryOptions([])
    let options = []
    if (categories) {
      for (let i = 0; i < categories.getAllCategories.length; i++) {
        const obj = {
          value: categories.getAllCategories[i].name.toLowerCase(),
          label: categories.getAllCategories[i].name,
        }
        options.push(obj)
      }
    }
    setCategoryOptions(options)
  }

  const handleSubmit = (values) => {
    const propertyName = values.propertyName;
    const propertySymbol = values.propertySymbol;
    const presaleRate = decimalConverter(values.presaleRate.toString())
    const maxAllocation = decimalConverter(values.maxIssuedTokens.toString())
    const profitMargin = values.profitMargin
    const startTime = parseInt(new Date().getTime() / 1000)
    console.log(values)

    if (active) {
      setLoading(true)

      let imageFormObj = new FormData();
      imageFormObj.append("image", fileList);

      const metadata = {
        image: imageFormObj.get("image"),
        // properties: properties,
      };
      deployERC1404(propertyName, propertySymbol).send({
        from: account
      }).then((res) => {
        const tokenAddress = res._address
        console.log(tokenAddress)
        uploadOnIpfs(metadata).then((url) => {
          approveContract(tokenAddress).send({from: account}).then(async () => {
            const data = await downloadJSONOnIpfs(url);
            startNewICOSale([presaleRate, startTime.toString(), maxAllocation, account, 0, 0, ChainsInfo[chainId].BUSD, tokenAddress, profitMargin]).send({from: account})
              .then(async (res) => {
                console.log(res)
                const index = res.events.IcoIndex.returnValues[1]
                addIco(
                  {
                    variables: {
                      propertyName: values.propertyName,
                      propertySymbol: values.propertySymbol,
                      description: values.description,
                      icon: data.image,
                      presaleRate: parseFloat(values.presaleRate),
                      maxAllocation: parseInt(values.maxIssuedTokens),
                      profitMargin: parseFloat(marks[values.profitMargin]),
                      contractAddress: ERC14014_SELLER_CONTRACT,
                      tokenContractAddress: tokenAddress,
                      category: values.category,
                      icoIndex: parseInt(index),
                      network: getNetworkName(chainId),
                      chainId: chainId,
                      owner: account.toLowerCase(),
                      userId: user?._id
                    },
                    refetchQueries: [
                      {
                        query: FILTER_ICOS,
                        variables: {
                          limit: 10,
                          page: 1,
                          network: "",
                          category: ""
                        }
                      }
                    ]
                  }
                )
                  .then(() => {
                    setLoading(false)
                    navigate("/explore")
                  })
                  .catch((err) => {
                    console.log(err)
                    setLoading(false)
                  })

              })
              .catch((err) => {
                console.log(err)
                setLoading(false)
              })
          })
            .catch((err) => {
              console.log(err)
              setLoading(false)
            })
        }).catch((err) => {
          console.log(err)
          message.error(err)
          setLoading(false)
        })
      })
    } else {
      walletError()
    }
  }


  return (
    <div className="bg-white flex  gap-10 justify-center mt-10">
      <Form layout="vertical" onFinish={(values) => handleSubmit(values)}>
        <div className="w-[400px] flex flex-col gap-5">
          <div className="">
            <Form.Item>
              <Form.Item
                name="dragger"
                // valuePropName="fileList"

                noStyle
              // rules={[
              //   {
              //     required: true,
              //     message: "Add image or file ",
              //   },
              // ]}
              >
                <Upload.Dragger
                  multiple={true}
                  name="files"
                  beforeUpload={(file) => {beforeUpload(file)}}
                >
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload.
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
          </div>

          <Form.Item
            label="Property Name"
            name="propertyName"
          // rules={[
          //   {
          //     required: true,
          //     message: "Please input property name!",
          //   },
          // ]}
          >
            <Input
              className=""
              style={{width: "100%"}}
              placeholder="Property Name"
            />
          </Form.Item>

          <Form.Item
            label="Property Symbol"
            name="propertySymbol"
          // rules={[
          //   {
          //     required: true,
          //     message: "Please input property symbol!",
          //   },
          // ]}
          >
            <Input
              className=""
              style={{width: "100%"}}
              placeholder="Property Symbol"
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
          // rules={[
          //   {
          //     required: true,
          //     message: "Please input description!",
          //   },
          //   {
          //     min: 100,
          //     message: "Please input at least 100 characters!",
          //   }
          // ]}
          >
            <TextArea
              className=""
              style={{width: "100%"}}
              placeholder="Name"
            />
          </Form.Item>
          <Form.Item
            label="Presale Rate"
            name="presaleRate"
          // rules={[
          //   {
          //     required: true,
          //     message: "Please input Presale Rate!",
          //   },
          // ]}
          >
            <InputNumber
              className=""
              style={{width: "100%"}}
              placeholder="Enter Presale Rate"
            />
          </Form.Item>

          <Form.Item
            label="Max Issued Tokens"
            name="maxIssuedTokens"
          // rules={[
          //   {
          //     required: true,
          //     message: "Please input issued tokens!",
          //   },
          // ]}
          >
            <InputNumber
              className=""
              style={{width: "100%"}}
              placeholder="Enter Max Issued Tokens"
            />
          </Form.Item>
          <div className="text-left">
            <Form.Item
              label="Category"
              name="category"
              rules={[
                {
                  required: true,
                  message: "Please input categories!",
                },
              ]}
            >
              <Select
                defaultValue="Categories"
                style={{width: "100%"}}
                // onChange={handleChange}
                options={categoryOptions}
              />
            </Form.Item>
          </div>

          <Form.Item
            label="Profit Margin"
            name="profitMargin"
          // rules={[
          //   {
          //     required: true,
          //     message: "Profit margin is required",
          //   },
          // ]}
          >
            {/*<InputNumber
              className=""
              style={{width: "100%"}}
              placeholder="Enter Profit margin"
            />*/}
            <Slider
              marks={marks}
              step={null}
              defaultValue={25}
              onChange={(value) => console.log(value)}
            />
          </Form.Item>

          <div className="w-full">
            {" "}
            <Form.Item>
              <Button style={{width: "100%"}}
                htmlType="submit">
                Create Sale
              </Button>
            </Form.Item>
          </div>

        </div>
      </Form>
      <div>
        <div>
          <label className="flex my-5 font-semibold text-left">
            Preview
          </label>
          <div className="max-w-[300px] w-full border h-[400px]">
            <img
              className="w-full h-full object-cover"
              src={previewURL ? previewURL : "https://via.placeholder.com/400x600.png?text=No+Image"}
            />
          </div>
        </div>
      </div>
    </div >
  )
}
export default ICOForm
// ChainsInfo[chainId].BUSD
