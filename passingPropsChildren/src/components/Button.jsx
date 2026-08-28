import React from "react";

const Button = (props) => {
  return (

    <div>
        {props.children}
     
    </div>
    // <button onClick={props.handleClick}>
    //   {props.count}
    // </button> 
  );
};

export default Button;
