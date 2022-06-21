import { fireEvent, render, screen } from '@testing-library/react';
import HeaderPopUp from './index';
import { BrowserRouter } from 'react-router-dom';

it('should have Entrepreneurship button', () => {
  render(
    <BrowserRouter>
      <HeaderPopUp></HeaderPopUp>
    </BrowserRouter>,
  );
  const entrepreneurship = screen.getByRole('button', {
    name: /Entrepreneurship/i,
  });
  expect(entrepreneurship).toBeInTheDocument();
});

it('should navigate to MyLIbrary page', () => {
  render(
    <BrowserRouter>
      <HeaderPopUp></HeaderPopUp>
    </BrowserRouter>,
  );
  const entrepreneurship = screen.getByRole('button', {
    name: /Entrepreneurship/i,
  });
  fireEvent.click(entrepreneurship);
  expect(window.location.pathname).toBe('/enterpreuner');
});
