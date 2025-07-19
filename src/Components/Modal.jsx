import { useState } from "react";

const Modal = ({ title, content, children }) => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setVisible(true)}>
                Open Modal
            </button>

            {visible && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-md shadow-md w-80 p-6">
                        <h2 className="text-lg font-semibold mb-4">{title}</h2>
                        <p className="text-sm text-gray-700">{content}</p>
                        <div className="flex justify-end gap-2 mt-6">
                            {children ? children : (
                                    <>
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setVisible(false)}>
                                            OK
                                        </button>
                                        <button className="bg-gray-300 text-black px-4 py-2 rounded" onClick={() => setVisible(false)}>
                                            Cancel
                                        </button>
                                    </>
                                )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;