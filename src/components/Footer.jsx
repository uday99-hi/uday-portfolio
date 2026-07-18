import "./Footer.css";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";


function Footer(){

return (

<footer className="footer">


<div className="footer-container">


<h3>
Uday P
</h3>


<p>
Software Engineer | React Developer | AI Enthusiast
</p>



<div className="footer-links">


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



<a
href="https://leetcode.com/u/Udayp_21/"
target="_blank"
rel="noreferrer"
>
<FaCode/>
</a>


</div>



<p className="copyright">

© 2026 Uday P. All Rights Reserved.

</p>


</div>


</footer>

);

}


export default Footer;