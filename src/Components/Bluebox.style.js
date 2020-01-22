import styled, { keyframes } from 'styled-components';

const start = keyframes`

  0% {
    transform: translateX(-1200px);
    -webkit-transform: translateX(-1200px);
  }
  100% {
    transform: translateX(-400px);
    -webkit-transform: translateX(-400px);
  }

`;

export const BlueBox = styled.div`
  animation: ${start} ease-in-out 1s forwards;
 
  transform: translateX(-400px);
  background-color: #3bc2d3;
  color: rgb(218, 223, 225);
  width: 700px;
  height: 220px;
  @media screen and (max-width: 414px) {
    height: 180px;
  }


  }
`;
