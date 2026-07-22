import "./About.css";
import { motion } from "framer-motion";
import {
  FaUser,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-container">

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <h2>About Me</h2>

          <p>
            I'm a Computer Science and Design graduate passionate about
            building responsive web applications and AI-powered solutions.
            I enjoy solving problems, learning new technologies, and
            creating clean user experiences using React, JavaScript,
            Python, SQL, and Machine Learning.
          </p>

        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <div><FaUser /> Uday P</div>

          <div><FaMapMarkerAlt /> Shivamogga, Karnataka</div>

          <div><FaGraduationCap /> BE - Computer Science & Design</div>

          <div><FaLaptopCode /> Front-End Developer</div>

        </motion.div>

      </div>

      <div className="stats-container">

        <div className="stat-card">
          <h3>200+</h3>
          <span>LeetCode</span>
        </div>

        <div className="stat-card">
          <h3>5+</h3>
          <span>Projects</span>
        </div>

        <div className="stat-card">
          <h3>2026</h3>
          <span>Graduate</span>
        </div>

        <div className="stat-card">
          <h3>React</h3>
          <span>Developer</span>
        </div>

      </div>

    </section>
  );
}

export default About;