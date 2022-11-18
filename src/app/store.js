import { configureStore } from '@reduxjs/toolkit';
import sideBar from '../features/sideBar/sideBarSlice';

export const store = configureStore({
    reducer: {
        sideBar,
    },
});
