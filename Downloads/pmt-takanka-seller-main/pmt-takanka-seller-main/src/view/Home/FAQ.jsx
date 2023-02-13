import React from "react";
import { Disclosure } from "@headlessui/react";
const FAQ = () => {
  const data=[
    {
      id:1,
question:'What is Webflow and why is it the best Tanaka ?',
answer:'The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.',
    },
    {
      id:2,
      question:'What is Webflow and why is it the best Tanaka ?',
      answer:'The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.',
          },
          {
            id:3,
            question:'What is Webflow and why is it the best Tanaka ?',
            answer:'The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.',
                },
  ]
  
  return (
    <div>
      <section className="lg:py-[100px] py-[50px]">
        <div className="max-w-[1300px] p-5 mx-auto">
          <div className="mb-[50px]">
            <h1 className="lg:text-[40px] text-[30px] text-center font-bold capitalize text-[#0674BB] wow bounceInUp mb-4">
              FAQs
            </h1>
            <h1 className="lg:text-[40px] text-[25px] text-center font-bold capitalize text-[#0674BB] mb-4">
              Frequently Asked Questions
            </h1>
          </div>
          {data.map((data,index) => {
            return <>
   <div className="w-full pb-5">
            <div className="w-full   mx-auto bg-white rounded-2xl">
                <Disclosure as="div" className="mt-2 shadow rounded-lg">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between  w-full px-4 py-5 text-sm font-medium text-left text-black-900 bg-black-100  hover:bg-[#0674BB] focus:bg-[#0674BB] focus:text-white hover:text-white focus:outline-none  focus-visible:ring-[#0674BB] focus-visible:ring-opacity-75">
                                <span  className="text-lg">{data.question}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className={`${
                                        open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-grey-500`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-4 text-md text-gray-500">
                              {data.answer}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                
            </div>
        </div>
            </>
          })}
       
    

        </div>
      </section>
    </div>
  );
};

export default FAQ;
