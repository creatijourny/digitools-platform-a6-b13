import React from 'react';

const UserRating = () => {
    return (
        <div className='flex justify-between items-center px-5 gap-4 md:px-25 lg:px-60 min-h-[20vh] bg-[#4F39F6]'>
                <div>
                    <h3 className='text-5xl font-bold text-white'>50K+</h3>
                    <p className='text-white'>Active Users</p>
                </div>
                <div>
                    <h3 className='text-5xl font-bold text-white'>200+</h3>
                    <p className='text-white'>Premium Tools</p>
                </div>
                <div>
                    <h3 className='text-5xl font-bold text-white'>4.9</h3>
                    <p className='text-white'>Rating</p>
                </div>
        </div>
    );
};

export default UserRating;