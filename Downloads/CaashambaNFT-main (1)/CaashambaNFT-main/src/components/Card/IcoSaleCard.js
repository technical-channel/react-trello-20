import moment from "moment";
import React from "react";
import {Link} from "react-router-dom";

export const IcoSaleCard = ({item}) => {
  console.log(item)
  return (
    <>
      <div>
        <div className="max-w-[400px] mt-5">
          <Link to={`/item/ico/${item?.ico?.contractAddress}/${item?.ico?.icoIndex}`}>
            <div className="flex w-full justify-center items-center">
              <img src={item?.ico?.icon} alt="image" />
            </div>
          </Link>
          <div className=" py-5">
            <div className="text-left">
              <h2 className="text-2xl text-[#009688bf] changa-font">
                {item?.ico?.name}
              </h2>
            </div>
            <div className="bg-[#f5f5f7]">
              <div className="flex px-5 py-2 justify-between">
                <div className="text-left">
                  <div>Presale Rate</div>
                  <div>Maximum Allocation</div>
                  <div>Amount Bought</div>
                </div>
                <div className="text-right">
                  <div className="font-bold">{item?.ico?.presaleRate}</div>
                  <div className="font-bold">{item?.ico?.maxAllocation}</div>
                  <div className="font-bold">{item?.amount}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IcoSaleCard;
