import React from 'react';

const UpdateForm = ({ car }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-md">
          <a className="navbar-brand" href="/">CRUD</a>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <h2>Update Data</h2>
            <br />

            <form action={`/api/todos/${car.id}`} method="post">
              <input type="hidden" name="_method" value="PUT" /> {/* Include this for a PUT request in a RESTful API */}
              <input type="hidden" name="csrfmiddlewaretoken" value="{{ csrf_token }}" />

              <div className="form-group">
              <input type="text" name="image" placeholder="Image" value={car.image} required />
              </div>

              <div className="form-group">
                <input type="text" name="number_plate" placeholder="Number Plate" value={car.number_plate} required />
              </div>

              <div className="form-group">
                <input type="text" name="driver_name" placeholder="Driver Name" value={car.driver_name} required />
              </div>
              <div className="form-group">
                <input type="text" name="route" placeholder="Initial Route" value={car.route} required />
              </div>
              <div className="form-group">
                <input type="number" name="driver_contact" placeholder="Driver Contact" value={car.driver_contact} required />
              </div>
              <div className="form-group mt-2">
                <select id="gender" name="gender" className="form-control" required>
                  <option value={car.gender} selected>{car.gender}</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="d-grid gap-2">
                <button className="btn btn-success mt-2" type="submit">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
