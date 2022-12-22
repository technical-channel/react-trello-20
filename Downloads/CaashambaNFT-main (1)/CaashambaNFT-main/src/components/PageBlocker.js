import React from 'react'

const PageBlocker = ({userWallet}) => {
  return (
    <div className="bg-black/80 h-screen w-full top-0 fixed flex justify-center items-center z-[100000]">
      <div className="h-1/4 w-2/6 bg-white opacity-100 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">Please connect the wallet you registered with</h1>
        <p className="text-[#00938a] text-lg">{userWallet}</p>
      </div>
    </div>
  )
}
export default PageBlocker;
