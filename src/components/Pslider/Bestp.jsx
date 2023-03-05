import React from 'react'

export default function Bestp(props) {
  return (
    <div>
      <div className='card'>
           <img className='product--image' 
           src={props.url}
            alt='product image'/> 
           <h2>{props.name}</h2>
           <p className='price'>{props.price}</p>
           <p className=''>{props.description}</p>
           <p>
            <button>Add to Cart</button>
           </p>
         </div>

    </div>
  );
}


