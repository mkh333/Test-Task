import React from 'react';
import emptyImage from './img/empty.png';

const Empty = ({ message, image = emptyImage, children }) => {
    return (
        <div className="text-gray-500">
            <img src={image} alt="Empty" className="w-32 h-32 mb-4 object-contain"/>
            <p className="text-lg font-medium">{message}</p>
            {children}
        </div>
    );
};

export default Empty;