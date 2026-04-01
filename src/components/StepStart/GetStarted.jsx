import React from 'react';
import image from "../../assets/user.png"
import image1 from "../../assets/package.png"
import rocket from "../../assets/rocket.png"

const GetStarted = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center mb-6 py-8'>
                <h2 className="text-4xl font-bold text-[#101727] mb-4">Get Started in 3 Steps</h2>
                <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='container mx-auto px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='bg-[#FFFFFF] shadow-lg rounded-lg border border-gray-200 h-100 w-100 py-10'>
                    <div className='mb-5 flex justify-end'><span className="bg-purple-500 text-white inline-flex items-center gap-2 px-2 py-1 rounded-full">01</span></div>
                    <div className='flex flex-col space-y-5 justify-center items-center'>
                        <img className='mb-10' src={image} alt="" />
                        <h3 className='text-2xl font-bold text-[#101727]'>Create Account</h3>
                        <p className='text-[#627382] text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
                <div className='bg-[#FFFFFF] shadow-lg rounded-lg border border-gray-200 h-100 w-100 py-10'>
                    <div className='mb-5 flex justify-end'><span className="bg-purple-500 text-white inline-flex items-center gap-2 px-2 py-1 rounded-full">02</span></div>
                    <div className='flex flex-col justify-center items-center space-y-5'>
                        <img className='mb-10' src={image1} alt="" />
                        <h3 className='text-2xl font-bold text-[#101727]'>Choose Products</h3>
                        <p className='text-[#627382] text-center'>Browse our catalog and select the toolsthat fit your needs.</p>
                    </div>


                </div>
                <div className='bg-[#FFFFFF] shadow-lg rounded-lg border border-gray-200 h-100 w-100 py-10'>
                    <div className='mb-5 flex justify-end'><span className="bg-purple-500 text-white inline-flex items-center gap-2 px-2 py-1 rounded-full">03</span></div>
                    <div className='flex flex-col justify-center items-center space-y-5'>
                        <img className='mb-10' src={rocket} alt="" />
                        <h3 className='text-2xl font-bold text-[#101727]'>Start Creating</h3>
                        <p className='text-[#627382] text-center'>Download and start using your premium tools immediately.</p>
                    </div>

                </div>
            </div>            
            
        </div>

    );
};

export default GetStarted;