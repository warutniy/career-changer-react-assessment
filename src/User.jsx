import React from 'react';

const User = ({ onClick, employees }) => {
    return (
        <div>
            <div>
                <h1>Generation Thailand</h1>
                <button value="user" onClick={onClick}>User Home Sector</button>
                <button value="admin" onClick={onClick}>Admin Home Sector</button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(({ name, lastname, position }) => {
                            return (
                                <tr>
                                    <td>{name}</td>
                                    <td>{lastname}</td>
                                    <td>{position}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;