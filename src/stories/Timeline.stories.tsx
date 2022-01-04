import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReactTimeline, { 
  Props as ReactTimelineProps, 
  TimelineTheme, 
} from '../index'; 
import { getMockEvents } from './mocks';
import TimelinePointAltIcon from '../assets/svg/timeline-point-alt.svg';


export default {
  title: 'React Timeline',
  component: ReactTimeline,
  argTypes: {
    height: { control: 'number' }
  }, 
  args: {
    height: 480,
    title: 'React Timeline', 
    showHeader: false, 
    showDetailPanel: false,
    theme: TimelineTheme.default,
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
  theme: TimelineTheme.condensed,
  display: 'condensed',
  events: getMockEvents()
}; 

// 3. With Detail Panel
export const WithDetailPanel = Template.bind({}); 
WithDetailPanel.args = { 
  theme: TimelineTheme.default,
  showDetailPanel: true,
}; 

// 4. Dark (With Custom Icon)
export const Dark = Template.bind({})
Dark.args = { 
  theme: TimelineTheme.dark,
  icon: <TimelinePointAltIcon />
}; 

// 5. With Custom Icons (Condensed)
export const WithCustomIcons = Template.bind({}); 
WithCustomIcons.args = { 
  theme: {
    ...TimelineTheme.default, 
    timeline: {
      color: '#A3ACB9', 
      spacing: {
        top: '25px', 
        bottom: '100px'
      },
      point: {
        spacing: {
          top: '10px', 
          bottom: '10px'
        }
      }
    }, 
  },
  display: 'condensed',
  events: getMockEvents(10, true)
}; 


// 6. As a skeleton
export const Skeleton = Template.bind({})
Skeleton.args = { 
  skeleton: true
}; 

// 7. With Date Ranges
export const WithDateRanges = Template.bind({})
WithDateRanges.args = { 
  events: getMockEvents(10, false, true)
}; 


