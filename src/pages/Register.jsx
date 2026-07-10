import { useState } from "react";
import authService from "../services/authService";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

   try {
  const response = await authService.register({
    name,
    email,
    password,
  });

  console.log("SUCCESS:", response);
  alert(response);

} catch (error) {
  console.log("ERROR:", error);
  console.log("RESPONSE:", error.response);
  console.log("DATA:", error.response?.data);

  alert("Registration Failed");
}
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;