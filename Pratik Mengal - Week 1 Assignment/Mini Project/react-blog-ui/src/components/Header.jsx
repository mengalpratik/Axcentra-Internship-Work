import { useEffect, useState } from "react";

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="app-header">
      <button
        className={`hamburger ${isSidebarOpen ? "open" : ""}`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className="brand">
        <div className="logo">NB</div>
        <div className="title">
          Neuro<span className="accent">Blogs</span>
        </div>
      </div>

      <div className="header-actions">
        <button
          className="ghost"
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};

export default Header;
