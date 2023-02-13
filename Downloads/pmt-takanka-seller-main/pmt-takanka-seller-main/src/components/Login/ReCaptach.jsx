import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
const ReCaptach = () => {
  const [verfied, setVerifed] = useState(false);

  //recaptcha function
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerifed(true);
  }
  return (
    <div className="flex flex-col items-center justify-center px-5 mt-[1rem]">
      <ReCAPTCHA
        sitekey="6LcGDU4jAAAAAJbqCYVk-2xJh-5n6UG5bDxtBt3M"
        onChange={onChange}
      />
    </div>
  );
};

export default ReCaptach;
