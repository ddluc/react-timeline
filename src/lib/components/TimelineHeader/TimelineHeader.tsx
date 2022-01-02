import React from 'react'; 
import { Container, Title } from './bin';

export interface Props {
  title?: string
}

const TimelineHeader = ({ title = 'React Timeline'}) => (
  <Container>
    <Title>{title}</Title>
  </Container>
); 

export default TimelineHeader; 