import { ButtonProps } from "@/interfaces";
// import { sizeMap } from '../interface';

const sizeMap = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-5 py-3 text-lg',
  };

const Button: React.FC<ButtonProps> = ({ title, size = 'medium', shape = 'rounded-md', className = '' }) => {
    const sizeClass = sizeMap[size];
    const shapeClass = shape;
  
    return (
      <button
        className={`bg-blue-600 text-white ${sizeClass} ${shapeClass} ${className} hover:bg-blue-700 transition`}
      >
        {title}
      </button>
    );
  };
  
  export default Button;