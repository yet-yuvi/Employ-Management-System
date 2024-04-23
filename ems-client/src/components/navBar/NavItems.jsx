import React from 'react'

export const NavItems = (props) => {
  return (
    <div 
    className='p-4 text-xl w-full font-semibold text-gray-500 p-4 shadow-md  text-center cursor-pointer'
    onClick={props.onClick}
    >{props.title}</div>
  )
}
