import React, { useState } from "react";

const Navbar2 = () => {
  const [selected, setSelected] = useState({
    country: "Germany",
    flag: "germany.png",
  });

  const [open, setOpen] = useState(false); 

  const options = [
    { country: "Germany", flag: "germany.png" },
    { country: "USA", flag: "usa.png" },
    { country: "China", flag: "china.png" },
  ];

  return (
    <>
      <nav className="shadow-sm bg-white py-1 cursor-pointer">
        <ul className="flex flex-row gap-5 mx-10 my-5 relative">
          <img
            className="cursor-pointer"
            src="hamburger.png"
            alt="Hamburger"
            width={22}
          />
          <li className="hover:text-gray-300 transition ease-in duration-300">All category</li>
          <li className="hover:text-gray-300 transition ease-in duration-300">Hot offers</li>
          <li className="hover:text-gray-300 transition ease-in duration-300">Gift Boxes</li>
          <li className="hover:text-gray-300 transition ease-in duration-300">Projects</li>
          <li className="hover:text-gray-300 transition ease-in duration-300">Menu item</li>
          <select>
            <option>Help</option>
          </select>

          <div className="absolute right-15 flex gap-4">
            <select>
              <option>English, USD</option>
            </select>

            <div className="relative inline-block text-left">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1 bg-white cursor-pointer"
              >
                <span>Ship to</span>
                <img
                  src={selected.flag}
                  alt={selected.country}
                  className="w-5 h-5"
                />
              </button>

              {open && (
                <div className="absolute mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  {options.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelected(item);
                        setOpen(false);
                      }}
                    >
                      <img
                        src={item.flag}
                        alt={item.country}
                        className="w-5 h-5"
                      />
                      <span>{item.country}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar2;