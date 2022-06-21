import { render, screen } from '@testing-library/react';
import Icons from './index';

it('renders icons', () => {
  render(
    <Icons
      src={'assets/biggboss.png'}
      height={'50px'}
      width={'50px'}
    ></Icons>,
  );

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', 'assets/biggboss.png');
  expect(image).toHaveAttribute('alt', 'icons');
});
