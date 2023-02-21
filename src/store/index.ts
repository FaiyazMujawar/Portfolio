import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './NavbarSlice';

export default configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});
