import React from "react";

const WebDev = () => {
    return (
      <div className="container">
        <h1>This website</h1>

        <p> This entire website is made using express.js and React. the roject started with a frontend and a backend, but overtime
          I realized I didn't really need the backend. If you have any suggestion on what I could do with the backend follow the link below 
          and send me an email and I'll try to respond ASAP.
        </p>

        <a href="http://localhost:3000/contact-me" rel="noreferrer" style={{ color: 'white' }}>Link to contact me</a>
      </div>
    );
  };
  
  export default WebDev;