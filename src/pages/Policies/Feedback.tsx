import Layout from "@/components/Layout";
import "./Policy.css";

const Feedback = () => (
  <Layout>
    <div className="policy-container">
      <div className="policy-box">
        <h2 className="policy-title">FEEDBACK FORM</h2>

        <form className="feedback-form">
          <input type="text" placeholder="Please Type Name" />
          <input type="email" placeholder="Please Type Email" />
          <input type="text" placeholder="Please Type Mobile" />
          <textarea placeholder="Please Type Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </Layout>
);

export default Feedback;
