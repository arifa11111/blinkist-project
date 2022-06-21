import React from 'react';
import { ComponentStory } from '@storybook/react';
import Finished from '.';
export default {
  title: 'molecules / buttonIcon',
  component: Finished,
};
const Template: ComponentStory<typeof Finished> = (args) => (
  <Finished />
);

export const finished = Template.bind({});
finished.args = {};
