import React from 'react'

const Button = ({children,customStyle}) => {
  return (
    <button className={customStyle}>
        {children}
    </button>
  )
}

export default Button