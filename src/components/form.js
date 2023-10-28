import React, { useState, useEffect } from 'react';
import  '../css/tablestyle.css'

function Form() {
  const [formData, setFormData] = useState({
    number_plate: '',
    image: '',
    owner_id: '',
    driver_name: '',
    driver_contact: '',
    route: '',
  });

  const [, setLastProductId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/cars?_sort=id&_order=desc&_limit=1')
      .then((response) => response.json())
      .then((data) => {
        setLastProductId(data[0]?.id || 0);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

const handleSubmit = (event) => {
    event.preventDefault();
  
    fetch('http://localhost:3000/cars')
      .then(response => response.json())
      .then(data => {
        const lastProduct = data[data.length - 1];
        const lastProductId = parseInt(lastProduct.id);
        const newProductId = lastProductId + 1;
        const newProduct = {...formData, id: newProductId.toString()};
  
        fetch('http://localhost:3000/cars', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProduct),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
            setFormData({
                number_plate: '',
                image: '',
                owner_id: '',
                driver_name: '',
                driver_contact: '',
                route: '',
            });
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group">
      <label>
       car Image:
       <input type="text" name="image" value={formData.image} onChange={handleInputChange} required />
      </label>
      </div>
      <br />
      <div class="form-group">
      <label>
      no. plate:
      <input type="text" name="number_plate" value={formData.number_plate} onChange={handleInputChange} required />
      </label>
      </div>
      <br />
      <div class="form-group">
      <label>
      driver name:
      <input type="text" name="driver_name" value={formData.driver_name} onChange={handleInputChange} required />
      </label>
      </div>
      <br />
      <div class="form-group">
      <label>
      owner id:
        <input
          type="number"
          name="owner_id"
          value={formData.owner_id}
          onChange={handleInputChange}
          min="1"
          max="5"
          required
        />
      </label>
      </div>
      <br />
      <div class="form-group">
      <label>
      initial  route:
      <input type="text" name="route" value={formData.route} onChange={handleInputChange} required />
      </label>
      </div>
      <br />
      <div class="form-group">
      <label>
       driver contact:
        <input type="number" name="driver_contact" value={formData.driver_contact} onChange={handleInputChange} required />
      </label>
      </div>
      <br />
      <button style={{backgroundColor:"rgb(15, 226, 155)"}} type="submit">Submit</button>
    </form>
  );
}

export default Form;