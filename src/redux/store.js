import { configureStore } from '@reduxjs/toolkit';
// import { contactReducer } from './Slice';
// import { searchReducer } from './Slice';

import { searchReducer } from './slice';

// const CONTACTS_KEY = 'contacts';

export const store = configureStore({
  reducer: {
    searchReducer: searchReducer,
  },
});
