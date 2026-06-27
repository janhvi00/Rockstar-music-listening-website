import React from 'react'
import { ArrowRight } from 'lucide-react';

const Rightcardcontent = (props) => {
  return (
    <div className='text-white absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
        <h2 className="p-2 bg-black rounded-full font-bold h-12 w-12 flex justify-center items-center text-xl">{props.idx+1}</h2>
        <div className="p-2 font-bold flex flex-col justify-between items-between ">
            <p className='mb-10 text-shadow-2xs' >{props.lyrics}</p>
            <div className="p-2 flex flex-row justify-between items-between">
                <button   onClick={() => props.setsong(props.song)} className = 'transition-all duration-200 hover:bg-gray-700 hover:border hover:border-white active:scale-95 p-2 bg-black h-10 w-25 rounded-full'>Listen now</button>
                <button><ArrowRight size={16} strokeWidth={3.25} className = 'p-2 bg-black h-10 w-10 rounded-full'/></button>
            </div>
        </div>
    </div>
  )
}

export default Rightcardcontent