import styled from 'styled-components'

export const Container = styled.header`
  height: 64px;
  background: #fff;
  padding: 0 30px;
`

export const Content = styled.div`
  height: 64px;
  max-width: 1280px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 50px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #ccc;
    }

    a {
      color: #6004e0;
      font-weight: bold;
      letter-spacing: 1px;
      transition: color 0.2s;

      &:hover {
        color: #62b0cc;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`

export const Me = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #ccc;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      font-size: 12px;
      color: #999;
      transition: color 0.2s;

      &:hover {
        color: #62b0cc;
      }
    }
  }

  img {
    width: 34px;
    border-radius: 50%;
  }
`
