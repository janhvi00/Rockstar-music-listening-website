import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className = "md:gap-10 md:mt-7 relative object-cover h-[88vh] w-80 rounded-4xl overflow-hidden shrink-0">
        <img className = "h-full w-full object-cover" src={props.image} alt="" />
        <Rightcardcontent idx = {props.idx} lyrics = {props.lyrics} song = {props.song} setsong = {props.setsong}/>
    </div>
  )
}

export default Rightcard