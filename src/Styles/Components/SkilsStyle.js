import styled from 'styled-components'

// #e6ecf8
export const SkilContainer = styled.div`
  display: flex;
  height: 40vh;
  border-radius: 30px;
  width: 90vw;
  background-color: white;
  border: 1px solid #e6ecf8;
  margin-bottom: 5vw;
  margin-top: -20vh;
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
`
