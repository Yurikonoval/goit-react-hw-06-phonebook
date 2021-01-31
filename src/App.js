import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import './App.css';

function App() {
  // useEffect(() => {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (parsedContacts !== null) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <p className="title statistics">Statistics</p>
      <Filter />
      <ContactList />
    </div>
  );
}
export default App;
