import React from "react";

export const Refer = () => {
  return (
    <div className="flex justify-around mt-20 gap-[20px]">
      <div className="mt-[90px]">
        <h1 className="font-semibold text-[44px] text-[#2A2A2A]">
          Refer & Earn Now
        </h1>
        <p className="text-[22px]">Get a ₹500 Big Basket gift card</p>
        <button className="w-[230px] h-[56px] rounded bg-[#8800EC] m-5 text-[#FFFFFF]">
          REFER AND EARN
        </button>
        <p className="ml-5 text-4 underline decoration-1">
          Terms and Conditions apply
        </p>
      </div>
      <div className="flex pl-20">
        <img
          src="mobile1.png"
          alt=""
          className="mr-[-320px] w-[232px] h-[465px] pb-[75px]"
        />
        <img src="friends.png" alt="" className="w-[586px] h-[390px]" />
      </div>
    </div>
  );
};
