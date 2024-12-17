//React imports
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
//Layout imports
import Layout from '../Layouts/Layout'
//image imports
import image from '../Assets/onePiece.jpeg';
//Redux imports
import { getAllShelfs } from 'Redux/Slice/ShelfSlice';
import { postShelf } from 'Redux/Slice/ShelfSlice';
//Material ui imports
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function BookDescription() {

const {state}=useLocation();
console.log(state);
const navigate = useNavigate();
const shelfState = useSelector(state => state.shelf);
const dispatch = useDispatch();

const loadShelves = () =>{
  dispatch(getAllShelfs())
}

useEffect(()=>{
  loadShelves();
},[])

  return (
    <Layout>
    <div className=' h-[110vh]  flex gap-8 w-3/4 m-auto'>
    <div className=' h-[80vh] mt-12 flex gap-8 w-[160vh] ml-30 px-4 bg-gray-800  '>
    <div className='my-16 '>
        <img className='h-[65vh] max-w-[65vh]' src={image} alt="" />
        </div>
        <div className='text-white flex flex-col my-16  gap-8'>
            <div className='text-5xl text-center' >{state.title}</div>
            <div className='flex flex-col text-xl text-center  h-[30vh] gap-8 justify-around items-'>
            <div className='text-2xl '>Description :- {state.description}</div>
      {/*       <div>Writer</div>
            <div>genre</div> */}
            <div>pages : {state.pages}</div>
            <div>Publish Date :- {state.publishDate}</div>
         <div className='ml-36'>
         <Stack spacing={1}>
            <Rating name="half-rating-read" defaultValue={state.rating} precision={1} max={10} size="large"  />
          </Stack>
         </div>
            </div>
            <details className="dropdown mb-32 ml-28 ">
                <summary className="m-1 btn w-[40vh] text-white">Add to Shelf</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                {
                  shelfState.shelfList && shelfState.shelfList.map(shelf=>{
                    return <li className='btn w-[40vh] my-1 btn-success' onClick={async ()=>{
                      await dispatch(postShelf({bookId : shelf.name,shelfId : state._id}))
                     await dispatch(getAllShelfs())
                      navigate('/shelf');
                    }}>{shelf.name}</li>
                  })
                }
                </ul>
            </details>
        </div>
    </div>
    </div>
    </Layout>
  )
}

export default BookDescription