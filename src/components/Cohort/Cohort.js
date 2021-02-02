import React from 'react';
// import Person from '../Person/Person';
import './Cohort.css';

function Cohort(props) {
  console.log(props)
    return props.people.staff.map(person => { 
        return <div>
            <h2> {person.name} </h2>
            <img src={person.photo} alt="put a bird on it"></img>
            <h3> {person.quote} </h3>
            <h3> {person.superlative} </h3>
            <hr></hr>
        </div>
    })
}

export default Cohort;
