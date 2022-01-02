import React from 'react';
import { Container } from './Container';
import { TimelineEvent } from "../TimelineEvent";
import { TimelineHeader } from '../TimelineHeader';
import { TimelineEventPanel } from '../TimelineEventPanel';
import { LeftPanel } from './LeftPanel';
import { RightPanel } from './RightPanel';

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

  const getActiveEvent = (id: string): ITimelineEvent => { 
    return events.find((event: ITimelineEvent) => event.id === id); 
  }; 

  return (
    <Container>
      { showHeader && <TimelineHeader title={title} />}
      <LeftPanel>
        { 
          events.map((event, index) => (
            <TimelineEvent 
              key={event.id}
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
      </LeftPanel>
      <RightPanel>
        <TimelineEventPanel event={getActiveEvent(eventId)} />
      </RightPanel>
    </Container>
  ); 

}; 

export default Timeline; 