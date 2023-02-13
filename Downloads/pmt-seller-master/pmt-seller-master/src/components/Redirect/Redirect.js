function Redirect() {
  return (
    <div className="App">
      <div className="max-w-[1600px] mx-auto p-5 flex h-[100vh]">
        <div className="flex lg:flex-row lg:mt-0 mt-[20px] flex-col gap-[50px] items-center">
          <div className="flex-1 xl:pr-[100px] lg:order-1 order-2 lg:pb-0 pb-[50px]">
            <h1 className="xl:text-[60px]  lg:text-[50px] font-bold lg:mb-[80px] mb-[60px] leading-9 sm:text-[40px] text-[35px] text-center">
              Let's Begin!
            </h1>
            <p className="text-[#333333] xl:text-[20px] lg:text-[20px] md:leading-9 leading-7 text-[16px] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nam
              magnam, consequuntur veritatis unde beatae fuga odio doloremque
              quos laborum delectus labore, vitae ipsum, eaque consequatur modi
              amet! Quidem, sunt.
            </p>
            <div className="flex sm:flex-row flex-col sm:gap-6 gap-4 mt-[40px] justify-center">
              <a
                href=""
                className="bg-[#0674BB] lg:text-[18px] text-[16px] text-center hover:bg-[#0674BB] border-2 transition duration-300 hover:text-[white] border px-[60px] py-3 text-white  rounded-full font-bold"
              >
                Accept
              </a>
              <a
                href=""
                className="border-[#0674BB] lg:text-[18px] text-[16px] text-center hover:bg-[#0674BB] border-2 transition duration-300 hover:text-[white] border px-[60px] py-3 text-[#0674BB] rounded-full font-bold"
              >
                Decline
              </a>
            </div>
          </div>
          <div className="flex-1 lg:order-2 order-1">
            <img src="assets/redirection.png" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Redirect;
