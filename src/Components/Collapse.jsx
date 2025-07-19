import React, { useState } from 'react';

const Collapse = ({ items }) => {
    const [openKey, setOpenKey] = useState(null);

    const togglePanel = (key) => {
        setOpenKey(openKey === key ? null : key);
    };

    return (
        <div className="border rounded">
            {items.map(({ key, header, content }) => (
                <div key={key} className="border-b last:border-b-0">
                    <div className="cursor-pointer p-4 bg-gray-100 hover:bg-gray-200" onClick={() => togglePanel(key)}>
                        {header}
                    </div>
                    {openKey === key && (
                        <div className="p-4 bg-white">{content}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Collapse;