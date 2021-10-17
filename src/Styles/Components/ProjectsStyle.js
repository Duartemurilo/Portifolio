import styled from 'styled-components'
import BreakPoints from '../../Constants/BreakPoints'

export const ProjectContanier = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  margin-top: 2vh;
  p {
    font-size: 32px;
  }

  ${`@media only screen and ${BreakPoints.device.cel} {
  height: 200vh;
  gap:1vh;
}`}
`
export const ContainerProject = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 65%;
  height: 80vh;
  ${`@media only screen and ${BreakPoints.device.cel} {

   display: flex;
   flex-direction: column;
   flex-wrap: nowrap;
   height: 190vh;
  }`}
`
