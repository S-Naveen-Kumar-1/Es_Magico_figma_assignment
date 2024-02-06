import React from "react";

export const CustomerReview = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center gap-4 mx-auto my-8">
        <img src="hand.png" alt="" className="w-12 h-12" />
        <h1 className="font-semibold text-2xl text-center">
          What our customer says
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto max-w-7xl">
        <div className="md:w-1/3">
          <img src="man1.png" alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-2/3 flex flex-col items-start justify-center gap-4 md:ml-8">
          <img src="quotes.png" alt="" className="w-24 h-auto" />
          <div className="max-w-[600px]">
            <h1 className="font-semibold text-xl">SUNIL GUPTA</h1>
            <h3 className="font-semibold text-lg">Chartered accountant</h3>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              odio vitae justo vestibulum bibendum ac in sem. Sed varius tellus
              et purus iaculis, id varius odio rhoncus. Vestibulum vestibulum
              lacinia tortor, et convallis libero vehicula ut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
