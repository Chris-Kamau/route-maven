import React, { useState, useEffect, useRef } from 'react';
import '../css/CarFormTable.css';
import axios from 'axios';

const Table = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const formRef = useRef(null);

  const fetchCars = async () => {
    try {
      const response = await axios.get('api/todos/');
      setCars(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const resetForm = () => {
    formRef.current.reset();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      await axios.post('api/todos/', formData);
      fetchCars();
      resetForm(); // Reset the form fields
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = (car) => {
    setSelectedCar(car);
    setEditMode(true);
  };

  const handleUpdate = async () => {
    try {
      const response =  await axios.put(`api/todos/${selectedCar.id}/`, selectedCar);
      if (response.status === 200) 
      {
        // The update was successful, so you can now update the state.
        fetchCars();
        setSelectedCar(null);
        setEditMode(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelEdit = () => {
    setSelectedCar(null);
    setEditMode(false);
  };

  const handleDelete = async (car) => {
    try {
      await axios.delete(`api/todos/${car.id}`);
      fetchCars();
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-md"></div>
      </nav>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <h2>Create Data</h2>
            <br />
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="image" placeholder="Image" required />
              </div>
              <div className="form-group">
                <input type="text" name="number_plate" placeholder="Number Plate" required />
              </div>
              <div className="form-group">
                <input type="text" name="driver_name" placeholder="Driver Name" required />
              </div>
              <div className="form-group">
                <input type="text" name="route" placeholder="Initial Route" required />
              </div>
              <div className="form-group">
                <input type="number" name="driver_contact" placeholder="Driver Contact" required />
              </div>
              <div className="form-group mt-2">
                <select id="gender" name="gender" className="form-control" required>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="d-grid gap-2">
              <button className="btn btn-success mt-2" type="submit">
                  Submit
                </button>
              </div>
            </form>
            </div>
          <div className="col-md-8">
            <h2>Table Data</h2>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Number Plate</th>
                  <th scope="col">Driver Name</th>
                  <th scope="col">Driver Contact</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Route</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {cars.map((car) => (
                  <tr key={car.id}>
                    <td>{car.id}</td>
                    <td>{car.number_plate}</td>
                    <td>{car.driver_name}</td>
                    <td>{car.driver_contact}</td>
                    <td>{car.gender.charAt(0).toUpperCase() + car.gender.slice(1)}</td>
                    <td>{car.route}</td>
                    <td>
                    {editMode && selectedCar.id === car.id ? (
  <div>
    <form onSubmit={handleUpdate}>
      <div className="form-group">
        <input
          type="text"
          name="image"
          placeholder="Image"
          value={selectedCar.image}
          onChange={(e) => setSelectedCar({ ...selectedCar, image: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="number_plate"
          placeholder="Number Plate"
          value={selectedCar.number_plate}
          onChange={(e) => setSelectedCar({ ...selectedCar, number_plate: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="driver_name"
          placeholder="Driver Name"
          value={selectedCar.driver_name}
          onChange={(e) => setSelectedCar({ ...selectedCar, driver_name: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="route"
          placeholder="Initial Route"
          value={selectedCar.route}
          onChange={(e) => setSelectedCar({ ...selectedCar, route: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          name="driver_contact"
          placeholder="Driver Contact"
          value={selectedCar.driver_contact}
          onChange={(e) => setSelectedCar({ ...selectedCar, driver_contact: e.target.value })}
          required
        />
      </div>
      <div className="form-group mt-2">
        <select
          id="gender"
          name="gender"
          className="form-control"
          value={selectedCar.gender}
          onChange={(e) => setSelectedCar({ ...selectedCar, gender: e.target.value })}
          required
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <button type="submit" className="btn btn-success">
        Update
      </button>
      <button
        onClick={handleCancelEdit}
        className="btn btn-secondary"
      >
        Cancel
      </button>
    </form>
  </div>
) : (
  <div>
    <button
      onClick={() => handleEdit(car)}
      className="btn btn-outline-warning"
    >
      Edit
    </button>
    <button
      onClick={() => handleDelete(car)}
      className="btn btn-outline-danger delete-button"
    >
      Delete
    </button>
  </div>
)}
                </td>
              </tr>
            ))}
          </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;