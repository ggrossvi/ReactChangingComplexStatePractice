import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function onChangeHandler(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lname: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lname: prevValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          onChange={onChangeHandler}
          placeholder="First Name"
          value={contact.fName}
        />

        <input
          name="lName"
          onChange={onChangeHandler}
          placeholder="Last Name"
          value={contact.lName}
        />

        <input
          name="email"
          onChange={onChangeHandler}
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
