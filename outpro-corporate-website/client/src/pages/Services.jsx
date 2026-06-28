import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaCloud,
  FaBullhorn,
  FaShieldAlt,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      desc: "Responsive, fast and secure websites using modern technologies.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      desc: "Android & iOS applications with beautiful UI and smooth performance.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI / UX Design",
      desc: "Modern and user-friendly interfaces for better user experience.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      desc: "Cloud deployment, hosting and scalable infrastructure.",
    },
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      desc: "SEO, Social Media Marketing and Brand Promotion.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      desc: "Protect your business with modern security solutions.",
    },
  ];

  return (
    <>
      <section className="service-hero">
        <div className="container text-center">
          <h1>Our Services</h1>
          <p>
            Complete IT solutions to help your business grow digitally.
          </p>
        </div>
      </section>

      <section className="container py-5">
        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="service-page-card">
                <div className="service-page-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.desc}</p>

                <button className="btn btn-primary">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Development Process */}

      <section className="bg-light py-5">

        <div className="container">

          <h2 className="text-center mb-5">
            Our Development Process
          </h2>

          <div className="row text-center">

            <div className="col-md-3">
              <h1>1️⃣</h1>
              <h5>Planning</h5>
            </div>

            <div className="col-md-3">
              <h1>2️⃣</h1>
              <h5>Design</h5>
            </div>

            <div className="col-md-3">
              <h1>3️⃣</h1>
              <h5>Development</h5>
            </div>

            <div className="col-md-3">
              <h1>4️⃣</h1>
              <h5>Deployment</h5>
            </div>

          </div>

        </div>

      </section>

      {/* Pricing */}

      <section className="container py-5">

        <h2 className="text-center mb-5">
          Pricing Packages
        </h2>

        <div className="row">

          <div className="col-md-4">

            <div className="pricing-card">

              <h3>Starter</h3>

              <h1>₹15,000</h1>

              <p>✔ Responsive Website</p>

              <p>✔ Contact Form</p>

              <p>✔ Basic SEO</p>

              <button className="btn btn-outline-primary w-100">
                Choose Plan
              </button>

            </div>

          </div>

          <div className="col-md-4">

            <div className="pricing-card featured">

              <h3>Professional</h3>

              <h1>₹40,000</h1>

              <p>✔ Business Website</p>

              <p>✔ Admin Panel</p>

              <p>✔ Database</p>

              <p>✔ SEO</p>

              <button className="btn btn-primary w-100">
                Choose Plan
              </button>

            </div>

          </div>

          <div className="col-md-4">

            <div className="pricing-card">

              <h3>Enterprise</h3>

              <h1>Custom</h1>

              <p>✔ Everything Included</p>

              <p>✔ Premium Support</p>

              <p>✔ Cloud Deployment</p>

              <button className="btn btn-outline-primary w-100">
                Contact Us
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="container py-5">

        <h2 className="text-center mb-4">
          Frequently Asked Questions
        </h2>

        <div className="accordion" id="faq">

          <div className="accordion-item">

            <h2 className="accordion-header">

              <button
                className="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#one"
              >
                How long does a website take?
              </button>

            </h2>

            <div
              id="one"
              className="accordion-collapse collapse show"
              data-bs-parent="#faq"
            >

              <div className="accordion-body">
                Usually between 2 to 6 weeks depending on project complexity.
              </div>

            </div>

          </div>

          <div className="accordion-item">

            <h2 className="accordion-header">

              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#two"
              >
                Do you provide maintenance?
              </button>

            </h2>

            <div
              id="two"
              className="accordion-collapse collapse"
              data-bs-parent="#faq"
            >

              <div className="accordion-body">
                Yes. We offer monthly maintenance and technical support.
              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="cta-section">

        <div className="container text-center">

          <h2>Need a Custom Solution?</h2>

          <p>Let's discuss your project today.</p>

          <button className="btn btn-warning btn-lg">
            Get Free Consultation
          </button>

        </div>

      </section>

    </>
  );
}

export default Services;