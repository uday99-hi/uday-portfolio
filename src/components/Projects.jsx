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
    title: "Digital Marketplace for Farmers",

    image: "/images/farmer.png",

    description:
      "Designed and developed a full-stack e-commerce platform enabling farmers to list products, manage orders, and connect directly with buyers.",

    tech: [
      "Python",
      "Django",
      "React.js",
      "MySQL"
    ],

    github: null

  },


  {
    title: "Crop Price Prediction",

    image: "/images/crop.png",

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