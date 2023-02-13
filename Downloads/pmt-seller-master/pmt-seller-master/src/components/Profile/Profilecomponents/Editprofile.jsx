import React, { useState } from "react";

const Editprofile = () => {
  const [file, setFile] = useState();
  const [errorMsg, setErrorMsg] = useState(false);
  function handleChange(e) {
    console.log(e.target.files, file);
    if (e.target.files.size <= 1024) {
      setFile(URL.createObjectURL(e.target.files[0]));
    } else {
      setErrorMsg("File size is greater than maximum limit");
    }
  }

  return (
    <>
      <div className="flex justify-center mb-6">
        <h3 className="text-[#0674BB] lg:text-[25px] text-[22px] font-bold text-center">
          Profile
        </h3>
      </div>
      <div className="shadow-boxxx px-6 relative z-50 mx-auto xl:max-w-[60%] lg:min-w-[60%]  bg-white   min-w-[100%]  lg:min-h-[430px] max-h-[550px] py-6 rounded-[15px]">
        <div className="">
          <div className="mt-8">
            <img
              src="assets/doll.svg"
              className="lg:w-[150px] mx-auto w-[80px] lg:h-[150px] w-[80px]"
            />
          </div>
          <div className="flex lg:flex-row flex-col mt-[60px] gap-5  justify-center">
            <div>
              <label className=" cursor-pointer">
                <div className="flex items-center border-2 text-[#0674BB] border-[#D9D9D9] px-[60px] py-2 rounded-[15px]">
                  <span></span>
                  <img src="assets/pencil1.svg" className="mr-3" /> Change
                </div>

                <input
                  onChange={handleChange}
                  type="file"
                  className="hidden"
                  reuired
                />
                <div>
                  <p className="error-message text-sm text-red-500">
                    {errorMsg}
                  </p>
                </div>
              </label>
            </div>
            <div>
              <button
                type="btn"
                className="flex items-center border-2 text-[#0674BB] border-[#D9D9D9] px-[60px] py-2 rounded-[15px]"
              >
                <span></span>
                <img src="assets/remove.png" className="mr-3" /> Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[7rem]">
        {/* <img src="/public/assets/BG2.svg" /> */}
        <img src="assets/BG2.svg" />
      </div>
    </>
  );
};

export default Editprofile;
