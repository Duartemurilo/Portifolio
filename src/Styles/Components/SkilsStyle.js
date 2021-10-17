import styled from 'styled-components'
import BreakPoints from '../../Constants/BreakPoints'

export const SkilContainer = styled.div`
  display: flex;
  height: 40vh;
  border-radius: 30px;
  width: 90vw;
  background-color: white;
  border: 1px solid #e6ecf8;
  margin-bottom: 5vw;
  margin-top: -20vh;

  ${`@media only screen and ${BreakPoints.device.cel} {
   height: 120vh;
   border: 1px solid #d9d9d9;
   flex-direction: column;
   align-items: center;
  }`}
`
export const SkilLeft = styled.div`
  display: flex;
  height: 40vh;
  justify-content: center;
  border-radius: 30px;
  width: 30%;
  color: #4da9ff;
  border-bottom-right-radius: 0px;
  align-items: center;

  ${`@media only screen and ${BreakPoints.device.cel} {

    width: 100%;
    height: 10vh;
    margin-top:5vh
  }`}
`
export const SkilRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #141c3a;
    margin-top: 0;
    font-size: 20px;
  }
  height: 40vh;
  border-radius: 30px;
  width: 100%;
  border-bottom-left-radius: 0px;

  ${`@media only screen and ${BreakPoints.device.cel} {
  dispay:flex;
  flex-direction: column;

  width: 100%;
  height: 100%
  
}`}
`

export const ResumeFrontEnd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 33%;
  max-width: 33%;
  height: 60%;
  margin-left: 0.5vw;

  ul {
    display: flex;
    width: 20%;
    font-size: 18px;
    list-style-type: none;
    flex-direction: column;
    margin-top: 0;
    font-size: 20px;
    margin-right: 70px;
  }
  li {
    margin-top: 8px;
    width: 120px;
  }
  a {
    text-decoration: none;
  }
  ${`@media only screen and ${BreakPoints.device.cel} {
  display: flex;

  flex-direction: column;
  margin-top:2vh;

  width: 90%;
  min-width: 85%;
  height: 60%;
  padding: 10px;
  ul {
    display: flex;
    width: 20%;
    font-size: 18px;
    list-style-type: none;
    flex-direction: column;
    margin-top: 0;
    font-size: 20px;
   

  }
  
}`}
`

export const DivLinguagens = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1vh;
  width: 10vw;

  img {
    width: 30px;
  }
  p {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 18px;
    margin-left: 10px;
  }
  ${`@media only screen and ${BreakPoints.device.cel} {
    display: flex;
    padding-left: 220px;
    justify-content:center
    align-items: center;
    margin-top: 1vh;
    width: 100%;
    max-width: 100%;
   
  }`}
`
