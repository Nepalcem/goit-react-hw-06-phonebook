import React from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import ContactsList from './contactsList/ContactsList';
import Filter from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { filterItems } from 'redux/slices/filterSlice';
import { addContact, deleteContact } from 'redux/slices/contactsSlice';

const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const addContactItem = ({ name, number }) => {
    if (
      contacts.find(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    }
    const userObj = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(userObj));
  };

  const changeFilter = e => {
    dispatch(filterItems(e.currentTarget.value.trim()));
  };

  const getVisibleContacts = () => {
    const lowerCaseFilterValue = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilterValue)
    );
  };

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <Form onSubmit={addContactItem}></Form>
      <Filter value={filter} onChange={changeFilter}></Filter>
      <ContactsList
        contacts={getVisibleContacts()}
        removeContact={removeContact}
      ></ContactsList>
    </div>
  );
};

export default App;