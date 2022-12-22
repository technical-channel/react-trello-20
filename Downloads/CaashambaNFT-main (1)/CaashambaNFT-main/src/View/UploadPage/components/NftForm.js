import {Button, Form, Input, InputNumber, Select, Upload} from 'antd';
import React, {useEffect, useState} from 'react';
import {
  InboxOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {GET_ALL_CATEGORIES} from '../../../graphql/queries/userQueries';
import {useQuery} from '@apollo/client';

const NftForm = ({handleSubmit, previewURL, beforeUpload}) => {
  const [categoryOptions, setCategoryOptions] = useState([])
  const {data: categories, error, loading} = useQuery(GET_ALL_CATEGORIES)

  useEffect(() => {
    if (categories) {
      getCategories()
    }
  }, [categories])

  const getCategories = () => {
    console.log(categories.getAllCategories[0].name)
    setCategoryOptions([])
    let options = []
    for (let i = 0; i < categories.getAllCategories.length; i++) {
      const obj = {
        value: categories.getAllCategories[i].name.toLowerCase(),
        label: categories.getAllCategories[i].name,
      }
      options.push(obj)
    }
    setCategoryOptions(options)
  }

  return (
    <div className="bg-white flex  gap-10 justify-center">
      <div>
        {" "}
        <Form layout="vertical" onFinish={handleSubmit}>

          <div className="w-[400px] ">
            {/* ////Wallet */}

            {/* //Upaload File  */}
            <div className="">
              <div
                className=""
                style={{
                  height: "fit-content",
                  padding: "10px",
                  borderRadius: "10px",
                  marginBottom: "0",
                }}
              >
                <div className="">
                  <Form.Item>
                    <Form.Item
                      name="dragger"
                      // valuePropName="fileList"

                      noStyle
                      rules={[
                        {
                          required: true,
                          message: "Add image or file ",
                        },
                      ]}
                    >
                      <Upload.Dragger
                        multiple={false}
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
                          Upload single file
                        </p>
                      </Upload.Dragger>
                    </Form.Item>
                  </Form.Item>
                </div>
              </div>
            </div>
            <div>
              <Form.Item
                label="Price"
                name="price"
                rules={[
                  {
                    required: true,
                    message: "Please input Royalties!",
                  },
                ]}
              >
                <InputNumber
                  type="number"
                  min={0}
                  className=""
                  style={{width: "100%"}}
                  placeholder="e. g. 0.001 ETH"
                />
              </Form.Item>
            </div>

            <div className="my-3 text-left">
              <Form.Item
                label="Title"
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please input name!",
                  },
                ]}
              >
                <Input
                  className=""
                  style={{width: "100%"}}
                  placeholder="e. g. Tree #001"
                />
              </Form.Item>
            </div>
            <div className="my-3 text-left ">
              <Form.Item
                label="Description"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Please input Description!",
                  },
                  {
                    min: 100,
                    message: "Please input at least 100 characters!",
                  }
                ]}
              >
                <Input.TextArea
                  type="text"
                  className=""
                  style={{width: "100%"}}
                  placeholder="e. g. Description"
                />
              </Form.Item>
            </div>
            <div className="text-left">
              <Form.Item
                label="Royalties"
                name="royalties"
                rules={[
                  {
                    required: true,
                    message: "Please input Royalties!",
                  },
                ]}
              >
                <InputNumber
                  type="number"
                  min={0}
                  max={50}
                  className=""
                  style={{width: "100%"}}
                  placeholder="e. g. 10"
                />
              </Form.Item>
            </div>
            <div className="my-3 text-left ">
              <Form.Item
                label="Business Plan"
                name="businessPlan"
                rules={[
                  {
                    required: true,
                    message: "Please input Royalties!",
                  },
                ]}
              >
                <Input
                  type="text"
                  className=""
                  style={{width: "100%"}}
                  placeholder="e. g. Description"
                />
              </Form.Item>
            </div>
            <div className="my-3 text-left ">
              <Form.Item
                label="Location"
                name="location"
                rules={[
                  {
                    required: true,
                    message: "Please input Royalties!",
                  },
                ]}
              >
                <Input
                  type="text"
                  className=""
                  style={{width: "100%"}}
                  placeholder="e. g. Description"
                />
              </Form.Item>
            </div>
            <div className="text-left">
              <Form.Item
                label="Categories"
                name="categories"
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
            <div className="flex justify-start">
              {" "}
              <Form.Item style={{width: "100%"}}>
                <Button htmlType="submit" style={{width: "100%", marginTop: "1rem"}}>
                  Create item
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </div >
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

export default NftForm
