import { Dialog, Transition } from "@headlessui/react"
import { Modal } from "antd";
import { Fragment } from "react"

const RaiseConflictModal = ({ isOpen, closeModal, setConflictRaised }) => {
    return (
        <Modal
            open={isOpen}
            onOk={closeModal}
            onCancel={closeModal}
            className=""
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
                    // setSuccessPopup(!sucessPopup);
                    // setIsInqueryDone(true);
                    // setIsModalOpen(false);
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
                    <div className="bg-[#fff] sm:px-6 px-4 py-8  rounded-lg w-full">
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

                    <div className="flex justify-center mb-[40px] mt-5">
                        <button
                            type="submit"
                            className="py-2 shadow-custom   rounded-full common-btn  md:text-[18px] lg:min-w-[220px] text-center text-[14px] text-white px-[40px] transition-all duration-300"
                            onClick={(e) => {
                                closeModal()
                                setConflictRaised(true)
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

export default RaiseConflictModal