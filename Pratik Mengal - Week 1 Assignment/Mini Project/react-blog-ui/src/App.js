import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [category, setCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className="app">
      <Header
        isSidebarOpen={menuOpen}
        setIsSidebarOpen={setMenuOpen}
      />

      <aside className={`sidebar-wrap ${menuOpen ? "open" : ""}`}>
        <Sidebar
          setCategory={setCategory}
          closeMenu={() => setMenuOpen(false)}
        />
      </aside>

      <main className="content">
        <Dashboard category={category} />
      </main>
    </div>
  );
}

export default App;
