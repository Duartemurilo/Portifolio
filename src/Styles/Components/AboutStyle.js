import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 110vh;
  background: linear-gradient(180deg, rgba(0, 145, 255, 1) 4%, rgba(0, 166, 230, 1) 92%);
  div {
    display: flex;
    flex-direction: column;
    width: 70%;
    align-items: center;
    max-width: 70%;
    padding: 20px;
    height: 30%;
    margin-top: 20vh;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 270, 0);
  }
  h1 {
    font-size: 40px;

    color: white;
  }
  p {
    font-size: 20px;
    color: #ffffff;
    margin-top: 1vh;
    margin-left: 10px;
    line-height: 1.5;
  }
`
