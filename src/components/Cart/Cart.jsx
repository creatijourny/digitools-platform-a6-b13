import React from 'react';

const Cart = ({buyNow, setBuyNow}) => {
    // console.log(buyNow, "buyNow");

    const handleDeleteSelectedTool = (prod) => {
        const filteredTools = buyNow.filter(selectedTool => selectedTool.name !== prod.name);
        setBuyNow(filteredTools);
    }

    return <div>
        <div className='space-y-4'>
            {
            buyNow.map((prod, index) => {
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