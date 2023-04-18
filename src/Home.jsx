import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Admin from './Admin';
import User from './User';
import './style.css';

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {

  const [sector, setSector] = useState("");

  const handleClick = ({ target }) => {
    const { value } = target; 
    setSector(value);
  };

  // const initApp = () => {
  //   const _role = role;
  //   setRole(_role);
  // };

  // useEffect(initApp, [role]);

  const [newEmployee, setNewEmployee] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const [employees, setEmployees] = useState(mockEmployees);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmployees((prev) => [newEmployee, ...prev]);
    setNewEmployee({});
  };

  const handleDelete = (removeIndex) => {
    setEmployees((prev) => {
      return prev.filter((employee, index) => index !== removeIndex);
    });
  };

  if(sector === 'admin') {
    return (
      <Layout>
        <Admin 
          onClick={handleClick} 
          newEmployee={newEmployee} 
          onChange={handleChange} 
          onSubmit={handleSubmit} 
          onDelete={handleDelete} 
          employees={employees} 
        />
      </Layout>
    );
  } else if(sector === 'user') {
    return (
      <Layout>
        <User 
          onClick={handleClick} 
          employees={employees}  
        />
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className='container_home'>
          <h1>Generation Thailand</h1>
            <div>
              <button value="user" onClick={handleClick}>User Home Sector</button>
              <button value="admin" onClick={handleClick}>Admin Home Sector</button>
            </div>
        </div>
      </Layout>
    );
  }

}



export default Home