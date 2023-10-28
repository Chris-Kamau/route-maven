import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/NavBar.css';
import { Button } from "../styles";
import axios from 'axios';

function NavBar({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogoutClick() {
    axios.get("api/logout/", { withCredentials: true }).then((response) => {
      if (response.status === 204) {
        setUser(null);
        navigate("/login"); // Redirect to the login page
      }
    }).catch((error) => {
      console.error("Logout error: ", error);
    });
  }

  return (
    <div className='navv'>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/car">Drivers</Link>
          </li>
          <li>
            <Link to="/form-table">Admin</Link>
          </li>
          <li className="logout-button">
            <Button variant="outline" onClick={handleLogoutClick}>Logout</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
