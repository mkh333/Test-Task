import React, { useState } from 'react';

const Dropdown = ({items, trigger, direction, children}) => {
    const [open, setOpen] = useState(false);

    const directionClasses = {
        'bottom-left': 'left-0 top-full',
        'bottom-right': 'right-0 top-full',
        'top-left': 'left-0 bottom-full',
        'top-right': 'right-0 bottom-full',
    };

    const handleMouseEnter = () => {
        if (trigger === 'hover') setOpen(true);
    };

    const handleMouseLeave = () => {
        if (trigger === 'hover') setOpen(false);
    };

    const handleClick = () => {
        if (trigger === 'click') setOpen((prev) => !prev);
    };

    return (
        <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
            {children}
            {open && (
                <ul className={`absolute z-10 mt-1 bg-white border rounded shadow ${directionClasses[direction]}`}>
                    {items.map((item, index) => (
                        <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                                item.onClick?.();
                                setOpen(false);
                            }}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;