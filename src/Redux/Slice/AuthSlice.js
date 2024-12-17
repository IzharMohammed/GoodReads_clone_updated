import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from 'Configs/axiosInstance';
import toast from 'react-hot-toast';

// Initial state for the auth slice
const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    token: localStorage.getItem('token') || '',
    username: localStorage.getItem('username') || ''
}

// Async thunk for the sign-up action
export const signUp = createAsyncThunk('auth/signup', async (data) => {

    try {

        //Method - 1 to post data using axios instance
        const response = axiosInstance.post('signup', data); // Make the API call to sign up the user

        //Method - 2 to post data using axios
        // const response = await axios.post("http://localhost:3005/api/v1/signup",data) 

        console.log('auth Slice', response);

        // Show a toast notification for the API call status
        toast.promise(response, {
            loading: 'Submitting form',
            success: 'Successfully signed up!!',
            error: "Something went wrong"
        });

        return response; // Return the response for further handling
    } catch (error) {
        console.log(error);
        toast.error('Something went wrong....'); // Show an error toast if the API call fails
    }
});

// Async thunk for the sign-in action
export const signIn = createAsyncThunk('auth/signin', async (data) => {

    try {

        //Method - 1 to post data using axios instance
        const response = axiosInstance.post('signin', data); // Make the API call to sign in the user

        //Method - 2 to post data using axios
        // const response = await axios.post("http://localhost:3005/api/v1/signup",data) // Alternative for local testing

        console.log('auth Slice', response);

        // Show a toast notification for the API call status
        toast.promise(response, {
            loading: 'Submitting form',
            success: 'Successfully Logged in !!!',
            error: "Something went wrong"
        });

        return response; // Return the response for further handling
    } catch (error) {
        console.log(error);
        toast.error('Something went wrong....'); // Show an error toast if the API call fails
    }
});

// Create the auth slice
const authSlice = createSlice({
    name: 'auth', // Name of the slice
    initialState, // Initial state defined above
    reducers: {
        logout : (state)=>{
            state.isLoggedIn=false;
            state.token='';
            state.username='';
            localStorage.clear();
        }
    },

    extraReducers: (builder) => {

        // Handle the fulfilled state of the signIn async thunk
        builder.addCase(signIn.fulfilled, (state, action) => {
            console.log('builder', [state, action]);

            if (action?.payload?.data) { // Check if the payload contains data
                // Update the state with user information from the response
                state.isLoggedIn = (action?.payload?.data?.data !== undefined);
                state.username = action?.payload?.data?.data?.username;
                state.token = action?.payload?.data?.data?.token;

                // Store the user information in local storage
                localStorage.setItem("isLoggedIn", action?.payload?.data?.data !== undefined);
                localStorage.setItem("username", action?.payload?.data?.data?.username);
                localStorage.setItem("token", action?.payload?.data?.data?.token);
            }
        });
    }
});


export const {logout}= authSlice.actions;
// Export the reducer to be used in the store
export default authSlice.reducer;
