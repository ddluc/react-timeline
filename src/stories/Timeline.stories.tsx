import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReactTimeline, { 
  Props as ReactTimelineProps, 
  TimelineTheme, 
} from '../index'; 
import { DateRange } from '../lib/types'; 
import { getMockEvents } from './mocks';
import TimelinePointAltIcon from '../assets/svg/timeline-point-alt.svg';

const renderDate = (date: Date | DateRange): string => { 
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  if (date instanceof Date) {
    return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`; 
  } else {
    let start = `${months[date.start.getMonth()]} ${date.start.getDate()} ${date.start.getFullYear()}`; 
    let end; 
    if ( date.end === 'present' ) { 
      end = 'PRESENT'; 
    } else { 
      end = `${months[date.end.getMonth()]} ${date.end.getDate()} ${date.end.getFullYear()}`;
    }
    return  `${start} - ${end}`; 
  }
}; 

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
    events: getMockEvents({ num: 10 }),
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
  events: getMockEvents({ num: 10 })
}; 

// 3. With Detail Panel
export const WithDetailPanel = Template.bind({}); 
WithDetailPanel.args = { 
  showDetailPanel: true,
  theme: { 
    ...TimelineTheme.default, 
    card: { 
      ...TimelineTheme.default.card, 
      width: '420px',
    }
  }
}; 

// 4. Dark (With Custom Icon)
export const WithCustomTheme = Template.bind({})
WithCustomTheme.args = { 
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
  events: getMockEvents({ num: 10, customIcon: true})
}; 


// 6. As a skeleton
export const Skeleton = Template.bind({})
Skeleton.args = { 
  isLoading: true
}; 

// 7. With Date Ranges
export const WithDateRanges = Template.bind({})
WithDateRanges.args = { 
  events: getMockEvents({ num: 10, asDateRange: true })
}; 


// 7. With Custom Date Renderer
export const WithCustomDateRenderer = Template.bind({})
WithCustomDateRenderer.args = { 
  events: getMockEvents({ num: 10, asDateRange: true }),
  customDateRenderer: renderDate
}; 


