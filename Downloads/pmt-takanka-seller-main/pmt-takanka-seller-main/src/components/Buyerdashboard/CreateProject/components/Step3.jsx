const Step3 = () => {
    return (
        <>
            <form>
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

export default Step3