import styled from 'styled-components';
import { grayscale, font, padding } from '../../styles/stylingTemplate';

export const Line = styled.div`
  min-height: 40px;
  width: 100%;
  background-color: ${grayscale.darkHi};

  display: flex;
  align-items: center;
`;

export const Number = styled.div`
  width: 50px;
  height: 100%;
  background-color: ${grayscale.darkLo};
  color: ${grayscale.brightLo};
  font-size: ${font.sm};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  width: 93%;
  height: 100%;
  font-size: ${font.sm};
  padding-left: ${padding.sm};
  color: ${grayscale.brightLo};

  display: flex;
  align-items: center;
  flex-grow: 1;
`;