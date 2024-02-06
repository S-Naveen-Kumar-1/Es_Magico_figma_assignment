import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2 md:px-8 lg:px-12">
      <div className="flex items-center gap-4 text-sm">
        <img src="logo.png" alt="logo" className="w-12 h-8" />
        <p>Offers</p>
        <p>Stories</p>
        <p>Tata Pay</p>
        <p>NeuPass</p>
      </div>
      <div className="md:flex hidden gap-4 items-center">
        <img src="search.png" alt="" className="w-[16px] h-[16px] mr-[-40px]" />
        <input
          type="text"
          placeholder="Search Tata Neu"
          style={{ border: "1px solid black", paddingLeft: "30px" }}
          className="w-48 md:w-64 bg-[rgba(33, 33, 33, 0.12)] md:bg-transparent rounded px-2 py-1 md:mr-2 "
        />
        <div className="flex gap-2 items-center">
          <span>122018</span>
          <img src="location.png" alt="location" className="w-4 h-4" />
        </div>
        <img src="cart.png" alt="cart" className="w-6 h-6" />
        <img src="notification1.png" alt="notification" className="w-6 h-6" />
        <img src="profile.png" alt="profile" className="w-6 h-6" />
      </div>
      <div className="md:hidden">
        {!isOpen ? (
          <button onClick={toggleMenu}>
            <GiHamburgerMenu />
          </button>
        ) : (
          <button onClick={toggleMenu}>
            <AiOutlineClose />
          </button>
        )}
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col gap-2 items-center">
          <p>Offers</p>
          <p>Stories</p>
          <p>Tata Pay</p>
          <p>NeuPass</p>

          <div className="flex gap-2 items-center">
            <span>122018</span>
            <img src="location.png" alt="location" className="w-4 h-4" />
          </div>
          <img src="cart.png" alt="cart" className="w-6 h-6" />
          <img src="notification1.png" alt="notification" className="w-6 h-6" />
          <img src="profile.png" alt="profile" className="w-6 h-6" />
        </div>
      )}
    </div>
  );
};
