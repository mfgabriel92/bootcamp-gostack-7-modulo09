import styled from 'styled-components'

export const Container = styled.div`
  max-width: 768px;
  margin: 50px auto;

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

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    span {
      color: #fff;
      flex: 1;
      margin-bottom: 10px;
      background: #ff8f8f;
      padding: 3px 10px;
      margin-top: -10px;
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

  button {
    width: 100%;
  }
`
