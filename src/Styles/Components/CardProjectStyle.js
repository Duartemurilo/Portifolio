import styled from 'styled-components'
import BreakPoints from '../../Constants/BreakPoints'

export const CardProjectContainer = styled.div`
  display: flex;
  width: 30vw;
  background-color: black;
  height: 36vh;
  border-radius: 20px;
  justify-content: center;
  align-items: flex-end;
  background-repeat: no-repeat;

  p {
    color: white;
    font-size: 25px;
  }
  ${`@media only screen and ${BreakPoints.device.cel} {
  display: flex;
  margin-top:4vh
  background-color: blue;
  width: 90vw;
  height: 45vh;
  max-height: 45vh;
 
  }`}
`
export const CardAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  position: absolute;
  width: 30vw;
  height: 36vh;
  background: linear-gradient(288deg, rgba(12, 0, 64, 1) 0%, rgba(28, 0, 148, 1) 92%);
  transition: all ease 1s;
  cursor: default;
  border-radius: 20px;

  :hover {
    opacity: 1;
  }
  p {
    color: white;
    font-size: 20px;
  }
  div {
    width: 90%;
    padding: 10px;
  }
  button {
    width: 15vw;
    font-size: 16px;
    color: #4da9ff;
    font-family: 'Poiret One', cursive;
    cursor: pointer;
    height: 6vh;
    border: 2px solid #4da9ff;
    border-radius: 20px;
    padding: 5px;
    font-weight: bold;
    background: none;
    a {
      text-decoration: none;
      color: white;
    }
    :hover {
      transform: scale(1.1);
      background-color: #4da9ff;
      color: white;
    }
  }
  ${`@media only screen and ${BreakPoints.device.cel} {
  width: 90vw;
  height:45vh;
  p {
    color: white;
    font-size: 18px;
  }
  button{
    width:40vw
  }
}`}
`
