import React from 'react'

const Tag = ({icon , name} : {icon : React.ReactNode , name : string}) => {
  return (
    <div className='bg-gray-300/30 px-4 py-2 rounded-4xl my-2'>
        <div className='flex items-center gap-4'>
            <div className='text-black text-xl'>{icon}</div>
            <p className='text-sm font-semibold text-gray-600'>{name}</p>
        </div>
    </div>
  )
}

export default Tag