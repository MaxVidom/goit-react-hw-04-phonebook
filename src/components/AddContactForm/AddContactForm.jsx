import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddContactsForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = evt => {
    const inputName = evt.currentTarget.name;
    const value = evt.currentTarget.value;
    switch (inputName) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmitForm = evt => {
    if (name.trim() === '' || number.trim() === '') {
      console.log('please enter your contact');
      return;
    }
    evt.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form action="">
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleInputChange}
      />
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSubmitForm}>
        Submit
      </button>
    </form>
  );
}

AddContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
