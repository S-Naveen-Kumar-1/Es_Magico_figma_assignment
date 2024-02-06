import React from "react";

export const ApplicationForm = () => {
  return (
    <div className="ml-[60px] mt-[94px]">
      <div className="flex flex-col md:flex-row m-5">
        <div
          className="flex gap-[10px] align-middle items-center m-auto rounded-md  w-[279px] justify-center h-[80px]"
          style={{
            border: "1px solid #DCDCDC",
            borderRadius: "20px, 20px, 0px, 0px",
          }}
        >
          <img
            src="eligible.png"
            alt=""
            className="w-[40px] h-[40px] align-middle items-center"
          />
          <h1 className="font-semibold text-[26px] text-center">Eligibility</h1>
        </div>
        <div className="flex gap-[10px] align-middle items-center m-auto">
          <img
            src="apply.png"
            alt=""
            className="w-[40px] h-[40px] align-middle items-center"
          />
          <h1 className="font-semibold text-[26px] text-center">
            How to apply
          </h1>
        </div>
        <div className="flex gap-[10px] align-middle items-center m-auto">
          <img
            src="document.png"
            alt=""
            className="w-[40px] h-[40px] align-middle items-center"
          />
          <h1 className="font-semibold text-[26px] text-center">
            Documentation
          </h1>
        </div>
        <div className="flex gap-[10px] align-middle items-center m-auto">
          <img
            src="fees.png"
            alt=""
            className="w-[40px] h-[40px] align-middle items-center"
          />
          <h1 className="font-semibold text-[26px] text-center">
            Fees & Charges
          </h1>
        </div>
      </div>
      <div
        className="flex flex-col-reverse md:flex-row mt-[-21px] m-[2px] mr-5 rounded justify-around  "
        style={{
          border: "1px solid #DCDCDC",
          borderRadius: "20px, 20px, 0px, 0px",
        }}
      >
        <div>
          <div className="flex gap-4 m-4 ">
            <img
              src="star.png"
              alt="star"
              className="w-[24px] h-[24px] mt-2 ml-2"
            />
            <div>
              <h1 className="text-[22px] font-semibold text-[#2A2A2A]">
                Citizenship proof
              </h1>
              <h1 className="text-[18px] text-[#777479]">
                Indian citizen with valid ID proof
              </h1>
            </div>
          </div>
          <div className="flex gap-4 m-4 ">
            <img
              src="star.png"
              alt="star"
              className="w-[24px] h-[24px] mt-2 ml-2"
            />
            <div>
              <h1 className="text-[22px] font-semibold text-[#2A2A2A]">Age</h1>
              <h1 className="text-[18px] text-[#777479]">
                23 to 58 years of age
              </h1>
            </div>
          </div>
          <div className="flex gap-4 m-4 ">
            <img
              src="star.png"
              alt="star"
              className="w-[24px] h-[24px] mt-2 ml-2"
            />
            <div>
              <h1 className="text-[22px] font-semibold text-[#2A2A2A]">
                Lorem
              </h1>
              <h1 className="text-[18px] text-[#777479]">Lorem ipsum </h1>
            </div>
          </div>
          <div className="flex gap-4 m-4 ">
            <img
              src="star.png"
              alt="star"
              className="w-[24px] h-[24px] mt-2 ml-2"
            />
            <div>
              <h1 className="text-[22px] font-semibold text-[#2A2A2A]">
                Ipsum
              </h1>
              <h1 className="text-[18px] text-[#777479]">Ipsum lorem </h1>
            </div>
          </div>
        </div>
        <div>
          <img
            src="loan.png"
            alt=""
            className="w-64 h-64 m-auto items-center"
          />
        </div>
      </div>
    </div>
  );
};
