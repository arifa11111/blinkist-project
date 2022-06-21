import React from 'react';
import { ComponentStory } from '@storybook/react';
import Entrepreneurship from '.';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'pages / enterpreuner',
  component: Entrepreneurship,
};
const Template: ComponentStory<typeof Entrepreneurship> = (args) => (
  <Router>
    <Entrepreneurship book={[]} setData={undefined} />
  </Router>
);

export const entrepreneurship = Template.bind({});
entrepreneurship.args = {};
