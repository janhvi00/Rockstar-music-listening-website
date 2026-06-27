import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Pagecontent = (props) => {
  return (
    <div className = "lg:flex flex-col lg:flex-row gap-10 min-h-screen w-full px:2 lg:px-6 py-4">
        <Leftcontent/>
        <Rightcontent users = {props.users} setsong={props.setsong}/>
    </div>
  )
}

export default Pagecontent