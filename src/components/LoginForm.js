import React, { useState } from "react";
import { Button, Error, Input, FormField, Label } from "../styles";
import axios from "axios"


function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    // Make a POST request using Axios
    axios
    .post("/api/login/", {
      username,
      password,
    })
    .then((response) => {
      setIsLoading(false);
      if (response.status === 200) {
        onLogin(response.data); // Pass the user data to your login handler
      }
    })
    .catch((error) => {
      setIsLoading(false);
      if (error.response && error.response.data) {
        if (error.response.data.message) {
          setErrors([error.response.data.message]);
        } else {
          setErrors(["An error occurred. Please try again."]);
        }
      } else {
        setErrors(["An error occurred. Please check your network connection."]);
      }
    });
}

return (
  <form onSubmit={handleSubmit}>
     <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
    <FormField>
      <Button variant="fill" color="primary" type="submit">
        {isLoading ? "Loading..." : "Login"}
      </Button>
    </FormField>
    <FormField>
      {errors.map((err, index) => (
        <Error key={index}>{err}</Error>
      ))}
    </FormField>
  </form>
);
}

export default LoginForm;
