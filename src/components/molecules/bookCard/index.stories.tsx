import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from '.';
export default {
  title: 'molecules/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args} />
);

export const bookCard = Template.bind({});
bookCard.args = {
  mode: 'read again',
  bookName: 'Bring Your Human To Work',
  authorName: 'Erica Keswin',
  src: 'assets/biggboss.png',
  time: '13-minute read ',
  read: '',
  status: false,
};
