import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import Header from "./Header.js"
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';

function App() {
  const [contacts,setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contact"

  const addContactHandler = (contact)=>{
    console.log(contact)
    setContacts([...contacts,{id:uuidv4(),...contact}])
  }


const removeContactHandler= (id)=>{
  const newContactList = contacts.filter((contact)=>{
    return contact.id !== id;
  })
  setContacts(newContactList)
}
  useEffect(() => {
    const retrieveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retrieveContact){
      setContacts(retrieveContact)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])
  

  return (
    <>
    <Router>
     <Header/>
   <div className='container'>
     <Routes>
       <Route exact path='/' element={<ContactList contacts={contacts} getContactId={removeContactHandler}/>
}>
       </Route>
       <Route exact path='/add' element={<AddContact addContactHandler={addContactHandler}/>}  >

       </Route>

       <Route exact path="/contact/:id" element={<ContactDetails />} >
       </Route>

      

     </Routes>
   </div>
   </Router>
   </>
  );
}

export default App;
