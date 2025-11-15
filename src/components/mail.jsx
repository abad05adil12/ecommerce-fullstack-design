import React from 'react'

const Mail = () => {
  return (
    <div className="bg-gray-200 min-w-full min-h-44 flex justify-center items-center py-12 mt-9">
      <div className="text-center">
        <p className="font-semibold text-xl my-4">
          Subscribe to our Newsletter
        </p>
        <p className="font-semibold text-md text-gray-400">
          Get daily updates on upcoming offers from many suppliers all over the world.
        </p>

        <div className="flex justify-center items-center space-x-4 mt-6">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              email
            </span>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-80 h-10 pl-10 pr-3 bg-white text-black rounded-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button className="px-4 py-2 bg-blue-500 text-white rounded-sm cursor-pointer hover:bg-sky-300 transition duration-200">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Mail