import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from 'Configs/axiosInstance';
import toast from "react-hot-toast";


const initialState = {
    shelfList : []
}

// Async thunk to get all shelves
export const getAllShelfs = createAsyncThunk('getAllShelfs',async ()=>{
try {
    const response =  axiosInstance.get('bookshelves',{
        headers :{
            'x-access-token' : localStorage.getItem('token')
        }
    })
    toast.promise(response,{
        loading: 'loading books data',
        success: 'Successfully loaded all the books',
        error: "Something went wrong"
    })
    return await response ;
} catch (error) {
    console.log(error);
}
}) 

// Async thunk to add a book to shelf
export const postShelf = createAsyncThunk('postShelf', async ({bookId,shelfId}) =>{
    try {
        console.log('book id ', bookId);
        console.log('shelf id',shelfId);
        const response = axiosInstance.patch(`bookshelves/${bookId}/add/${shelfId}`,{},{
            headers :{
                'x-access-token' : localStorage.getItem('token')
            }
        })
        console.log('patch response',response);
        toast.promise(response,{
            loading: 'loading books data',
            success: 'Successfully added book',
            error: "Something went wrong"
        })
        return await response ;
    } catch (error) {
        console.log(error);
    }
}) 




const shelfSlice = createSlice({
    name : 'shelf',
    initialState,
    reducers : {} ,
    extraReducers : builder =>{
        builder.addCase(getAllShelfs.fulfilled,(state,action)=>{
            console.log('action',action);
            if (action?.payload?.data?.data) {
                state.shelfList = action?.payload?.data?.data;
            } 
        })
        .addCase(postShelf.fulfilled,(state,action)=>{
            console.log('patch builder', [state, action]);
            console.log(action?.payload?.data?.data?.books);
      /*       shelfList.map(shelf=>{
                if(action?.payload?.data?.data?.name==shelf.name){
                shelfList = action?.payload?.data?.data
                }
            }) */
        })
    }
})

export default shelfSlice.reducer;