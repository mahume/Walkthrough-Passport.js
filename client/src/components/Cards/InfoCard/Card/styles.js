import styled from 'styled-components';
import { borderRadius, grayscale } from '../../../../styles/stylingTemplate';

export const Frame = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${borderRadius.lg};
  background-color: ${grayscale.white};

  display: flex;
`;

export const LeftSection = styled.div`
  width: 225px;
  height: 100%;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
`;

export const RightSection = styled.div`
  height: 100%;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;

  flex-grow: 1; 
`;