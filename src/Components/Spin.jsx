const Spin = ({ size, tip }) => {
    const sizeStyles = {
        small: 'h-4 w-4 border-2',
        medium: 'h-6 w-6 border-4',
        large: 'h-10 w-10 border-4',
    };

    return (
        <div>
            <div className={`animate-spin rounded-full border-t-transparent border-solid border-gray-400 ${sizeStyles[size]}`}/>
            <p className="text-sm text-gray-600">{tip}</p>
        </div>
    );
};

export default Spin;