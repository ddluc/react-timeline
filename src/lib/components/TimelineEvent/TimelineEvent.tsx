import React from 'react'; 
import TimelinePointSVG from '../../../assets/svg/timeline-point.svg';
import { TimelineDisplay, DateRange, SkeletonProps, isSkeletonProps } from '../../types';
import { renderDate } from '../../util';
import { Card, CardTitle, CardDescription, CardDate } from '../Card'; 
import { Container, Point, Line, Separator, Condensed, Skeleton } from './bin';

export type Props = { 
  id: string;
  title: string; 
  date: Date | DateRange;
  description?: string; 
  active?: boolean;
  color?: string;
  backgroundColor?: string;
  icon?: React.ReactNode; 
  display: TimelineDisplay; 
  customDateRenderer?: (date: Date | DateRange) => string; 
  onClick?: (id: string) => void;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: (id: string) => void;
} | SkeletonProps; 

const TimelineEvent = (props : Props ): JSX.Element => {

  if (isSkeletonProps(props)) {
    return <Skeleton />
  }

  const {
    id,
    title, 
    date, 
    description = '', 
    active = false, 
    color, 
    icon,
    backgroundColor,
    display,
    customDateRenderer,
    onClick, 
    onMouseEnter, 
    onMouseLeave,
  } = props; 

  return (
    <Container display={display}>
      <Separator data-name="separator">
        <Point>
          { icon  || <TimelinePointSVG />}
        </Point>
        <Line />
      </Separator>
      { display === 'normal' && 
        (
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
                { customDateRenderer ? customDateRenderer(date) : renderDate(date) }
              </span>
            </CardDate>
          </Card>
          )
      }
      {
        display === 'condensed' && 
        (
          <Condensed>
            <h3>{title}</h3>
            <span>
            { customDateRenderer ? customDateRenderer(date) : renderDate(date) }
            </span>
          </Condensed>
        )
      }
    </Container>
  );
}; 

export default TimelineEvent; 