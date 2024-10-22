import React from 'react';
import {buttonData} from '../constants/index.js';  

const Button = ({ id, className }) => {
    const button = buttonData.find((btn) => btn.id === id.toString());

  return (
    <div>
        {button ? (
        <button>
          <span className={`border border-p2 py-4 px-8 rounded-2xl  ${className}`}>
          {button.title}
          </span>
        </button>
        ) : (
        <p>Button not found</p>
        )}
  </div>
  )
}

export default Button;