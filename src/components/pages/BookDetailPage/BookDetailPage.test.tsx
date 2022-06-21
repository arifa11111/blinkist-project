import { render } from '@testing-library/react';
import BookDetailPage from '.';
import { BrowserRouter } from 'react-router-dom';

it('bookdetial', () => {
  render(
    <BrowserRouter>
      <BookDetailPage book={[]} setData={undefined}></BookDetailPage>
    </BrowserRouter>,
  );
});
