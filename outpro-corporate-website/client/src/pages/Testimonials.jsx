import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

function Testimonials() {

  const testimonials = [

    {
      name: "Rahul Sharma",
      company: "ABC Technologies",
      image: "👨",
      review:
        "Outpro delivered our corporate website before the deadline. The team was highly professional and supportive throughout the project.",
      rating: 5,
    },

    {
      name: "Priya Verma",
      company: "Bright Solutions",
      image: "👩",
      review:
        "Amazing UI/UX design and excellent communication. Our customers love the new website.",
      rating: 5,
    },

    {
      name: "Amit Gupta",
      company: "NextGen Pvt Ltd",
      image: "👨‍💼",
      review:
        "Highly recommended! They built our complete business management system with excellent quality.",
      rating: 5,
    },

    {
      name: "Sneha Kapoor",
      company: "Travel World",
      image: "👩‍💼",
      review:
        "The mobile application exceeded our expectations. Great experience working with the team.",
      rating: 5,
    },

    {
      name: "Rohan Mehta",
      company: "Food Express",
      image: "👨",
      review:
        "Professional service, modern design, and timely delivery. We are extremely satisfied.",
      rating: 5,
    },

    {
      name: "Anjali Singh",
      company: "Tech Vision",
      image: "👩",
      review:
        "Excellent support after project delivery. I would definitely work with Outpro again.",
      rating: 5,
    },

  ];

  return (
    <>

      {/* Hero */}

      <section className="testimonial-hero">

        <div className="container text-center">

          <h1>What Our Clients Say</h1>

          <p>
            Trusted by businesses across different industries.
          </p>

        </div>

      </section>

      {/* Testimonials */}

      <section className="container py-5">

        <div className="row">

          {testimonials.map((item, index) => (

            <div
              className="col-lg-4 col-md-6 mb-4"
              key={index}
            >

              <div className="testimonial-page-card">

                <div className="quote-icon">

                  <FaQuoteLeft />

                </div>

                <div className="client-avatar">

                  {item.image}

                </div>

                <h4>

                  {item.name}

                </h4>

                <small className="text-muted">

                  {item.company}

                </small>

                <div className="my-3">

                  {[...Array(item.rating)].map((_, i) => (

                    <FaStar
                      key={i}
                      className="text-warning"
                    />

                  ))}

                </div>

                <p>

                  "{item.review}"

                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Statistics */}

      <section className="bg-light py-5">

        <div className="container">

          <div className="row text-center">

            <div className="col-md-3">

              <h2>500+</h2>

              <p>Happy Clients</p>

            </div>

            <div className="col-md-3">

              <h2>98%</h2>

              <p>Client Satisfaction</p>

            </div>

            <div className="col-md-3">

              <h2>150+</h2>

              <p>Projects Delivered</p>

            </div>

            <div className="col-md-3">

              <h2>24/7</h2>

              <p>Support</p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <div className="container text-center">

          <h2>

            Become Our Next Happy Client

          </h2>

          <p>

            Let's work together to build something amazing.

          </p>

          <button className="btn btn-warning btn-lg">

            Start Your Project

          </button>

        </div>

      </section>

    </>
  );
}

export default Testimonials;