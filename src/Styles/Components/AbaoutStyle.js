import styled from 'styled-components'

export const AbaoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60vh;
  background: rgb(107, 190, 253);
  background: linear-gradient(288deg, rgba(107, 190, 253, 1) 0%, rgba(177, 236, 249, 1) 92%);
  div {
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    align-items: center;
  }
  h1 {
    align-self: center;
    font-size: 50px;
    font-weight: bold;
  }
  h2 {
    font-weight: bold;
    line-height: 1.5;
  }
`
