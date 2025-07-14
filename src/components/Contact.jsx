import { FaGithub, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      style={{
        background: "#0072ff",
        color: "white",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Contact Me</h2>

      <div style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
        <p style={{ margin: "10px 0" }}>
          <FaEnvelope style={{ marginRight: "8px" }} />
          <a
            href="mailto:puzankoirala786@gmail.com"
            style={{ color: "#fff", textDecoration: "underline" }}
          >
            puzankoirala786@gmail.com
          </a>
        </p>
        <p style={{ margin: "10px 0" }}>
          <FaPhone style={{ marginRight: "8px" }} />
          <a
            href="tel:+9779807495755"
            style={{ color: "#fff", textDecoration: "underline" }}
          >
            +977 9807495755
          </a>
        </p>
      </div>

      <div style={{ marginTop: "20px", fontSize: "2rem" }}>
        <a
          href="https://github.com/pujan22w"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", margin: "0 15px" }}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/puzan.koirala.14"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", margin: "0 15px" }}
        >
          <FaFacebook />
        </a>
      </div>

      <p style={{ marginTop: "30px", fontStyle: "italic", fontSize: "1rem" }}>
        I'm available for freelance projects, collaborations, or any
        tech/business opportunities. Feel free to reach out!
      </p>
    </section>
  );
}
