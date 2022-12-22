import React from "react";
import {NftCard} from "../../../components/Card/NftCard";

const NftSection = ({nfts}) => {
  return (
    <div className="text-left mb-5">
      <h1 className="text-4xl font-bold mt-8 text-[#00948a] underline">NFTs Owned By You</h1>
      <div className="grid grid-cols-5 gap-4 mx-auto">
        {
          nfts.map((d, i) => (
            <NftCard item={d} />
          ))
        }
      </div>
    </div>
  )
}

export default NftSection;
