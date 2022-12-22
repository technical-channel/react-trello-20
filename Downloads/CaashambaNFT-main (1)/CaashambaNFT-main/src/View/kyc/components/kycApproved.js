import React from "react";
import {Button, Result} from "antd";
import {useNavigate} from "react-router-dom";

const KycApproved = () => {
  const navigate = useNavigate()
  return (
    <div className="h-[500px] flex justify-center items-center">
      <Result
        status="success"
        title="Your Kyc is approved"
        subTitle="Now you can access the marketplace"
        style={{
          height: "50vh"
        }}
        extra={[
          <Button onClick={() => navigate("/explore")} type="primary" key="console">
            Explore
          </Button>,
        ]}
      />
    </div>
  )
}
export default KycApproved;
