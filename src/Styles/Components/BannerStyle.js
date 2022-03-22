import styled, { keyframes } from "styled-components";
import BreakPoints from "../../Constants/BreakPoints";

export const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 4vh;
    font-size: 55px;

    color: #111212;
    margin-bottom: 0;
  }

  h2 {
    color: #0a0a0ae6;
    font-size: 20px;
    margin-top: 1vh;
  }
  img {
    height: 30vh;
    object-fit: cover;
    border: none;
    border-radius: 300px;
  }

  ${`@media only screen and ${BreakPoints.device.cel} {
    h1 {
    font-size: 30px;
    color: #111212;
    padding: 10px;
    font-weight: bold;

  }
  h2 {
    color: #0a0a0ae6;
    font-size: 20px;
    
  }
  
  }`}
`;
const SlideLeft = keyframes`
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
`;

const ScaleInCenter = keyframes`
0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
`;
export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
  animation: ${ScaleInCenter} 2s;

  ${`@media only screen and ${BreakPoints.device.cel} {
    width: 90%;
    margin-top: 2vh;
`}
`;
export const ContainerImage = styled.div`
  height: 30vh;
  animation: ${SlideLeft} 2s;
  border-radius: 230px;
  background-color: #4da9ff;
  margin-top: 10vh;
  border: 6px solid white;
`;
