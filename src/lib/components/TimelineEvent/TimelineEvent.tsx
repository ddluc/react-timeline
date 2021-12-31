import React from 'react'; 
import TimelinePoint from '../../../assets/svg/timeline-point.svg';
import { Props } from './types';

import { EventContainer, Card, Title, Description, Date } from './styles'; 

const TimelineEvent = ({ 
  title, 
  date, 
  description = '', 
  active = false, 
  color, 
  backgroundColor,
  onHover, 
  onClick
}: Props) => (
  <EventContainer icon={TimelinePoint}>
    <Card color={color} backgroundColor={backgroundColor} active={active}>
      <Title>
        <h3>{title}</h3>
      </Title>
      <Description>
        <p>{description}</p>
      </Description>
      <Date>
        <span>
          {date.toLocaleDateString()} {date.toLocaleTimeString()}
        </span>
      </Date>
    </Card>
  </EventContainer>
); 

export default TimelineEvent; 