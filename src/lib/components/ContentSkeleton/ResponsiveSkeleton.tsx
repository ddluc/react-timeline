import styled, { Theme } from 'styled-components';

interface Props { 
  lg: string; 
  md: string; 
  sm: string; 
  xs: string; 
}

export interface ThemedProps extends Props {
  theme: Theme;
}

const ResponsiveSkeleton = styled.div<Props>`
width: ${ ({ lg }: ThemedProps ) => lg };
@media screen and (max-width: ${ ({ theme }: ThemedProps ) => theme.breakpoints.md }) {
    width: ${ ({ md }: ThemedProps ) => md };
  } 
  @media screen and (max-width: ${ ({ theme }: ThemedProps ) => theme.breakpoints.sm }) {
    width: ${ ({ sm }: ThemedProps ) => sm };
  } 
  @media screen and (max-width: ${ ({ theme }: ThemedProps ) => theme.breakpoints.xs }) {
    width: ${ ({ xs }: ThemedProps ) => xs };
  } 
`; 

export default ResponsiveSkeleton;