import styled from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #62b0cc, #6004e0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.1);
  padding: 50px;
  width: 100%;
  max-width: 415px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.07);
      border: 0;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: #fff;
      }
    }

    button {
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      border: 0;
      color: #fff;
      margin-bottom: 15px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#3b9eff')};
      }
    }

    a {
      color: #fafafa;
      font-size: 13px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`
