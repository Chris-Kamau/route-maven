import React, { useState } from "react";
import { Button, Error, Input, FormField, Label } from "../styles";
import axios from 'axios';

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]); // Initialize errors as an empty array
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);

    // Ensure the POST request sends data to the correct endpoint.
    axios
      .post("/api/signup/", {
        username,
        password,
        password_confirmation: passwordConfirmation,
      })
      .then((response) => {
        setIsLoading(false);
        if (response.status === 200) {
          onLogin(response.data);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        if (error.response && error.response.data) {
          if (error.response.data.errors) {
            setErrors(error.response.data.errors);
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
        <Label htmlFor="password_confirmation">Confirm Password</Label>
        <Input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      </FormField>
      <FormField>
        {errors.map((err, index) => (
          <Error key={index}>{err}</Error>
        ))}
      </FormField>
    </form>
  );
}

export default SignUpForm;
