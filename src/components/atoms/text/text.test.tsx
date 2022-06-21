import { render, screen } from '@testing-library/react';
import Text from './index';
it('text', () => {
  render(<Text variant={'body1'} text={'Hi alll'}></Text>);

  const text = screen.getByText('Hi alll');
  expect(text).toBeInTheDocument();
});
