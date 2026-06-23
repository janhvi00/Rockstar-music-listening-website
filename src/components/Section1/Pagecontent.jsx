import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Pagecontent = (props) => {
  return (
    <div className = "flex gap-10 h-full w-full px-18 py-4">
        <Leftcontent/>
        <Rightcontent users = {props.users} setsong={props.setsong}/>
    </div>
  )
}

export default Pagecontent