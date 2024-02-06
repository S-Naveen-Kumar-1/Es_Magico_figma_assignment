import React from "react";

export const Faqs = () => {
  return (
    <div className="w-[1280px] m-auto">
      <div className="flex gap-[11px] items-center text-center  ml-5">
        <img src="faq.png" alt="" className="w-[50px] h-[50px]" />
        <h1 className="font-semibold text-[44px] text-[#2A2A2A]">FAQ’S</h1>
      </div>
      <div className="ml-5">
        <div className="flex justify-between">
          <h1 className="font-semibold text-[18px] text-[#2A2A2A] mb-5">
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <img src="plus.png" alt="" className="w-[20px] h-[20px]" />
        </div>
        <div className="flex justify-between">
          <h1 className="font-semibold text-[18px] text-[#2A2A2A] mb-5">
            2. Lorem ipsum dolor sit amet
          </h1>
          <img src="plus.png" alt="" className="w-[20px] h-[20px]" />
        </div>
        <div className="flex justify-between">
          <h1 className="font-semibold text-[18px] text-[#2A2A2A] mb-5">
            3. Lorem ipsum dolor sit amet, consectetur{" "}
          </h1>
          <img src="plus.png" alt="" className="w-[20px] h-[20px]" />
        </div>
        <div className="flex justify-between">
          <h1 className="font-semibold text-[18px] text-[#2A2A2A] mb-5">
            4. Lorem ipsum dolor sit amet, consectetur{" "}
          </h1>
          <img src="plus.png" alt="" className="w-[20px] h-[20px]" />
        </div>
        <div className="flex justify-between">
          <h1 className="font-semibold text-[18px] text-[#2A2A2A] mb-5">
            5. Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
          </h1>
          <img src="plus.png" alt="" className="w-[20px] h-[20px]" />
        </div>
        <div className="flex justify-between">
          <h1 className="font-semibold text-[18px] text-[#2A2A2A] mb-5">
            6. Lorem ipsum{" "}
          </h1>
          <img src="plus.png" alt="" className="w-[20px] h-[20px]" />
        </div>
        <div className="flex justify-between">
          <h1 className="font-semibold text-[18px] text-[#2A2A2A] mb-5">
            7. Lorem ipsum dolor sit{" "}
          </h1>
          <img src="plus.png" alt="" className="w-[20px] h-[20px]" />
        </div>
      </div>
      <div className="flex justify-between items-center bg-[#f9f2fe]  h-[174px]">
        <div className="ml-5">
          <h1 className="font-bold text-[24px]">Anything not clear?</h1>
          <p className="text-[18px] w-[850px]">
            You can see our detailed F&Q sessions if you have more quiries. Also
            we are always a single call away for all your special asks...
          </p>
        </div>
        <div className="mr-5">
          <button className="w-[216px] h-[56px] bg-[#8800EC] rounded">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};
