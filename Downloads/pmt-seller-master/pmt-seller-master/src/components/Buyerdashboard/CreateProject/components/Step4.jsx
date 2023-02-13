import { message, Steps } from "antd";
const Step4 = ({ prev, next, current, stepsLength, values }) => {
  console.log(values);
  return (
    <>
      <form>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:mb-[30px] lg:gap-[30px]">
          <div className="relative mb-6">
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full  pl-[20px] bg-[#fff] font-bold  rounded-[10px]  border-[#c3d1d5] focus:border-[#0674BB] focus:ring-1 focus:ring-[#0674BB] text-base outline-none text-gray-600 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder={values.fullName}
              disabled
            />
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full  pl-[20px] bg-[#fff]  rounded-[10px] font-bold border-[#c3d1d5] focus:border-[#0674BB] focus:ring-1 focus:ring-[#0674BB] text-base outline-none text-gray-600 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder={values.date}
              disabled
            />
          </div>
          <div className="relative mb-6">
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full  pl-[20px] bg-[#fff] font-bold rounded-[10px]  border-[#c3d1d5] focus:border-[#0674BB] focus:ring-1 focus:ring-[#0674BB] text-base outline-none text-gray-600 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder={values.budget}
              disabled
            />
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="w-full mb-4 rounded-lg bg-white">
            <textarea
              id="comment"
              rows={8}
              className="w-full text-sm border font-bold border-[#C2D1D4] text-gray-600 bg-white rounded-[10px] py-2 px-3 focus:border-[#0674BB] focus:ring-1 focus:ring-[#0674BB]"
              placeholder={values.description}
              defaultValue={""}
              disabled
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:mb-[30px] lg:gap-[30px]">
          <div className="relative mb-6">
            <select
              id="countries"
              className="bg-[#fff] border font-bold  border-[#C2D1D4] text-gray-300 lg:text-lg text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            >
              <option selected disabled>
                {values.categories}
              </option>
              <option value="Design">UI Design</option>
              <option value="Backend">Backend</option>
              <option value="Frontend">Frontend</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
          <div className="relative mb-6">
            <select
              id="countries"
              className="bg-[#fff] border font-bold border-[#C2D1D4] text-gray-300 lg:text-lg text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            >
              <option selected disabled>
                {values.technology}
              </option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className="relative mb-6">
            <select
              id="countries"
              className="bg-[#fff] border font-bold border-[#C2D1D4] text-gray-300 lg:text-lg text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            >
              <option selected disabled>
                {values.location}
              </option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center mt-4 mb-4">
          <img
            src={values?.file ? values?.file : ""}
            className="w-[500px] h-auto"
          />
        </div>
        <div className="max-w-xl mx-auto">
          <h3 className="text-[#ABABAB] text-[15px] text-right">Optional</h3>
          <div className="bg-[#fff] shadow-xl sm:px-6 px-4 py-8  rounded-lg">
            <label className="flex flex-col justify-center items-center w-full h-40 lg:px-4 px-2 transition bg-white border-2 border-[#DFDFDF] border-dashed rounded-lg appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
              <div className="mb-[30px] ">
                <img src={values.file} className="h-8 w-8" />
              </div>
              {/* {values ? (
                values?.file ? (
                  values?.file[0]
                ) : (
                  "Image Not Selected"
                )
              ) : ( */}
              <span className="flex items-center space-x-2">
                <span className="font-medium sm:text-[16px] text-[10px] text-[#ADADAD]">
                  Drag &amp; Drop your images here, or
                  <span className="text-[#0674BB] font-bold">browse</span>
                </span>
              </span>
              {/* )} */}

              <input type="file" name="file_upload" className="hidden" />
            </label>
          </div>
        </div>
        <div className="steps-action relative mt-[2rem]">
          {current < stepsLength - 1 && (
            <button
              type="primary"
              className="  text-center text-lg absolute right-0 text-white rounded-full bg-[#0674BB] hover:bg-[#115887]  px-[5rem] py-[10px]  "
              onClick={() => next()}
            >
              Next
            </button>
          )}
          {current === stepsLength - 1 && (
            <button
              type="primary"
              className="  text-center  text-lg text-white  absolute right-0 rounded-full bg-[#0674BB] hover:bg-[#115887] px-[5rem] py-[10px] "
              onClick={() => message.success("Project created successfully!")}
            >
              Create
            </button>
          )}
          {current > 0 && (
            <button
              onClick={() => prev()}
              className="text-center  text-lg text-white rounded-full bg-[#0674BB] hover:bg-[#115887] px-[5rem] py-[10px] "
            >
              Previous
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Step4;
