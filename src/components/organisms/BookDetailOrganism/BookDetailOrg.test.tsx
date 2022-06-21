import { fireEvent, render, screen } from '@testing-library/react';
import BookDetailOrganism from './index';
import { BrowserRouter } from 'react-router-dom';
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
    startedread:false,

  },
  {
    src: 'assets/lovingYourBusiness.png',
    cardName: 'Loving Your Business',
    authorName: 'Debbie King',
    timeStamp: '13-minute read',
    id: 9,
    isread: false,
    reads: '',
    status: true,
    startedBook: false,
    just: false,
    audio: false,
    startedread:false,

  },
];

const renderFunction = () => {
  render(
    <BrowserRouter>
      <BookDetailOrganism
        book={data}
        setData={undefined}
      ></BookDetailOrganism>
    </BrowserRouter>,
  );
};

it('should have read now button', () => {
  renderFunction();
  const readNow = screen.getByRole('button', { name: /Read now/i });
  expect(readNow).toBeInTheDocument();
});

it('read now should navigate to myLibrary', () => {
  renderFunction();
  const readNow = screen.getByRole('button', { name: /Read Now/i });
  fireEvent.click(readNow);
  expect(window.location.pathname).toBe('/');
});

it('should have finished button', () => {
  renderFunction();
  const Finished = screen.getByRole('button', { name: /Finished Reading/i });
  expect(Finished).toBeInTheDocument();
});

it('Finished Reading should navigate to myLibrary', () => {
  renderFunction();
  const finishReading = screen.getByRole('button', {
    name: /Finished Reading/i,
  });
  fireEvent.click(finishReading);
  expect(window.location.pathname).toBe('/');

});

it('should have send to kindle button', () => {
  renderFunction();
  const send = screen.getByRole('button', {
    name: /send to kindle/i,
  });
  expect(send).toBeInTheDocument();
});

it('send to kindle should navigate to myLibrary', () => {
  renderFunction();
  const send = screen.getByRole('button', {
    name: /send to kindle/i,
  });
  fireEvent.click(send);
  expect(window.location.pathname).toBe('/enterpreuner');
});

it('should have synopsis button', () => {
  renderFunction();
  const synopsis = screen.getByRole('button', { name: /synopsis/i });
  expect(synopsis).toBeInTheDocument();
  fireEvent.click(synopsis);
});

it('should have who button', () => {
  renderFunction();
  const who = screen.getByRole('button', { name: /who/i });
  expect(who).toBeInTheDocument();
  fireEvent.click(who);
});

it('should have about  button', () => {
  renderFunction();
  const about = screen.getByRole('button', {
    name: /about the author/i,
  });
  expect(about).toBeInTheDocument();
  fireEvent.click(about);
});
