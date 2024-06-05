import React from 'react'

export const NavItems = (props) => {
  return (
    <div 
    className='transform hover:scale-105 transition-transform ease-in-out duration-300 hover:bg-gray-200 hover:rounded-r-full text-xl w-full font-semibold text-gray-500 p-4 hover:shadow-md  text-center cursor-pointer z-30'
    onClick={props.onClick}
    >{props.title}</div>
  )
}
