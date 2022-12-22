import React from "react"
import {Button, DatePicker, Form, Input, Radio} from "antd"

const KycForm = ({handleKycVerification, handleUpload}) => {
  return (
    <div>
      <div className="bg-white ">
        <div className="max-w-[900px] mx-auto py-10  ">
          <h1 className="flex justify-center text-2xl text-[#4AB6C1]">
            KYC Submission
          </h1>
          <Form
            layout="vertical"
            onFinish={(values) => handleKycVerification(values)}
          >
            <div className="my-6 w-1/2 m-auto">
              <Form.Item
                label="Address"
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Please put address!",
                  },
                ]}
              >
                <Input.TextArea
                  type=""
                  className=""
                  style={{width: "100%"}}
                  placeholder="Address"
                />
              </Form.Item>
            </div>

            <div className="my-6 flex justify-start w-1/2 m-auto ">
              <Form.Item
                label="Marital Status"
                name="maritalstatus"
                rules={[
                  {
                    required: true,
                    message: "Please select option !",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio value="Single">Single</Radio>
                  <Radio value="Married">Married</Radio>
                </Radio.Group>
              </Form.Item>
            </div>

            <div className="my-6 flex justify-start  w-1/2 m-auto">
              <Form.Item
                label="Gender"
                name="gender"
                rules={[
                  {
                    required: true,
                    message: "Please select option !",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio value="Male">Male</Radio>
                  <Radio value="Female">Female</Radio>
                  <Radio value="Other">Other</Radio>
                </Radio.Group>
              </Form.Item>
            </div>

            <div className="my-6 flex justify-start w-1/2 m-auto">
              <Form.Item
                label="Usa Citizen"
                name="citizen"
                rules={[
                  {
                    required: true,
                    message: "Please select option !",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio value={true}>Yes</Radio>
                  <Radio value={false}>No</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
            <div className="my-6 flex justify-start  w-1/2 m-auto">
              <Form.Item name="datepicker" label="Date of birth">
                <DatePicker />
              </Form.Item>
            </div>

            <div className="my-6 flex justify-start  w-1/2 m-auto">
              <Form.Item name="uploadimage" label="Upload PDF File of your document"
                rules={[
                  {
                    required: true,
                    message: "Please put address!",
                  },
                ]}
              >
                <div class="my-3 flex justify-start ">
                  <input type="file" name="fileInputElement" onChange={(e) => handleUpload(e)} />
                </div>
              </Form.Item>
            </div>

            <div className="my-6 flex justify-start  w-1/2 m-auto">
              <Form.Item
                label="Proof of Identity Submitted for PAN Exempt Cases"
                name="proofIdentity"
                rules={[
                  {
                    required: true,
                    message: "Please select option !",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio value="passport"> Passport </Radio>
                  <Radio value="driving license"> Drivinglicense </Radio>
                  <Radio value="other"> Other </Radio>
                </Radio.Group>
              </Form.Item>
            </div>

            <div className="flex justify-start w-1/2 m-auto">
              <Form.Item>
                <Button
                  htmlType="submit"
                  to="item-details"
                // onClick={() => handleKycVerification()}
                >
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div >
    </div >
  )
}
export default KycForm
