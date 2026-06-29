import "./Badge.css";

function Badge({ variant = "purple", children, className = "" }) {
  return (
    <span className={`shared-badge shared-badge-${variant} ${className}`.trim()}>
      {children}
    </span>
  );
}

export default Badge;
