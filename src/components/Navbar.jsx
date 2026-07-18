import { motion } from "framer-motion";


function Navbar() {

  return (

    <motion.nav

      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}

      className="fixed top-0 left-0 w-full z-50 bg-slate-900/70 backdrop-blur-md border-b border-white/10"

    >

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">


        {/* Logo */}

        <a
          href="#"
          className="text-2xl font-bold text-cyan-400"
        >

          Uday P

        </a>




        {/* Menu */}

        <div className="hidden md:flex gap-8 text-gray-300">


          <a
            href="#about"
            className="hover:text-cyan-400 transition"
          >
            About
          </a>


          <a
            href="#skills"
            className="hover:text-cyan-400 transition"
          >
            Skills
          </a>


          <a
            href="#projects"
            className="hover:text-cyan-400 transition"
          >
            Projects
          </a>


          <a
            href="#experience"
            className="hover:text-cyan-400 transition"
          >
            Experience
          </a>


          <a
            href="#contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>


        </div>


      </div>


    </motion.nav>

  );

}


export default Navbar;