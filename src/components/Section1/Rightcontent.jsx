import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  return (
    <div id='right' className='h-full lg:flex rounded-4xl overflow-x-auto lg:flex-nowrap gap-10 p-6 w-2/3'>
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