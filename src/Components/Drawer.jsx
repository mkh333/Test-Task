import { useState } from "react";

const Drawer = ({ children, width }) => {
    const [visible, setVisible] = useState(false);

    const widthStyle = {
        small: "200px",
        medium: "400px",
        large: "600px",
    };

    return (
        <>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setVisible(true)}>
                Open Drawer
            </button>

            {visible && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    <div
                        className="h-full bg-gray-900 text-white shadow-lg transition-transform duration-300 ease-in-out"
                        style={{ width: widthStyle[width] || "300px" }}>
                        <div className="flex justify-end p-4 border-b border-gray-700">
                            <button onClick={() => setVisible(false)} className="text-gray-400 hover:text-white">
                                X
                            </button>
                        </div>
                        <div className="p-4 overflow-y-auto">{children}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Drawer;