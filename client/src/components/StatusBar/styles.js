import styled from 'styled-components/macro';
import { grayscale } from "../../utils/colorPalette";

export const Canvas = styled.div`
  width: 200px;
  height: 100%;
  background-color: ${grayscale.medHi};
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
`;