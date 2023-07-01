import React from 'react'
import Announcement from './Announcement'
import { useContext } from 'react'
import { globalContext } from '@/context/globalContext'

type Props = {}

function Announcements({}: Props) {
    const { setShowOverlay } = useContext(globalContext)

  return (
    <div className='w-[100vw] h-[100vh] flex flex-col'>
        <div className='w-[100vw] h-[10vh] flex flex-row-reverse p-5 items-center'>
            <button className='mr-[3vw] w-[200px] h-[55px] bg-[#3E6532] shadow-md text-white text-xl transition-[0.5s] hover:bg-[#73b95c]' onClick={() => {setShowOverlay(true)}}>
                <div>
                    Add annoucement 
                    <span className='text-2xl'> +</span>
                </div>
            </button>
        </div>
        <div className='w-[100vw] h-[90vh] flex gap-10 flex-col items-center overflow-scroll p-5'>
            <Announcement />
            <Announcement />
            <Announcement />
            <Announcement />
            <Announcement />
        </div>
    </div>
    )
}

export default Announcements