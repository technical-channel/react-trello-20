import React from "react";

const DeleteAccount = () => {
  return (
    <>
      <div class="flex justify-center mb-6">
        <h3 class="text-[#0674BB] lg:text-[25px] text-[22px] font-bold text-center">
          Delete Account
        </h3>
      </div>
      <div className="shadow-boxxx  relative z-50 mx-auto xl:max-w-[40%] lg:min-w-[40%]  bg-white  lg:min-h-[550px] min-h-[500px]  rounded-[15px]">
        <div className="bg-[#147CBF] relative h-[30px] rounded-t-[15px]"></div>
        <div className="px-[50px]">
          <div className="flex justify-center lg:mt-[50px] mt-5">
            <label className=" cursor-pointer lg:mt-0 mt-6">
              <img
                src="assets/delll.svg"
                className="lg:w-[300px] w-[180px] lg:h-[300px] w-[180px]"
              />
              <input type="file" className="hidden" />
            </label>
          </div>
          <h3 className="font-bold lg:text-[22px] text-center text-[20px]">
            Are you sure to delete this account?
          </h3>
          <div className="flex lg:flex-row flex-col mt-[60px] gap-5  justify-center">
            <button
              type="btn"
              className="text-center border-2 text-[#0674BB] border-[#0674BB] px-[60px] py-2 rounded-full"
            >
              <span />
              Cancel
            </button>
            <button
              type="btn"
              className="text-center border-2 text-[#fff] bg-[#FC0005]  px-[60px] py-2 rounded-full"
            >
              <span />
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="pt-[13rem]">
        {/* <img src="/public/assets/BG2.svg" /> */}
        <img src={process.env.PUBLIC_URL + "/assets/BG2.svg"} />
      </div>
    </>
  );
};

export default DeleteAccount;
