import about from "../assets/images/about.jpg";

function AboutSection() {
  return (
    <section className="about-section py-5">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <img
              src={about}
              alt="About"
              className="img-fluid rounded shadow"
            />

          </div>

          <div className="col-lg-6">

            <h2>About Outpro</h2>

            <p>
              Outpro is a technology company that helps businesses
              build modern websites, mobile applications and digital
              products using the latest technologies.
            </p>

            <p>
              Our mission is to deliver innovative solutions that
              improve productivity and business growth.
            </p>

            <button className="btn btn-primary">
              Learn More
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;