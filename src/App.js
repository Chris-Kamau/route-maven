import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'
import CarImage from './components/CarImage';
import NavBar from './components/NavBar';
import Table from "./components/CarFormTable";
import './App.css';
import Login from "./components/Login";
import Footer from "./components/Footer";

function App  ()  {
 
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // if (!user) return <Login onLogin={setUser} />;
  return ( <>
  <div>
  <BrowserRouter>
  <NavBar  />
  <Routes>
  <Route path="/" element={<HomePage/>}></Route>
  <Route path="/car" element={<CarImage />}></Route>
  <Route path="/form-table" element={<Table />}></Route>
  {/* <Route path="/login" element={<Login onLogin={setUser} />} /> */}
  {/* <Route path="/form-table" element={<UpdateForm />}></Route> */}
  </Routes>
  </BrowserRouter>
  </div>
   <Footer/>
  </>

  );
 
};

export default App;
