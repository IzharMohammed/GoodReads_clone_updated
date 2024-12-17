//Component import
import BookCard from "Components/BookCard";
//Layout import
import Layout from "../Layouts/Layout";
//React imports
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//Redux imports
import { getAllBooks } from "Redux/Slice/BookSlice";

function Dashboard() {

  const dispatch = useDispatch()
  const state = useSelector(state=>state.books);

  const fetchBooks = async () =>{
      const response = await dispatch(getAllBooks());
      console.log(response);
  }
  useEffect(()=>{
      fetchBooks();
  },[])

  return (
    <>
      <Layout>
        <div className="min-h-[90vh] ">
          {
            state.bookList && state.bookList.map(book=>{
              return(
                <BookCard  data={book} />
              )
            })
          }
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;
