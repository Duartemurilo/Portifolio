import styled, { keyframes } from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
  background: linear-gradient(180deg, rgba(0, 145, 255, 1) 4%, rgba(0, 166, 230, 1) 92%);
`
export const TextFooter = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  width: 30vw;
  height: 20vh;

  font-size: 30px;
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
`

export const ContainerSocialMedia = styled.div`
  display: flex;
  width: 40vw;
  height: 10vh;

  justify-content: space-evenly;
`

const Animate = keyframes`
0%,100%{
  width: 100%;
  height: 100%;
} 50%{
  width: 50%;
  height: 50%;
}
`

export const DivIcons = styled.div`
  width: 50px;
  height: 50px;
  margin: 0%, 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 0.3s;
  a {
    color: white;
  }
  :hover {
    transform: scale(1.4);
  }
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, #b52b65, #ed6663);
    z-index: -1;
    border-radius: 50%;
    transform: translate(100%, 100%);
    transition: all ease 0.4s;
  }

  :hover::before {
    transform: translate(0);
    animation: ${Animate} 0.4s linear;
  }
`
