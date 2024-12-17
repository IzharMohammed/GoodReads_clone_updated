import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from 'Configs/axiosInstance';
import toast from "react-hot-toast";

const initialState = {
    bookList: []
}

// Async thunk to get all books
export const getAllBooks = createAsyncThunk('course/getAllBooks', async () => {
    try {
        const response = axiosInstance.get("books");
        console.log('Response', response);

        toast.promise(response, {
            loading: 'loading books data',
            success: 'Successfully loaded all the books',
            error: "Something went wrong"
        });
        return await response;

    } catch (error) {
        console.log(error);

    }
})

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},

    extraReducers: builder => {
        builder.addCase(getAllBooks.fulfilled, (state, action) => {
            console.log('builder', [state, action]);
           if (action?.payload?.data?.data) {
                state.bookList = action?.payload?.data?.data;
            } 
        })
    }
})

export default bookSlice.reducer;