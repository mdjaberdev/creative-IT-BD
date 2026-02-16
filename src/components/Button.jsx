import React from 'react'

const Button = ({className, btnText}) => {
  return (
    <div className={`py-3.25 px-6.5 text-white text-[18px] font-bold ${className}`}>{btnText}</div>
  )
}

export default Button