import React, { useState, useEffect } from 'react';
import '../css/CarImage.css';
import axios from "axios";

const CarImage = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const fetchCars = async () => {
    try {
      const response = await axios.get('/api/todos');
      setCars(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleEdit = (car) => {
    setSelectedCar(car);
    setEditMode(true);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`/api/todos/${selectedCar.id}/`, selectedCar);

      if (response.status === 200) {
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

  return (
    <div>
      <div className='h5'>
        <h1 style={{ backgroundColor: "rgb(13, 226, 155)", textAlign: "center" }}>
          ROUTE-MASTER-LTD
        </h1>
      </div>
      <div className='item-container'>
        {cars.map((car) => (
          <div className='card' key={car.id}>
            <img src={car.image} alt='' />
            <h3>{car.number_plate}</h3>
            <p>{car.driver_name}</p>
            {editMode && selectedCar && selectedCar.id === car.id ? (
              <div>
                <input
                  type='text'
                  value={selectedCar.route}
                  onChange={(e) =>
                    setSelectedCar({ ...selectedCar, route: e.target.value })
                  }
                />
                <button onClick={handleUpdate}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </div>
            ) : (
              <div>
                <p>{car.route}</p>
                <p>
                  <button
                    style={{ backgroundColor: "rgb(13, 226, 155)" }}
                    onClick={() => handleEdit(car)}
                  >
                    My Route
                  </button>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarImage;
