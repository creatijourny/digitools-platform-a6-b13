import React, { useState } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { toast } from 'react-toastify';
const Cart = ({buyNow, setBuyNow}) => {
    
    const totalPrice = buyNow.reduce((sum, items) => 
        sum + items.price, 0)
    const appTotalPrice = totalPrice.toFixed(2);

    const handleCheckOut = () => {
        setBuyNow([]);
    }

    const handleDeleteSelectedTool = (prod) => {
        const filteredTools = buyNow.filter(selectedTool => selectedTool.name !== prod.name);
        setBuyNow(filteredTools);
        toast.error(`${prod.name} is removed from cart`);
    }
    

    return <div className='mt-10'>
        
        <h2 className='text-3xl font-bold px-20'>Your Cart</h2>
        <div className='space-y-4 border border-gray-200 container mx-auto'>
            {buyNow.length === 0 ? 
            <div className='h-[200px] flex flex-col justify-center items-center gap-6'>
                <CiShoppingCart className='h-10 w-10' />
                <h2 className='text-2xl'>Your cart is empty</h2>
                
            </div> : buyNow.map((prod, index) => {
                return <div className='flex items-center gap-6 justify-between p-10 rounded-xl border' key={index}>
                    <div className='flex items-center gap-4'>
                        <img className='h-20 w-auto' src={prod.image} alt="" />
                        <div>
                            <h3 className='text-xl font-bold'>{prod.name}</h3>
                        <p className='text-lg'>{prod.price}</p>
                        </div>
                    </div>
                    <button onClick={() => handleDeleteSelectedTool(prod)} className='btn text-lg text-red-500 bg-transparent border-none hover:bg-purple-200'>Delete</button>
                </div>                
            })            
        }
        </div>
        <div className='flex justify-around mb-8 mt-5 items-center'>
            <h3 className='text-2xl font-bold'>Total</h3>
            <p className='text-2xl font-bold'>$ {appTotalPrice}</p>
        </div>
        <div className='flex justify-center items-center'>
        <button onClick={handleCheckOut} className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] md:text-xl font-bold text-[#FFFFFF] rounded-full w-full mb-5 py-2">Proceed to Checkout</button>
        </div>
        
    </div>
        
    
};

export default Cart;