import React from "react";

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string
  width: string;
  startIcon?:any;
  fullWidth?:boolean;
  size?:number|string;
  variant?:string;
}

const Button: React.FC<Props> = ({ 
    border,
    color,
    children,
    height,
    onClick, 
    radius,
    width,
    startIcon,
    fullWidth,
    size,
    variant
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width,
      }}
    >
    {children}
    </button>
  );
}

export default Button;