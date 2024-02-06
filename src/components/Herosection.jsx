import React from "react";

export const Herosection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row m-5 top-[41px]">
      <div className="md:w-[60%] w-full mb-5 md:mb-0">
        <div className="font-[Proxima Nova A] font-bold text-4xl md:text-6xl text-[#2A2A2A] mt-8 ">
          <h1>Turn Dreams into Reality</h1>
          <h1>
            with <span className="text-[#FF0096]">Personal Loans</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-8 p-5 ">
          <div className="flex align-middle items-center gap-[17px] mb-8">
            <img
              src="Frame1.png"
              alt=""
              className="h-[60px] w-[60px] rounded-[20px]"
            />
            <div>
              <h1 className="text-[#2A2A2A] font-bold text-[22px]">
                Avail Zero
              </h1>
              <h1 className="text-[22px] text-[#2A2A2A] font-normal">
                Processing fee
              </h1>
            </div>
          </div>
          <div className="flex align-middle items-center  gap-[17px] mb-8">
            <img
              src="Frame2.png"
              alt=""
              className="h-[60px] w-[60px] rounded-[20px]"
            />
            <div>
              <h1 className="text-[#2A2A2A] font-bold text-[22px]">Quick</h1>
              <h1 className="text-[22px] text-[#2A2A2A] font-normal">
                Personal loan
              </h1>
            </div>
          </div>
          <div className="flex align-middle items-center  gap-[17px] mb-8">
            <img
              src="Frame3.png"
              alt=""
              className="h-[60px] w-[60px] rounded-[20px]"
            />
            <div>
              <h1 className="text-[#2A2A2A] font-bold text-[22px]">Lowest</h1>
              <h1 className="text-[22px] text-[#2A2A2A] font-normal">
                Interest Rates
              </h1>
            </div>
          </div>
          <div className="flex align-middle items-center  gap-[17px] mb-8">
            <img
              src="Frame4.png"
              alt=""
              className="h-[60px] w-[60px] rounded-[20px]"
            />
            <div>
              <h1 className="text-[#2A2A2A] font-bold text-[22px]">Miniamal</h1>
              <h1 className="text-[22px] text-[#2A2A2A] font-normal">
                Documentation
              </h1>
            </div>
          </div>
        </div>
        <button className="bg-[#8800EC] border-solid rounded w-full md:w-[168px] text-lg h-[56px] mt-5 md:ml-10 text-[#FFFFFF] font-bold">
          Apply Now
        </button>
      </div>
      <div>
        <img
          src="people.png"
          alt=""
          className="w-full md:w-[571px] h-auto md:h-[541px]"
        />
      </div>
    </div>
  );
};
