import React from 'react';
import PropTypes from 'prop-types';
import { ContactsStyled } from './ContactsList.styled';
import StyledTrashIcon from './TrashIcon.styled';

const ContactsList = ({ contacts, removeContact }) => {
  return (
    <div className="contacts">
      <h2>Contacts List:</h2>
      <ContactsStyled>
        {contacts.map(({ name, id, number }) => (
          <li key={id} className="item">
            <span className="name">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </span>
            : <span>{number} </span>
            <StyledTrashIcon
              onClick={() => removeContact(id)}
            ></StyledTrashIcon>
          </li>
        ))}
      </ContactsStyled>
    </div>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
