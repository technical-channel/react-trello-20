import {Empty} from "antd";
import React from "react";
import IcoSaleCard from "../../../components/Card/IcoSaleCard";
import {NftCard} from "../../../components/Card/NftCard";

const IcoSaleSection = ({sales}) => {
  return (
    <div className="text-left mb-5">
      <div>
        <h1 className="text-4xl font-bold mt-8 text-[#00948a] underline">Sales you invested in</h1>
        <div className="grid grid-cols-5 gap-4 mx-auto">
          {
            sales.length !== 0 ?
              sales.map((d, i) => (
                <IcoSaleCard item={d} />
              )) : <Empty />
          }
        </div>
      </div>
    </div>
  )
}

export default IcoSaleSection;
