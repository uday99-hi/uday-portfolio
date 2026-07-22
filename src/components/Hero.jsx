import "./Hero.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";


function Hero() {

  return (

    <section className="hero-section">

      <div className="hero-container">


        {/* Content Section */}

        <motion.div

          className="hero-content"

          initial={{ opacity: 0, x: -50 }}

          animate={{ opacity: 1, x: 0 }}

          transition={{ duration: 0.8 }}

        >

          <p className="hero-small">
            Hello, I'm
          </p>


          <h1>
            Uday P
          </h1>


          <h2>
            Software Engineer
          </h2>


          <p className="hero-description">

            I build modern web applications and
            AI-powered solutions using React,
            JavaScript, Python and Machine Learning
            technologies.

          </p>



          <div className="hero-buttons">


            <a
              href="/Uday_Resume2(1).pdf"
              target="_blank"
              rel="noreferrer"
            >

              <FaDownload />

              Resume

            </a>



            <a
              href="https://github.com/uday99-hi"
              target="_blank"
              rel="noreferrer"
            >

              <FaGithub />

              GitHub

            </a>



            <a
              href="https://www.linkedin.com/in/uday-p-138530389"
              target="_blank"
              rel="noreferrer"
            >

              <FaLinkedin />

              LinkedIn

            </a>


          </div>


        </motion.div>




        {/* Image Section */}


        <motion.div

          className="hero-image-container"

          initial={{ opacity: 0, x: 50 }}

          animate={{ opacity: 1, x: 0 }}

          transition={{ duration: 0.8 }}


        >

          <div className="image-glow">

            <img

              src="/profile.jpeg"

              alt="Uday P"

              className="profile-ai"

            />

          </div>


        </motion.div>



      </div>


    </section>

  );

}


export default Hero;