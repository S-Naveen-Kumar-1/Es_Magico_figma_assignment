import React from "react";

export const Partners = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mx-auto md:mx-[80px]">
      <div>
        <h1 className="font-semibold text-[38px] md:h-[52px] text-[#2A2A2A]">
          Our Partners
        </h1>
      </div>
      <div>
        <img src="hdfc.png" alt="" className="w-[157px] h-[47px]" />
        <h1 className="font-semibold text-[24px] text-center md:text-left md:ml-4">
          HDFC Bank
        </h1>
      </div>
      <div>
        <img src="icici.png" alt="" className="w-[157px] h-[47px]" />
        <h1 className="font-semibold text-[24px] text-center md:text-left md:ml-4">
          ICICI Bank
        </h1>
      </div>
      <div>
        <img src="icici.png" alt="" className="w-[157px] h-[47px]" />
        <h1 className="font-semibold text-[24px] text-center md:text-left md:ml-4">
          ICICI Bank
        </h1>
      </div>
      <div>
        <img src="bob.png" alt="" className="w-[157px] h-[47px]" />
        <h1 className="font-semibold text-[24px] text-center md:text-left md:ml-4">
          Bank OF Baroda
        </h1>
      </div>
    </div>
  );
};
