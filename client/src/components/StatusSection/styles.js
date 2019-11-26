import styled from 'styled-components';
import { grayscale, font, margin } from '../../styles/stylingTemplate';

export const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background-color: ${props => props.bgColor};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const StyledLabel = styled.p`
  font-size: ${font.sm};
  color: ${grayscale.brightHi};
  margin: ${margin.med} ${margin.med} ${margin.sm} ${margin.med};
`;

export const StyledStatus = styled.p`
  font-size: ${font.med};
  color: ${grayscale.white};
  margin: ${margin.sm} ${margin.med} ${margin.med} ${margin.med};
`;