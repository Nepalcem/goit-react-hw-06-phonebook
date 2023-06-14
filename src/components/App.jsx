import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import ContactsList from './contactsList/ContactsList';
import Filter from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, filterItems } from 'redux/store';

const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ]
  // );

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

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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
