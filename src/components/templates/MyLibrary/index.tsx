import Footer from '../../organisms/footer';
import Header from '../../organisms/header';
import MyLibraryTemplate from '../../organisms/myLibrary';
import ParentTemplate from '../parent template/index';

type data = {
  src: string;
  cardName: string;
  authorName: string;
  timeStamp: string;
  id: number;
  isread: boolean;
  reads: string;
  status: boolean;
  startedread:boolean;
  startedBook:boolean;
};
const MyLibrary = (props: { book: data[]; setData: any }) => {
  return (
    <div>
      <ParentTemplate
        header={<Header></Header>}
        body={
          <MyLibraryTemplate
            book={props.book}
            setData={props.setData}
          ></MyLibraryTemplate>
        }
        footer={<Footer></Footer>}
      />
    </div>
  );
};
export default MyLibrary;
