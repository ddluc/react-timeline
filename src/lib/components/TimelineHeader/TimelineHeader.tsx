import React from 'react'; 
import { Container } from './Container'; 
import { Title } from './Title'; 

export interface Props {
  title?: string
}

const TimelineHeader = ({ title = 'React Timeline'}) => (
  <Container>
    <Title>{title}</Title>
  </Container>
); 

export default TimelineHeader; 