import React from "react";

export const Navbar = () => {
  return (
    <div
      className="align-middle flex flex-col lg:flex-row items-center justify-between"
      style={{ border: "1px solid black", padding: "10px" }}
    >
      <div className="flex flex-col lg:flex-row gap-4 text-sm items-center">
        <img src="logo.png" alt="logo" className="w-[48] h-[32]" />
        <p>Offers</p>
        <p>Stories</p>
        <p>Tata Pay</p>
        <p>NeuPass</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 p-10">
        <input
          type="text"
          placeholder="Search Tata Neu"
          style={{ border: "1px solid black", marginBottom: "10px" }}
          className="w-full lg:w-[258px] border-solid bg-[rgba(33, 33, 33, 0.12)] rounded"
        />
        <div className="flex gap-2 mb-2 lg:mb-0">
          <span>122018</span>
          <img src="location.png" alt="location" />
        </div>
        <img src="cart.png" alt="cart" />
        <img src="notification1.png" alt="notification" />
        <img src="profile.png" alt="profile" />
      </div>
    </div>
  );
};
