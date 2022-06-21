import React from 'react';
import { ComponentStory } from '@storybook/react';
import Details from '.';
export default {
  title: 'molecules / Details',
  component: Details,
};
const Template: ComponentStory<typeof Details> = (args) => (
  <Details {...args} />
);

export const details = Template.bind({});

details.args = {
  setData: undefined,
  src: 'assets/lovingYourBusiness.png',
  bookName: 'THINK LIKE MONK',
  authorName: 'Jay Shetty',
  timeStamp: '20-minute read',
};
