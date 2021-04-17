import './App.css';
import React from 'react';
import { useState } from 'react';
import Form from './Components/Form'


function App() {
  const [formValue, setFormValue] = useState({
    pizza_name: "",
    special_instrutions: "",
  });
  const [teamMembers, setTeamMembers] = useState([]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormValue({...formValue, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newMember = {
      first_name: formValue.pizza_name.trim(),
      last_name: formValue.special_instrutions.trim(),
     };
    setTeamMembers([...teamMembers, newMember]);
    setFormValue({pizza_name: "",
    special_instrutions: "",
    })
  };



  return (
    <div className="App">
    <h1>Lambda Eats!</h1>
      <Form values={formValue} onChange={onChange} onSubmit={onSubmit} />
      {teamMembers.map((pizza) => {
        return (
          <div className="new-submissions" key={pizza.id}>
            <h2>{pizza.pizza_name}</h2>
            <h2>{pizza.special_instrutions}</h2>
            
          </div>
        );
      })}
    </div>
  );
}

export default App;

