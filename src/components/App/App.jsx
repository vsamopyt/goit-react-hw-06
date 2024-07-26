import initialContacts from '../../../contacts.json';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
// import { useState } from 'react';
import css from './App.module.css';
// import Balance from '../Balance/Balance';

function App() {
  // const [filter, setFilter] = useState('');

  // const [contacts, setContacts] = useState(() => {
  //   const localStorageData = JSON.parse(localStorage.getItem('contacts'));
  //   if (localStorageData !== null) {
  //     return localStorageData;
  //   } else {
  //     return initialContacts;
  //   }
  // });

  // const addContact = newContact => {
  //   setContacts(prevContacts => {
  //     return [...prevContacts, newContact];
  //   });
  // };

  // const deleteContact = id => {
  //   setContacts(prevContacts => {
  //     return prevContacts.filter(item => item.id !== id);
  //   });
  // };

  // const filteredContacts = contacts.filter(item => {
  //   return item.name.toLowerCase().includes(filter.toLowerCase());
  // });
  
  // localStorage.setItem('contacts', JSON.stringify(contacts));

  return (
    <div className={css.appWraper}>
      <h1 className={css.appTitle}>Phonebook</h1>
      {/* <Balance/> */}
      <ContactForm  />
      <SearchBox />
      {/* <ContactList array={filteredContacts} onDelete={deleteContact} /> */}
       <ContactList  />
    </div>

    // 
  );
}

export default App;
