import React from 'react';
import { Props } from './types';

import * as Styled from './styles';

const Button = ({
  size = 'medium',
  backgroundColor,
  label,
  onClick,
  ...props
}: Props) => {
  return (
    <Styled.Button 
      backgroundColor={backgroundColor} 
      size={size} 
      type="button"
      onClick={onClick}
      {...props}
    >
      {label}
    </Styled.Button>
  );
};

export default Button; 