import { render, screen } from '@testing-library/react';
import Card from './index';

const fun=()=>{
  render(
    <Card
      mode={'normal'}
      bookName={'abc'}
      authorName={'def'}
      src={'assets/biggboss.png'}
      time={'13-minute read'}
      read={''}
      status={false}
    ></Card>,
  );
}

it('bookImage', () => {
  fun();
  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', 'assets/biggboss.png');
  expect(image).toHaveAttribute('alt', 'book_image');
});

it('bookname', () => {
  
  fun();
  const bookName = screen.getByText(/abc/i);
  expect(bookName).toBeInTheDocument();
});

it('authorname', () => {
  
fun();
  const authorName = screen.getByText(/def/i);
  expect(authorName).toBeInTheDocument();
});

it('timeStamp', () => {
  
  fun();
  const time = screen.getByText(/13-minute read/i);
  expect(time).toBeInTheDocument();
});
