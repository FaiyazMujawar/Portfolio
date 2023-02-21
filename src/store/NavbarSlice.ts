import { createSlice, current } from '@reduxjs/toolkit';

export const navbarSlice = createSlice({
  name: 'navbarSlice',
  initialState: {
    currentNavItem: 'HOME',
    currentNavItemName: 'Home',
  },
  reducers: {
    setNavItem: (state, { payload: { navItem, navItemName } }) => {
      state.currentNavItem = navItem;
      state.currentNavItemName = navItemName;
    },
  },
});

export const { setNavItem } = navbarSlice.actions;

export default navbarSlice.reducer;
