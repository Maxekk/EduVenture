import React from 'react'
import Annoucement from './Annoucement'

type Props = {}

function Annoucements({}: Props) {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col'>
        <div className='w-[100vw] h-[10vh] flex flex-row-reverse p-5 items-center'>
            <button className='mr-[3vw] w-[190px] h-[55px] bg-[#3E6532] shadow-md text-white text-lg transition-[0.5s] hover:bg-[#73b95c]'><div>Add annoucement <span className='text-3xl'>+</span></div></button>
        </div>
        <div className='w-[100vw] h-[90vh] flex gap-10 flex-col items-center overflow-scroll p-5'>
            <Annoucement />
            <Annoucement />
            <Annoucement />
            <Annoucement />
            <Annoucement />
        </div>
    </div>
  )
}

export default Annoucements