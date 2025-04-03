import React from 'react';

interface TagProps {
  icon?: React.ReactNode;
  name: string;
  bgColor?: string; // Optional background color
  textColor?: string; // Optional text color
}

const Tag = ({ icon, name, bgColor = 'bg-gray-300/30', textColor = 'text-gray-600' }: TagProps) => {
  return (
    <div className={`${bgColor} px-4 py-2 rounded-4xl my-2`}>
      <div className='flex items-center gap-4'>
        {icon && <div className='text-black text-xl'>{icon}</div>} {/* Only render icon if it exists */}
        <p className={`${textColor} text-sm font-semibold`}>{name}</p>
      </div>
    </div>
  );
};

export default Tag;
