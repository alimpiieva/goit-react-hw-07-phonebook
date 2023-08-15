import React from 'react';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsFilter from 'components/ContactsFilter/ContactsFilter';
import { Container } from './App.styled';

const App = () => {
  return (
    <Container>
      <ContactForm />
      <h2>Contacts:</h2>
      <ContactsFilter />
      <ContactList />
    </Container>
  );
};

export default App;
