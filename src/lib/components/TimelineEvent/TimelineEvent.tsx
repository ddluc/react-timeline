import React from 'react'; 
import TimelinePoint from '../../../assets/svg/timeline-point.svg';
import { EventContainer } from './TimelineEventContainer';
import { Card, CardTitle, CardDescription, CardDate } from '../Card'; 

export interface Props { 
  title: string; 
  date: Date,
  description?: string; 
  active?: Boolean,
  color?: string, 
  backgroundColor?: string, 
  onHover?: () => void,
  onClick?: () => void
}; 

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
      <CardTitle>
        <h3>{title}</h3>
      </CardTitle>
      <CardDescription>
        <p>{description}</p>
      </CardDescription>
      <CardDate>
        <span>
          {date.toLocaleDateString()} {date.toLocaleTimeString()}
        </span>
      </CardDate>
    </Card>
  </EventContainer>
); 

export default TimelineEvent; 