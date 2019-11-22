import styled from 'styled-components/macro';
import { grayscale } from "../../utils/colorPalette";

export const Canvas = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${grayscale.brightLo};
  border-radius: 20px;;

  display: flex;
  flex-direction: row;
`;

export const StatusBar = styled.div`
  width: 200px;
  height: 100%;
  background-color: ${grayscale.medHi};
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
`;

export const Steps = styled.div`
  width: 100%;
  height: 100%;
`;