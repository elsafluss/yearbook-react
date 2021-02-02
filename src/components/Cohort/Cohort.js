import React from 'react';
// import Person from '../Person/Person';
import './Cohort.css';

function Cohort({ staff, students }) {
  console.log("staff", staff)
  console.log("students", students)
  return (
    <div>
      {staff.map((person) => {
        return (
          <div>
            <h2> Staff: {person.name} </h2>
            <img src={person.photo} alt="put a bird on it"></img>
            <h3> {person.quote} </h3>
            <h3> {person.superlative} </h3>
            <hr></hr>
          </div>
        )
      })}

      {students.map((person) => {
        return (
          <div>
            <h2> Student: {person.name} </h2>
            <img src={person.photo} alt="put a cat on it"></img>
            <hr></hr>
          </div>
        )
      })}
    </div>
  )
}

export default Cohort;
