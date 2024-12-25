import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Links() {
  return (
    <div>
    <div className="border-zinc-600 mt-[8vw] border-b-[1px]"></div>
    <div className="flex justify-center text-[2vw] m-[3vw] gap-[2vw]">  
      <a href="https://www.facebook.com/GameDevelopmentCompany"><FaFacebook /></a>
      <a href="https://www.instagram.com/squadcelloffical/"><FaInstagram /></a>
      <a href="https://www.linkedin.com/company/gamedevelopmentcompany"><FaLinkedinIn /></a>
    </div>
    <div className="border-zinc-600 border-b-[1px]"></div>
    </div>
  )
}

export default Links
