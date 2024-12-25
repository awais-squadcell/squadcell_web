import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="flex justify-between px-[2vw] py-[1vw]">
      <div className="flex gap-[1vw]">
        <h1 className="text-[1vw]">&copy; 2024</h1>
        <h1 className="text-[1vw]">squadcell.All rights reserved</h1>
      </div>
      <div className="flex gap-[5vw]">
        <Link className="text-[1vw] hover:underline" to="/privacy">Privacy Policy</Link>
        <Link className="text-[1vw] hover:underline" to="/terms">Terms of Use</Link>
        <a className="text-[1vw] hover:underline" href="#">Support</a>
      </div>
    </div>
  )
}

export default Footer
