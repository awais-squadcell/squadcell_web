import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Head({ theme, toggleTheme }) {
  return (
    <div className="h-[10vh] px-4 
    text-[8vw]
    sm:text-[7vw] 
    md:text-[6vw]
    lg:text-[4.6vw]
    xl:text-[4vw] 
    2xl:text-[4vw]
   font-bold
   flex justify-between">
      <Link to={'/'}>Squad Cell</Link>
      <button
        onClick={toggleTheme}  
        className="text-[2.7vw] sm:text-[2vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.3vw] 2xl:text-[1.2vw] rounded-3xl m-[3vw] sm:m-[2vw] md:m-[1.5vw] lg:m-[1vw] xl:m-[1vw] 2xl:m-[1vw] px-[1vw] border">
        <div className="w-[15vw] sm:w-[13vw] md:w-[12vw] lg:w-[10vw] xl:w-[8vw] 2xl:w-[7vw]">{theme}</div>
      </button>
    </div>
  );
}

// Add PropTypes validation
Head.propTypes = {
  theme: PropTypes.string.isRequired, // The 'theme' prop should be a required string
  toggleTheme: PropTypes.func.isRequired, // The 'toggleTheme' prop should be a required function
};

export default Head;