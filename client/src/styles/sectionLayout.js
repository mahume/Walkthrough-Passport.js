import styled from 'styled-components';
import { borderRadius } from './stylingTemplate';

export const Frame = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${borderRadius.lg};

  display: flex;
  flex-direction: ${({ direction }) => direction};
`;

export const LeftSection = styled.div`
  width: 250px;
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

export const Navbar = styled.div`
  height: 40px;
  width: 100%;
  background-color: ${({ bgColor }) => bgColor};
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;

  display: flex;
  align-items: center;
`;