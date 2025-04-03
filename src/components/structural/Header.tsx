"use client";

import { useState } from 'react';
import Image from "next/image";
import { Menu as MenuIcon, X } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Array for menu items
  const menuItems = ["Home", "Recipes", "Blog", "About", "Contact", "Login"];
  
  // Array for social media icons
  const socialIcons = [
    { icon: <FaFacebookF />, name: "Facebook" },
    { icon: <IoLogoWhatsapp />, name: "WhatsApp" },
    { icon: <FaLinkedinIn />, name: "LinkedIn" }
  ];

  return (
    <nav className="bg-white border-b border-gray-300 py-7 px-6 lg:px-12 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src="/Foodieland.png"
            alt="Home Chef Logo"
            width={100}
            height={24}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="font-semibold flex space-x-8 text-gray-800">
            {menuItems.map((item, index) => (
              <li className="cursor-pointer hover:text-gray-600 transition-colors" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:block">
          <ul className="flex text-xl space-x-6 text-gray-800">
            {socialIcons.map((social, index) => (
              <li className="cursor-pointer hover:text-gray-600 transition-colors" key={index}>
                {social.icon}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden cursor-pointer text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-300 shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li 
                  className="cursor-pointer font-semibold text-gray-800 hover:text-gray-600 transition-colors" 
                  key={index}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </li>
              ))}
              <li className="pt-4 border-t border-gray-200">
                <ul className="flex space-x-6 text-xl text-gray-800">
                  {socialIcons.map((social, index) => (
                    <li 
                      className="cursor-pointer hover:text-gray-600 transition-colors" 
                      key={index}
                      onClick={() => setIsOpen(false)}
                    >
                      {social.icon}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;