import "./Skills.css";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      "Python",
      "SQL",
      "MongoDB",
    ],
  },
  {
    title: "Tools & AI",
    skills: [
      "Git & GitHub",
      "TensorFlow.js",
      "Machine Learning",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">

      <div className="skills-container">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="skills-grid">

          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              className="skill-category"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>{group.title}</h3>

              <div className="skill-list">

                {group.skills.map((skill, i) => (
                  <span key={i} className="skill-chip">
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;