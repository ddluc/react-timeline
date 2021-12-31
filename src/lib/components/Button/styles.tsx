import { Props, ButtonSize } from './types';
import styled, { Theme } from 'styled-components';

type StyledProps = Pick<Props, 'size' | 'backgroundColor' | 'color'>; 

interface ThemedProps extends StyledProps {
  theme: Theme;
}

const setPadding =  (size: ButtonSize): string => { 
  if (size === 'small') return '5px'; 
  if (size === 'large') return '20px'; 
  return '10px'
}

const setMinWidth =  (size: ButtonSize): string => { 
  if (size === 'small') return '0px'; 
  if (size === 'large') return '100px'; 
  return '80px'
}

export const Button = styled.button<StyledProps>`
  font-family: ${ ({ theme }: ThemedProps) => theme.fonts.mono }; 
  size: ${ (props) => setMinWidth(props.size)}; 
  padding: ${(props) => setPadding(props.size)};
  background-color: ${ 
    ({ theme, backgroundColor }: ThemedProps) => backgroundColor ? backgroundColor : theme.palette.secondary.main 
  }; 
  color: ${ 
    ({ theme, color }: ThemedProps ) => color ? color : theme.palette.secondary.contrastText 
  }; 
  outline: none; 
  border: none; 
  &:hover { 
    cursor: pointer;
  }
`;

