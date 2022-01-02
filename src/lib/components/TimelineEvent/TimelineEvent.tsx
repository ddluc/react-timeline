import React from 'react'; 
import TimelinePoint from '../../../assets/svg/timeline-point.svg';
import { Container } from './bin';
import { Card, CardTitle, CardDescription, CardDate } from '../Card'; 

export interface Props { 
  id: string,
  title: string; 
  date: Date,
  description?: string; 
  active?: Boolean,
  color?: string, 
  backgroundColor?: string, 
  onClick?: (id: string, ) => void
  onMouseEnter?: (id: string) => void,
  onMouseLeave?: (id: string) => void,
}; 

const TimelineEvent = ({ 
  id,
  title, 
  date, 
  description = '', 
  active = false, 
  color, 
  backgroundColor,
  onClick, 
  onMouseEnter, 
  onMouseLeave,
}: Props): JSX.Element => (
  <Container icon={TimelinePoint}>
    <Card 
      color={color} 
      backgroundColor={backgroundColor} 
      active={active}
      onClick={() => onClick(id)}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={() => onMouseLeave(id)}
    >
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
  </Container>
); 

export default TimelineEvent; 