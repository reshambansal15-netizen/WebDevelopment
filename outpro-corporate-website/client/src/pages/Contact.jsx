import { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/contact`,
        form
      );

      setStatus(res.data.message);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    }
  };

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Contact Us
            </h2>

            {status && (
              <div className="alert alert-info">
                {status}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
              />

              <textarea
                rows="5"
                className="form-control mb-3"
                placeholder="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Send Message
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;