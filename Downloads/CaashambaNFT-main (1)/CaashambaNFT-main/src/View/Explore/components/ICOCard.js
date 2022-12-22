import moment from "moment";
import React from "react";
import {Link} from "react-router-dom";

export const ICOCard = ({item}) => {
  return (
    <>
      <div className="max-w-[400px] mb-10">
        <Link to={`/item/ico/${item?.contractAddress}/${item?.icoIndex}`}>
          <div>
            <img src={item?.icon} className="h-[250px]" alt="image" />
          </div>
        </Link>
        <div className=" py-5">
          <div className="text-left">
            <h2 className="text-2xl text-[#009688bf] changa-font">
              {item.propertyName}
            </h2>
          </div>
          <div className="bg-[#f5f5f7]">
            <div className="flex px-5 py-2 justify-between">
              <div className="text-left">
                <div>Presale Rate</div>
                <div>Hard Cap</div>
              </div>
              <div className="text-right">
                <div className="font-bold">{item.presaleRate}</div>
                <div className="font-bold">{item.maxAllocation}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
