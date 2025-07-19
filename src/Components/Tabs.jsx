import { useState } from "react";

const Tabs = ({ items }) => {
    const getDefaultActiveKey = (items) => {
        return items && items.length > 0 ? items[0].key : "";
    };
    const [activeKey, setActiveKey] = useState(getDefaultActiveKey(items));

    return (
        <div>
            <div className="flex border-b mb-2">
                {items.map((tab) => (
                    <button key={tab.key} onClick={() => setActiveKey(tab.key)}
                            className={`px-4 py-2 border-b-2 ${
                            tab.key === activeKey
                                ? "border-blue-500 text-blue-500"
                                : "border-transparent text-gray-500"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div>{items.find((tab) => tab.key === activeKey)?.content}</div>
        </div>
    );
};

export default Tabs;