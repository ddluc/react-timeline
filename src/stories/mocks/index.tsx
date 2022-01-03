import React from 'React'; 
import faker from 'faker'; 
import { ITimelineEvent } from '../types';
import { getCustomIcon } from './icons'; 


const NUM_EVENTS = 12;

const getContent = (): Promise<React.ReactNode> => (
  new Promise((resolve): void => {
    setTimeout(() => {
      resolve(faker.lorem.paragraphs(2)); 
    }, 500);
  })
); 

export const getMockEvents = (num: number = NUM_EVENTS, customIcon: boolean = false): ITimelineEvent[] => {
  let events: ITimelineEvent[] = []; 
  let i = 0; 
  do {
    events.push({
      id: faker.datatype.uuid(),
      title: faker.lorem.sentence(3, 5), 
      description: faker.lorem.paragraph(3),
      date: faker.date.recent(),
      content: () => getContent(),
      icon: customIcon ? getCustomIcon() : null
    }); 
    i++; 
  } while( i < num ); 
  return events; 
}; 