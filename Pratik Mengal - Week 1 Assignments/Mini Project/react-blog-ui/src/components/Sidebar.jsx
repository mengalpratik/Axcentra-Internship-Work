const Sidebar = ({ setCategory, closeMenu }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-head">
        <h3>Menu</h3>
      </div>

      <ul className="nav-list">
        <li><button onClick={() => setCategory("All")}>Dashboard</button></li>
        <li><button onClick={() => setCategory("React")}>React</button></li>
        <li><button onClick={() => setCategory("CSS")}>CSS</button></li>
        <li><button onClick={() => setCategory("JavaScript")}>JavaScript</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;
