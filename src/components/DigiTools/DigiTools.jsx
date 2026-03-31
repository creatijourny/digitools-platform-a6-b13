import React, { use } from 'react';
import ToolFeatures from './ToolFeatures';

const DigiTools = ({ toolsPromise }) => {
    // const {name, description, price, period, features } = toolsPromise;
    const tools = use(toolsPromise)
    return (
        <div className='py-10'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold'>Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    tools.map(tool => <div className='space-y-4 shadow-lg rounded-lg border border-gray-200 p-5 flex flex-col'>
                        <div className='flex justify-end'>
                            <span className="bg-blue-100 text-green-500 inline-flex items-center gap-2 px-3 py-1 rounded-full">{tool.tagType}</span>
                        </div>
                        <div className='py-5'>
                            <img className='h-15 w-15' src={tool.image} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold mb-2'>{tool.name}</h3>
                            <p>{tool.description}</p>
                        </div>
                        <div className='flex-1'>
                            <p className='text-lg font-bold'>${tool.price}/ {tool.period}</p>
                            {
                               tool.features.map((feature, ind) => <ToolFeatures key={ind} feature={feature}></ToolFeatures>) 
                            }
                        </div>
                        
                        <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-4 py-2 rounded-full font-semibold text-lg text-center gap-3 group text-white w-full">Buy Now
                        </button>

                    </div>

                    )
                }
            </div>
        </div>
    );
};

export default DigiTools;