import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";


const projects = [

  {
    title: "Yoga Pose Detection Using AI",

    image: "/images/yoga.png",

    description:
      "Developed a real-time browser-based yoga pose detection system using MoveNet for landmark detection and a custom-trained deep learning classifier. Implemented using TensorFlow.js for on-device inference with instant pose feedback.",

    tech: [
      "TensorFlow.js",
      "MoveNet",
      "React",
      "JavaScript",
      "Deep Learning"
    ],

    github:
      "https://github.com/uday99-hi/yoga-pose-detection"

  },


  {
    title: "Smart EV Charging Intelligence Platform ",

    image: "/images/EV Station1.png",

    description:"The project simulates data from multiple EV charging stations, sends the data to a FastAPI backend, stores it in PostgreSQL and uses Machine Learning to identify unusual charging behavior. The processed data is then visualized using Power BI.",

    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Power BI",
      "Machine Learning"
    ],
    github: "https://github.com/uday99-hi/-Smart-EV-Charging-Platform"

  },


  {
    title: "Crop Price Prediction",

    image: "/images/Crop price.png",

    description:
      "Built a machine learning model using Random Forest to forecast crop prices. Applied feature engineering techniques and deployed the model using Flask.",

    tech: [
      "Python",
      "Flask",
      "Scikit-learn",
      "Random Forest"
    ],

    github: null

  }

];



function Projects(){

return (

<section id="projects" className="projects-section">


<div className="projects-container">


<h2>
Projects
</h2>



<div className="projects-grid">


{
projects.map((project,index)=>(


<motion.div

key={index}

className="project-card"

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.6
}}

viewport={{
once:true
}}

>


<img

src={project.image}

alt={project.title}

className="project-image"

/>



<div className="project-content">


<h3>
{project.title}
</h3>



<p>
{project.description}
</p>



<div className="tech-stack">

{
project.tech.map((item,i)=>(

<span key={i}>
{item}
</span>

))
}

</div>



{
project.github && (

<div className="project-buttons">

<a

href={project.github}

target="_blank"

rel="noreferrer"

>

<FaGithub />

GitHub

</a>

</div>

)

}



</div>


</motion.div>


))

}



</div>


</div>


</section>

);

}


export default Projects;