import React from "react";

export const CustomerReview = () => {
  return (
    <div className="bg-[#F8F9FA]">
      <div className="flex gap-[11px] item-center m-auto justify-center align-middle ">
        <img src="hand.png" alt="" className="w-[50px] h-[50px]" />
        <h1 className="font-semibold text-[44px] text-center">
          What our customer says
        </h1>
      </div>
      <div className="flex justify-center ml-[201px] mt-6">
        <div className="w-[40%]">
          <img src="man1.png" alt="" className="w-[368px] h-[383px]" />
        </div>
        <div className="w-[60%] flex  gap-5 mr-10 mt-6">
          <img src="quotes.png" alt="" className="w-[100px] h-[75px]" />
          <div className="w-[600px] mt-[35px] text-[#2A2A2A]">
            <h1 className="font-semibold text-[24px]">SUNIL GUPTA</h1>
            <h3 className="font-semibold text-[18px]">Chartered accountant</h3>
            <p className="text-[16px] mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              odio vitae justo vestibulum bibendum ac in sem. Sed varius tellus
              et purus iaculis, id varius odio rhoncus. Vestibulum vestibulum
              lacinia tortL orem ipsum dolor sit amet, consectetur adipiscing
              elit. Nullam in odio vitae justo vestibulum bibendum ac in sem.
              Sed varius tellus et purus iaculis, id varius odio rhoncus.
              Vestibulum vestibulum lacinia tortor, et convallis libero vehicula
              ut. or, et convallis libero vehicula ut.{" "}
            </p>
            <img src="slider.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
