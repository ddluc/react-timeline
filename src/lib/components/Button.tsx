import styled, { Theme } from 'styled-components';

export type ButtonSize = 'small' | 'medium' | 'large';

export interface Props {
  label: string;
  backgroundColor?: string;
  color?: string; 
  size?: ButtonSize; 
  onClick?: () => void;
}

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
  font-family: ${ ({ theme }: ThemedProps) => theme.fonts.main }; 
  size: ${ (props) => setMinWidth(props.size)}; 
  padding: ${(props) => setPadding(props.size)};
  background-color: ${ 
    ({ theme, backgroundColor }: ThemedProps) => backgroundColor ? backgroundColor : theme.card.colors.active 
  }; 
  color: ${ 
    ({ color }: ThemedProps ) => color ? color : '#FFFFFF' 
  }; 
  outline: none; 
  border: none; 
  &:hover { 
    cursor: pointer;
  }
`;

