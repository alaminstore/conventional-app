import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const { name, username, email, phone } = user; // destruction in javascript es6

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };

  return (
    <div className="container shadow w-50 my-5">
      <div className="card ">
        <br />
        <h1 className="text-center">Add User</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
              required=""
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="UserName"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
          <br />
        </form>
      </div>
    </div>
  );
};
export default AddUser;
