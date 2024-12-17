//React imports
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//Layout import
import Layout from "../Layouts/Layout";
//Redux import
import { getAllShelfs } from "Redux/Slice/ShelfSlice";
//Image import
import image from "../Assets/onePiece.jpeg";


function Shelf() {
  
  const navigate = useNavigate();
  const shelfState = useSelector((state) => state.shelf);
  const [books, setBooks] = useState([]);

  const dispatch = useDispatch();
  const loadShelves = async () => {
     await dispatch(getAllShelfs());
  };

  useEffect(() => {
    loadShelves();
  }, []);

  const handleShelfs = (shelf) => {
    console.log(shelf);
    shelfState.shelfList.forEach((shelf) => {
      if (shelf._id == shelf.id) {
        setBooks(shelf.books);
      }
    });
    setBooks(shelf.books);
  };


  console.log(shelfState.shelfList);
  return (
    <Layout>
      <div>
        <div className="border border-pink-600 h-[100vh] ">
          <div className="m-8 flex justify-around ">
            {shelfState.shelfList &&
              shelfState.shelfList.map((shelf) => (
                <div
                  className="btn btn-accent"
                  onClick={() => handleShelfs(shelf)}
                >
                  {shelf.name}
                </div>
              ))}
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className="text-xl text-white">Name</th>
                  <th className="text-xl text-white">Description</th>
                  {/*   <th>Favorite Color</th> */}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {books.length > 0 &&
                  books.map((book) => (
                    <tr>
                      <th></th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-14 h-14">
                              <img
                                src={image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold text-white">
                              {book.title}
                            </div>
                            <div className=" text-white text-sm  ">
                              Pages :- {book.pages}
                            </div>
                            <div> {book.publishDate}</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-white">
                        {book.description}
                        <br />
                        <span className="badge badge-ghost badge-sm text-white">
                          Desktop Support Technician
                        </span>
                      </td>
                      <th>
                        <button className="btn btn-primary" onClick={()=>{
                          console.log(book);
                          navigate('/Description',{state : {...book}})
                        }}>details</button>
                      </th>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Shelf;
