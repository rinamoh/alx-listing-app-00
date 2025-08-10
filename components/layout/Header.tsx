// components/layout/Header.tsx
import React from "react";

const accommodationTypes = [
  { name: "Rooms", icon: "🏨" },
  { name: "Mansion", icon: "🏰" },
  { name: "Countryside", icon: "🌳" },
  { name: "Villa", icon: "🏠" },
  { name: "Tropical", icon: "🌴" },
  { name: "New", icon: "🆕" },
  { name: "Amazing pool", icon: "🏊" },
  { name: "Beach house", icon: "🏖️" },
  { name: "Island", icon: "🏝️" },
  { name: "Camping", icon: "⛺" },
  { name: "Apartment", icon: "🏢" },
  { name: "House", icon: "🏡" },
  { name: "Lakefront", icon: "🏞️" },
  { name: "Farm house", icon: "🏚️" },
  { name: "Treehouse", icon: "🌲" },
  { name: "Cabins", icon: "🛖" },
  { name: "Castles", icon: "🏯" },
];

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      {/* Top header with logo, search bar and auth buttons */}
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-bold text-black cursor-pointer select-none">a|x</span>
        </div>

        {/* Search bar */}
        <form className="flex items-center space-x-4 flex-grow max-w-4xl mx-10 bg-gray-50 p-3 rounded-xl shadow focus-within:shadow-lg transition-shadow">
          <div className="flex flex-col text-xs text-gray-600 px-2">
            <label htmlFor="location" className="font-semibold">Location</label>
            <input
              id="location"
              type="text"
              placeholder="Search for destination"
              className="bg-transparent focus:outline-none mt-1 text-sm"
            />
          </div>
          <div className="border-l border-gray-300 h-8" />
          <div className="flex flex-col text-xs text-gray-600 px-2">
            <label htmlFor="checkin" className="font-semibold">Check in</label>
            <input
              id="checkin"
              type="date"
              className="bg-transparent focus:outline-none mt-1 text-sm"
            />
          </div>
          <div className="border-l border-gray-300 h-8" />
          <div className="flex flex-col text-xs text-gray-600 px-2">
            <label htmlFor="checkout" className="font-semibold">Check out</label>
            <input
              id="checkout"
              type="date"
              className="bg-transparent focus:outline-none mt-1 text-sm"
            />
          </div>
          <div className="border-l border-gray-300 h-8" />
          <div className="flex flex-col text-xs text-gray-600 px-2">
            <label htmlFor="people" className="font-semibold">People</label>
            <input
              id="people"
              type="number"
              min={1}
              placeholder="Add guest"
              className="bg-transparent focus:outline-none mt-1 text-sm"
            />
          </div>
          <button
            type="submit"
            aria-label="Search"
            className="bg-orange-500 text-white rounded-full p-2 hover:bg-orange-600 transition flex items-center justify-center"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </form>

        {/* Sign-in/up buttons */}
        <div className="flex space-x-4 items-center">
          <button className="bg-green-700 text-white py-2 px-5 rounded-full text-sm hover:bg-green-800 transition">
            Sign in
          </button>
          <button className="bg-transparent border border-gray-300 py-2 px-5 rounded-full text-sm hover:border-green-700 hover:text-green-700 transition">
            Sign up
          </button>
        </div>
      </div>

      {/* Accommodation types scrollable menu */}
      <nav className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-3 overflow-x-auto flex space-x-6 text-gray-600 text-sm scrollbar-hide">
          {accommodationTypes.map(({ name, icon }) => (
            <button
              key={name}
              className="flex flex-col items-center justify-center whitespace-nowrap cursor-pointer hover:text-green-700 focus:outline-none focus:text-green-700"
              type="button"
              aria-label={name}
            >
              <span className="text-2xl">{icon}</span>
              <span className="mt-1">{name}</span>
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
