import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Gessdemn from "../assets/Gessdemn.png";

const Footer = () => {
  return (
    <footer>
      {/* Main Footer Section */}
      <div className="bg-blue-300 py-6 text-black font-semibold p-10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-between -mx-4">
            {/* Company Info */}
            <div className="px-4 my-4 w-full xl:w-1/4 ">
<img src={Gessdemn} alt=""  className="w-40 "/>
              <h2 className="text-2xl font-bold text-white mb-4">Gessdemn Global Services</h2>
              <p className="text-justify">
                We specialize in <span className="text-blue-400">web development</span>, 
                <span className="text-blue-400"> data entry</span>, and 
                <span className="text-blue-400"> medical billing</span>, offering innovative 
                solutions to streamline your business operations and enhance efficiency.
              </p>
            </div>

            {/* Services */}
            <div className="px-4 my-4 w-full sm:w-auto">
              <h2 className="text-2xl pb-4 mb-4 border-b-4 border-blue-600 text-white">Our Services</h2>
              <ul className="leading-8">
                <li><a href="#" className="hover:text-blue-400">Web Development</a></li>
                <li><a href="#" className="hover:text-blue-400">Custom Software Solutions</a></li>
                <li><a href="#" className="hover:text-blue-400">Data Entry & Processing</a></li>
                <li><a href="#" className="hover:text-blue-400">Medical Billing Services</a></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/4">
              <h2 className="text-2xl pb-4 mb-4 border-b-4 border-blue-600 text-white">Get in Touch</h2>
              <p className="leading-8">25, Lakshmipuram, 4th Street, Peelamedu, Coimbatore</p>
              <p className="leading-8">📧 <a href="mailto:gessdemn@gmail.com" className="hover:text-blue-400">gessdemn@gmail.com</a></p>
              <p className="leading-8">📞 <a href="tel:+919566873364" className="hover:text-blue-400">+91 95668 73364</a></p>
            </div>

            {/* Social Media Links */}
            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <h2 className="text-2xl pb-4 mb-4 border-b-4 border-blue-600 text-white">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/gessdemn-global-services/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-2xl">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/gessdemnglobalservices/?igsh=MWQ1bjdhZjc2b3k5Mg%3D%3D#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 text-2xl">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61562620457648" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-2xl">
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#111827] py-4 text-gray-100 text-center">
        <p>© {new Date().getFullYear()} Gessdemn Global Services. All Rights Reserved.</p>
        <p>Made with ❤️ by Gessdemn Global Services.</p>
      </div>
    </footer>
  );
};

export default Footer;
