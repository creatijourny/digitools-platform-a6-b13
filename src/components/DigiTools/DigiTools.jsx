import React from 'react';
import { use } from 'react';
import ToolCard from '../ToolCard';
import Cart from '../Cart/Cart';

const DigiTools = ({ toolsPromise, buyNow, setBuyNow }) => {
    const tools = use(toolsPromise);

   
    return (
        <div className='py-20'>
            {/* <div className='text-center'>
                <h2 className='text-4xl font-bold'>Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div> */}
            {/* <div className='flex justify-center py-5'>
                <button onClick={() => setActiveBtn("product")} className={`btn w-30 ${activeBtn === "product" ? 
                    "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-transparent"}  text-lg border-none rounded-full`}>Products</button>
                <button onClick={() => setActiveBtn("cart")} className={`btn w-30 ${activeBtn === "cart" ? 
                    "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-transparent"}  text-lg border-none rounded-full`}>Cart (0)</button>
            </div> */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    tools.map((tool) => (
                       <ToolCard key={tool.id} tool={tool} buyNow={buyNow} setBuyNow={setBuyNow}></ToolCard>
                        )
                    )
                }
                
            </div>
            
        </div>
    );
};

export default DigiTools;