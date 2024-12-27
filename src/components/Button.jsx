import { useState } from "react";
import Support from "./Support";

function Button() {

  const [isSupportVisible, setIsSupportVisible] = useState(false);
    
  const openSupport = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setIsSupportVisible(true);
  };

  const closeSupport = () => {
    setIsSupportVisible(false);
  };

  return (
    <>
    <div className="h-[30vh]
     text-[4vw] 
     sm:text-[3vw]
     md:text-[2.5vw]
     lg:text-[2.4vw] 
     xl:text-[2vw]
     2xl:text-[2vw] font-medium px-[5vw]">
        <h1 className="">Let&apos;s share your idea with us</h1>
        <button className="bg-[#C5E836] text-zinc-950 
        text-[3vw] 
        sm:text-[2.5vw]
        md:text-[2vw] 
        lg:text-[1.7vw]
        xl:text-[1.5vw] 
        2xl:text-[1.5vw] cursor-pointer rounded mt-[1vw] ml-[1vw] px-[1vw]" onClick={openSupport}>Let&apos;s talk!</button>
    </div>
    {isSupportVisible && <Support onClose={closeSupport} />}
    </>
    
  )
}

export default Button
