import React from "react";

export const Partners = () => {
  return (
    <div className="  flex flex-col md:flex-row   justify-between items-center m-auto ml-[80px] mr-[80px] ">
      <div>
        <h1 className="font-semibold h-[52px] text-[#2A2A2A] text-[38px]">
          Our Partners
        </h1>
      </div>
      <div>
        <img src="hdfc.png" alt="" className="w-[157px] h-[47px]" />
        <h1 className="font-semibold text-[24px] text-center m-4">HDFC Bank</h1>
      </div>
      <div>
        <img src="icici.png" alt="" />
        <h1 className="font-semibold text-[24px] text-center m-4">
          ICICI Bank
        </h1>
      </div>
      <div>
        <img src="icici.png" alt="" />
        <h1 className="font-semibold text-[24px] text-center m-4">
          ICICI Bank
        </h1>
      </div>
      <div>
        <img src="bob.png" alt="" />
        <h1 className="font-semibold text-[24px] text-center m-4">
          Bank OF Baroda
        </h1>
      </div>
    </div>
  );
};
