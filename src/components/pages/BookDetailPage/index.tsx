import React from 'react';
import BookDetailOrganism from '../../organisms/BookDetailOrganism';
import Footer from '../../organisms/footer';
import Header from '../../organisms/header';
import ParentTemplate from '../../templates/parent template/index';

type data = {
  src: string;
  cardName: string;
  authorName: string;
  timeStamp: string;
  id: number;
  isread: boolean;
  reads: string;
  status: boolean;
  startedBook:boolean;
  startedread:boolean;
  
};
const BookDetailPage = (props: { book: data[]; setData: any }) => {
  return (
    <ParentTemplate
      header={<Header></Header>}
      body={
        <BookDetailOrganism
          book={props.book}
          setData={props.setData}
        ></BookDetailOrganism>
      }
      footer={<Footer></Footer>}
    />
  );
};
export default BookDetailPage;
