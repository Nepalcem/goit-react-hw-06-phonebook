import { configureStore, createAction } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const addContact = createAction('add/contact');
export const deleteContact = createAction('delete/contact');
export const filterItems = createAction('filter');

const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

const filterReducer = createReducer('', {
  [filterItems]: (state, action) => {
    return action.payload;
  },
});

export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});
