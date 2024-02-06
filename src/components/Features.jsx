import React from "react";

export const Features = () => {
  return (
    <div className="flex items-center">
      <div>
        <img src="mobile.png" alt="" className="w-[690px] h-[574px]" />
      </div>
      <div className="items-center m-auto">
        <div className="flex gap-[11px] items-center">
          <img src="lightening.png" alt="" className="w-[50px] h-[50px]" />
          <h1 className="font-semibold text-[44px]">Lightning Fast Process</h1>
        </div>
        <div className="items-center m-auto align-middle">
          <img src="bar.png" alt="" className="w-[536px] h-[19px]" />
          <h1 className="font-medium text-[23px] text-center">
            Customer share basic details
          </h1>
          <button className="w-[274px] bg-[#8800EC] m-auto h-[56px] rounded text-[#FFFFFF] font-semibold text-[18px] items-center">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};
