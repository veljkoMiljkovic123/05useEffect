import React, { useEffect } from 'react'

function CardComponent({item}) {

  

  return (
    <div className='w-[300px] h-[300px]'>
        <img src={item.thumbnail} className='h-[200px]' alt="" />
        <h2>{item.title}</h2>
        <p>${item.price}</p>

    </div>
  )
}

export default CardComponent