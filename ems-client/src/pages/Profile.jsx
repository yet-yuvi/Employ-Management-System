import React from 'react';
import userProfileImage from "../image/User-Profile-PNG.png";

export const Profile = () => {
    return (
        <div className=' flex gap-6 p-8 w-full h-full  bg-gray-200 border-2 border-red-500'>
            <div className='flex flex-col gap-4 p-8 items-center w-1/4 h-fit bg-white border-2 border-red-500'>
                <img 
                className='w-48 h-48 border-4 border-gray-200'
                src={userProfileImage} alt="" />

                <div className='flex flex-col gap-1 border-2 border-red-500 w-full p-4'>
                    <h1 className='text-2xl py-2 text-blue-400'>Leave Taken</h1>
                    <p>1: 5-1-2023</p>
                    <p>2: 9-3-2023</p>
                    <p>3: 11-6-2023</p>
                    <p>4: 14-8-2023</p>
                </div>
            </div>
            
            <div className='w-2/4 bg-white border-2 border-red-500'>
                hello
            </div>
            
            <div className='w-1/4 bg-white border-2 border-red-500'>
                hello
            </div>
        </div>
      )
}
