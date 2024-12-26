import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Links() {
  return (
    <div>
    <div className="border-zinc-600 border-b-[0.25vh]"></div>
    <div className="h-[24.5vh] flex justify-center items-center text-[6vw]
    sm:text-[5vw] 
    md:text-[4vw]
    lg:text-[3vw]
    xl:text-[2.5vw] 
    2xl:text-[2.5vw] gap-[2vw]">  
      <a href="https://www.facebook.com/GameDevelopmentCompany"><FaFacebook /></a>
      <a href="https://www.instagram.com/squadcelloffical/"><FaInstagram /></a>
      <a href="https://www.linkedin.com/company/gamedevelopmentcompany"><FaLinkedinIn /></a>
    </div>
    <div className="border-zinc-600 border-b-[0.25vh]"></div>
    </div>
  )
}

export default Links
