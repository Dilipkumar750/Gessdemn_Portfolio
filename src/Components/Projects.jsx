import React, { useState } from "react";
import medicalBilling from "../assets/medicalBilling.jpg";
import medicalCoding from "../assets/medicalCoding.jpg";
import ui from "../assets/UX.jpg";
import dataentry from "../assets/dataentry.jpg";
import webdev from "../assets/webdev.jpg";
import logo from "../assets/gessdemn.png";
import web from "../assets/web.png";
const categories = ["all", "Web Development", "UI/UX Design", "Data Entry", "Medical Billing", "Medical Coding"];

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const projects = [
    { img: webdev, category: "Web Development" },
    { img: ui, category: "UI/UX Design" },
    { img: dataentry, category: "Data Entry" },
    { img: medicalBilling, category: "Medical Billing" },
    { img: medicalCoding, category: "Medical Coding" },
    { img: web, category: "Web Development" },
    { img: ui, category: "UI/UX Design" },
    { img: dataentry, category: "Data Entry" },
    { img: medicalBilling, category: "Medical Billing" },
  ];

  const filteredProjects = projects.filter(
    (project) => showCard === "all" || showCard === project.category
  );

  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-[510px] mx-auto mb-10">
          <span className="text-primary text-lg font-semibold">Our Portfolio</span>
          <h2 className="text-dark text-3xl font-bold sm:text-4xl md:text-[40px]">
            Our Recent Projects
          </h2>
          <p className="text-body-color dark:text-gray-400">
            Explore our latest works that showcase creativity, design, and innovation.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setShowCard(category);
                setVisibleCount(6); // Reset count when filter changes
              }}
              className={`rounded-lg py-2 px-5 text-base font-semibold transition-all duration-300 ${
                showCard === category
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, visibleCount).map(({ img, category }, index) => (
            <PortfolioCard key={index} img={img} category={category} />
          ))}
        </div>

        {/* See More / See Less Button */}
        {filteredProjects.length > 6 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() =>
                setVisibleCount(visibleCount === 6 ? filteredProjects.length : 6)
              }
              className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-blue-600"
            >
              {visibleCount === 6 ? "See More" : "See Less"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const PortfolioCard = ({ img, category }) => (
  <div className="w-full">
   
    <div className="relative mb-8">
    
      <div className="overflow-hidden rounded-[10px] h-[250px] sm:h-[300px] lg:h-[350px]">
        <img src={img} alt="portfolio" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
      </div>
      <div className="relative flex justify-between rounded-xl z-10 mx-4 -mt-10 bg-white dark:bg-gray-800 py-6 px-4 text-center shadow-lg border border-gray-200 dark:border-gray-700">
      <img src={logo} alt="" className="w-32" />
     <div>
          <span className="text-blue-500 mb-2 block text-sm font-medium">{category}</span>
          <h3 className="text-gray-900 dark:text-blue-400 mb-4 text-xl font-bold">Creative Agency</h3>
          <a
            href="#"
            className="border border-gray-300 dark:border-gray-600 py-2 px-6 text-sm font-medium transition-all duration-300 hover:bg-blue-500 hover:text-white rounded-md inline-block"
          >
            View Details
          </a>
     </div>
      </div>
    </div>
  </div>
);

export default Portfolio;
