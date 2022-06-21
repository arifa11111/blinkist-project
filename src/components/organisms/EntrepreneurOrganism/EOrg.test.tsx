import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EntrepreneurOrganism from '.';
import '@testing-library/jest-dom';
jest.mock('axios');

const data = [
  {
    src: 'assets/livesOfStoics.png',
    cardName: 'Lives of the Stoics',
    authorName: 'Ryan Holiday, Stephen Hansel',
    timeStamp: '13-minute read',
    id: 8,
    isread: false,
    reads: '',
    status: true,
    startedBook: true,
    just: false,
    audio: false,
  },
  {
    src: 'assets/EatBetter.png',
    cardName: 'Eat Better, Feel Better',
    authorName: 'Giada De Laurentiis',
    timeStamp: '13-minute read',
    id: 11,
    isread: true,
    reads: '1.9k reads',
    status: true,
    startedBook: true,
    just: true,
    audio: false,
  },
  {
    src: 'assets/doesntHurt.png',
    cardName: 'Doesn’t Hurt to Ask',
    authorName: 'Trey Gowdy',
    timeStamp: '13-minute read',
    id: 6,
    isread: true,
    reads: '1.9k reads',
    status: true,
    startedBook: true,
    just: false,
    audio: true,
  },
  {
    src: 'assets/doesntHurt.png',
    cardName: 'hello alll',
    authorName: 'Trey Gowdy',
    timeStamp: '13-minute read',
    id: 1,
    isread: true,
    reads: '1.9k reads',
    status: true,
    startedBook: false,
    just: false,
    audio: false,
  },
];

const renderFunction = () => {
  render(
    <BrowserRouter>
      <EntrepreneurOrganism
        book={data}
        setData={undefined}
      ></EntrepreneurOrganism>
    </BrowserRouter>,
  );
};
it('should have grid', () => {
  renderFunction();
  const gridElement = screen.getAllByTestId('grid');
  gridElement.forEach((BookData) => {
    expect(BookData).toBeInTheDocument();
  });
});

it('grid should be navigated to bookdetails on click', () => {
  renderFunction();
  const gridElement = screen.getAllByTestId('grid');
  //findby and findallby needs await
  gridElement.forEach((BookData) => {
    fireEvent.click(BookData);
    expect(window.location.pathname).toBe(
      '/enterpreuner/bookdetails',
    );
  });
});

it('should have input field', () => {
  renderFunction();
  const formInput = screen.getByTestId('form');
  expect(formInput).toBeInTheDocument();
});

it('change of form input', () => {
  renderFunction();
  const formInput = screen.getByPlaceholderText(
    'Search by title or author',
  );
  fireEvent.click(formInput);
  fireEvent.change(formInput, { target: { value: 'hello alll' } });
  expect((formInput as HTMLInputElement).value).toBe('hello alll');
});
