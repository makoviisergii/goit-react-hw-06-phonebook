import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    ],
    searchStr: 'aaa',
  },
  reducers: {
    changeFilter(state, action) {
      state.searchStr = action.payload;
      console.log('in reduser  ', state.searchStr);
    },
    addContact: {
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },

      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            name: contact.name,
            number: contact.number,
          },
        };
      },
    },
    removeContact(state, action) {
      const itemIndex = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(itemIndex, 1);
    },
  },
});

export const searchReducer = searchSlice.reducer;

export const { changeFilter, removeContact, addContact } = searchSlice.actions;
