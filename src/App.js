import './App.css';
import UpdatePerson from "./UpdatePerson.js";
import DisplayPerson from "./DisplayPerson.js";
import { isNullOrWhitespace } from "./CommonFunctions.js";

import React, { useState, useEffect } from "react";

function App() {
  const emptyPerson = {
    name: "",
    lastName: "",
    age: ""
  }

  const [person, setPerson] = useState(emptyPerson);
  const [count, setCount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    const newPerson = {
      name: e.target.name.value,
      lastName: e.target.lastName.value,
      age: e.target.age.value
    }

    if (isNullOrWhitespace(newPerson.name) || isNullOrWhitespace(newPerson.lastName) || isNullOrWhitespace(newPerson.age)) {
      alert("Some information is missing!");
      return;
    }

    if (newPerson.name === person.name && newPerson.lastName === person.lastName && newPerson.age === person.age) {
      alert("This is the same person!");
      return;
    }

    setCount((C) => C + 1);
    setPerson(newPerson);
  }

  useEffect(() => {
    return () => {
      console.log("cleaning after useEffect, count = " + count);
    };
  }, [count]);
  
  return (
    <div className="app">
      <UpdatePerson
        handleSubmit={handleSubmit}
        count={count}
      />
      <br/>
      <DisplayPerson person={person} />
    </div>
  );
}

export default App;
