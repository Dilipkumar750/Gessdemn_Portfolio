import React, { useEffect, useState } from 'react';

const Counter = ({ target }) => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        let start = 1;
        const end = parseInt(target.replace("+", ""), 10);
        if (start === end) return;

        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= end) {
                    clearInterval(interval);
                    return end;
                }
                return prev + 1;
            });
        }, 50);

        return () => clearInterval(interval);
    }, [target]);

    return <span className="text-3xl">{count}+</span>;
};

const About = () => {
    return (
        <div>
            <section className="py-24 relative">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                <img className="rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1717741205.png" alt="About Us" />
                            </div>
                            <img className="sm:ml-0 ml-auto rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1717741215.png" alt="About Us" />
                        </div>
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        Empowering Each Other to Succeed
                                    </h2>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        Every project we've undertaken has been a collaborative effort, where every person
                                        involved has left their mark. Together, we've not only constructed buildings but also
                                        built enduring connections that define our success story.
                                    </p>
                                </div>
                                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal"><Counter target="3+" /></h3>
                                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">Years of Experience</h6>
                                    </div>
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal"><Counter target="25+" /></h4>
                                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">Successful Projects</h6>
                                    </div>
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal"><Counter target="22+" /></h4>
                                        <h6 className="text-gray-500 text-base font-normal leading-relaxed">Happy Clients</h6>
                                    </div>
                                </div>
                            </div>
                            <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-md justify-center items-center flex">
                                <span className="px-1.5 text-white text-sm font-medium leading-6">Contact Us</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
