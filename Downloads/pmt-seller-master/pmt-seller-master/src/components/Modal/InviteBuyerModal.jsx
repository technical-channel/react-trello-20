import { Modal } from "antd";

const InviteBuyerModal = ({ isModalOpen, handleOk, handleCancel, setIsModalOpen, setInvitationSent, setSuccessPopup, sucessPopup }) => {
    return (
        <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    let dataDemo = {
                        firstName: e.target[0].value,
                        lastName: e.target[1].value,
                        email: e.target[2].value,
                        message: e.target[3].value,
                    };
                    console.log(dataDemo);
                    setSuccessPopup(!sucessPopup);
                    setIsModalOpen(false);
                }}
            >
                <div className="bg-white rounded-[20px] border-t-[20px] border-[#0674BB] lg:px-8 px-4 lg:py-[50px] py-[20px] shadow-custom sm:p-6 sm:pb-4">
                    <div className=" flex items-center lg:mt-[20px] mt-[10px] mb-[20px] lg:mb-[40px] mb-[20px] justify-center text-center text-white text-3xl px-5">
                        <a href className="text-[#0674BB] text-[25px] font-bold">
                            <img
                                src="assets/tanaka-footer.png"
                                className="md:h-[70px] h-[40px]"
                            />
                        </a>
                    </div>
                    <div className="relative mb-6">
                        <input
                            type="text"
                            id="full-name"
                            name="full-name"
                            className="w-full  pl-[20px] bg-[#fff]  rounded-[10px]  border-[#DFDFDF] focus:border-[#0674BB] focus:ring-1 focus:ring-[#0674BB] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="relative mb-6">
                        <input
                            type="text"
                            id="full-name"
                            name="full-name"
                            className="w-full  pl-[20px] bg-[#fff]  rounded-[10px]  border-[#DFDFDF] focus:border-[#0674BB] focus:ring-1 focus:ring-[#0674BB] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="relative mb-6">
                        <input
                            type="email"
                            id="full-name"
                            name="full-name"
                            className="w-full  pl-[20px] bg-[#fff]  rounded-[10px]  border-[#DFDFDF] focus:border-[#0674BB] focus:ring-1 focus:ring-[#0674BB] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            placeholder="Email"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:mb-[10px] lg:gap-[30px]">
                        <div className=" mb-4 border-2 border-[#DFDFDF] border-dashed rounded-lg bg-gray ">
                            <div className="px-4 py-2 bg-white rounded-md">
                                <textarea
                                    id="comment"
                                    rows={8}
                                    className="w-full px-0 text-sm text-[gray-900] focus:border-[#0674BB]  focus:ring-[#0674BB] bg-white border-0 focus:ring-0 bg-white"
                                    placeholder="Message(if any) "
                                    required
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mb-[40px]">
                        <button
                            type="submit"
                            className="py-2 shadow-custom   rounded-full common-btn  md:text-[18px] lg:min-w-[220px] text-center text-[14px] text-white px-[40px] transition-all duration-300"
                            onClick={() => {
                                setInvitationSent(true)
                                handleCancel()
                            }}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </form>
        </Modal>

    )
}
export default InviteBuyerModal