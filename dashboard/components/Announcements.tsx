import React, { useState } from 'react'
import Announcement from './Announcement'
import { useContext, useEffect } from 'react'
import { globalContext } from '@/context/globalContext'

type Annoucement = {
    title: String, 
    upload_date: String,
    content: String
}

function Announcements() {
    const { setShowOverlay,fetchData,announcements } = useContext(globalContext)
    
    useEffect(() => {
        fetchData()
    },[])

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
        {announcements.slice().reverse().map((item: Annoucement) => {
        return <Announcement title={item.title} upload_date={item.upload_date} content={item.content} />;
        })}

        </div>
    </div>
    )
}

export default Announcements