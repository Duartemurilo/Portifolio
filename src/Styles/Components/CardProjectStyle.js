import styled from 'styled-components'

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
  }
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

    cursor: pointer;
    height: 6vh;
    border: 2px solid #4da9ff;
    border-radius: 20px;
    padding: 5px;
    background: none;
    :hover {
      transform: scale(1.1);
      background-color: #4da9ff;
      color: white;
    }
  }
`
