import React from 'react';
import "../../scss/style.css";

const D3 = () => {
  return (
        <div className="stage">
            {new Array(6).fill(0).map((id, index) => 
            <div 
              key={index}
              className='layer' />
            )}
          </div>
  )
}

export default D3