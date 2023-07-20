import React from 'react'
import SortSelect from './SortSelect'
import SearchBar from './SearchBar'

type Props = {}

function ManageStudents({}: Props) {
  return (
    <>
    <div className='w-[100%] h-[10%] flex flex-row-reverse p-5'>
        <div>
        <SearchBar />
        </div>
        <SortSelect />  
    </div>
    <div className='w-[100%] h-[90%] flex items-center justify-center'>
        <div className='w-[80%] h-[100%]'>
            {/* TODO 'student' component*/}
        </div>
    </div>
    </>
  )
}

export default ManageStudents