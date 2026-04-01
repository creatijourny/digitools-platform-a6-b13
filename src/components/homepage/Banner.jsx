import React from 'react';
import BannerImage from "../../assets/banner.png"
import playImg from "../../assets/Play.png"
import { FaDotCircle } from 'react-icons/fa';


const Banner = () => {
    return (

        <div>
            <div className="relative min-h-162.5 flex items-center overflow-hidden">
                <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">

                    <div className="space-y-4">
                        <span className="bg-blue-100 text-purple-500 inline-flex items-center gap-2 px-3 py-1 rounded-full">
                                <FaDotCircle/>
                                New: AI-Powered Tools Available
                            </span>
                        
                        <h1 className="text-5xl font-bold leading-tight tracking-tighter text-[#101727]">
                            Supercharge Your <br /> Digital Workflow
                            <br />

                        </h1>

                        <p className="text-lg text-zinc-700 max-w-lg">
                            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-4 py-2 rounded-full font-semibold text-lg flex items-center gap-3 group text-white">Explore Products
                            </button>
                            <button className="bg-transparent border border-purple-500 px-4 py-2 rounded-full flex items-center gap-3 group hover:bg-[#4F39F6] hover:text-white transition"><span className=""><img src={playImg} alt="" /></span>Watch Demo

                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative">
                            <img
                                className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl"
                                src={BannerImage}
                                alt=""

                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;