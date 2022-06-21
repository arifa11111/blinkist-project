import { render, screen } from '@testing-library/react';
import Image from '.';

it('renders images', () => {
  render(
    <Image src={'assets/biggboss.png'} height={0} width={0}></Image>,
  );

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', 'assets/biggboss.png');
  expect(image).toHaveAttribute('alt', 'blinkist logo');
});
