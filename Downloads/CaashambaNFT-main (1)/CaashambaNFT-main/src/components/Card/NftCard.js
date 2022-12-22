import React from "react";
import {Link} from "react-router-dom";
import {truncateAddress} from "../../utils/utility";

export const NftCard = ({item}) => {
  return (
    <>
      <div>
        <div className="max-w-[400px]">
          <Link to={`/item/${item?.network}/${item?.collectionAddress}/${item?.tokenId}`}>
            <div>
              <img src={item?.imageUrl} className="h-[250px]" alt="image" />
            </div>
          </Link>
          <div className=" py-5">
            <div className="text-left">
              <h3 className="text-md my-1 text-[#009688bf] changa-font">
                Land
              </h3>
              <h2 className="text-2xl text-[#009688bf] changa-font">
                NFT #{item.tokenId}
              </h2>
            </div>
            <div className="bg-[#f5f5f7]">
              <div className="flex px-5 py-2 justify-between">
                <div className="text-left">
                  <div>Price</div>
                  <div className="font-bold">{item.price} ETH</div>
                </div>
                <div className="text-right">
                  <div>Creator</div>
                  <div className="font-bold">{truncateAddress(item.creatorAddress)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
