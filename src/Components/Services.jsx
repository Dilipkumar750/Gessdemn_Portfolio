import React from 'react';

const Services = () => {
  const services = [
    { name: "Medical Billing", description: "Streamlined billing solutions to maximize revenue and efficiency." },
    { name: "Medical Coding", description: "Accurate coding services to ensure proper claim submission." },
    { name: "Data Entry", description: "Efficient and accurate data entry services for all business needs." },
    { name: "BPO Process", description: "Outsourced business solutions to enhance productivity and cost savings." },
    { name: "Static Web Development", description: "Professional static websites with fast loading and secure structure." },
    { name: "Dynamic Web Development", description: "Interactive websites with dynamic content and seamless user experience." },
    { name: "E-Commerce Development", description: "Customized e-commerce solutions to boost online sales and engagement." },
    { name: "Shopify Development", description: "Expert Shopify store design and development for businesses of all sizes." },
    { name: "UI/UX Designing", description: "User-centric designs to enhance engagement and brand identity." },
    { name: "Pamphlet Design", description: "Creative and impactful pamphlet designs for marketing and promotion." }
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="font-headline text-2xl font-semibold sm:text-3xl text-center">Our Services</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-8 mt-16 sm:mt-24">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
              <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" className="text-gray-500 w-1/2 h-1/2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>
              </div>
              <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-500 rounded-full"></div>
            </div>
            <h3 className="font-headline text-xl sm:text-2xl mt-6 sm:mt-10">{service.name}</h3>
            <p className="leading-relaxed mt-4">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
