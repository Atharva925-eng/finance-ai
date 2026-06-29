import "./Button.css";

function Button({ variant = "primary", type = "button", children, className = "", ...props }) {
  return (
    <button
      type={type}
      className={`shared-button shared-button-${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
