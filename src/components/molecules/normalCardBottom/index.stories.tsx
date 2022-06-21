import React from 'react';
import { ComponentStory } from '@storybook/react';
import Normal from '.';
export default {
  title: 'molecules / buttonIcon',
  component: Normal,
};
const Template: ComponentStory<typeof Normal> = (args) => <Normal />;

export const normal = Template.bind({});
normal.args = {};
