import React from 'react'
import LoginHeader from '../Login/LoginHeader'

const Subscription = () => {
  return (
    <div className="bg-login-img h-[100%]  bg-cover bg-center  bg-no-repeat">
    <LoginHeader />
   <main className="xl:h-[100vh] main-height h-[100%]">
  <div className="xl:max-w-[1500px]  mt-[20px] lg:px-[60px] px-5 pt-[30px] pb-[60px] mx-auto ">
    <h2 className="text-[#0674BB] font-bold lg:text-[32px] text-[20px] text-center mb-8">Subscription Plan</h2>
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-[15px]">
      <div className="mx-auto shadow-cardsss w-full rounded-[25px]">
        <div className="block pb-[50px] md:px-[40px] px-[20px] bg-white shadow-cardsss overflow-hidden h-full px-[30px] pt-[30px] pb-[60px] rounded-[25px]">
          <h5 className="xl:text-[28px] text-[#0674BB] lg:text-[28px] uppercase text-[30px] mb-3 font-bold text-center">
            Free
          </h5>
          <div className="flex items-center justify-center">
            <span className="text-[black] inline-block flex justify-center lg:text-[50px] text-[30px] lg:px-2 px-4 text-center">
              $ 0
            </span>
          </div>
          <p className="flex items-center mb-4 justify-center text-[18px]">
            per month
          </p>
          <ul className="mt-[20px] flex flex-col py-5 m-auto md:h-[350px] h-[350px]">
            <li className="mb-5">
              <div className="flex gap-8">
                <div className="flex justify-center">
                  <span><i className="fa-solid fa-circle-check text-[#0674BB] md:text-[23px] text-[18px]" /></span>
                </div>
                <div className>
                  <p className="lg:text-[18px] text-[15px] text-[black]">Invite Buyer/Seller</p>
                </div>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex gap-8">
                <div className="flex justify-center">
                  <span><i className="fa-solid fa-circle-check text-[#0674BB] md:text-[23px] text-[18px]" /></span>
                </div>
                <div className>
                  <p className="lg:text-[18px] text-[15px] text-[black]">Buyer/Seller Dashboard</p>
                </div>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex gap-8">
                <div className="flex justify-center">
                  <span><i className="fa-solid fa-circle-check text-[#0674BB] md:text-[23px] text-[18px]" /></span>
                </div>
                <div className>
                  <p className="lg:text-[18px] text-[15px] text-[black]">Text Chat</p>
                </div>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex gap-8">
                <div className="flex justify-center">
                  <span><i className="fa-solid fa-circle-check text-[#0674BB] md:text-[23px] text-[18px]" /></span>
                </div>
                <div className>
                  <p className="lg:text-[18px] text-[15px] text-[black]">Create 5 Project only</p>
                </div>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex gap-8">
                <div className="flex justify-center">
                  <span><i className="fa-solid fa-circle-check text-[#0674BB] md:text-[23px] text-[18px]" /></span>
                </div>
                <div className>
                  <p className="lg:text-[18px] text-[15px] text-[black]">Number of team member 4 per project</p>
                </div>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex gap-8">
                <div className="flex justify-center">
                  <span><i className="fa-solid fa-circle-check text-[#0674BB] md:text-[23px] text-[18px]" /></span>
                </div>
                <div className>
                  <p className="lg:text-[18px] text-[15px] text-[black]">Upload file size up to 250 MB only</p>
                </div>
              </div>
            </li>
          </ul>
          <div className="flex justify-center mt-8">
            <a href="/"  className="lg:mt-[25px] min-w-[250px] max-w-[200px] mx-auto mt-[30px] flex justify-center inline-block lg:text-[20px] text-[16px] transition-all duration-300 hover:bg-[#115887] common-btn lg:px-[50px] px-[20px] py-[12px] shadow-custom font-medium">
              Choose Plan
            </a>
          </div>
        </div>
      </div>
      <div className="w-full shadow-cardsss mx-auto rounded-[25px]">
        <div className="block pb-[50px] md:px-[40px] px-[20px] bg-white shadow-cardsss overflow-hidden h-full px-[30px] pt-[30px] pb-[60px] rounded-[25px] border-x-0">
          <h5 className="xl:text-[28px] text-[#0674BB] lg:text-[28px] uppercase text-[30px] mb-3 font-bold text-center">
            PREMIUM
          </h5>
          <div className="flex items-center justify-center">
            <span className="text-[black] inline-block flex justify-center lg:text-[50px] text-[30px] lg:px-2 px-4 text-center">
              $ 175
            </span>
          </div>
          <p className="flex items-center mb-4 justify-center text-[18px]">
            per month
          </p>
          <ul className="mt-[20px] flex flex-col py-5 m-auto md:h-[350px] h-[350px]">
            <li className="mb-5">
              <div className="flex gap-8">
                <div className="flex justify-center">
                  <span><i className="fa-solid fa-circle-check text-[#0674BB] md:text-[23px] text-[18px]" /></span>
                </div>
                <div className>
                  <p className="lg:text-[18px] text-[15px] text-[black]">Invite Buyer/Seller</p>
                </div>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex gap-8">
                <div className="flex justify-center">
                  <span><i className="fa-solid fa-circle-check text-[#0674BB] md:text-[23px] text-[18px]" /></span>
                </div>
                <div className>
                  <p className="lg:text-[18px] text-[15px] text-[black]">Buyer/Seller Dashboard</p>
                </div>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex gap-8">
                <div className="flex justify-center">
                  <span><i className="fa-solid fa-circle-check text-[#0674BB] md:text-[23px] text-[18px]" /></span>
                </div>
                <div className>
                  <p className="lg:text-[18px] text-[15px] text-[black]">Text Chat</p>
                </div>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex gap-8">
                <div className="flex justify-center">
                  <span><i className="fa-solid fa-circle-check text-[#0674BB] md:text-[23px] text-[18px]" /></span>
                </div>
                <div className>
                  <p className="lg:text-[18px] text-[15px] text-[black]">Create 10 Project only</p>
                </div>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex gap-8">
                <div className="flex justify-center">
                  <span><i className="fa-solid fa-circle-check text-[#0674BB] md:text-[23px] text-[18px]" /></span>
                </div>
                <div className>
                  <p className="lg:text-[18px] text-[15px] text-[black]">Number of team member 8 per project</p>
                </div>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex gap-8">
                <div className="flex justify-center">
                  <span><i className="fa-solid fa-circle-check text-[#0674BB] md:text-[23px] text-[18px]" /></span>
                </div>
                <div className>
                  <p className="lg:text-[18px] text-[15px] text-[black]">Upload file size up to 500 MB only</p>
                </div>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex gap-8">
                <div className="flex justify-center">
                  <span><i className="fa-solid fa-circle-check text-[#0674BB] md:text-[23px] text-[18px]" /></span>
                </div>
                <div className>
                  <p className="lg:text-[18px] text-[15px] text-[black]">Zoom Video Call</p>
                </div>
              </div>
            </li>
          </ul>
          <div className="flex justify-center mt-8">
            <a href="/"  className="lg:mt-[25px] min-w-[250px] max-w-[200px] mx-auto mt-[30px] flex justify-center inline-block lg:text-[20px] text-[16px] transition-all duration-300 hover:bg-[#115887] common-btn lg:px-[50px] px-[20px] py-[12px] shadow-custom font-medium">
              Choose Plan
            </a>
          </div>
        </div>
      </div>
      <div className="w-full shadow-cardsss mx-auto rounded-[25px]">
        <div className="block pb-[50px] md:px-[40px] px-[20px] bg-white shadow-cardsss overflow-hidden h-full px-[30px] pt-[30px] pb-[60px] rounded-[25px] border-x-0">
          <h5 className="xl:text-[28px] text-[#0674BB] lg:text-[28px] uppercase text-[30px] mb-3 font-bold text-center">
            PLATINUM
          </h5>
          <div className="flex items-center justify-center">
            <span className="text-[black] inline-block flex justify-center lg:text-[50px] text-[30px] lg:px-2 px-4 text-center">
              $ 500
            </span>
          </div>
          <p className="flex items-center mb-4 justify-center text-[18px]">
            per month
          </p>
          <ul className="mt-[20px] flex flex-col py-5 m-auto md:h-[350px] h-[350px]">
            <li className="mb-5">
              <div className="flex gap-8">
                <div className="flex justify-center">
                  <span><i className="fa-solid fa-circle-check text-[#0674BB] md:text-[23px] text-[18px]" /></span>
                </div>
                <div className>
                  <p className="lg:text-[18px] text-[15px] text-[black]">Invite Buyer/Seller</p>
                </div>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex gap-8">
                <div className="flex justify-center">
                  <span><i className="fa-solid fa-circle-check text-[#0674BB] md:text-[23px] text-[18px]" /></span>
                </div>
                <div className>
                  <p className="lg:text-[18px] text-[15px] text-[black]">Buyer/Seller Dashboard</p>
                </div>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex gap-8">
                <div className="flex justify-center">
                  <span><i className="fa-solid fa-circle-check text-[#0674BB] md:text-[23px] text-[18px]" /></span>
                </div>
                <div className>
                  <p className="lg:text-[18px] text-[15px] text-[black]">Text Chat</p>
                </div>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex gap-8">
                <div className="flex justify-center">
                  <span><i className="fa-solid fa-circle-check text-[#0674BB] md:text-[23px] text-[18px]" /></span>
                </div>
                <div className>
                  <p className="lg:text-[18px] text-[15px] text-[black]">Multiple Project</p>
                </div>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex gap-8">
                <div className="flex justify-center">
                  <span><i className="fa-solid fa-circle-check text-[#0674BB] md:text-[23px] text-[18px]" /></span>
                </div>
                <div className>
                  <p className="lg:text-[18px] text-[15px] text-[black]">Multiple user in the team</p>
                </div>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex gap-8">
                <div className="flex justify-center">
                  <span><i className="fa-solid fa-circle-check text-[#0674BB] md:text-[23px] text-[18px]" /></span>
                </div>
                <div className>
                  <p className="lg:text-[18px] text-[15px] text-[black]">Upload file size up to 1 GB only</p>
                </div>
              </div>
            </li>
            <li className="mb-5">
              <div className="flex gap-8">
                <div className="flex justify-center">
                  <span><i className="fa-solid fa-circle-check text-[#0674BB] md:text-[23px] text-[18px]" /></span>
                </div>
                <div className>
                  <p className="lg:text-[18px] text-[15px] text-[black]">Zoom Video Call</p>
                </div>
              </div>
            </li>
          </ul>
          <div className="flex justify-center mt-8">
            <a href="/"  className="lg:mt-[25px] min-w-[250px] max-w-[200px] mx-auto mt-[30px] flex justify-center inline-block lg:text-[20px] text-[16px] transition-all duration-300 hover:bg-[#115887] common-btn lg:px-[50px] px-[20px] py-[12px] shadow-custom font-medium">
              Choose Plan
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

    </div>
  )
}

export default Subscription