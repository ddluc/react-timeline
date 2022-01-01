import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TimelineEvent, Props as TimelineEventProps } from '../lib/components/TimelineEvent';

export default {
  title: 'TimelineEvent',
  component: TimelineEvent,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    active: { control: 'boolean' },
    date: { control: 'date' }
  },
  args: { 
    id: "1",
    title: "A new timeline event", 
    description: "Cras tristique sodales auctor. Pellentesque vitae nulla eget nulla hendrerit tempus. In sed maximus risus. In vulputate scelerisque venenatis…", 
    date: new Date(), 
    active: false, 
    color: undefined, 
    backgroundColor: undefined
  } as TimelineEventProps
} as ComponentMeta<typeof TimelineEvent>;


const getDateString = (date: Date | string | number ): Date => {
  if (date instanceof Date) {
    return date; 
  }
  return new Date(date); 
}

const Template: ComponentStory<typeof TimelineEvent> = (args: TimelineEventProps) => {
  return (<TimelineEvent {...args} date={getDateString(args.date)} />);
};

export const Default = Template.bind({});