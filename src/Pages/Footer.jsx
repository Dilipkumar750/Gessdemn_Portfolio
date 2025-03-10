import React from "react";

const Footer = () => {
  return (
    <footer>
      {/* Main Footer Section */}
      <div className="bg-gray-800 py-4 text-gray-400">
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            {/* Logo & Description */}
            <div className="px-4 my-4 w-full xl:w-1/5">
              <a href="/" className="block w-56 mb-10">
                <svg
                  version="1.1"
                  viewBox="0 0 3368 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <g transform="translate(0 -75)">
                      <g transform="translate(0 75)">
                        <rect
                          width="512"
                          height="512"
                          rx="128"
                          fill="#3D5AFE"
                        ></rect>
                        <rect x="149" y="176" width="220" height="220" fill="#fff"></rect>
                        <circle cx="259" cy="156" r="40" fill="#fff"></circle>
                        <circle cx="369" cy="286" r="40" fill="#2962FF"></circle>
                      </g>
                      <text
                        fill="white"
                        fontFamily="Nunito-Bold, Nunito"
                        fontSize="512"
                        fontWeight="bold"
                      >
                        <tspan x="600" y="518">GESSDEMN</tspan>
                      </text>
                    </g>
                  </g>
                </svg>
              </a>
              <p className="text-justify">
                Tailwindow is a collection of UI Components created using
                Tailwind CSS Framework. The UI Components give you all the
                building blocks you need to create beautiful designs without
                unnecessary styles.
              </p>
            </div>

            {/* Footer Links */}
            <div className="px-4 my-4 w-full sm:w-auto">
              <h2 className="text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                Company
              </h2>
              <ul className="leading-8">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Services</a></li>
                <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto">
              <h2 className="text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                Blog
              </h2>
              <ul className="leading-8">
                <li><a href="#" className="hover:text-blue-400">INDEX SPANISH ENTRY</a></li>
                <li><a href="#" className="hover:text-blue-400">WEB DEVELOPMENT</a></li>
                <li><a href="#" className="hover:text-blue-400">How TailwindCSS Helps Productivity?</a></li>
                <li><a href="#" className="hover:text-blue-400">5 Tips to Make a Responsive Website</a></li>
                <li><a href="#" className="hover:text-blue-400">See More</a></li>
              </ul>
            </div>

            {/* Social Media Icons */}
            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <h2 className="text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                Connect With Us
              </h2>
              <div className="flex space-x-2">
                {/* Facebook */}
                <a href="#" className="h-8 w-8 flex items-center justify-center border border-gray-100 rounded-full hover:text-blue-400 hover:border-blue-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 320 512">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                  </svg>
                </a>
                {/* Twitter */}
                <a href="#" className="h-8 w-8 flex items-center justify-center border border-gray-100 rounded-full hover:text-blue-400 hover:border-blue-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-indigo-700 py-4 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full text-center sm:w-auto sm:text-left">
              Copyright {`2020 - ${new Date().getFullYear()}`} Tailwindow. All Rights Reserved.
            </div>
            <div className="w-full text-center sm:w-auto sm:text-left">
              Made with ❤️ by Gessdemn Global Services.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
