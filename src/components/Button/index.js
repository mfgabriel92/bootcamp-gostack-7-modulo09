import React from 'react'
import PropTypes from 'prop-types'
import { Btn } from './styles'

function Button({ type, text, color, disabled, onClick }) {
  return (
    <Btn type={type} color={color} disabled={disabled} onClick={onClick}>
      {text}
    </Btn>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  onClick: () => {},
}

export default Button
