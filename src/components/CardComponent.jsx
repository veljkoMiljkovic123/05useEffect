import React, { useEffect } from 'react'

function CardComponent({item}) {

  

  return (
    <div className='w-[300px] h-[300px border border-slate-400 mt-[50px] rounded-2xl'>
        <div className='relative'>
            <img src={item.thumbnail} className='h-[200px] w-full object-cover rounded-t-2xl' alt="" 
            />
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 rounded-t-2xl hover:bg-transparent cursor-pointer'></div>
        </div>
        <div className='p-3 text-center'>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p className='font-bold text-2xl'>${item.price}</p>
        <button className='px-[24px] py-[12px] border-none bg-blue-400 text-white rounded-full hover:bg-red-400 transition-all'>Add To Cart</button>
        </div>

    </div>
  )
}

export default CardComponent