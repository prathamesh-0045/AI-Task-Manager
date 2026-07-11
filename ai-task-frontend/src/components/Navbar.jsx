import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-blue-700 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-3xl font-bold">
        🤖 AI Task Manager
      </h1>

      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg"
      >
        Logout
      </button>
    </nav>
  );
}

export default Navbar;