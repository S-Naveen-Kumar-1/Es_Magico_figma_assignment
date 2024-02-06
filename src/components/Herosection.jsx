import React from "react";

export const Herosection = () => {
  return (
    <div className="flex m-10 top-[41px] ">
      <div className="w-[60%] " style={{ border: "1px solid black" }}>
        <div className="font-[Proxima Nova A] font-bold text-6xl text-[#2A2A2A] mt-8 ">
          <h1>Turn Dreams into Reality</h1>
          <h1>
            with <span className="text-[#FF0096]">Personal Loans</span>
          </h1>
        </div>
        <div className="grid grid-cols-2  justify-center  align-middle items-center mt-8 p-5 ">
          <div className="flex align-middle items-center gap-[17px] mb-8">
            <img
              src="frame1.png"
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
              src="frame2.png"
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
              src="frame3.png"
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
              src="frame4.png"
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
        <button className="bg-[#8800EC] border-solid rounded w-[168px] text-lg h-[56px] ml-10 text-[#FFFFFF] font-bold">
          Apply Now
        </button>
      </div>
      <div>
        <img src="people.png" alt="" className="w-[571px] h-[541px]" />
      </div>
    </div>
  );
};
