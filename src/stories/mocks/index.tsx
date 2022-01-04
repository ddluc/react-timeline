import React from 'react';
import faker from 'faker'; 
import { DateRange, ITimelineEvent } from '../../lib/types';
import { getCustomIcon } from './icons'; 

const NUM_EVENTS = 12;

const getContent = (): Promise<React.ReactNode> => (
  new Promise((resolve): void => {
    setTimeout(() => {
      resolve(faker.lorem.paragraphs(2)); 
    }, 1200);
  })
); 

interface getMockEventArgs { 
  num?: number, 
  customIcon?: boolean, 
  asDateRange?: boolean, 
}

export const getMockEvents = ({
  num = NUM_EVENTS, 
  customIcon = false, 
  asDateRange = false, 
}: getMockEventArgs): ITimelineEvent[] => {
  let events: ITimelineEvent[] = []; 
  let i = 0; 
  do {
    let date: Date | DateRange = faker.date.recent();
    if (asDateRange) { 
      date = { 
        start: faker.date.past(),
        end: i === 0 ? 'present' : faker.date.recent()
      }; 
    }
    events.push({
      id: faker.datatype.uuid(),
      title: faker.lorem.sentence(3, 5), 
      description: faker.lorem.paragraph(3),
      date,
      content: () => getContent(),
      icon: customIcon ? getCustomIcon() : null
    }); 
    i++; 
  } while( i < num ); 
  return events; 
}; 