import React, { useState } from 'react';

function Register() {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registering:', { userName, firstName, lastName, email, password });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Sign-up</h2>
              <form onSubmit={handleRegister}>
                <div className="form-group mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input 
                    id="username"
                    type="text" 
                    className="form-control"
                    placeholder="Enter username" 
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)} 
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="firstname" className="form-label">First Name</label>
                  <input 
                    id="firstname"
                    type="text" 
                    className="form-control"
                    placeholder="Enter first name" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="lastname" className="form-label">Last Name</label>
                  <input 
                    id="lastname"
                    type="text" 
                    className="form-control"
                    placeholder="Enter last name" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    id="email"
                    type="email" 
                    className="form-control"
                    placeholder="Enter email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input 
                    id="password"
                    type="password" 
                    className="form-control"
                    placeholder="Enter password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
