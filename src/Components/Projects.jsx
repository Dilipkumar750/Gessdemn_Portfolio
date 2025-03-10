import React, { useState } from "react";

const categories = ["all", "branding", "design", "marketing", "development"];

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const projects = [
    { img: "https://i.ibb.co/64WfFPt/image-01.jpg", category: "Branding" },
    { img: "https://i.ibb.co/PT7ghRs/image-06.jpg", category: "Marketing" },
    { img: "https://i.ibb.co/vkt8C1P/image-02.jpg", category: "Marketing" },
    { img: "https://i.ibb.co/3FKqS1G/image-03.jpg", category: "Development" },
    { img: "https://i.ibb.co/m6dq2fX/image-04.jpg", category: "Design" },
    { img: "https://i.ibb.co/mCPjBsH/image-05.jpg", category: "Marketing" },
  ];

  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-[510px] mx-auto mb-[60px]">
          <span className="text-primary text-lg font-semibold">Our Portfolio</span>
          <h2 className="text-dark text-3xl font-bold sm:text-4xl md:text-[40px]">
            Our Recent Projects
          </h2>
          <p className="text-body-color dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12 space-x-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setShowCard(category)}
              className={`rounded-lg py-2 px-5 text-base font-semibold transition ${
                showCard === category ? "bg-primary text-blue-500" : "text-body-color dark:text-dark-6 hover:bg-primary hover:text-blue-500"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="flex flex-wrap -mx-4">
          {projects.map(({ img, category }, index) => (
            (showCard === "all" || showCard === category.toLowerCase()) && (
              <PortfolioCard key={index} img={img} category={category} />
            )
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioCard = ({ img, category }) => (
    <div className="w-full px-4 md:w-1/2 xl:w-1/3">
      <div className="relative mb-12">
        <div className="overflow-hidden rounded-[10px] h-[250px] md:h-[300px] lg:h-[350px]">
          <img src={img} alt="portfolio" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 mx-7 -mt-16 bg-blue-500 dark:bg-dark-2 py-6 px-4 text-center shadow-portfolio">
          <span className="text-primary mb-2 block text-sm font-medium">{category}</span>
          <h3 className="text-dark dark:text-blue-500 mb-4 text-xl font-bold">Creative Agency</h3>
          <a
            href="#"
            className="border border-stroke dark:border-dark-3 py-2 px-6 text-sm font-medium transition hover:bg-primary hover:text-blue-500 rounded-md inline-block"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
  

export default Portfolio;
