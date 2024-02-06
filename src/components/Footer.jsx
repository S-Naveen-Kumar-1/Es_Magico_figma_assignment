import React from "react";

export const Footer = () => {
  return (
    <div className="bg-[#212121]  h-[236px] items-center align-middle flex justify-between ">
      <div>
        <div className="ml-[80px] items-center">
          <img src="logo1.png" alt="" className="w-[71px] h-[51px]" />
          <div className="flex gap-5 mt-5 ">
            <img src="facebook.png" alt="" className="w-[12px] h-[22px]" />
            <img src="instagram.png" alt="" className="w-[12px] h-[22px]" />
            <img src="youtube.png" alt="" className="w-[12px] h-[22px]" />
            <img src="linkedin.png" alt="" className="w-[12px] h-[22px]" />
          </div>
        </div>
      </div>
      <div className="flex text-[#FFFFFF] mr-10 gap-[108px]">
        <div>
          <h1 className="font-semibold text-[18px]">Help & Support</h1>
          <p className="text-[14px]">Terms & service</p>
          <p className="text-[14px]">Privacy Policy</p>
          <p className="text-[14px]">FAQ</p>
        </div>
        <div>
          <h1 className="font-semibold text-[18px]">Customer care</h1>
          <p className="text-[14px]">
            2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
          </p>
          <p className="text-[14px]">987654321</p>
          <p className="text-[14px]">Tataneu Email ID</p>
        </div>
      </div>
    </div>
  );
};
