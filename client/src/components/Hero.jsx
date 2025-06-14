import React from "react";
import { assets } from "../assets/assets.js";
import { cities } from "../assets/assets.js"; 

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center h-screen'>
      <p className="bg-[#4989FF]/50 px-3.5 py-1 rounded-full mt-20">
        The ultimate Hotel Experience
      </p>
      <h1 className="font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
        Discover your Perfect gateway destination
      </h1>
      <p>
        Unparalleled luxury and comfort await aat the world'd most exclusive
        hotels and resorts.Start your Journey
      </p>

      <form className="bg-white lg:w-lg md:w-md w-full text-gray-500 rounded-lg px-6 py-4 mt-8  flex flex-col gap-4">
        <div>
          <div className="flex items-center gap-2 w-full">
            <img
              src={assets.calenderIcon}
              alt="calendar icon"
              className="w-4 h-4 text-gray-800"
            />
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input
            list="destinations"
            id="destinationInput"
            type="text"
            className=" rounded border w-full border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            placeholder="Type here"
            required
          />
          <datalist id="destinations">
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </datalist>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img
              src={assets.calenderIcon}
              alt="calendar icon"
              className="w-4 h-4 text-gray-800"
            />
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input
            id="checkIn"
            type="date"
            className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img
              src={assets.calenderIcon}
              alt="calendar icon"
              className="w-4 h-4 text-gray-800"
            />
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input
            id="checkOut"
            type="date"
            className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
          <label htmlFor="guests">Guests</label>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className="w-full rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            placeholder="0"
          />
        </div>

        <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
          <img src={assets.searchIcon} alt="search icon" className="w-4 h-4" />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default Hero;
