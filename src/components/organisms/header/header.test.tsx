import { fireEvent, render, screen } from '@testing-library/react';
import Header from './index';
import { BrowserRouter } from 'react-router-dom';

const renderFun= () => {
  render(
    <BrowserRouter>
      <Header></Header>
    </BrowserRouter>,
  );
};

it('header', () => {
  renderFun();
});

it('explore', () => {
  renderFun();
  const explore = screen.getByText('Explore');
  fireEvent.click(explore);
});

it('myLIbrary', () => {
  renderFun();
  const explore = screen.getByText('My Library');
  fireEvent.click(explore);
  expect(window.location.pathname).toBe('/');
});

it('should have blinkistLogo', () => {
  renderFun();
  const explore = screen.getByTestId('image');
  expect(explore).toBeInTheDocument();
});

it('clicking blinkist logo should navigate to MyLibrary page', () => {
  renderFun();
  const image = screen.getByTestId('image');
  fireEvent.click(image);
  expect(window.location.pathname).toBe('/');
});
