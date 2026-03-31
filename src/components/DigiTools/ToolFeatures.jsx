import React from 'react';
import { TiTick } from 'react-icons/ti';

const ToolFeatures = ({feature}) => {
    return (
        <p className='flex gap-1'> <TiTick className='text-green-600 text-2xl' />{feature}</p>
    );
};

export default ToolFeatures;