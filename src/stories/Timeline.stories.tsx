import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactTimeline, Props as ReactTimelineProps } from '../lib/index'; 
import { getMockEvents } from '../lib/mocks';
import { theme as DEFAULT_THEME } from '../theme/default';

const MOCK_EVENTS = getMockEvents(); 

export default {
  title: 'Timeline',
  component: ReactTimeline,
  argTypes: {
    height: { control: 'number' }
  }, 
  args: {
    height: 520,
    title: 'React Timeline', 
    showHeader: false, 
    showDetailPanel: true,
    theme: DEFAULT_THEME,
    events: MOCK_EVENTS
  } as ReactTimelineProps
} as ComponentMeta<typeof ReactTimeline>;

const Template: ComponentStory<typeof ReactTimeline> = (args: ReactTimelineProps) => (<ReactTimeline {...args} />); 

export const Default = Template.bind({});