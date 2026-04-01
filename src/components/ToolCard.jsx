import React from 'react';
import { useState } from "react";
import ToolFeatures from "../components/DigiTools/ToolFeatures"
import { toast } from 'react-toastify';

const ToolCard = ({ tool, buyNow, setBuyNow }) => {
    const [isBuy, setIsBuy] = useState(false);

    
    const handleBuyNow = () => {
        setIsBuy(true);
        const isFound = buyNow.find(selected => selected.name === tool.name)
        if(isFound) {
            // alert("Item alresdy selected")
            setIsBuy(false)
            // toast.error("Item already in cart")
            return;
        }
        toast.success(`${tool.name} is added to cart`, {autoClose:3000});
        setBuyNow([...buyNow, tool])
    }

    return (
        <div className='space-y-4 shadow-lg rounded-lg border border-gray-200 p-5 flex flex-col'>
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

            <button onClick={handleBuyNow} className={`py-2 rounded-full font-semibold text-lg text-center text-white w-full ${isBuy ? "bg-green-500" 
            : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"}`}>
            {isBuy ? "Added to Cart" : "Buy Now"}
            </button>


        </div>
    );
};

export default ToolCard;