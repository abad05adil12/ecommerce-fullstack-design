import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="w-full bg-white shadow-sm py-4">
        <div className="flex flex-row justify-center items-center relative">
          <div className="absolute left-10 flex items-center gap-2">
            <img src="logo.png" alt="Logo" width={50} />
            <h1 className="text-2xl font-bold text-blue-300">Brand</h1>
          </div>

          <div className="flex items-center my-2">
            <input
              type="search"
              placeholder="Search"
              className="hidden md:block border-2 border-blue-500 rounded-sm px-2 p-1 min-w-[300px]"
            />

            <select className="hidden md:block w-36 px-3 py-1 border-2 border-blue-500 rounded-sm bg-white text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200">
              <option>All category</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>

            <button className="hidden md:block bg-blue-500 px-4 py-1 border border-blue-500 rounded-sm text-white ">
              Search
            </button>
            <button className="block md:hidden p-1 text-blue-500">🔍</button>
          </div>

          <ul className="flex gap-12 absolute right-10 items-center cursor-pointer">
            <img src="profile.png" width={30} alt="Profile" />
            <img src="message.png" width={30} alt="Message" />
            <img src="fav.png" width={30} alt="Favorites" />
            <img src="mycart.png" width={30} alt="Cart" />
          </ul>
          <div className="flex flex-row justify-end gap-6 absolute right-6 items-end cursor-pointer">
            <a href="/weblistview"><p className="mt-13 hover:text-gray-300 transition ease-in duration-300">Profile</p></a>
            <p className="mt-13 hover:text-gray-300 transition ease-in duration-300">Messages</p>
            <p className="mt-13 hover:text-gray-300 transition ease-in duration-300">Orders</p>
            <p className="mt-13 hover:text-gray-300 transition ease-in duration-300">My Cart</p>
          </div>
        </div>
      </nav>
      <hr className="text-gray-300" />
    </>
  );
};

export default Navbar;
