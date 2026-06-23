import React from 'react'
import { MoveUpRight } from 'lucide-react';
import Herotext from './Herotext';
import Arrow from './Arrow';
const Leftcontent = () => {
  return (
    <div className = "flex flex-col justify-between h-[88vh] w-1/3">
        <Herotext/>
        <Arrow/>
    </div>
  )
}

export default Leftcontent