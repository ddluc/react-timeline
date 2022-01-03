import styled, { Theme } from 'styled-components';
import { TimelineDisplay } from '../../../types';

interface Props {
  display: TimelineDisplay
}

export interface ThemedProps extends Props {
  theme: Theme;
}

export const Container = styled.li<Props>` 
  display: flex; 
  flex-direction: row; 
  justify-content: flex-start;
  position: relative;
  margin-top: ${ ({ theme, display }: ThemedProps ) => (display === 'condensed' ? '0px' : theme.timeline.spacing.top)};
  margin-bottom: ${ ({ theme, display }: ThemedProps ) => (display === 'condensed' ? '0px' : theme.timeline.spacing.bottom)};
`; 