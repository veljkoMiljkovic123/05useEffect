import React from 'react'

function SingleUser({person,setPerson}) {

    function changePerson(){
        setPerson({...person,name:"Veljko",address:"Brus"})
    }

  return <div className='w-[300px] h-[300px] border border-red-400 mx-auto mt-[100px] bg-lime-400 rounded-2xl flex flex-col items-center'>
    <h3 className='text-center mb-[10px] text-center uppercase text-2xl mt-5 font-bold'>{person.name}</h3>
    <h2 className='text-center mb-[10px] text-center uppercase text-2xl mt-5 font-bold'>{person.age}</h2>
    <h3 className='text-center mb-[10px] text-center uppercase text-2xl mt-5 font-bold'>{person.address}</h3>
    <button onClick={changePerson} className='bg-black text-white px-4 py-2 rounded-full mt-5'>Change person</button>
  </div>
  

}

export default SingleUser