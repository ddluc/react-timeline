import React from 'react';
import { TimelineEvent } from "../TimelineEvent";
import { TimelineHeader } from '../TimelineHeader';
import { TimelineEventPanel } from '../TimelineEventPanel';
import { Container, LeftPanel, RightPanel, MainPanel, Skeleton } from './bin';

import { ITimelineEvent, TimelineDisplay, DateRange } from "../../types";

export interface Props { 
  events: ITimelineEvent[]
  activeEventId?: string; 
  title?: string; 
  height?: number; 
  width?: number;
  icon?: React.ReactNode; 
  showHeader?: boolean; 
  showDetailPanel?: boolean;
  display?: TimelineDisplay; 
  customDateRenderer?: (date: Date | DateRange) => string; 
  onClick?: (id: string) => void; 
  onMouseEnter?: (id: string) => void,
  onMouseLeave?: (id: string) => void,
}; 

export interface SkeletonProps { 
  skeleton: boolean; 
  showDetailPanel: boolean;
  hieght: number; 
  width: number; 
}

const Timeline = (props: Props | SkeletonProps): JSX.Element => { 

  if ('skeleton' in props) {
    return <Skeleton showDetailPanel={props.showDetailPanel} height={props.hieght} width={props.width} />
  }

  const { 
    events, 
    activeEventId, 
    title = 'React Timeline',
    height = 800,
    width, 
    icon,
    showHeader = true, 
    showDetailPanel = true,
    display = 'normal',
    customDateRenderer, 
    onClick, 
    onMouseEnter, 
    onMouseLeave
  } = props; 

  const getInitialEvent = (): string  => { 
    if (!events) return ''; 
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

  const getIcon = (event: ITimelineEvent): React.ReactNode | null => {
    if (event.icon) return event.icon; 
    if (icon) return icon; 
    return null; 
  }

  // Fail-safe in case no events are provided to the timeline 
  if (!events) { 
    return <Skeleton />
  }

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
                icon={getIcon(event)}
                active={eventId === event.id}
                display={display}
                customDateRenderer={customDateRenderer}
                onClick={onTimelineEventClick}
                onMouseEnter={onTimelineEventMouseEnter}
                onMouseLeave={onTimelineEventMouseLeave}
              />
            )) 
          }
        </LeftPanel>
        { showDetailPanel && (
          <RightPanel>
            <TimelineEventPanel event={getActiveEvent(eventId)} customDateRenderer={customDateRenderer} />
          </RightPanel>  
        )}
      </MainPanel>
    </Container>
  ); 

}; 

export default Timeline; 