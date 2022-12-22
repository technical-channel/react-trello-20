import {LockFilled, MailFilled} from "@ant-design/icons";
import {Button, ConfigProvider, Divider, Form, Input} from "antd";

const LoginPage = () => {
  return (
    <div className="h-screen bg-gradient-to-tr from-navy to-secondary flex items-center justify-center px-5">
      <div className="h-max max-w-[500px] w-full mx-auto bg-white rounded-[15px] py-10">
        <div className="flex items-center justify-center flex-col h-full">
          <div className="text-center mb-10">
            <h2 className="font-display text-[38px] text-secondary">Login</h2>
            <p className="font-body text-[14px] font-medium">In order to invest in this project, you need to login</p>
          </div>

          <div className="w-[70%]">
            <Form>
              <Form.Item className="w-full" name="email">
                <Input prefix={<MailFilled className="mr-4" />} placeholder="Email" className="py-1" />
              </Form.Item>
              <Form.Item>
                <Input type="password" prefix={<LockFilled className="mr-4" />} placeholder="Password" className="py-1" />
              </Form.Item>
              <Button className="bg-navy text-white w-full font-bold font-body">Login</Button>
            </Form>
          </div>

          <div className="w-[70%]">
            <Divider>Or</Divider>
          </div>

          <div className="w-[70%] text-center">
            <p>Don't have an account ?</p>
            <Button className="mt-2 w-full text-navy">Register</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoginPage;
