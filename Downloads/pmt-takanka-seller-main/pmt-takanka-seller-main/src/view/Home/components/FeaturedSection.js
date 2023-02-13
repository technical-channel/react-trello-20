import React, { useState } from "react";
import { Button } from "../../../components/Button/Primary";

const FeaturedSection = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabsData = [
    { 
      label: "Project Status ",
      content: (
        <>
          <div className="max-w-[1500px] w-full mx-auto" >

            <div className="flex justify-center  lg:flex-row flex-col">
              <div className="flex-1 ">
              <img src={process.env.PUBLIC_URL +'/assets/featureleft.svg'} className=" absolute bottom-[50%] blob"/>
                <img
                  src={process.env.PUBLIC_URL + "/assets/projectstatus.png"}
                  className="w-full relative "
                />
              </div>
              <div className="flex-1 wow bounceInRight lg:pl-[50px] z-0 lg:mt-0  pl-0 justify-center flex flex-col relative ">
              <h3 className="text-2xl font-bold py-4">Project Status </h3>
                <p className="mb-5 leading-7 xl:text-[16px] text-[16px]">
               
                The Project Status Feature of Tanaka PMT allows you to track the real-time development progress update of your projects through Data Analytics. The feature presents the real-time status of your projects into the following five categories:
                </p>
                <div className=" z-[50]  flex items-start gap-[50px]">
                  <div>
                  <ul className="xl:text-[18px] text-[16px] font-bold">
                  <li className="flex mb-3">
                    {" "}
                    <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="w-full max-w-[25px] mr-3" />
                    <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>Projects Completed</h5>
                  </li>
                  <li className="flex mb-3 items-start">
                    {" "}
                    <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
                    <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>Projects In-Process</h5>
                  </li>
                  <li className="flex mb-3 items-start">
                    {" "}
                    <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
                    <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>Projects Yet-to-Start</h5>
                  </li>
                  <li className="flex mb-3 items-start">
                    {" "}
                    <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
                    <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>Projects In-Conflict</h5>
                  </li>
                  <li className="flex mb-3 items-start">
                    {" "}
                    <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
                    <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>Projects Initiation Declined</h5>
                  </li>
                </ul>
                <div className="mt-5">
                {/* <Button title="Learn More" ></Button> */}
                <p>You can track the overall development progress update of all your projects through the percentage bar graphs. Moreover, you can also track the real-time development progress status of your projects by sorting them according to their due dates, price and real-time progress status.   </p>
                </div>
                  </div>
               
                </div>
               
                
              </div>
             
            </div>
          </div>
        </>
      ),
    },
    {
      label: "Expense Status   ",
      content: (
        <>
          <div className="max-w-[1500px] w-full mx-auto">

            <div className="flex justify-center  lg:flex-row flex-col">
              <div className="flex-1 ">
              <img src={process.env.PUBLIC_URL +'/assets/featureleft.svg'} className=" absolute bottom-[50%] blob"/>
                <img
                  src={process.env.PUBLIC_URL + "/assets/expense.jpg"}
                  className="w-full relative "
                />
              </div>
              <div className="flex-1 lg:pl-[50px] lg:mt-0 pl-0 justify-center flex flex-col relative ">
              <h3 className="text-2xl font-bold py-4">Expense Status</h3>
                <p className="mb-5 leading-7 xl:text-[16px] text-[16px]">
              
                  The Expense Status Feature of Tanaka PMT allows you to track the real-time financial progress update of your project expenses through Data Analytics. The feature presents the real-time expense progress status of your projects into the following three categories:
                </p>
                <div className=" z-[50]  flex items-start gap-[50px]">
                  <div>
                  <ul className="xl:text-[18px] text-[16px] font-bold">
                  <li className="flex mb-3 items-start">
                    {" "}
                    <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
                    <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>The Most Expensive Project</h5>
                  </li>
                  <li className="flex mb-3 items-start">
                    {" "}
                    <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
                    <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>The Least Expensive Project</h5>
                  </li>
                  <li className="flex mb-3 items-start">
                    {" "}
                    <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
                    <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>The Average Project Cost</h5>
                  </li>
                  <li className="flex mb-3">
                    {" "}
                    <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
                    <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>Projects In-Conflict</h5>
                  </li>
                  <li className="flex mb-3">
                    {" "}
                    <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
                    <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>Projects Initiation Declined</h5>
                  </li>
                </ul>
                <div className="mt-5">
                {/* <Button title="Learn More" ></Button> */}
                <p>You can also track the monthly or yearly expense progress status of your projects through the historical graphs. </p>
                </div>
                  </div>
             
                </div>
               
                
              </div>
             
            </div>
          </div>
        </>
      ),
      },
    {
      label: "Earning Status",
      content:
      <div className="max-w-[1500px] w-full mx-auto">

      <div className="flex justify-center  lg:flex-row flex-col">
        <div className="flex-1 ">
        <img src={process.env.PUBLIC_URL +'/assets/featureleft.svg'} className=" absolute bottom-[50%] blob"/>
          <img
            src={process.env.PUBLIC_URL + "/assets/expense.jpg"}
            className="w-full relative " 
          />
        </div>
        <div className="flex-1 lg:pl-[50px] lg:mt-0  pl-0 justify-center flex flex-col relative ">
        <h3 className="text-2xl font-bold py-4">Earning Status </h3>
          <p className="mb-5 leading-7 xl:text-[16px] text-[16px]">
           
            The Earning Status Feature of Tanaka PMT allows you to track the real-time financial progress update of your project earnings through Data Analytics. The feature presents the real-time earning progress status of your projects into the following three categories: 
          </p>
          <div className=" z-[50]  flex items-start gap-[50px]">
            <div>
            <ul className="xl:text-[18px] text-[16px] font-bold">
            <li className="flex mb-3">
              {" "}
              <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
              <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>The Highest Earnings Project</h5>
            </li>
            <li className="flex mb-3">
              {" "}
              <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
              <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>The Lowest Earnings Project</h5>
            </li>
            <li className="flex mb-3">
              {" "}
              <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
              <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>The Average Project Cost</h5>
            </li>
            <li className="flex mb-3">
              {" "}
              <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
              <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>The Average Earnings Project</h5>
            </li>
            
          </ul>
          <div className="mt-5">
          {/* <Button title="Learn More" ></Button> */}
          <p>You can also track the monthly or yearly earnings progress status of your projects through the historical graphs. </p>
          </div>
            </div>
        
          </div>
         
          
        </div>
       
      </div>
    </div>
    },
    {
      label: "Virtual Meetings",
      content:
      <div className="max-w-[1500px] w-full mx-auto">

      <div className="flex justify-center  lg:flex-row flex-col">
        <div className="flex-1 ">
        <img src={process.env.PUBLIC_URL +'/assets/featureleft.svg'} className=" absolute bottom-[50%] blob"/>
          <img
            src={process.env.PUBLIC_URL + "/assets/chat.png"}
            className="w-full relative " 
          />
        </div>
        <div className="flex-1 lg:pl-[50px] lg:mt-0 pl-0 justify-center flex flex-col relative ">
        <h3 className="text-2xl py-4 font-bold">Virtual Meetings </h3>
          <p className="mb-5 leading-7 xl:text-[16px] text-[16px]">
         
            The Virtual Meetings Feature of Tanaka PMT allows you to collaborate with your clients and colleagues in the real-time through the zoom meetings and group chats. You can use the virtual meetings features of Tanaka PMT for the following:
          </p>
          <div className=" z-[50]  flex items-start gap-[50px]">
            <div>
            <ul className="xl:text-[18px] text-[16px] font-bold">
            <li className="flex mb-3">
              {" "}
              <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
              <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>The Highest Earnings Project</h5>
            </li>
            <li className="flex mb-3">
              {" "}
              <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
              <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>Share Your Concerns</h5>
            </li>
            <li className="flex mb-3">
              {" "}
              <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
              <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>Share Your Solutions</h5>
            </li>
            <li className="flex mb-3">
              {" "}
              <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
              <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>Share Your Files </h5>
            </li>
            <li className="flex mb-3">
              {" "}
              <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
              <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>Share Your Feedback</h5>
            </li> 
            <li className="flex mb-3">
              {" "}
              <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
              <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>Share Your Screens </h5>
            </li>
          </ul>
          <div className="mt-5">
          {/* <Button title="Learn More" ></Button> */}
          <p>You can also track the monthly or yearly expense progress status of your projects through the historical graphs.</p>
          </div>
            </div>
        
          </div>
         
          
        </div>
       
      </div>
    </div>
    },
    {
      label: "Dispute Resolution ",
      content:
      <div className="max-w-[1500px] w-full mx-auto">

      <div className="flex justify-center  lg:flex-row flex-col">
        <div className="flex-1 ">
        <img src={process.env.PUBLIC_URL +'/assets/featureleft.svg'} className=" absolute bottom-[50%] blob"/>
          <img
            src={process.env.PUBLIC_URL + "/assets/dispute.png"}
            className="w-full relative " 
          />
        </div>
        <div className="flex-1 lg:pl-[50px] lg:mt-0  pl-0 justify-center flex flex-col relative ">
        <h3 className="text-2xl py-4 font-bold">Dispute Resolution </h3>
          <p className="mb-5 leading-7 xl:text-[16px] text-[16px]">
           The Dispute Resolution Feature of Tanaka PMT allows you to participate directly in the dispute resolution process to work out the terms of the settlement through the Tanaka Administrator. 
          </p>
          <p className="mb-5 leading-7 xl:text-[16px] text-[16px]">
          The Tanaka Administrator not only resolves the disputes but also safeguards your business interests through the following:
          </p>
          <div className=" z-[50]  flex items-start gap-[50px]">
            <div>
            <ul className="xl:text-[18px] text-[16px] font-bold">
            <li className="flex mb-3">
              {" "}
              <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
              <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>By Keeping the Project Funds in Escrow</h5>
            </li>
            <li className="flex mb-3">
              {" "}
              <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
              <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>By Supervising the Project Development </h5>
            </li>
            <li className="flex mb-3">
              {" "}
              <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
              <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>By Supervising the Buyer-Seller Communication </h5>
            </li>
            <li className="flex mb-3">
              {" "}
              <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
              <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>By Working Out Mutually-Agreed Settlements</h5>
            </li>
            <li className="flex mb-3">
              {" "}
              <img src={process.env.PUBLIC_URL+'/assets/arrow.png'} className="mr-3" />
              <h5 className="font-black capitalize" style={{fontFamily:'Almarai'}}>By Releasing the Project Funds Fairly and Transparently</h5>
            </li> 
            
          </ul>
          <div className="mt-5">
          {/* <Button title="Learn More" ></Button> */}
          <p>You can raise a dispute, when necessary, by submitting the evidences (proof of work and proof of communication) to the Tanaka Admin. </p>
          </div>
            </div>
        
          </div>
         
          
        </div>
       
      </div>
    </div>
    },
  ];
  return (
    <div className="max-w-[1500px] mx-auto relative px-5  py-[3rem]"  id="features" data-aos="flip-right">
     
        <h1
          className="lg:text-[40px] wow bounceInUp text-[35px] text-center font-bold capitalize text-[#0674BB] py-4"
          style={{ fontFamily: "Mulish" }}
        >
          Our Core Features
        </h1>
        <div className="max-w-[1100px] w-full mx-auto ">
          <p
            className="my-[2rem] text-md text-center  text-black leading-7"
            style={{ fontFamily: "Mulish" }}
          >
            Tanaka is a beautiful, versatile, transparent, secure and user-
            friendly project management tool that functions as the Task
            Management System, Team Collaboration Platform and Payment Solution.
            Take facts-driven decisions to benchmark your Team’s performance and
            stay competent in your project management with Tanaka’s
            all-inclusive features that ensure:
          </p>
        </div>

        <div className="flex md:gap-[40px] gap-5 max-w-[1200px] flex-wrap md:flex-nowrap w-full mx-auto justify-between">
          {tabsData.map((tab, idx) => {
            return (
              <div className=" w-full mx-auto ">
                <button
                  key={idx}
                  className={`py-2   border-b-2  font-bold text-center  text-black transition-colors duration-300 ${
                    idx === activeTabIndex
                      ? "border-[#2585C3]  text-[#0674BB] "
                      : "border-transparent   hover:border-[#2585C3]  hover:text-[#0674BB] "
                  }`}
                  style={{ fontFamily: "Mulish" }}
                  // Change the active tab on click.
                  onClick={() => setActiveTabIndex(idx)}
                >
                  {tab.label}
                </button>
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-[70px] right-0 blob  "> 
                <img src={process.env.PUBLIC_URL+'/assets/featurevector.png'} />
               </div>
        <div className="my-[3rem] ">
          <p style={{ fontFamily: "Mulish" }}>
            {tabsData[activeTabIndex].content}
          </p>
        </div>
      </div>
    
  );
};

export default FeaturedSection;
