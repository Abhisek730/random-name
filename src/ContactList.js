import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

export default function ContactList(props) {
  console.log(props);
  //  const showList = props.contacts.map((contact)={
  //       return(
  //           <ContactCard contact={contact}/>
  //       )
  //   })
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  return (
    <div className="my-3">
      <div className="d-flex justify-content-between">
        <h1>Contact List</h1>
        <Link  to="/add">
        <button type="button" className="btn btn-primary my-2">
         Add Contacts
        </button>
        </Link>
      </div>

      {props.contacts.map((contact) => (
        <ContactCard
          contact={contact}
          clickHandler={deleteContactHandler}
          key={contact.id}
        ></ContactCard>
      ))}
    </div>
  );
}
