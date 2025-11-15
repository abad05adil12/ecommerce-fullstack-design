import React from "react";

const mainbody = () => {
  return (
    <>
      <div className="min-w-sm h-100 container mx-auto mt-5 rounded-xs shadow-sm bg-white shadow-gray-400">
        <div className="flex flex-col justify-start items-start mx-5 py-4">
          <nav>
            <ul className="block space-y-3 text-black px-1">
              <li className="bg-blue-100 w-50 py-1 px-1 rounded-sm">
                Automobiles
              </li>
              <li>Clothes and wear</li>
              <li>Home interior</li>
              <li>Computer and tech</li>
              <li>Tools, equipment</li>
              <li>Sports and outddor</li>
              <li>Animal and pets</li>
              <li>Machinery Tools</li>
              <select>
                <option>More category</option>
              </select>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col justify-center items-center relative bottom-82">
          <img
            className="min-w-3xl max-h-80 mr-14 object-cover "
            src="pic1.jpg"
            alt=""
          />
          <h1 className="block absolute bottom-60 left-80 text-white text-xl">
            Latest trending <br />
            <span className="font-semibold text-2xl text-white">
              Electronic items
            </span>{" "}
          </h1>
          <button className="block absolute bottom-45 left-80 cursor-pointer hover:bg-gray-700 transition ease-in duration-300 text-black bg-white px-5 py-2 rounded-sm">
            Learn more
          </button>
        </div>
        <div className="flex flex-col justify-end items-end absolute bottom-60 right-13">
          <div className="w-3xs rounded-2xl min-h-44  ">
            <img
              className="absolute mx-2 my-2 rounded-2xl"
              src="profilepic.jpg"
              alt="Profile"
              width={65}
            />
            <p className="absolute my-2 right-15">
              Hi, user <br /> let's get started
            </p>
            <button className="block absolute space top-20 right-15 text-white bg-blue-800 px-12 py-1 rounded-sm ">
              Join now
            </button>
            <button className="block absolute space top-31 right-15 text-blue-500 bg-white px-14 py-1 rounded-sm ">
              Log in
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end absolute bottom-38 right-13">
          <div className="w-3xs rounded-2xl min-h-20 bg-orange-500 ">
            <p className="text-white mx-15">
              Get US $10 off <br /> with a new <br /> supplier
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end absolute bottom-16 right-13">
          <div className="w-3xs rounded-2xl min-h-20 bg-sky-400 ">
            <p className="text-white mx-15">
              Send quotes with <br /> supplier <br /> preferences
            </p>
          </div>
        </div>
      </div>
      <div className="min-w-sm h-69 container mx-auto mt-7 rounded-xs shadow bg-white shadow-gray-400">
        <div className="flex flex-row gap-5 justify-end items-center absolute right-15">
          <div className="mt-0 mr-10 mb-7">
            <h1 className="font-semibold text-xl">Deal and Offers</h1>
            <h2 className="text-gray-400 my-1">Hygiene equipments</h2>
            <ul className="flex flex-row gap-3 rounded-md font-semibold">
              <li className="bg-gray-600 text-white px-2 rounded-sm">
                04 <br />
                Days
              </li>
              <li className="bg-gray-600 text-white px-2 rounded-sm">
                13 <br />
                Hours
              </li>
              <li className="bg-gray-600 text-white px-2 rounded-sm">
                34 <br />
                Min
              </li>
              <li className="bg-gray-600 text-white px-2 rounded-sm">
                56 <br />
                Sec
              </li>
            </ul>
          </div>
          <div class="h-69 border-l border-gray-400"></div>
          <img className="h-45" src="camera.jpg" alt="" width={150} />
          <div class="h-69 border-l border-gray-400"></div>
          <img className="h-45" src="phone.jpg" alt="" width={150} />
          <div class="h-69 border-l border-gray-400"></div>
          <img className="h-45" src="watch.jpg" alt="" width={150} />
          <div class="h-69 border-l border-gray-400"></div>
          <img className="h-45" src="latop.jpg" alt="" width={150} />
          <div class="h-69 border-l border-gray-400"></div>
          <img className="h-45" src="headphone.jpg" alt="" width={150} />
        </div>
        <ul className="flex flex-row justify-end items-end gap-35 py-57 absolute right-21">
          <li>Camera</li>
          <li>watch</li>
          <li>Phone</li>
          <li>Laptop</li>
          <li>Headphones</li>
        </ul>
        <ul className="flex flex-row justify-end items-end gap-40 py-63 absolute right-30">
          <li>35$</li>
          <li>16$</li>
          <li>740$</li>
          <li>1800$</li>
          <li>30$</li>
        </ul>
      </div>

      {/* second con */}
      <div className="max-w-7xl min-h-80 mx-auto mt-7 bg-white rounded-sm shadow shadow-gray-400">
        <div className="grid grid-cols-4 gap-19 absolute right-12 py-2">
          <div className="flex flex-col items-center gap-12">
            <img
              src="appliance.jpg"
              alt="Appliance"
              className="w-40 h-32 object-cover rounded-md shadow"
            />
            <img
              src="blender.jpg"
              alt="Blender"
              className="w-40 h-32 object-cover rounded-md shadow"
            />
          </div>

          <div className="flex flex-col items-center gap-12">
            <img
              src="dishes.jpg"
              alt="Dishes"
              className="w-40 h-32 object-cover rounded-md shadow"
            />
            <img
              src="iphone.jpg"
              alt="iPhone"
              className="w-40 h-32 object-cover rounded-md shadow"
            />
          </div>
          <div className="flex flex-col items-center gap-12">
            <img
              src="lamp.jpg"
              alt="Lamp"
              className="w-40 h-32 object-cover rounded-md shadow"
            />
            <img
              src="mac.jpg"
              alt="Mac"
              className="w-40 h-32 object-cover rounded-md shadow"
            />
          </div>

          <div className="flex flex-col items-center gap-12">
            <img
              src="softchair.jpg"
              alt="Soft Chair"
              className="w-40 h-32 object-cover rounded-md shadow"
            />
            <img
              src="tablet.jpg"
              alt="Tablet"
              className="w-40 h-32 object-cover rounded-md shadow"
            />
          </div>
        </div>
        <div className="">
          <p className="absolute mt-10 text-black font-semibold text-2xl mx-8">
            Home <br />
            and Outdoor
          </p>
          <button className="absolute mt-33 mx-8 bg-white text-black px-5 py-2 rounded-sm font-semibold">
            Source Now
          </button>
          <img
            className="object-cover h-80"
            src="interior.jpg"
            alt="Interior"
            width={310}
          />
        </div>
      </div>

      {/* third con */}
      <div className="max-w-7xl min-h-80 mx-auto mt-7 bg-white rounded-sm shadow shadow-gray-400">
        <div className="grid grid-cols-4 gap-19 absolute right-12 py-2">
          <div className="flex flex-col items-center gap-12">
            <p className="absolute mr-60">
              Coffee Maker <br />
              from<span className="text-gray-500 font-medium"> 34$</span>
            </p>
            <img
              src="coffee maker.jpg"
              alt="Appliance"
              className="w-40 h-32 object-cover rounded-md shadow"
            />
            <p className="absolute ml-60">
              Watch <br />
              from <br />
              <span className="text-gray-500 font-medium">64$</span>
            </p>
            <img
              src="gamhead.jpg"
              alt="Blender"
              className="w-40 h-32 object-cover rounded-md shadow"
            />
          </div>

          <div className="flex flex-col items-center gap-12">
            <p className="absolute ml-61">
              Mouse <br />
              from <br /> <span className="text-gray-500 font-medium">14$</span>
            </p>
            <img
              src="watch.jpg"
              alt="Dishes"
              className="w-40 h-32 object-cover rounded-md shadow"
            />
            <p className="absolute ml-178">
              Keyboard <br />
              from <br /> <span className="text-gray-500 font-medium">24$</span>
            </p>
            <img
              src="ipad.jpg"
              alt="iPhone"
              className="w-40 h-32 object-cover rounded-md shadow"
            />
          </div>
          <div className="flex flex-col items-center gap-12">
            <img
              src="mouse.jpg"
              alt="Lamp"
              my
              className="w-40 h-32 object-cover rounded-md shadow"
            />
            <p className="absolute my-43 mr-290 ">
              Headphones <br />
              from <br /> <span className="text-gray-500 font-medium">44$</span>
            </p>
            <img
              src="monitor.jpg"
              alt="Mac"
              className="w-40 h-32 object-cover rounded-md shadow"
            />
            <p className="absolute my-43 mr-180">
              Ipad <br />
              from <br />{" "}
              <span className="text-gray-500 font-medium">524$</span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-12">
            <p className="absolute my-43 mr-177">
              Monitor <br />
              from <br />{" "}
              <span className="text-gray-500 font-medium">324$</span>
            </p>
            <img
              src="keyboard.jpg"
              alt="Soft Chair"
              className="w-40 h-32 object-cover rounded-md shadow"
            />
            <p className="absolute my-43 mr-60">
              Tablet <br />
              from <br />{" "}
              <span className="text-gray-500 font-medium">324$</span>
            </p>
            <img
              src="tablet.jpg"
              alt="Tablet"
              className="w-40 h-32 object-cover rounded-md shadow"
            />
          </div>
        </div>
        <div className="">
          <p className="absolute mt-10 text-black font-semibold text-2xl mx-8">
            Consumer <br />
            Electronics and Gadgets
          </p>
          <button className="absolute mt-33 mx-8 bg-white text-black px-5 py-2 rounded-sm font-semibold">
            Source Now
          </button>
          <img
            className="object-cover h-80"
            src="electronics.jpg"
            alt="Electronics"
            width={310}
          />
        </div>
      </div>

      {/* survey */}
      <div className="relative mt-7 mx-9 rounded-sm overflow-hidden">
        <img
          className="max-h-96 min-w-7xl object-cover rounded-sm"
          src="cartons.jpg"
          alt="cartons"
        />

        <div className="absolute inset-0 bg-linear-to-r from-blue-500/60 to-blue-300/40 rounded-sm"></div>
        <div className="absolute top-10 left-10 text-white z-20">
          <p className="font-semibold text-2xl">
            An easy way to send <br /> requests to all suppliers
          </p>
          <h3 className="mt-3 text-sm font-normal leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            quaerat, <br />
            temporibus deleniti ab delectus esse similique sapiente officiis
            voluptatibus.
          </h3>
        </div>

        <div className="absolute top-10 right-10 bg-white shadow-lg rounded-md h-80 p-6 w-96 z-20">
          <form action="submit" method="POST" className="flex flex-col gap-3">
            <h2 className="font-semibold text-gray-800">
              Send quote to suppliers
            </h2>

            <input
              type="text"
              placeholder="What item you need?"
              className="border border-gray-300 rounded-sm p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
            />

            <input
              type="text"
              placeholder="Type more details"
              className="border border-gray-300 rounded-sm p-2 py-8 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
            />

            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Quantity"
                className="border border-gray-300 rounded-sm p-2 w-1/2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <select className="border border-gray-300 rounded-sm p-2 w-1/2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400">
                <option>Pcs</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 transition text-white font-medium py-2 px-4 rounded-sm"
              >
                Send inquiry
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* fourth con */}
      <div className="flex flex-row space-x-5 justify-start items-start">
        <p className="text-xl font-bold mx-9 my-6">Recomended Items</p>
      </div>

      <div className="max-w-7xl mx-auto mt-3 rounded-sm p-4">
        <div className="grid grid-cols-5 gap-6">
          <div className="flex flex-col items-center gap-4">
            <div className="bg-white p-2 rounded-sm w-44 h-72 flex flex-col items-center justify-start">
              <img
                className="object-cover w-32 h-40 rounded-sm"
                src="coat.jpg"
                alt="Coat"
              />
              <p className="font-bold mt-2">$23.50</p>
              <p className="font-semibold text-gray-300 text-center">
                Coat with warmth feeling.
              </p>
            </div>

            <div className="bg-white p-2 rounded-sm w-44 h-72 flex flex-col items-center justify-start">
              <img
                className="object-cover w-32 h-40 rounded-sm"
                src="jug.jpg"
                alt="Jug"
              />
              <p className="font-bold mt-2">$33.50</p>
              <p className="font-semibold text-gray-300 text-center">
                Shaped Jug.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="bg-white p-2 rounded-sm w-44 h-72 flex flex-col items-center justify-start">
              <img
                className="object-cover w-32 h-40 rounded-sm"
                src="headphones.jpg"
                alt="Headphones"
              />
              <p className="font-bold mt-2">$14.59</p>
              <p className="text-gray-300 font-semibold text-center">
                Durable Headphones with water resistance.
              </p>
            </div>

            <div className="bg-white p-2 rounded-sm w-44 h-72 flex flex-col items-center justify-start">
              <img
                className="object-cover w-32 h-40 rounded-sm"
                src="tshirt.jpg"
                alt="Tshirt"
              />
              <p className="font-bold mt-2">$56.70</p>
              <p className="font-semibold text-gray-300 text-center">
                Cotton Tshirt with eaze.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="bg-white p-2 rounded-sm w-44 h-72 flex flex-col items-center justify-start">
              <img
                className="object-cover w-32 h-40 rounded-sm"
                src="bag.jpg"
                alt="Bag"
              />
              <p className="font-bold mt-2">$45.55</p>
              <p className="font-semibold text-gray-300 text-center">Bag</p>
            </div>

            <div className="bg-white p-2 rounded-sm w-44 h-72 flex flex-col items-center justify-start">
              <img
                className="object-cover w-32 h-40 rounded-sm"
                src="wallet.jpg"
                alt="Wallet"
              />
              <p className="font-bold mt-2">$78.10</p>
              <p className="font-semibold text-gray-300 text-center">
                Leather Wallet with resistence.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="bg-white p-2 rounded-sm w-44 h-72 flex flex-col items-center justify-start">
              <img
                className="object-cover w-32 h-40 rounded-sm"
                src="shorts.jpg"
                alt="Shorts"
              />
              <p className="font-bold mt-2">$55.85</p>
              <p className="font-semibold text-gray-300 text-center">
                Jeans Short for comfy.
              </p>
            </div>

            <div className="bg-white p-2 rounded-sm w-44 h-72 flex flex-col items-center justify-start">
              <img
                className="object-cover w-32 h-40 rounded-sm"
                src="jacket.jpg"
                alt="Shoes"
              />
              <p className="font-bold mt-2">$15.50</p>
              <p className="font-semibold text-gray-300 text-center">
                Leather Jacket for warmth season.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="bg-white p-2 rounded-sm w-44 h-72 flex flex-col items-center justify-start">
              <img
                className="object-cover w-32 h-40 rounded-sm"
                src="hat.jpg"
                alt="Hat"
              />
              <p className="font-bold mt-2">$5.60</p>
              <p className="font-semibold text-gray-300 text-center">
                Hat of soft material.
              </p>
            </div>

            <div className="bg-white p-2 rounded-sm w-44 h-72 flex flex-col items-center justify-start">
              <img
                className="object-cover w-32 h-40 rounded-sm"
                src="pot.jpg"
                alt="Socks"
              />
              <p className="font-bold mt-2">$14.60</p>
              <p className="font-semibold text-gray-300 text-center">
                Featured Pot with hardness.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* explore */}
      <div className="flex flex-row justify-start items-start">
        <p className="font-bold text-xl mx-12 my-4">Our extra services</p>
      </div>
      <div className="flex flex-row justify-center items-center gap-9">
        <div className="bg-white h-64 w-72">
          <span class="material-symbols-outlined absolute mx-51 bg-sky-200 rounded-full p-4 mt-40 border-2 border-white">
            search
          </span>
          <img className="object-cover rounded-sm" src="cartons.jpg" alt="" />
          <p className="font-semibold my-3 mx-4">
            Product Monitoring <br />
            and inspection.
          </p>
        </div>
        <div className="bg-white h-64 w-72 ">
          <span class="material-symbols-outlined absolute mx-51 bg-sky-200 rounded-full p-4 mt-40 border-2 border-white">
            send
          </span>
          <img
            className="object-fill rounded-sm h-48"
            src="shipping.jpg"
            alt=""
          />
          <p className="font-semibold my-3 mx-4">
            Fast relaible
            <br />
            shipping by ocean or air.
          </p>
        </div>
        <div className="bg-white h-64 w-72">
          <span class="material-symbols-outlined absolute mx-51 bg-sky-200 rounded-full p-4 mt-40 border-2 border-white">
            box_edit
          </span>
          <img className="object-cover rounded-sm" src="customize.jpg" alt="" />
          <p className="font-semibold my-3 mx-4">
            Customize your <br />
            products.
          </p>
        </div>
        <div className="bg-white h-64 w-72">
          <span class="material-symbols-outlined absolute mx-51 bg-sky-200 rounded-full p-4 mt-40 border-2 border-white">
            shield
          </span>
          <img className="object-cover rounded-sm" src="packing.jpg" alt="" />
          <p className="font-semibold my-3 mx-4">
            Source from
            <br />
            industry hub.
          </p>
        </div>
      </div>

      {/* foreign relations */}
      <div className="flex flex-col justify-start items-start">
        <p className="text-xl font-semibold my-7 mx-12">Suppliers By Region</p>
      </div>
      <div className="grid grid-cols-5 gap-5 mx-30 my-3">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            <img className="w-13 h-7 rounded-md" src="qatar.jpg" alt="Qatar" />
            <div>
              <p className="font-semibold">Qatar</p>
              <p className="font-bold text-gray-300">Qatar.co</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <img className="w-13 h-7 rounded-md" src="usa.png" alt="USA" />
            <div>
              <p className="font-semibold">USA</p>
              <p className="font-bold text-gray-300">Usa.pk.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            <img className="w-13 h-7 rounded-md" src="spain.png" alt="Spain" />
            <div>
              <p className="font-semibold">Spain</p>
              <p className="font-bold text-gray-300">Spain.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <img className="w-13 h-7 rounded-md" src="italy.png" alt="Italy" />
            <div>
              <p className="font-semibold">Italy</p>
              <p className="font-bold text-gray-300">Italy.www.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            <img className="w-13 h-7 rounded-md" src="china.png" alt="China" />
            <div>
              <p className="font-semibold">China</p>
              <p className="font-bold text-gray-300">Chinawuan.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <img
              className="w-13 h-7 rounded-md"
              src="germany.png"
              alt="Germany"
            />
            <div>
              <p className="font-semibold">Germany</p>
              <p className="font-bold text-gray-300">Germanyfran.ge</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            <img
              className="w-13 h-7 rounded-md"
              src="russia.png"
              alt="Russia"
            />
            <div>
              <p className="font-semibold">Russia</p>
              <p className="font-bold text-gray-300">Russia.kyuc.ru</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <img
              className="w-13 h-7 rounded-md"
              src="london.png"
              alt="London"
            />
            <div>
              <p className="font-semibold">London</p>
              <p className="font-bold text-gray-300">London.lu</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            <img
              className="w-13 h-7 rounded-md"
              src="singapore.png"
              alt="Singapore"
            />
            <div>
              <p className="font-semibold">Singapore</p>
              <p className="font-bold text-gray-300">Singapore.kyuc.ru</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <img
              className="w-13 h-7 rounded-md"
              src="switzerland.png"
              alt="Switzerland"
            />
            <div>
              <p className="font-semibold">Switzerland</p>
              <p className="font-bold text-gray-300">Switzerland.lu</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default mainbody;