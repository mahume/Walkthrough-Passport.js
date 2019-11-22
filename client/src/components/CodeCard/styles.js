import styled from 'styled-components/macro';
import { primary, grayscale } from "../../utils/colorPalette";

export const Canvas = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${grayscale.darkHi};
  border-radius: 20px;;

  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.div`
  height: 40px;
  width: 100%;

  display: flex;
  align-items: center;
`;