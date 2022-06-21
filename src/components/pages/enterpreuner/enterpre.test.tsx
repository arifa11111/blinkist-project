import { render } from '@testing-library/react';
import Entrepreneurship from '.';
import { BrowserRouter } from 'react-router-dom';

it('bookdetial', () => {
  render(
    <BrowserRouter>
      <Entrepreneurship
        book={[]}
        setData={undefined}
      ></Entrepreneurship>
    </BrowserRouter>,
  );
});
