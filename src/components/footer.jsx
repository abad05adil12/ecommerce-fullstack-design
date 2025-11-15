import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="bg-white max-w-full min-h-72 relative">
        <div className="flex items-center mx-30">
          <img
            className="w-12 h-12 mr-2 my-5 mt-15"
            src="logo.png"
            alt="Logo"
          />
          <h1 className="text-2xl font-bold text-blue-300 mt-8">Brand</h1>
        </div>
        <p className="text-gray-400 font-semibold text-sm mx-25 absolute">
          Best info regarding Company
        </p>

        <div className="flex space-x-5 ml-22 mt-10 px-2">
          <a
            href="#"
            className="text-white bg-gray-500 rounded-full p-1 hover:text-blue-600 "
          >
            <FaFacebookF size={30} />
          </a>
          <a
            href="#"
            className="text-white bg-gray-500 rounded-full p-1 hover:text-pink-500"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="#"
            className="text-white bg-gray-500 rounded-full p-1 hover:text-sky-500"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="#"
            className="text-white bg-gray-500 rounded-full p-1 hover:text-red-600"
          >
            <FaYoutube size={30} />
          </a>
        </div>
        <div className="grid grid-cols-4 container">
          <div className="flex flex-col jusitfy-items-end items-end">
            <ul className="flex flex-col absolute left-105 bottom-25">
              <li className="font-semibold my-2">About</li>
              <li className="text-gray-400 font-semibold">About us</li>
              <li className="text-gray-400 font-semibold">Find Store</li>
              <li className="text-gray-400 font-semibold">Categories</li>
              <li className="text-gray-400 font-semibold">Blogs</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <ul className="flex flex-col absolute left-145 bottom-25">
              <li className="font-semibold my-2">Patnership</li>
              <li className="text-gray-400 font-semibold">About us</li>
              <li className="text-gray-400 font-semibold">Find Store</li>
              <li className="text-gray-400 font-semibold">Categories</li>
              <li className="text-gray-400 font-semibold">Blogs</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <ul className="flex flex-col absolute bottom-25">
              <li className="font-semibold my-2">Information</li>
              <li className="text-gray-400 font-semibold">Help center</li>
              <li className="text-gray-400 font-semibold">Money Refund</li>
              <li className="text-gray-400 font-semibold">Shipping</li>
              <li className="text-gray-400 font-semibold">Contact us</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <ul className="flex flex-col absolute left-230 bottom-25">
              <li className="font-semibold my-2">For Users</li>
              <li className="text-gray-400 font-semibold">Login</li>
              <li className="text-gray-400 font-semibold">Register</li>
              <li className="text-gray-400 font-semibold">Settings</li>
              <li className="text-gray-400 font-semibold">My Orders</li>
            </ul>
          </div>
          <div className="flex flex-row justify-end items-end absolute right-40 bottom-51">
            <ul>
              <li className="font-semibold flex mx-5">GetApp</li>
              <div className="absolute my-2">
                <img
                  className="max-w-44 max-h-40 -ml-2.5"
                  src="googleplay.png"
                  alt=""
                />
                <img
                  className="max-w-40 max-h-40"
                  src="applestore.png"
                  alt=""
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start items-start mx-8 my-5">
        <p className="text-gray-400 font-semibold">© 2025 Ecommerce</p>
      <div className="absolute right-10">
        <img className='absolute right-20 my-1 h-5 w-8' src="usa.png" alt=""/>
        <select >
          <option>English</option>
        </select>
      </div>
      </div>
    </>
  );
};

export default Footer;