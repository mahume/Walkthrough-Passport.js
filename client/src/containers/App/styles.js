import styled from 'styled-components';

export const AppContainer = styled.main`
  height: 100vh;
  width: 100vw;
  
  display: flex;
  flex-direction: column;
`;

export const PagesContainer = styled.section`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 45% 45% 1fr;
  grid-template-rows: 1fr 45% 45% 1fr;
  grid-gap: 15px;
`;