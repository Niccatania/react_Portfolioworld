import React, { useState } from "react";

export default function Form(){

 const [name, setName] = useState('');
 const [email, setEmail]= useState('');
 const [message, setMessage]= useState(''); 


 const handleInputChange = (e) => {
  
    const { name, value } = e.target;

        if (name === 'name'){
        setName(value);
      }
      if (name === 'email'){
        setEmail(value);
      }
      if (name === 'message'){
       setMessage(value);
      }
    
  };

 const handleFormSubmit = (e) => {
    e.preventDefault();
 }
 return(
    <div>
        <p></p>
        <form className="form">
            <input
            value={name}
            name="name"
            onChange={handleInputChange}
          type="text"
          placeholder="Name"
          />
           <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
         <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
        </form>
    </div>
 )
}