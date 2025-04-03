import Image from 'next/image'
import React from 'react'

const UserInfo = ({image, userName , date}: {image : string , userName : string , date : string}) => {
  return (
    <div>
        <div className='flex items-center gap-4'>
            <Image src={image} alt="" className='w-12 h-12 rounded-full' width={100} height={100} />
            <div className='flex flex-col gap-1'>
                <p className='text-sm font-semibold text-gray-800'>{userName}</p>
                <p className='text-xs text-gray-600'>{date}</p>
            </div>
        </div>
    </div>
  )
}

export default UserInfo