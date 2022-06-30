// import { Component } from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Phonebook/Contacts/Contacts';
import Filter from './Phonebook/Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const noUniqueName = contacts
      .map(e => e.name.toLowerCase())
      .includes(name.toLowerCase());
    if (noUniqueName) {
      return alert(`${name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      setContacts(prevState => {
        return [...prevState, contact];
      });
    }
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const removeContact = contactId => {
    setContacts(prevState => {
      return [...prevState].filter(({ id }) => id !== contactId);
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Phonebook onSubmit={addContact} />
      <Filter value={filter} onChange={changeFilter} />
      <h2>Contacts</h2>
      <Contacts
        contacts={filterContacts()}
        filter={filter}
        onRemoveContact={removeContact}
      />
    </div>
  );
};