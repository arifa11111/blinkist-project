import React from 'react';
import { ComponentStory } from '@storybook/react';
import MyLibrary from '.';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'Templates / MyLibrary',
  component: MyLibrary,
};
const Template: ComponentStory<typeof MyLibrary> = (args) => (
  <Router>
    <MyLibrary book={[]} setData={undefined} />
  </Router>
);

export const Mylibrary = Template.bind({});
Mylibrary.args = {};
