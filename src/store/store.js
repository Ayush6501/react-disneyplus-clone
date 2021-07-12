import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import userReducer from '../feature/user/UserSlice';
import movieReducer from "../feature/movie/movieSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});
