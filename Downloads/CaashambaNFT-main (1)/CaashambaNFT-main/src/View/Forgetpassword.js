import React from "react";
import { Form, Input, Button, message } from "antd";

const Forgetpassword = () => {
  return (
    <div>
      <div className="max-w-[1300px] mx-auto py-10  ">
        <div className="my-3 ">
          <Form layout="vertical">
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input Email !",
                },
              ]}
            >
              <Input
                type="email"
                className=""
                style={{ width: "100%" }}
                placeholder=""
                // onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
          </Form>
        </div>
        <div className="my-3 flex justify-end">
          <Form.Item>
            <Button htmlType="submit" to="item-details">
              Submit
            </Button>
          </Form.Item>
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;
