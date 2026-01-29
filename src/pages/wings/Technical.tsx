import "../../styles/itwing.css";

const Technical = () => {

  const handleReload = () => {
    window.location.reload(); 
  };

  return (
    <div className="wing-page">
      <div className="wings-label">APPLICATION</div>

      <div className="wing-title-bar">TECHNICAL WING</div>

      {/* Blinking NEW */}
      <div className="wing-title-bar">
        <span
          className="blinking-new"
          onClick={handleReload}
        >
          * NEW *
        </span>
      </div>
    </div>
  );
};

export default Technical;
