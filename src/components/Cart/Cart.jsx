import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { toast } from 'react-toastify';
const Cart = ({buyNow, setBuyNow}) => {
    // console.log(buyNow, "buyNow");

    const handleDeleteSelectedTool = (prod) => {
        const filteredTools = buyNow.filter(selectedTool => selectedTool.name !== prod.name);
        setBuyNow(filteredTools);
        toast.error(`${prod.name} is removed from cart`);
    }

    return <div>
        <div className='space-y-4'>
            {buyNow.length === 0 ? 
            <div className='h-[200px] flex flex-col justify-center items-center gap-6'>
                <h2 className='text-2xl'>No product selected</h2>
                <CiShoppingCart className='h-10 w-10' />
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
    </div>
        
    
};

export default Cart;