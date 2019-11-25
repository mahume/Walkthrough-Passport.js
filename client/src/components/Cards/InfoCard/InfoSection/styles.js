import styled from 'styled-components';
import { grayscale } from "../../../../styles/stylingTemplate";

export const Canvas = styled.div`
  height: 50%;
  border-right: 3px solid ${grayscale.brightHi};
  border-bottom: 3px solid ${grayscale.brightHi};
  border-bottom-right-radius: inherit;
`;