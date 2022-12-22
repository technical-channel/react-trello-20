import React, {useState} from "react";
import {Button, Form, InputNumber, Menu} from "antd";
import {BiMoney, BiNetworkChart} from "react-icons/bi";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {GET_ALL_CATEGORIES} from "../../../graphql/queries/userQueries";
import {useQuery} from "@apollo/client";

const FilterSection = ({category, setCategory, price, setPrice, network, setNetwork, isUsCitizen}) => {
  const [filteredCategory, setfilteredCategory] = useState(null);
  const {data: categories, error, loading} = useQuery(GET_ALL_CATEGORIES)
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    [
      getItem("Categories", "sub1", <AppstoreOutlined />, [
        getItem(
          null,
          "g1",
          null,
          [
            getItem(
              <>
                <div className="flex flex-wrap gap-3 my-5">
                  <button onClick={(e) => {e.preventDefault(); setCategory("")}} className={`bg-[#f5f5f7] px-5 ${category === "" ? "text-white  from-[#054784] to-[#00988a] bg-gradient-to-r" : ""}`}>
                    <strong>All </strong>
                  </button>
                  {
                    categories && (
                      categories.getAllCategories.map((d, i) => (
                        <button onClick={() => setCategory(d?.name?.toLowerCase())} className={`bg-[#f5f5f7] px-5 ${category === d?.name?.toLowerCase() ? "text-white  from-[#054784] to-[#00988a] bg-gradient-to-r" : ""}`}>
                          <strong>{d?.name}</strong>
                        </button>
                      )
                      ))
                  }
                </div>
              </>,
              "1"
            ),
          ],
          "group"
        ),
      ]),
    ],
    [
      getItem("Price", "sub2", <BiMoney />, [
        getItem(
          null,
          "g1",
          null,
          [
            getItem(
              <>
                <Form className="" onFinish={(values) => {setPrice({priceMin: values.priceMin, priceMax: values.priceMax})}}>
                  <div className="flex mb-0">
                    <Form.Item style={{marginBottom: 0}} name="priceMin">
                      <InputNumber placeholder="Min" />
                    </Form.Item>
                    <Form.Item name="priceMax">
                      <InputNumber placeholder="Max" />
                    </Form.Item>
                  </div>
                  <Button htmlType="submit" className="my-2 bg-[#f5f5f7] px-5 text-white  bg-gradient-to-r from-[#054784] to-[#00988a]">
                    <strong>Apply</strong>
                  </Button>
                </Form>
              </>,
              "1"
            ),
          ],
          "group"
        ),
      ]),
    ],
    [
      getItem("Blockchain", "sub3", <BiNetworkChart />, [
        getItem(
          null,
          "g1",
          null,
          [
            getItem(
              <>
                <div className=" my-5">
                  <div className="">
                    <button onClick={() => {setNetwork("")}} className={`w-full  bg-[#f5f5f7] px-5 ${network === "" ? "text-white  bg-gradient-to-r from-[#054784] to-[#00988a]" : null}`}>
                      <strong>All </strong>
                    </button>{" "}
                  </div>
                  <div>
                    {" "}
                    <button onClick={() => {setNetwork("polygon")}} className={`w-full  bg-[#f5f5f7] px-5 ${network === "polygon" ? "text-white  bg-gradient-to-r from-[#054784] to-[#00988a]" : null}`}>
                      <strong>Polygon</strong>
                    </button>{" "}
                  </div>
                  <div>
                    {" "}
                    <button onClick={() => {setNetwork("ethereum")}} className={`w-full  bg-[#f5f5f7] px-5 ${network === "ethereum" ? "text-white  bg-gradient-to-r from-[#054784] to-[#00988a]" : null}`}>
                      <strong>Ethereum</strong>
                    </button>{" "}
                  </div>
                </div>
              </>,
              "1"
            ),
          ],
          "group"
        ),
      ]),
    ],
  ];

  return (
    <div className="">
      <Menu
        className="w-full"
        style={{
          width: "100%",
        }}
        mode="inline"
        items={items[0]}
        defaultOpenKeys={['sub1']}
      />{" "}
      {
        !isUsCitizen && (
          <Menu
            className="w-full"
            style={{
              width: "100%",
            }}
            mode="inline"
            items={items[1]}
            defaultOpenKeys={['sub2']}
          />
        )
      }
      <Menu
        className="w-full"
        style={{
          width: "100%",
        }}
        mode="inline"
        items={items[2]}
        defaultOpenKeys={['sub3']}
      />
    </div>
  );
};
export default FilterSection;
