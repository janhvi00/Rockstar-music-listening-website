import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div id='right' className='h-full flex flex-col lg:flex-row rounded-4xl overflow-x-auto lg:flex-nowrap gap-10 pl-5 w-3/4'>
      {props.users.map((elem, idx) => (
  <Rightcard
    image={elem.image}
    lyrics={elem.lyrics}
    key={idx}
    idx={idx}
    song={elem.song}
    setsong={props.setsong}
  />
))}
    </div>
  )
}

export default Rightcontent