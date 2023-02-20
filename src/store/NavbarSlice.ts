import { createSlice, current } from '@reduxjs/toolkit';

export const navbarSlice = createSlice({
  name: 'navbarSlice',
  initialState: {
    currentNavItem: 'HOME',
  },
  reducers: {
    setNavItem: (state, { payload: { navItem } }) => {
      state.currentNavItem = navItem;
    },
  },
});

export const { setNavItem } = navbarSlice.actions;

export default navbarSlice.reducer;
