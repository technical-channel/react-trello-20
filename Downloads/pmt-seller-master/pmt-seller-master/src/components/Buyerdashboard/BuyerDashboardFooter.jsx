import React from "react";

const BuyerDashboardFooter = () => {
  return (
    <div className="mt-auto">
      <section className="bg-[#fff] py-2 z-50">
        <div className="px-[40px] mx-auto">
          <div className="footer-top">
            <div className="flex lg:flex-row justify-between items-center flex-col gap-4">
              <div className="xl:flex-1 flex lg:justify-start justify-center">
                <a href className="text-[#0674BB] text-[25px] font-bold">
                  <img src="/assets/tanaka-footer.png" className="h-[50px]" />
                </a>
              </div>
              <div className="xl:flex-1 flex justify-center">
                <ul className="flex sm:flex-row flex-col justify-center items-center">
                  <li className="mr-2 lg:text-[16px] text-[14px] text-black hover:text-[#0674BB] hover:font-bold">
                    <a href>
                      Terms and Conditions&nbsp;&nbsp;<span className>||</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href
                      className="lg:text-[16px] text-[14px] text-black hover:text-[#0674BB] hover:font-bold"
                    >
                      &nbsp;&nbsp;FAQ's&nbsp;&nbsp;<span>||</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href
                      className="lg:text-[16px] text-[14px] text-black hover:text-[#0674BB] hover:font-bold"
                    >
                      &nbsp;&nbsp;Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="xl:flex-1 flex lg:justify-end justify-center items-center">
                <span className="flex">
                  <div className="bg-[#0674BB] w-[50px] rounded-lg flex mr-3 items-center justify-center h-[20x] p-3">
                    <a
                      href="/"
                      className="text-white cursor-pointer  text-[16px]"
                    >
                      <i className="fa-brands fa-facebook-f " />
                    </a>
                  </div>
                  <div className="bg-[#0674BB] w-[50px] rounded-lg flex mr-3 items-center justify-center h-[20x] p-3">
                    <a
                      href="/"
                      className="text-white cursor-pointer  text-[16px]"
                    >
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </div>
                  <div className="bg-[#0674BB] w-[50px] rounded-lg flex items-center justify-center h-[20x] p-3">
                    <a
                      href="/"
                      className="text-white cursor-pointer  text-[16px]"
                    >
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyerDashboardFooter;
