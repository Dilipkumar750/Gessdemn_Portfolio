import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex flex-col lg:flex-row items-center justify-center px-6 py-12"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg text-white max-w-4xl w-full mb-8 lg:mb-0">
        <h1 className="text-3xl font-semibold">Innovative Development Solutions</h1>
        <p className="mt-4">
          We provide cutting-edge development solutions, ensuring high-quality and scalable applications tailored to your needs.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-500">Get in Touch</button>
        
        <div className="mt-6">
          <h3>Follow Us</h3>
          <div className="flex mt-2 space-x-4">
            {[
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaLinkedin />, link: "#" },
              { icon: <FaFacebook />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
            ].map((social, index) => (
              <a key={index} href={social.link} className="text-white hover:text-blue-500 text-2xl">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white/60 p-8 rounded-lg shadow-lg max-w-md w-full lg:ml-8">
        <h2 className="text-xl font-medium text-gray-900">Contact Us</h2>
        <p className="text-black mt-2">Have a project in mind? Let’s build something amazing together.</p>
        
        <form className="mt-4 space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-md" />
          <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-md" />
          <textarea placeholder="Tell us about your project..." className="w-full p-3 border rounded-md h-24" />
          <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
