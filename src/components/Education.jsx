import "./Education.css";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";


const education = [

  {
    icon: <FaGraduationCap />,
    degree: "Bachelor of Engineering",
    branch: "Computer Science and Design",
    college: "PES Institute of Technology and Management",
    location: "Shivamogga, Karnataka",
    duration: "2022 - 2026",
    grade: "Graduated",
    score: "CGPA: 6.8/10"
  },


  {
    icon: <FaSchool />,
    degree: "Pre-University Course (PUC)",
    branch: "Science",
    college: "Sir MV PU College",
    location: "Davanagere, Karnataka",
    duration: "2020 - 2022",
    grade: "Completed",
    score: "Percentage: 67%"
  },


  {
    icon: <FaSchool />,
    degree: "Secondary School Education (10th)",
    branch: "School Education",
    college: "National Residential School(ICSE)",
    location: "Konandur, Karnataka",
    duration: "2020",
    grade: "Completed",
    score: "Percentage: 83%"
  }

];


function Education(){

return (

<section id="education" className="education-section">


<div className="education-container">


<motion.h2

initial={{
opacity:0,
y:-30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.6
}}

>
Education
</motion.h2>



<div className="timeline">


{
education.map((edu,index)=>(


<motion.div

key={index}

className="education-card"

initial={{
opacity:0,
x:index%2===0 ? -50 : 50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:0.6
}}

viewport={{
once:true
}}

>


<div className="education-icon">

{edu.icon}

</div>



<div className="education-content">


<h3>
{edu.degree}
</h3>


<h4>
{edu.branch}
</h4>


<p>
{edu.college}
</p>


<p>
{edu.location}
</p>


<span>
{edu.duration}
</span>

<p className="education-score">
{edu.score}
</p>


<div className="education-tag">

{edu.grade}

</div>


</div>


</motion.div>


))

}


</div>


</div>


</section>

);

}


export default Education;