function Stats() {
  const stats = [
    { number: 150, label: "Projects Completed" },
    { number: 80, label: "Happy Clients" },
    { number: 20, label: "Countries Served" },
    { number: 10, label: "Years Experience" },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="row text-center">
          {stats.map((item, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <h2>{item.number}+</h2>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;