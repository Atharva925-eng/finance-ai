import "./Skeleton.css";

function Skeleton({ lines = 3, className = "" }) {
  return (
    <div className={`skeleton-card ${className}`.trim()}>
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className="skeleton-line" />
      ))}
    </div>
  );
}

export default Skeleton;
