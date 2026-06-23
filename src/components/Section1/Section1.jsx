import React from 'react'
import Navbar from './Navbar'
import Pagecontent from './Pagecontent'

const Section1 = (props) => {
  return (
    <div className = "relative h-full w-full overflow-hidden">
        {/* Watermark */}
      <img
        src="https://m.media-amazon.com/images/I/61WAIwwAgOL._AC_UF894,1000_QL80_.jpg"
        alt=""
        className="object-cover absolute inset-0 m-auto w-full h-full opacity-30 "
      />
      {/*content*/}
        <Navbar />
        <Pagecontent users = {props.users} setsong={props.setsong}/>
    </div>
  )
}

export default Section1