const Step4 = () => {
    return (
        <>
            <form>
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:mb-[30px] lg:gap-[30px]">
                    <div className="relative mb-6">
                        <input
                            type="text"
                            id="full-name"
                            name="full-name"
                            className="w-full  pl-[20px] bg-[#fff]  rounded-[10px]  border-[#c3d1d5] focus:border-[#0674BB] focus:ring-1 focus:ring-[#0674BB] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            placeholder="Project name"
                        />
                    </div>
                    <div className="relative mb-6">
                        <input
                            type="text"
                            id="full-name"
                            name="full-name"
                            className="w-full  pl-[20px] bg-[#fff]  rounded-[10px]  border-[#c3d1d5] focus:border-[#0674BB] focus:ring-1 focus:ring-[#0674BB] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            placeholder="Project name"
                        />
                    </div>
                    <div className="relative mb-6">
                        <input
                            type="text"
                            id="full-name"
                            name="full-name"
                            className="w-full  pl-[20px] bg-[#fff]  rounded-[10px]  border-[#c3d1d5] focus:border-[#0674BB] focus:ring-1 focus:ring-[#0674BB] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            placeholder="Project name"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <div className="w-full mb-4 rounded-lg bg-white">
                        <textarea
                            id="comment"
                            rows={8}
                            className="w-full text-sm border border-[#C2D1D4] text-gray-900 bg-white rounded-[10px] py-2 px-3 focus:border-[#0674BB] focus:ring-1 focus:ring-[#0674BB]"
                            placeholder="Description"
                            required
                            defaultValue={""}
                        />
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:mb-[30px] lg:gap-[30px]">
                    <div className="relative mb-6">
                        <select
                            id="countries"
                            className="bg-[#fff] border  border-[#C2D1D4] text-[#ABABAB] lg:text-lg text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                        >
                            <option selected>Categories</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div className="relative mb-6">
                        <select
                            id="countries"
                            className="bg-[#fff] border  border-[#C2D1D4] text-[#ABABAB] lg:text-lg text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                        >
                            <option selected>Technology</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div className="relative mb-6">
                        <select
                            id="countries"
                            className="bg-[#fff] border  border-[#C2D1D4] text-[#ABABAB] lg:text-lg text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                        >
                            <option selected>Location</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-center mt-4 mb-4">
                    <img src="/assets/vector-form.svg" className="w-[500px] h-auto" />
                </div>
                <div className="max-w-xl mx-auto">
                    <h3 className="text-[#ABABAB] text-[15px] text-right">Optional</h3>
                    <div className="bg-[#fff] shadow-xl sm:px-6 px-4 py-8  rounded-lg">
                        <label className="flex flex-col justify-center items-center w-full h-40 lg:px-4 px-2 transition bg-white border-2 border-[#DFDFDF] border-dashed rounded-lg appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                            <div className="mb-[30px] ">
                                <img src="/assets/picture.png" className="h-8 w-8" />
                            </div>
                            <span className="flex items-center space-x-2">
                                <span className="font-medium sm:text-[16px] text-[10px] text-[#ADADAD]">
                                    Drag &amp; Drop your images here, or
                                    <span className="text-[#0674BB] font-bold">browse</span>
                                </span>
                            </span>
                            <input type="file" name="file_upload" className="hidden" />
                        </label>
                    </div>
                </div>
            </form>
        </>

    )
}

export default Step4