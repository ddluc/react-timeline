import React from 'react';
import styled, { Theme } from 'styled-components';

interface ThemedProps {
  theme: Theme;
}

export const CardDate = styled.div`
  > span {
    font-family: ${ ({ theme }: ThemedProps ) => theme.fonts.mono };
    color: ${ ( { theme }: ThemedProps ) => theme.palette.common.charcoal };
    font-size: 12px; 
    font-weight: normal; 
  }
`; 