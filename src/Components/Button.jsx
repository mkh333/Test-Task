const Button = ({ type, size, onClick, children }) => {
    const baseStyles = 'px-4 py-2 rounded focus:outline-none transition duration-300 cursor-pointer';

    const typeStyles = {
        primary: 'bg-blue-500 text-white hover:bg-blue-700',
        secondary: 'bg-gray-500 text-white hover:bg-gray-700',
        danger: 'bg-red-500 text-white hover:bg-red-700',
    };

    const sizeStyles = {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
    };

    return (
        <button className={`${baseStyles} ${typeStyles[type]} ${sizeStyles[size]}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;