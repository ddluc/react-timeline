import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Props as ButtonProps } from '../lib/components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { 
    label: 'A Button',
    size: 'medium'
  } as ButtonProps
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});