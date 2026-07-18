import "./Contact.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";


function Contact(){

    const form = useRef();


const sendEmail = (e) => {

  e.preventDefault();


  emailjs.sendForm(

    "service_gyghfji",

    "template_5qqo5ys",

    form.current,

    {
      publicKey: "8ub2kIOdGaSPkRch6",
    }

  )

  .then(

    () => {

      alert("Message sent successfully!");

      form.current.reset();

    },

    (error) => {

      console.log(error.text);

      alert("Failed to send message");

    }

  );

};


return (

<section id="contact" className="contact-section">


<div className="contact-container">


<motion.h2

initial={{opacity:0,y:-30}}

whileInView={{opacity:1,y:0}}

transition={{duration:0.6}}

>
Contact Me
</motion.h2>




<div className="contact-grid">



{/* Contact Information */}

<motion.div

className="contact-info"

initial={{opacity:0,x:-50}}

whileInView={{opacity:1,x:0}}

transition={{duration:0.6}}

>


<h3>
Get In Touch
</h3>



<div className="contact-item">

<FaEnvelope />

<p>
iamudayp21@gmail.com
</p>

</div>



<div className="contact-item">

<FaPhone />

<p>
+91 8123024760
</p>

</div>



<div className="contact-item">

<FaMapMarkerAlt />

<p>
Shivamogga, Karnataka
</p>

</div>




<div className="social-links">


<a
href="https://github.com/uday99-hi"
target="_blank"
rel="noreferrer"
>
<FaGithub/>
</a>



<a
href="https://www.linkedin.com/in/uday-p-138530389"
target="_blank"
rel="noreferrer"
>
<FaLinkedin/>
</a>


</div>


</motion.div>






{/* Contact Form */}


<motion.form

ref={form}

onSubmit={sendEmail}

className="contact-form"

initial={{opacity:0,x:50}}

whileInView={{opacity:1,x:0}}

transition={{duration:0.6}}

>


<input

type="text"

name="from_name"

placeholder="Your Name"

/>


<input

type="email"

name="from_email"

placeholder="Your Email"

/>


<textarea

name="message"

placeholder="Your Message"

rows="5"

/>



<button>

Send Message

</button>



</motion.form>



</div>


</div>


</section>

);

}


export default Contact;