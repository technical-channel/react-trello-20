import React from 'react';
import {Result} from "antd";

const KycSubmitted = () => {
  return (
    <div className="h-[500px] flex justify-center items-center">
      <Result
        title="You have successfully submitted the kyc"
        subTitle="We will review your application and get back to you"
      // extra={[
      //   <Button type="primary" key="console">
      //     Go Console
      //   </Button>,
      //   <Button key="buy">Buy Again</Button>,
      // ]}
      />
    </div>
  )
}

export default KycSubmitted;
