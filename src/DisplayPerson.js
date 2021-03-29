import React from "react";

function DisplayPerson(props) {
  return (
    <div className="displayPerson">
      <label>Name: {props.person.name}</label>
      <label>Last Name: {props.person.lastName}</label>
      <label>Age: {props.person.age}</label>
    </div>
  );
}

export default DisplayPerson;