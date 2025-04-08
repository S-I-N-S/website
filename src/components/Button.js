import React from "react";
import "../styles/button.css";

const Button = ({ children, type = "primary", onClick, className = "" }) => {
  return (
    <button 
      className={`button button-${type} ${className}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
