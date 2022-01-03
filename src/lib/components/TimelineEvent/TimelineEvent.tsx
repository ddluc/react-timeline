import React from 'react'; 
import TimelinePointSVG from '../../../assets/svg/timeline-point.svg';
import { Card, CardTitle, CardDescription, CardDate } from '../Card'; 
import { Container, Point, Icon } from './bin';

export interface Props { 
  id: string;
  title: string; 
  date: Date;
  description?: string; 
  active?: boolean;
  color?: string;
  backgroundColor?: string;
  icon?: React.ReactNode; 
  onClick?: (id: string, ) => void;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: (id: string) => void;
}; 

const TimelineEvent = ({ 
  id,
  title, 
  date, 
  description = '', 
  active = false, 
  color, 
  icon,
  backgroundColor,
  onClick, 
  onMouseEnter, 
  onMouseLeave,
}: Props): JSX.Element => {

  return (
    <Container>
      <Point>
        { icon  || <Icon src={TimelinePointSVG} alt="Timeline Point" />}
      </Point>
      <Card 
        color={color} 
        backgroundColor={backgroundColor} 
        active={active}
        onClick={() => onClick(id)}
        onMouseEnter={() => onMouseEnter(id)}
        onMouseLeave={() => onMouseLeave(id)}
      >
        <CardTitle active={active}>
          <h3>{title}</h3>
        </CardTitle>
        <CardDescription active={active}>
          <p>{description}</p>
        </CardDescription >
        <CardDate active={active}>
          <span>
            {date.toLocaleDateString()} {date.toLocaleTimeString()}
          </span>
        </CardDate>
      </Card>
    </Container>
  );
}; 

export default TimelineEvent; 