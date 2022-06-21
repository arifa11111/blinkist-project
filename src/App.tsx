import React, { useEffect, useState } from "react";
import "./App.css";
import MyLibrary from "./components/templates/MyLibrary";
import {  Route, Routes } from "react-router-dom";
import Entrepreneurship from "./components/pages/enterpreuner";
import BookDetailPage from "./components/pages/BookDetailPage";

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


function App() {
  const [bookData, setBookData] = useState<data[]>([]);
  useEffect(() => {
    
    const axios = require("axios").default;

    axios({
      method: "get",
      url: "http://localhost:8000/Data",
    })
      .then((res: any) => {
        setBookData(res.data);
      })
      .catch((error: any) => console.log(error));
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={<MyLibrary book={bookData} setData={setBookData}></MyLibrary>}
      />
      <Route
        path="/enterpreuner"
        element={
          <Entrepreneurship
            book={bookData}
            setData={setBookData}
          ></Entrepreneurship>
        }
      />
      <Route
        path="/enterpreuner/bookdetails"
        element={
          <BookDetailPage
            book={bookData}
            setData={setBookData}
          ></BookDetailPage>
        }
      />
    </Routes>
  );
}
export default App;
