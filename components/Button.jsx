import React from 'react'

const Button = ({
  children,
  icon,
  onClick,
  type = 'button',
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-10 py-4 rounded-lg bg-[#BE232D] text-white font-semibold hover:bg-[#9E1C25] transition ${className}`}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  )
}

export default Button
