import React from 'react';
import EntrepreneurOrganism from '../../organisms/EntrepreneurOrganism';
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
};
const Entrepreneurship = (props: { book: data[]; setData: any }) => {
  return (
    <ParentTemplate
      header={<Header></Header>}
      body={
        <EntrepreneurOrganism
          book={props.book}
          setData={props.setData}
        ></EntrepreneurOrganism>
      }
      footer={<Footer></Footer>}
    />
  );
};
export default Entrepreneurship;
