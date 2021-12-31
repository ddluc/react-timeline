import React from 'react';
import styled, { Theme } from 'styled-components';


const StyledButton = styled.button`
  font-family: ${ ({ theme }: { theme: Theme }) => theme.fonts.mono.regular }; 
`; 

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton type="button">
      {label}
    </StyledButton>
  );
};
