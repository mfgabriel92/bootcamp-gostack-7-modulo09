import styled, { css } from 'styled-components'
import Scrollbar from 'react-perfect-scrollbar'

export const Container = styled.div`
  position: relative;
`

export const Badge = styled.button`
  position: relative;
  background: none;
  border: 0;

  &:hover > svg {
    transition: color 0.2s;
    color: #62b0cc !important;
  }

  ${props =>
    props.hasUnread &&
    css`
      span {
        content: '';
        position: absolute;
        top: -5px;
        right: -10px;
        width: 20px;
        height: 15px;
        background: red;
        border-radius: 25%;
        color: #fff;
        font-size: 10px;
        font-weight: bold;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}
`

export const Notifications = styled.ul`
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.6);
  display: ${props => !props.isVisible && 'none'};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -30px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 30px solid rgba(0, 0, 0, 0.6);
  }
`

export const Scroll = styled(Scrollbar)`
  max-height: 280px;
`

export const Note = styled.li`
  color: #fff;
  padding: 15px 20px;
  transition: background 0.2s;
  display: flex;
  flex: 1;
  flex-direction: column;

  & + li {
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    time {
      font-size: 11px;
      color: #ccc;
    }

    button {
      border: 0;
      background: none;
      color: #62b0cc;
      font-size: 12px;

      &:hover {
        color: #6004e0;
      }
    }
  }

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  ${props =>
    props.isUnread &&
    css`
      background: rgba(0, 0, 0, 0.7);
    `}
`
