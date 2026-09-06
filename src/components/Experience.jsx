import "./Experience.css";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";

const experiences = [
  {
    icon: <FaLaptopCode />,
    role: "Frontend Development Intern",
    company: "Cognifyz Technologies",
    duration: "July 2026 - August 2026",
    certificate: "/cognifyz.certificate.pdf",
    points: [
      "Developed responsive web pages using HTML, CSS, JavaScript and Bootstrap.",
      "Built interactive UI components and improved user experience.",
      "Implemented form validation and JavaScript-based functionality.",
      "Used Git and GitHub for version control and project submission."
    ]
  },
  {
    icon: <FaLaptopCode />,
    role: "Python Full Stack Developer Training",
    company: "DheeCoding Lab",
    duration: "Feb 2026 - May 2026",
    certificate: "/Dhee_Coding_Lab_Certificate.pdf",
    points: [
      "Completed Python Full Stack Development training covering frontend, backend and database concepts.",
      "Worked with Python, Django, HTML, CSS, JavaScript and SQL.",
      "Developed web applications using full-stack development practices.",
      "Strengthened programming, debugging and software development skills."
    ]
  }
];

function Experience() {
  return (
    <section className="experience-section">
      <div className="experience-container">
        <h2>Experience</h2>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="experience-icon">
              {exp.icon}
            </div>

            {/* This wrapper is important */}
            <div className="experience-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span>{exp.duration}</span>

              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {exp.certificate && (
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-btn"
                >
                  View Certificate
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;