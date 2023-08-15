import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactsList, ContactItem, DeleteButton } from './ContactList.styled';
import { deleteContact, fetchContacts } from '../../redux/slice';
import { selectVisibleContacts } from '../../redux/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const [deletingContactId, setDeletingContactId] = useState(null);

  const handleDeleteContact = async contactId => {
    setDeletingContactId(contactId);
    await dispatch(deleteContact(contactId));
    dispatch(fetchContacts());
    setDeletingContactId(null);
  };

  return (
    <ContactsList>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id}>
          <span>
            {contact.name}: {contact.phone} 
          </span>
          <DeleteButton
            onClick={() => handleDeleteContact(contact.id)}
            disabled={deletingContactId === contact.id}
          >
            {deletingContactId === contact.id ? 'Deleting...' : 'Delete'}
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactsList>
  );
};

export default ContactList;