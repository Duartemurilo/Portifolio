import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 4vh;
    font-size: 55px;
    font-weight: bold;
    color: #111212;
    margin-bottom: 0;
  }
  h2 {
    color: #0a0a0ae6;
    font-size: 20px;
    margin-top: 1vh;
    font-weight: 1000;
  }
  img {
    height: 30vh;
    object-fit: cover;
    border: none;
    border-radius: 300px;
  }
`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
`
export const ContainerImage = styled.div`
  height: 30vh;

  border-radius: 230px;
  background-color: #4da9ff;
  margin-top: 10vh;
`
