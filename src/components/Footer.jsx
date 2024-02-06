import React from "react";

export const Footer = () => {
  return (
    <div className="bg-[#212121] mt-16  w-[100%] items-center flex flex-col justify-between md:flex-row md:h-[236px]">
      <div className="flex flex-col items-center md:items-start ml-[10vw] md:ml-[80px]">
        <img src="logo1.png" alt="" className="w-[71px] h-[51px]" />
        <div className="flex gap-5 mt-5">
          <img src="facebook.png" alt="" className="w-[12px] h-[22px]" />
          <img src="instagram.png" alt="" className="w-[12px] h-[22px]" />
          <img src="youtube.png" alt="" className="w-[12px] h-[22px]" />
          <img src="linkedin.png" alt="" className="w-[12px] h-[22px]" />
        </div>
      </div>
      <div className="flex flex-col  items-center md:flex-row text-[#FFFFFF] ml-8 md:ml-0 mt-6 md:mt-0 gap-8 md:gap-[108px]">
        <div>
          <h1 className="font-semibold text-base md:text-lg">Help & Support</h1>
          <p className="text-sm md:text-base">Terms & service</p>
          <p className="text-sm md:text-base">Privacy Policy</p>
          <p className="text-sm md:text-base">FAQ</p>
        </div>
        <div className="items-center">
          <h1 className="font-semibold text-base md:text-lg">Customer care</h1>
          <p className="text-sm ">
            2972 Westheimer Rd. Santa Ana, Illinois 85486
          </p>
          <p className="text-sm md:text-base">987654321</p>
          <p className="text-sm md:text-base">Tataneu Email ID</p>
        </div>
      </div>
    </div>
  );
};
