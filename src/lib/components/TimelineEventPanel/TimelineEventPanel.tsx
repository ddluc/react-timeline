import React from 'react'; 
import { Container } from './Container'; 
import { Title } from './Title'; 
import { SubTitle } from './SubTitle'
import { ITimelineEvent } from '../../types';

export interface Props {
  event: ITimelineEvent
}

const TimelineEventPanel = ({ event }: Props): JSX.Element => (
  <Container>
    <Title>{event.title}</Title>
    <SubTitle>{event.date.toLocaleDateString()}</SubTitle>
  </Container>
); 

export default TimelineEventPanel; 