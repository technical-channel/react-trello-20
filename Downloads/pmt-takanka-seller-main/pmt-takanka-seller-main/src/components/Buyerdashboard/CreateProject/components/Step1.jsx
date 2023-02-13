const Step1 = () => {
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
                            placeholder="Duration"
                        />
                    </div>
                    <div className="relative mb-6">
                        <input
                            type="text"
                            id="full-name"
                            name="full-name"
                            className="w-full  pl-[20px] bg-[#fff]  rounded-[10px]  border-[#c3d1d5] focus:border-[#0674BB] focus:ring-1 focus:ring-[#0674BB] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            placeholder="Budget"
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
            </form>
        </>

    )
}

export default Step1