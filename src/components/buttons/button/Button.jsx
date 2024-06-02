import React from 'react'
import './button.scss'

export const Button = ({
  text,
  size,
  type,
  marginRight,
  handleClick,
  disabled,
  marginTop,
}) => {
  const buttonClasses = [
    'button-component',
    size === 'sm' && 'small',
    type === 'secondary' && 'secondary',
    type === 'submit' && 'submit',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type={type === 'submit' ? 'submit' : undefined}
      style={{
        marginRight: marginRight && marginRight,
        marginTop: marginTop && marginTop,
      }}
      className={buttonClasses}
      onClick={handleClick ? handleClick : null}
      disabled={disabled}
    >
      {text}
    </button>
  )
}
