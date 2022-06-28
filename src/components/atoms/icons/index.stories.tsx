import Icons from '.';
import { ComponentStory } from '@storybook/react';
export default {
  title: 'atoms/icons',
  component: Icons,

};

const Template: ComponentStory<typeof Icons> = (args) => (
  <Icons {...args} />
);

export const Dropdown = Template.bind({});
Dropdown.args = {
  src: 'https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/dropdown_arrow2-512.png',
  height: '12px',
  width: '10.61px',
};

export const Arrowup = Template.bind({});
Arrowup.args = {
  src: 'https://pic.onlinewebfonts.com/svg/img_185276.png',
  height: '5px',
  width: '10px',
};
