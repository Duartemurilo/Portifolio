import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 14vh;
  div {
    display: flex;
    align-items: center;
    width: 60vw;
    color: #4da9ff;
    height: 100%;
    ul {
      display: flex;
      width: 100%;
      font-size: 18px;
      align-items: center;
      justify-content: space-evenly;
      list-style-type: none;
      li {
        :hover {
          transform: scale(1.1);
        }
      }
      a {
        text-decoration: none;
        color: #4da9ff;
        font-weight: bold;
      }
    }
    button {
      width: 15vw;
      font-size: 16px;
      color: #4da9ff;
      font-weight: bold;
      cursor: pointer;
      height: 6vh;
      border: 2px solid #4da9ff;
      border-radius: 20px;
      padding: 5px;
      background: none;
      margin-right: 4vw;
      :hover {
        transform: scale(1.1);
        background-color: #4da9ff;
        color: white;
      }
    }
  }
  align-items: center;
  justify-content: flex-end;
`
