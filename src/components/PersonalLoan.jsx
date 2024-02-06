import React from "react";

export const PersonalLoan = () => {
  return (
    <div className="md:flex md:flex-col">
      <div className="flex gap-[11px] ml-[80px]">
        <img src="loader.png" alt="" />
        <h1 className="font-semibold text-[44px] text-[#2A2A2A]">
          Personal Loan Highlights
        </h1>
      </div>
      <div className="md:flex mt-[70px]">
        <div>
          <img
            src="man.png"
            alt=""
            className="w-full md:w-[514px] h-auto md:h-[544px]"
          />
        </div>
        <div className="w-full md:w-[50%] align-middle items-center m-[50px] bg-[#FCF8FF] rounded md:ml-[50px]">
          <div className="flex flex-col gap-4 m-4">
            <div className="flex gap-4 m-4">
              <img
                src="star.png"
                alt="star"
                className="w-[24px] h-[24px] mt-2 ml-2"
              />
              <div>
                <h1 className="text-[28px] font-semibold text-[#2A2A2A]">
                  Interest Rate
                </h1>
                <h1 className="text-[18px] text-[#777479]">
                  Usually
                  <span className="text-[#8800EC] ">10.49% p.a.</span> onwards:
                  some PSUs may offer lower rates
                </h1>
              </div>
            </div>
            <div className="flex gap-4 m-4">
              <img
                src="star.png"
                alt="star"
                className="w-[24px] h-[24px] mt-2 ml-2"
              />
              <div>
                <h1 className="text-[28px] font-semibold text-[#2A2A2A]">
                  Loan Amount
                </h1>
                <h1 className="text-[18px] text-[#777479]">
                  Can go up to{" "}
                  <span className="text-[#8800EC] ">RS 40 lakh:</span> onwards:
                  some lenders may offer higher loan amount{" "}
                </h1>
              </div>
            </div>
            <div className="flex gap-4 m-4">
              <img
                src="star.png"
                alt="star"
                className="w-[24px] h-[24px] mt-2 ml-2"
              />
              <div>
                <h1 className="text-[28px] font-semibold text-[#2A2A2A]">
                  Interest Rate
                </h1>
                <h1 className="text-[18px] text-[#777479]">
                  Usually
                  <span className="text-[#8800EC] ">10.49% p.a.</span> onwards:
                  some PSUs may offer lower rates
                </h1>
              </div>
            </div>
            <div className="flex gap-4 m-4">
              <img
                src="star.png"
                alt="star"
                className="w-[24px] h-[24px] mt-2 ml-2"
              />
              <div>
                <h1 className="text-[28px] font-semibold text-[#2A2A2A]">
                  Interest Rate
                </h1>
                <h1 className="text-[18px] text-[#777479]">
                  Usually
                  <span className="text-[#8800EC] ">10.49% p.a.</span> onwards:
                  some PSUs may offer lower rates
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
