import { useEffect, useState } from "react";

const Notification = ({ type, title, message }) => {
    const [visible, setVisible] = useState(true);

    const typeStyles = {
        success: "bg-green-100 text-green-800 border-green-300",
        error: "bg-red-100 text-red-800 border-red-300",
        warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
    };

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className={`border px-4 py-3 rounded shadow ${typeStyles[type]}`}>
            <p className="font-medium">{title}</p>
            <div>{message}</div>
        </div>
    );
};

export default Notification;