import React from "react";
import "./styles.css";

export default ({ children, className, ...rest }) => {
  return (
    <div className={`page ${className}`} {...rest}>
      {children}
    </div>
  );
};
