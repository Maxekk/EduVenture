import React from 'react'

type Props = {}

function Annoucement({}: Props) {
  return (
    <div className='w-[45vw] h-[45vh] bg-white ml-[-5vw] shadow-xl flex flex-col'>
        <div className='w-[45vw] h-[6vh] border-b-2 flex'>
            <div className='w-[6vw] h-[100%] text-[#646262] flex justify-center items-center text-lg'>Added by:</div>
            <div className='w-[39vw] h-[100%] text-[#646262] text-lg font-bold flex items-center ml-0'>
                Test User
            </div>
        </div>
        <div className='w-[45vw] h-[6vh] border-b-2 flex'>
            <div className='w-[10vw] h-[100%] text-[#646262] flex justify-center items-center text-lg'>Date of publication:</div>
            <div className='w-[37vw] h-[100%] text-[#646262] text-lg font-bold flex items-center ml-0'>
                22-10-2023
            </div>
        </div>
        <div className='w-[45vw] h-[33vh] text-lg ml-0 p-2 text-[#393737]'>
            Test Content Test Content Test Content Test Content Test Content Test Content Test Content 
        </div>
    </div>
  )
}

export default Annoucement