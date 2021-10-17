import styled from 'styled-components'
import BreakPoints from '../../Constants/BreakPoints'

export const ContainerWorkTogether = styled.div`
  display: flex;
  height: 22vh;
  border-radius: 10px;
  width: 85vw;
  background-color: #141c3a;
  position: relative;
  margin-top: 15vh;
  margin-bottom: -10vh;

  button {
    width: 15vw;
    font-size: 16px;
    color: #4da9ff;
    cursor: pointer;
    height: 6vh;
    border: 2px solid #4da9ff;
    border-radius: 20px;
    padding: 5px;
    background: none;
    font-family: 'Poiret One', cursive;
    font-weight: bold;
    a {
      text-decoration: none;
      color: #4da9ff;
    }
    :hover {
      transform: scale(1.1);
      background-color: #4da9ff;
      color: white;
      a {
        color: white;
      }
    }
  }
  ${`@media only screen and ${BreakPoints.device.cel} {
    display: flex;
    flex-direction: column;
    width: 90vw;
    flex-wrap: nowrap;
    align-items: center;
    height: 30vh;
  }`}
`
export const WorkTogetherLeft = styled.div`
  display: flex;
  height: 100%;
  font-size: 18px;
  justify-content: center;
  border-radius: 10px;
  width: 33%;
  color: white;
  border-bottom-right-radius: 0px;
  align-items: center;

  h1 {
    margin-left: 2vw;
  }
  ${`@media only screen and ${BreakPoints.device.cel} {
     font-size: 14px;
    
     width: 100%;
  }`}
`
export const WorkTogetherMidlle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 10px;
  width: 33%;

  p {
    margin: 0;
    color: white;
    font-size: 20px;
  }

  border-bottom-left-radius: 0px;
  ${`@media only screen and ${BreakPoints.device.cel} {
    
     width: 100%;
     p {
    margin: 0;
    color: white;
    font-size: 18px;
  }
  }`}
`
export const WorkTogetherRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 10px;
  width: 33%;
  border-bottom-left-radius: 0px;
  ${`@media only screen and ${BreakPoints.device.cel} {
    
    width: 100%;
    button{
      width:60%;
    }
 }
 }`}
`
