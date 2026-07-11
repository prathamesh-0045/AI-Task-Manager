import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await authService.login({
        email,
        password,
      });

      console.log(response);

      // Temporary until JWT is implemented
      localStorage.setItem("token", "dummy-token");

      navigate("/dashboard");

    }catch (error) {
  console.log("ERROR:", error);
  console.log("RESPONSE:", error.response);
  console.log("STATUS:", error.response?.status);
  console.log("DATA:", error.response?.data);

  alert("Login Failed");
}
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow w-96"
      >
        <h2 className="text-3xl font-bold mb-6">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;