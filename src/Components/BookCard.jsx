//React imports
import React from 'react'
import {  useNavigate } from 'react-router-dom';
//Image import
import bookImage from 'Assets/onePiece.jpeg';

function BookCard({data}) {

    const navigate = useNavigate();

  return (

    data && 
    <div className='w-full h-[40vh] mb-12 mt-4 '>
    <div className='flex   bg-slate-900  gap-16 p-4 rounded-lg w-3/5 m-auto  h-[43vh] '>
        <div  >
    <img className=' h-[36vh]' src={bookImage} alt="" />
        </div>
        <div className='flex  flex-col gap-4'>
             <div className='text-3xl text-white'><h1>{data.title}</h1></div>
            <div className='flex flex-col gap-4'>
               <span className='mb-0 text-white'>pages : {data.pages} </span> 
               <span className='mb-0 text-white'>published At :- {data.publishDate}</span>
                </div>
            <div className='flex flex-col gap-4 w-[70vh]  text-white '>
                <div className='text-xl'>Description :- {data.description}</div> 
{/*                 <div className='btn btn-primary w-[20vh]  m-auto'><Link to='/Description'>Details</Link></div>*/}              
                  <div className='btn btn-primary w-[20vh]  m-auto' onClick={()=>{
                    navigate('/Description',{state : {...data}})
                  }}>Details</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default BookCard