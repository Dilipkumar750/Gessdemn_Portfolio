import React from "react";
import { HiOutlineGlobe, HiOutlineCode, HiOutlineCreditCard } from "react-icons/hi";

const Pricing = () => {
  return (
    <div>
      <section className="py-24 relative">
        <div className="absolute h-[36.5rem] w-full top-0 bg-gradient-to-r from-indigo-600 to-violet-600 -z-10"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-manrope text-5xl text-center font-bold text-white mb-4">
              Website Development Plans
            </h2>
            <p className="text-gray-300 text-xl text-center leading-6">
              Choose the best plan based on your business needs.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:items-center">
            {/* Pricing Cards */}
            {[ 
              { icon: HiOutlineGlobe, title: "Static Website", price: "₹50000", duration: "2 Weeks", tech: "React, CSS, JavaScript", features: ["Responsive Design", "SEO Optimized"] },
              { icon: HiOutlineCode, title: "Dynamic Website", price: "₹100000", duration: "4 Weeks", tech: "MERN (MongoDB, Express, React, Node.js)", features: ["Admin Panel", "Content Management System"] },
              { icon: HiOutlineCreditCard, title: "Dynamic Website + Payment", price: "₹150000", duration: "6 Weeks", tech: "MERN + Razorpay/Stripe", features: ["Secure Payment Gateway", "Advanced Admin Dashboard"] }
            ].map((plan, index) => (
              <div key={index} className="group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-2xl shadow-2xl transition-all duration-300 p-8 xl:p-12 min-h-[500px]">
                <div className="border-b border-solid border-gray-200 pb-9 mb-9">
                  <div className="w-16 h-16 rounded-full bg-indigo-50 mx-auto flex justify-center items-center transition-all duration-300 group-hover:bg-indigo-600">
                    <plan.icon className="w-6 h-6 text-indigo-600 transition-all duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="font-manrope text-2xl font-bold my-7 text-center text-indigo-600">
                    {plan.title}
                  </h3>
                  <div className="flex items-center justify-center">
                    <span className="font-manrope text-4xl font-medium text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-xl text-gray-500 ml-3">| One-time</span>
                  </div>
                </div>
                <ul className="mb-12 space-y-6 text-left text-lg text-gray-600 group-hover:text-gray-900 list-disc pl-5">
                  <li>Timeline: {plan.duration}</li>
                  <li>Tech Stack: {plan.tech}</li>
                  {plan.features.map((feature, i) => <li key={i}>{feature}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center text-gray-600 text-lg font-semibold">
            <p>"A great website is your first step towards a strong online presence."</p>
            <p className="mt-4 text-sm text-gray-400">Hosting & Domain charges are extra.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
