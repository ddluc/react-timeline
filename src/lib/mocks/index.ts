import faker from 'faker'; 
import { ITimelineEvent } from '../types';

const NUM_EVENTS = 12; 

export const getMockEvents = (num: number = NUM_EVENTS): ITimelineEvent[] => {
  let events: ITimelineEvent[] = []; 
  let i = 0; 
  do {
    events.push({
      id: faker.datatype.uuid(),
      title: faker.lorem.sentence(3, 5), 
      description: faker.lorem.paragraph(3),
      date: faker.date.recent(),
      content: Promise.resolve('This is the content')
    }); 
    i++; 
  } while( i < num ); 
  return events; 
}; 