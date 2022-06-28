import React from 'react';
import { ComponentStory } from '@storybook/react';
import NonHoverLib from '.';
export default {
  title: 'molecules / buttonIcon',
  component: NonHoverLib,
    //add-on's
    argTypes:{
      children:{control:'text'},
      onClick: { actions : 'clicked' }
  }
};
const Template: ComponentStory<typeof NonHoverLib> = (args) => (
  <NonHoverLib  />
);

export const nonHoverLib = Template.bind({});
nonHoverLib.args = {
   
};
