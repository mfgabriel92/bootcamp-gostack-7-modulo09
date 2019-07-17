import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'

export const Btn = styled.button.attrs(props => ({
  type: props.type,
  disabled: props.disabled,
}))`
  background: ${props => props.color}
  height: 44px;
  font-weight: bold;
  border: 0;
  color: #fff;
  margin-bottom: 15px;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => css`
    &:hover {
      background: ${darken(0.1, `${props.color}`)};
    }

    &:disabled {
      background: ${lighten(0.1, `${props.color}`)};
    }
  `}
`
