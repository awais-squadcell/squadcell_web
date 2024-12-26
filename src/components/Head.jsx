import { Link } from "react-router-dom"

function Head() {
  return (
    <div className="h-[10vh] px-4 
    text-[8vw]
    sm:text-[7vw] 
    md:text-[6vw]
    lg:text-[4.6vw]
    xl:text-[4vw] 
    2xl:text-[4vw]
   font-bold">
      <Link to={'/'}>Squad Cell</Link>
    </div>
  )
}

export default Head
