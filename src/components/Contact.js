import React from 'react';
import { useState } from 'react';
import './Contact.css';

export const Contact = () => {
  const [ user, setUser] = useState({});
  const [ showForm, setShowForm ] = useState(false);

  const validateContact = (user) => {
    if (user.name.length === 0) {
      alert('Should enter name');
      return false;
    }
    if (user.lastname.length === 0) {
      alert('Should enter lastname');
      return false;
    }
    if (user.email.length === 0) {
      alert('Should enter email');
      return false;
    }
    if (user.comment.length === 0) {
      alert('Should enter comment');
      return false;
    }
    return true;
  }
  const handleContact = (e) => {
    e.preventDefault();
    const formData = e.target;
    const contact = {
      name: formData.name.value,
      lastname: formData.lastname.value,
      email: formData.email.value,
      comment: formData.comment.value
    }
    setUser(contact);
    if(validateContact(contact)) {
      setShowForm(false);
      clearContact();
      window.open(`mailto=${contact.email}?subject=Contact from ${contact.email}&body=${"Message from: " + contact.name + " " + contact.lastname + " saying: " + contact.comment}`);
      alert('Contact sent, thank you!');
    }
  }
  const updateData = (e) => {
    const inputName = e.target.name;
    setUser((prev) => {
      return {
        ...prev,
        [inputName]: e.target.value
      }
    })
  }
  const clearContact = () => {
    setUser({});
  }
  const showContact = () => {
    setShowForm(!showForm);
  }

  return (
    <div className='container'>
      <h3 className="show-contact" onClick={e => showContact()}>Contact me {showForm ? '↑' : '↓' } </h3>
      {
        showForm === false ?
        <div></div>
       :
       (
        <form onSubmit={e => handleContact(e)}>
          <div id="name" className='centered'>
            <label className='label'>Name:</label>
            <input
              name="name"
              onChange={e => updateData(e)}
            ></input>
          </div>
          <div id="lastname" className='centered'>
            <label className='label'>Last Name:</label>
            <input
              name="lastname"
              onChange={e => updateData(e)}
            ></input>
          </div>
          <div id="email" className='centered'>
            <label className='label'>Email:</label>
            <input
              name="email"
              type="email"
              onChange={e => updateData(e)}
            ></input>
          </div>
          <div id="comment" className='centered'>
            <label className='label'>Comment:</label>
            <textarea
              name="comment"
              onChange={e => updateData(e)}
            ></textarea>
          </div>
          {
            Object.keys(user).length > 0 ?
            (
              <div className='contact-info'>
                <hr></hr>
                <h4>Your contact information is:</h4>
                <p>{user.name} {user.lastname}</p>
                <p>{user.email}</p>
                <p>{user.commer}</p>
              </div>
            ) : <div></div>
          }
          <div>
            <button type="submit" className='button'> Send ✅ </button>
          </div>
        </form>
        )
      }
    </div>
  )
}
