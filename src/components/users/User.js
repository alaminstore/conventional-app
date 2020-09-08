import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  const { name, username, email, phone } = user;

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container w-50">
      <div className="userTitle d-flex my-5">
        <h4>User page</h4>
        <span className="ml-auto">
          <Link to="/">
            <button className="btn btn-primary">Back to Home</button>
          </Link>
        </span>
      </div>

      <br />
      <div className="viewMode">
        <ul>
          <li>Name:{name}</li>
          <li>Username: {username}</li>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    </div>
  );
};

export default User;
