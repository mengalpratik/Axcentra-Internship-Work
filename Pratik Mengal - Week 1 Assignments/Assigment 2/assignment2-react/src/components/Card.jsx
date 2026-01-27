const Card = ({ title, children, footer }) => {
  return (
    <div className="card">
      <h3>{title}</h3>

      <div style={{ marginTop: "10px" }}>
        {children}
      </div>

      {footer && (
        <div style={{ marginTop: "15px", fontSize: "14px", color: "#94a3b8" }}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
