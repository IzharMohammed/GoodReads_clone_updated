import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./Slice/AuthSlice";
import bookSliceReducer from "./Slice/BookSlice";
import shelfSliceReducer from "../Redux/Slice/ShelfSlice";

export const store = configureStore(
    {
        reducer: {
            auth: authSliceReducer,
            books : bookSliceReducer,
            shelf : shelfSliceReducer
        },
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
}
)

