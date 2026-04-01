import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-[#101727] border-t pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* <div className="grid grid-cols-1 md:grid-cols-12 gap-12"> */}
        <div className="flex justify-between gap-5">
            
          
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              
              <h2 className="text-4xl font-bold tracking-tighter text-white">
                DigiTools
              </h2>
            </div>

            <p className="text-[#FFFFFF] max-w-md">
              Premium digital tools for creators, <br /> professionals, and businesses. <br />Work smarter with our suite of powerful tools.
            </p>
            
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-[#FFFFFF] font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 [#FFFFFF]">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[#FFFFFF] font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-[#FFFFFF]">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[#FFFFFF] font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-4 text-[#FFFFFF]">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-[#FFFFFF] font-semibold mb-6 text-center text-lg">Social Links</h3>
            <ul className="flex justify-around space-y-4 text-[#FFFFFF]">
              <li>
                <a href="#" className="hover:text-green-200 transition-colors"><RiInstagramFill /></a>
              </li>
              <li>
                <a href="#" className="hover:text-green-200 transition-colors"><FaFacebook /></a>
              </li>
              <li>
                <a href="#" className="hover:text-green-200 transition-colors"><FaXTwitter /></a>
              </li>
              
            </ul>
          </div>
        </div>

                    {/* Copyright info */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 px-5 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} Digitools. All rights reserved.</div>
          <div className='flex justify-between gap-3 px-2'>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;