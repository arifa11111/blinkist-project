import { render, screen } from '@testing-library/react';
import Banner from './index';

it('banner image', () => {
  render(<Banner></Banner>);

  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', '../../../../banner.png');
  expect(image).toHaveAttribute('alt', 'blinkist logo');
});

it('content', () => {
  render(<Banner></Banner>);

  const content = screen.getByText(
    /Explore Books on entrepreneurship/i,
  );
  expect(content).toBeInTheDocument();
});

it('text', () => {
  render(<Banner></Banner>);

  const text = screen.getByText(
    /Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start./i,
  );
  expect(text).toBeInTheDocument();
});
