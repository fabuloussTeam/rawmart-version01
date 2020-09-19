import React from 'react';
import './Users.css';

const Users = () => {
  return (
    <div className="container users" style={{ width: "90%", margin: "0 auto" }}>
      <div className="container-one slider seller-and-buyer-button">
        <h1>container one</h1>
        <p>Descriptions du container one</p>
      </div>
      <div className="container-two login-and-signup-form">
        <h1>container two</h1>
        <p>Descriptions du container two</p>
      </div>
    </div>
  )
}

export default Users;