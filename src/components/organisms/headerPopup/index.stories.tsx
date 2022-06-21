import React from 'react';
import { ComponentStory } from '@storybook/react';
import HeaderPopUp from '.';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
  title: 'organisms / HeaderPopUp',
  component: HeaderPopUp,
};
const Template: ComponentStory<typeof HeaderPopUp> = (args) => (
  <Router>
    <HeaderPopUp />
  </Router>
);

export const headerPopup = Template.bind({});
headerPopup.args = {};
