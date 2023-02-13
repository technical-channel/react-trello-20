const Step2 = () => {
    return (
        <>
            <form>
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
            </form>
        </>

    )
}

export default Step2