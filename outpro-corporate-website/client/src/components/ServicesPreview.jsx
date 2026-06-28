import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
} from "react-icons/fa";

function ServicesPreview() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      desc: "Responsive business websites using modern technologies.",
    },
    {
      icon: <FaMobileAlt />,
      title: "App Development",
      desc: "Android & iOS mobile applications with clean UI.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI / UX Design",
      desc: "Creative and user-friendly digital experiences.",
    },
  ];

  return (
    <section className="container py-5">
      <h2 className="section-title">Our Services</h2>

      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="service-card">
              <div className="service-icon">{service.icon}</div>

              <h4>{service.title}</h4>

              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesPreview;