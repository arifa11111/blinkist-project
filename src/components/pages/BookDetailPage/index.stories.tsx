import React from 'react';
import { ComponentStory } from '@storybook/react';
import BookDetailPage from '.';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'pages / BookDetailPage',
  component: BookDetailPage,
};
const Template: ComponentStory<typeof BookDetailPage> = (args) => (
  <Router>
    <BookDetailPage book={[]} setData={undefined} />
  </Router>
);

export const bookDetailPage = Template.bind({});
bookDetailPage.args = {};
