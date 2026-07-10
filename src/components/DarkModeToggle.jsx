import { useEffect, useState } from "react";

function DarkModeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg"
    >
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;