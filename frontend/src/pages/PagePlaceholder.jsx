import "./PagePlaceholder.css";

function PagePlaceholder({ title }) {
  return (
    <main className="placeholder-page">
      <section className="placeholder-card">
        <h1>{title}</h1>
        <p>This is a placeholder page for the {title.toLowerCase()} section.</p>
      </section>
    </main>
  );
}

export default PagePlaceholder;
