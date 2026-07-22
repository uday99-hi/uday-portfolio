import "./Achievements.css";
import { motion } from "framer-motion";
import { FaCode, FaGithub, FaLaptopCode } from "react-icons/fa";


function Achievements(){

return (

<section id="achievements" className="achievement-section">


<div className="achievement-container">


<motion.h2

initial={{opacity:0,y:-30}}

whileInView={{opacity:1,y:0}}

transition={{duration:0.6}}

>
Coding Achievements
</motion.h2>



<div className="achievement-grid">



<motion.div

className="achievement-card"

whileHover={{scale:1.05}}

>


<FaCode />


<h3>
200+
</h3>


<p>
LeetCode Problems Solved
</p>


<a
href="https://leetcode.com/"
target="_blank"
rel="noreferrer"
>
View Profile
</a>


</motion.div>





<motion.div

className="achievement-card"

whileHover={{scale:1.05}}

>


<FaGithub />


<h3>
GitHub
</h3>


<p>
Projects and Source Code
</p>


<a
href="https://github.com/uday99-hi"
target="_blank"
rel="noreferrer"
>
View Profile
</a>


</motion.div>






<motion.div

className="achievement-card"

whileHover={{scale:1.05}}

>


<FaLaptopCode />


<h3>
Python Full Stack
</h3>


<p>
DheeCoding Lab Training
</p>


<span>
Completed
</span>


</motion.div>



</div>


</div>


</section>

);

}


export default Achievements;