import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormStyled } from './Form.styled';
import { FaPlus } from 'react-icons/fa';

const Form = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    if (e.currentTarget.name === 'name') {
      setName(e.currentTarget.value.trim());
    } else {
      setNumber(e.currentTarget.value.trim());
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    props.onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <FormStyled onSubmit={submitHandler}>
      <h1>PhoneBook</h1>
      <div className="form__inputs">
        <label>
          <p>Name:</p>
          <input
            type="text"
            name="name"
            pattern="^[A-Za-z\u0080-\uFFFF ']+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
            autoComplete="off"
          />
        </label>

        <label>
          <p>Phone:</p>
          <input
            type="tel"
            name="number"
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={number}
            autoComplete="off"
          />
        </label>

        <button type="submit">
          <FaPlus></FaPlus> Add Contact
        </button>
      </div>
    </FormStyled>
  );
};

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
