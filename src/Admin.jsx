import React from 'react';
import './style.css';

const Admin = ({ newEmployee, onClick, onChange, onSubmit, onDelete, employees }) => {

    return (
        <div>
            <div className='container_admin'>
                <h1 id='admin'>Generation Thailand Home - Admin Sector</h1><br />
                <div>
                    <button value="user" onClick={onClick}>User Home Sector</button>
                    <button value="admin" onClick={onClick}>Admin Home Sector</button>
                </div>
            </div>
            <div>
                <h3>Create User Here</h3>
                <form onSubmit={onSubmit}>
                    <input
                        type='text'
                        name='name'
                        placeholder='First Name' 
                        value={newEmployee.name || ""} 
                        onChange={onChange}
                     />
                    <input
                        type='text'
                        name='lastname'
                        placeholder='Last Name'
                        value={newEmployee.lastname || ""} 
                        onChange={onChange}  
                     />
                    <input
                        type='text'
                        name='position'
                        placeholder='Position'
                        value={newEmployee.position || ""} 
                        onChange={onChange}  
                     />
                    <button type='submit'>save</button>
                </form>
            </div>
            <div className='table_admin'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Position</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => {
                            return (
                                <tr>
                                    <td>{employee.name}</td>
                                    <td>{employee.lastname}</td>
                                    <td>{employee.position}</td>
                                    <td><button onClick={() => onDelete(index)}>Delete</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;