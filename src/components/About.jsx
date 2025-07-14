import "./About.css";
import profilePic from "../assets/myphoto.jpeg";
import TypingText from "./TypingText";
export default function About() {
  return (
    <section className="about-section">
      <div className="about-image">
        <img src={profilePic} alt="Chandra Kanta Koirala" />
      </div>
      <div className="about-content">
        <TypingText />
        <p>
          Web Developer | Travel Agent | Entrepreneur <br />
          Currently wrapping up my Bachelor's in CSIT.
          <br />
          Passionate about building digital products & helping people travel the
          world.
        </p>
        <ul>
          <li>💻 React, Next.js, Node.js, Express, MongoDB</li>
          <li>🌍 Travel Agency Founder</li>
          <li>📝 API Development & Integration</li>
          <li>🎯 Focused on Real-World Problem Solving</li>
          <li>💡 Entrepreneur with a Tech-Driven Mindset</li>
          <li>🚀 Learning & Growing Everyday</li>
        </ul>
      </div>
    </section>
  );
}
