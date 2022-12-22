import React from 'react';
import {Button, Result} from "antd";

const KycDenied = () => {
  return (
    <div className="h-[500px] flex justify-center items-center">
      <Result
        status="error"
        title="Submission Failed"
      />
    </div>
  )
}
export default KycDenied;
