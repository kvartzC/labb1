import React from "react";

function UpdatePerson(props) {
  return (
    <form
      className="updatePerson"
      onSubmit={props.handleSubmit}
      key={props.count}
    >
      <label>Name</label>
      <input id="name" required />
      <br/>
      <label>Last Name</label>
      <input id="lastName" required />
      <br/>
      <label>Age</label>
      <input id="age" type="number" required />
      <br/><br/>
      <button id="submit" type="submit">Submit</button>
      <span> Number of persons submitted: {props.count}</span>
    </form>
  );
}

export default UpdatePerson;