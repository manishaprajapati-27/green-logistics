import React from 'react'

const Button = ({className, cls, title}) => {
  return (
    <button className={`btn ${className}`}>
        <span className={cls}>{title}</span>
        <span className={cls}>{title}</span>
    </button>
  )
}

export default Button