import React from "react";

export const Features = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:mr-8">
        <img src="mobile.png" alt="" className="w-full max-w-[690px] h-auto" />
      </div>
      <div className="md:w-[50%]">
        <div className="flex flex-col gap-4 md:items-center">
          <div className="flex items-center gap-4">
            <img src="lightening.png" alt="" className="w-12 h-12" />
            <h1 className="font-semibold text-2xl md:text-4xl">
              Lightning Fast Process
            </h1>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <img src="bar.png" alt="" className="w-full max-w-[536px] h-auto" />
            <h1 className="font-medium text-xl text-center">
              Customers share basic details
            </h1>
            <button className="w-full max-w-[274px] bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg py-3 rounded">
              Apply now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
