import { render, screen } from '@testing-library/react';
import Details from '.';

it('details', () => {
  render(

    <Details
      book={[]}
      setData={undefined}
      src={'assets/biggboss.png'}
      bookName={'abc'}
      authorName={'def'}
      timeStamp={'13-minute'}
    ></Details>,
    
  );

  const bookname = screen.getByText('abc');
  expect(bookname).toBeInTheDocument();

  const authorname = screen.getByText('def');
  expect(authorname).toBeInTheDocument();
});
