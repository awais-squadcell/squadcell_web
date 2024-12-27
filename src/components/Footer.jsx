import { useState } from "react";
import { Link } from "react-router-dom";
import Support from "./Support"; // Adjust the path to your Support component

function Footer() {
  const [isSupportVisible, setIsSupportVisible] = useState(false);

  const openSupport = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setIsSupportVisible(true);
  };

  const closeSupport = () => {
    setIsSupportVisible(false);
  };

  return (
    <div
      className="h-[5vh] 
    text-[2.3vw]
    sm:text-[2vw] 
    md:text-[1.5vw] 
    lg:text-[1.25vw]
    xl:text-[1vw]
    2xl:text-[1vw]"
    >
      <div className="flex justify-between px-[2vw]">
        <div className="flex gap-[1vw]">
          <h1>&copy; 2024</h1>
          <h1>squadcell. All rights reserved</h1>
        </div>
        <div className="flex gap-[5vw]">
          <Link className="hover:underline" to="/privacy">
            Privacy Policy
          </Link>
          <Link className="hover:underline" to="/terms">
            Terms of Use
          </Link>
          <a
            className="hover:underline cursor-pointer"
            href="#"
            onClick={openSupport}
          >
            Support
          </a>
        </div>
      </div>
      {isSupportVisible && <Support onClose={closeSupport} />}
    </div>
  );
}

export default Footer;
