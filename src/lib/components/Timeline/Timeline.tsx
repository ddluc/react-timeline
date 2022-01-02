import React from 'react';
import { Container } from './Container';
import { TimelineEvent } from "../TimelineEvent";
import { TimelineHeader } from '../TimelineHeader';

import { ITimelineEvent } from "../../types";

export interface Props { 
  events: ITimelineEvent[]
  activeEventId?: string; 
  showHeader?: boolean; 
  title?: string; 
  onClick?: (id: string) => void; 
  onMouseEnter?: (id: string) => void,
  onMouseLeave?: (id: string) => void,
}; 

const Timeline = ({ 
  events, 
  activeEventId, 
  showHeader = true, 
  title = 'React Timeline',
  onClick, 
  onMouseEnter, 
  onMouseLeave
}: Props): JSX.Element => { 

  const getInitialEvent = (): string  => { 
    if (activeEventId) { 
      return activeEventId; 
    }
    return events[0].id || ''; 
  }

  const initialEvent = getInitialEvent(); 
  const [ eventId, setEventId] = React.useState<string>(initialEvent); 

  const onTimelineEventClick = (id: string): void => {
    if (activeEventId && onClick) { 
      onClick(id); 
    } else {
      setEventId(id); 
    }
  }; 

  const onTimelineEventMouseEnter = (id: string) => {
    if (activeEventId && onMouseEnter) { 
      onMouseEnter(id); 
    }
  }; 

  const onTimelineEventMouseLeave = (id: string): void => {
    if (activeEventId && onMouseLeave) onMouseLeave(id); 
  }

  return (
    <Container>
      { showHeader && <TimelineHeader title={title} />}
      { 
        events.map((event, index) => (
          <TimelineEvent 
            id={event.id}
            title={event.title}
            description={event.description}
            date={event.date}
            active={eventId === event.id}
            onClick={onTimelineEventClick}
            onMouseEnter={onTimelineEventMouseEnter}
            onMouseLeave={onTimelineEventMouseLeave}
          />
        )) 
      }
    </Container>
  ); 

}; 

export default Timeline; 