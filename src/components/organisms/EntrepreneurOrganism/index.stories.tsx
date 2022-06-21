import React from 'react';
import { ComponentStory } from '@storybook/react';
import EntrepreneurOrganism from '.';
import { BrowserRouter as Router } from 'react-router-dom';
export default {
  title: 'organisms / EntrepreneurOrganism',
  component: EntrepreneurOrganism,
};

const template: ComponentStory<typeof EntrepreneurOrganism> = (
  args,
) => (
  <Router>
    <EntrepreneurOrganism book={undefined} setData={undefined} />
  </Router>
);

export const enterpreneurship = template.bind({});
