import "../../styles/itwing.css";
import { useState } from "react";

const Feedback = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Feedback submitted successfully!");
    setForm({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    <div className="wing-page">
      <div className="wings-label">FEEDBACK FORM</div>

      <div className="wing-title-bar">
        CIVIL SUPPLIES DEPARTMENT FEEDBACK FORM
      </div>

      <div className="wing-content">
        <form onSubmit={handleSubmit} className="feedback-form">

          <div className="feedback-row">
            <input
              type="text"
              name="name"
              placeholder="Please Type Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Please Type Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Please Type Mobile"
              value={form.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Please Type Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="feedback-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
