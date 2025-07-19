import { useState } from "react";

const Form = ({ onSubmit, children }) => {
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const input = e.target.elements.username;
        const value = input?.value || "";

        if (!value.trim()) {
            setError("Field is required");
            return;
        }

        setError("");
        onSubmit(value);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-2">
            {children}
            {error && <p className="text-red-500">{error}</p>}
        </form>
    );
};

export default Form;