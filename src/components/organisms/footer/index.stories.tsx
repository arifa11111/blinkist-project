import React from 'react';
import { ComponentStory } from '@storybook/react';
import Footer from '.';
export default {
  title: 'organisms / Footer',
  component: Footer,
};
const Template: ComponentStory<typeof Footer> = (args) => <Footer />;

export const footer = Template.bind({});
footer.args = {};
