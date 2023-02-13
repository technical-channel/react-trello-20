import React from "react";
import { t } from "i18next";
function NFTCard({ data }) {
  return (
    <div className="w-full max-w-[300px] mx-auto px-3 py-4 border rounded-xl bg-white mb-4">
      <div className="rounded-xl">
        <img className="rounded-xl w-full " src={data.url} />
      </div>

      <div>
        <div className="flex justify-between py-1 pt-5 gap-3">
          <p className="text-grey">@Jonny</p>
          <p className="text-grey"> Current Bid </p>
        </div>
        <div className="flex justify-between py-1 gap-3">
          <p className="font-black text-sm text-black">Yellow Painting </p>
          <p className="font-black text-sm text-black">0.00012 ETH</p>
        </div>
        <button className="bg-cyan text-black  w-full bg-no-repeat bg-cover rounded-xl py-3 px-2 hover:bg-button-img hover:bg-no-repeat hover:bg-cover hover:text-white ">
          {t('Place a Bid')}
        </button>
      </div>
    </div>
  );
}

export default NFTCard;
