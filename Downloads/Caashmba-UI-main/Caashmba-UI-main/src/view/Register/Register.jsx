import {ArrowLeftOutlined, LockFilled, MailFilled} from "@ant-design/icons";
import {Button, Checkbox, ConfigProvider, Divider, Form, Input, InputNumber, Select} from "antd";
import {useEffect, useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";
import countryList from 'react-select-country-list'
import InfoModal from "./components/InfoModal";

const RegisterPage = () => {
  const navigate = useNavigate()
  const [isInfoModal, setIsInfoModal] = useState(false)
  const options = useMemo(() => countryList().getData(), [])
  const documentOptions = [
    {
      value: "passport",
      label: "Passport"
    },
    {
      value: "license",
      label: "Driver License"
    }
  ]
  return (
    
 <div className="bg-gradient-to-tr from-navy to-secondary px-5 py-5">
  <div className="max-w-[500px] w-full mx-auto ">
      <img src={process.env.PUBLIC_URL + "/assets/logo.png"} className="mb-5 w-[120px] mx-auto" />
      <button onClick={() => navigate(-1)} className="fixed left-0 top-0 m-6 text-white font-bold flex items-center gap-2"><ArrowLeftOutlined />Go Back</button>
      <div className="h-max bg-white rounded-[15px] py-5">
        <div className="flex items-center justify-center flex-col h-full">
          <div className="text-center mb-5">
            <h2 className="font-display text-[38px] text-secondary">Register</h2>
            <p className="font-body text-[14px] font-medium">In order to invest in this project, you need to login</p>
          </div>

          <div className="w-[70%] h-min">
            <Form
              layout="vertical"
            >
              <Form.Item
                className="w-full mb-4"
                name="name"
                label="Name"
              >
                <Input placeholder="Name" className="py-1" />
              </Form.Item>

              <Form.Item
                className="w-full mb-4"
                name="email"
                label="Email"
              >
                <Input prefix={<MailFilled className="mr-4" />} placeholder="Email" className="py-1" />
              </Form.Item>

              <Form.Item
                className="w-full mb-4"
                name="country"
                label="Country"
              >
                <Select options={options} />
              </Form.Item>

              <Form.Item
                className="w-full mb-4"
                name="documentType"
                label="Document Type"
              >
                <Select options={documentOptions} />
              </Form.Item>

              <Form.Item
                className="w-full mb-4"
                name="documentNumber"
                label="Document Number"
              >
                <Input placeholder="Document Number" className="py-1" />
              </Form.Item>

              <Form.Item
                className="w-full mb-4"
                name="password"
                label="Password"
              >
                <Input type="password" prefix={<LockFilled className="mr-4" />} placeholder="Password" className="py-1" />
              </Form.Item>

              <Button className="bg-navy text-white w-full font-bold font-body">Register</Button>
              <div className="flex items-start gap-4 mt-5">
                <Checkbox></Checkbox>
                <p>I agree to the <span className="text-secondary font-bold">Terms of Service,</span> <span className="text-secondary font-bold">Privacy Policy</span> and <span className="text-secondary font-bold">Non Disclosure Agreement</span> of Nostrum Capital</p>
              </div>
            </Form>
          </div>

          <div className="w-[70%]">
            <Divider>Or</Divider>
          </div>

          <div className="w-[70%] text-center">
            <p>Don't have an account ?</p>
            <Button className="mt-2 w-full text-navy">Login</Button>
          </div>
        </div>
      </div>
    </div>

    </div>
   
  )
}
export default RegisterPage;
