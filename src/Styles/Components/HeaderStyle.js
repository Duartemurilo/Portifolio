import styled from 'styled-components'
import BreakPoints from '../../Constants/BreakPoints'

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 14vh;
  align-items: center;
  justify-content: flex-end;
  transition: all ease 1s;

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
        display: inline-block;
        position: relative;
      }
      a {
        text-decoration: none;
        color: #4da9ff;
      }
    }
    button {
      width: 15vw;
      font-size: 16px;

      font-family: 'Poiret One', cursive;
      font-weight: bold;
      cursor: pointer;
      height: 6vh;
      border: 2px solid #4da9ff;
      border-radius: 20px;
      padding: 5px;
      background: none;
      margin-right: 4vw;
      font-weight: bold;
      a {
        text-decoration: none;
        color: #4da9ff;
        :hover {
          color: white;
        }
      }
      :hover {
        transform: scale(1.1);
        background-color: #4da9ff;
      }
    }
  }
  ${`@media only screen and ${BreakPoints.device.cel} {
  display: flex;
  width: 90%;
  height: 14vh;
  align-items: center;
  justify-content: flex-end;
  button {
    width: 40%;
    font-size: 16px;
    font-family: 'Poiret One', cursive;
    font-weight: bold;
    cursor: pointer;
    height: 40%;
    border: 2px solid #4da9ff;
    border-radius: 20px;
    padding: 5px;
    background: none;
    margin-right: 8vw;
    a {
      text-decoration: none;
      color: #4da9ff;
      :hover {
        color: white;
      }
      :hover {
        transform: scale(1.1);
        background-color: #4da9ff;
      }
    }
  }
}`}
`
export const HeaderContainerPhone = styled.div``
