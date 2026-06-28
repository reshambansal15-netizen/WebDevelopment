import {
  FaCheckCircle,
} from "react-icons/fa";

function WhyChoose() {
  const reasons = [
    "Experienced Development Team",
    "Latest Technologies",
    "Affordable Pricing",
    "24×7 Technical Support",
    "High Quality Delivery",
    "Client Satisfaction",
  ];

  return (
    <section className="why-section">
      <div className="container">
        <h2 className="section-title">
          Why Choose Outpro?
        </h2>

        <div className="row">
          {reasons.map((reason, index) => (
            <div className="col-md-6 mb-3" key={index}>
              <p>
                <FaCheckCircle className="text-success me-2" />
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;