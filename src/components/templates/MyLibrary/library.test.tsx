import { render } from '@testing-library/react';
import MyLibrary from '.';
import { BrowserRouter } from 'react-router-dom';

it('bookdetial', () => {
  render(
    <BrowserRouter>
      <MyLibrary book={[]} setData={undefined}></MyLibrary>
    </BrowserRouter>,
  );
});
