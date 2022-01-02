import React from 'react';
import { TimelineEvent } from "../TimelineEvent";
import { TimelineHeader } from '../TimelineHeader';
import { TimelineEventPanel } from '../TimelineEventPanel';
import { Container, LeftPanel, RightPanel, MainPanel } from './bin';

import { ITimelineEvent } from "../../types";

export interface Props { 
  events: ITimelineEvent[]
  activeEventId?: string; 
  title?: string; 
  height?: number; 
  width?: number;
  showHeader?: boolean; 
  showDetailPanel?: boolean;
  onClick?: (id: string) => void; 
  onMouseEnter?: (id: string) => void,
  onMouseLeave?: (id: string) => void,
}; 

const Timeline = ({ 
  events, 
  activeEventId, 
  title = 'React Timeline',
  height = 800,
  width, 
  showHeader = true, 
  showDetailPanel = true,
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
      <MainPanel height={height} width={width}>
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
        { showDetailPanel && (
          <RightPanel>
            <TimelineEventPanel event={getActiveEvent(eventId)} />
          </RightPanel>  
        )}
      </MainPanel>
    </Container>
  ); 

}; 

export default Timeline; 