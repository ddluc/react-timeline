import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactTimeline, Props as ReactTimelineProps } from '../lib/index'; 
import { getMockEvents } from '../lib/mocks';
import TimelinePointAltIcon from '../assets/svg/timeline-point-alt.svg';
import { theme as DEFAULT_THEME } from '../theme/default';
import { theme as DARK_THEME } from '../theme/dark';
import { theme as ALT_THEME } from '../theme/alt';
import { theme as CONDENSED_THEME } from '../theme/condensed'; 

export default {
  title: 'Timeline',
  component: ReactTimeline,
  argTypes: {
    height: { control: 'number' }
  }, 
  args: {
    height: 480,
    title: 'React Timeline', 
    showHeader: false, 
    showDetailPanel: false,
    theme: DEFAULT_THEME,
    events: getMockEvents(),
  } as ReactTimelineProps
} as ComponentMeta<typeof ReactTimeline>;

const Template: ComponentStory<typeof ReactTimeline> = (args: ReactTimelineProps) => {
  return (<ReactTimeline {...args} />); 
}; 

// 1. Default 
export const Default = Template.bind({});

// 2. Condensed
export const Condensed = Template.bind({}); 
Condensed.args = { 
  theme: CONDENSED_THEME,
  display: 'condensed',
  events: getMockEvents()
}; 

// 3. With Detail Panel
export const WithDetailPanel = Template.bind({}); 
WithDetailPanel.args = { 
  theme: DEFAULT_THEME,
  showDetailPanel: true,
}; 

// 4. Dark (With Custom Icon)
export const Dark = Template.bind({})
Dark.args = { 
  theme: DARK_THEME,
  icon: <TimelinePointAltIcon />
}; 

// 5. With Custom Icons (Condensed)
export const WithCustomIcons = Template.bind({}); 
WithCustomIcons.args = { 
  theme: ALT_THEME,
  display: 'condensed',
  events: getMockEvents(10, true)
}; 


