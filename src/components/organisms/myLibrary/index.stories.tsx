import React from 'react';
import { ComponentStory } from '@storybook/react';
import MyLibraryTemplate from '.';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'organisms / MyLibraryTemplate',
  component: MyLibraryTemplate,
};

const template: ComponentStory<typeof MyLibraryTemplate> = (args) => (
  <Router>
    <MyLibraryTemplate book={[]} setData={undefined} />
  </Router>
);

export const myLibraryTemplate = template.bind({});
