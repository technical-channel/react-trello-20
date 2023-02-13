import React from "react";

const Editprofile = () => {
  return (
    <>
      <div class="flex justify-center mb-6">
        <h3 class="text-[#0674BB] lg:text-[25px] text-[22px] font-bold text-center">
          Profile
        </h3>
      </div>
      <div class="shadow-boxxx px-6 relative z-50 mx-auto xl:max-w-[60%] lg:min-w-[60%]  bg-white   min-w-[100%]  lg:min-h-[430px] max-h-[550px] py-6 rounded-[15px]">
        <div class="">
          <div class="mt-8">
            <img
              src="assets/doll.svg"
              class="lg:w-[150px] mx-auto w-[80px] lg:h-[150px] w-[80px]"
            />
          </div>
          <div class="flex lg:flex-row flex-col mt-[60px] gap-5  justify-center">
            <label class=" cursor-pointer">
              <div class="flex items-center border-2 text-[#0674BB] border-[#D9D9D9] px-[60px] py-2 rounded-[15px]">
                <span></span>
                <img src="assets/pencil-edit.svg" class="mr-3" /> Change
              </div>

              <input type="file" class="hidden" />
            </label>

            <button
              type="btn"
              class="flex items-center border-2 text-[#0674BB] border-[#D9D9D9] px-[60px] py-2 rounded-[15px]"
            >
              <span></span>
              <img src="assets/del.svg" class="mr-3" /> Remove
            </button>
          </div>
        </div>
      </div>

      <div className="pt-[16rem]">
        {/* <img src="/public/assets/BG2.svg" /> */}
        <img src="assets/BG2.svg" />
      </div>
    </>
  );
};

export default Editprofile;
