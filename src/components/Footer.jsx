import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-black py-6 px-6 w-full bg-[#eee]">
      {/* Company Name + Divider */}
      <div className="mb-6 px-2">
        <h1 className="text-2xl font-bold uppercase text-[color:#9BC936]">
          Rich Zone WorldWide Limited
        </h1>
        <hr className="mt-2 border-gray-400 w-8" />
      </div>

      {/* Responsive grid: 1 col mobile, 2 cols sm, 3 cols md, 5 cols lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-2">
        {/* About Us */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Mission - Vision</li>
            <li>Production Capacity</li>
            <li>Journey of Development</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>PE-Based Calcium Filler</li>
            <li>PP-Based Calcium Filler</li>
            <li>HD Based Calcium Filler</li>
            <li>Sodium Based Transparent Filler</li>
            <li>Black and White Masterbatch Filler</li>
            <li>Desiccant (Anti Moisture) Masterbatch</li>
            <li>OB Masterbatch</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-amber-600">About Us</a></li>
            <li><a href="#" className="hover:text-amber-600">Products</a></li>
            <li><a href="#" className="hover:text-amber-600">News</a></li>
            <li><a href="#" className="hover:text-amber-600">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-3xl" />
              <span>
                RICHZONE WORLWIDE PVT LTD, No 57/A, Ground floor, 5th main, Behind Leela Palace, H.A.L 2nd Stage, Bangalore, KARNATAKA 560008
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt />
              <span>Tel: (+91) 8296217773</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope />
              <span>Email: sales@myrichzone.com</span>
            </li>
          </ul>
        </div>

        {/* Subscribe + Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe to our newsletter</h3>
          <input
            type="text"
            className="w-full rounded-md border border-gray-400 px-4 py-2 mb-4"
            placeholder="Your email"
          />
          <button className="w-full px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
            Send
          </button>

          <h3 className="text-xl font-semibold mt-8 mb-4">Get in touch</h3>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-gray-200 rounded-full text-black hover:bg-blue-600 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 bg-gray-200 rounded-full text-black hover:bg-blue-500 hover:text-white transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-3 bg-gray-200 rounded-full text-black hover:bg-red-600 hover:text-white transition">
              <FaYoutube />
            </a>
            <a href="#top" className="p-3 bg-gray-200 rounded-full text-black hover:bg-green-600 hover:text-white transition">
              <FaArrowUp />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#9BC936] text-white text-center py-4 mt-12 text-sm sm:text-base">
        <p>&copy; 2025 Rich Zone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
