import { useEffect, useRef } from "react"
function Divider() {
    const path = useRef(null);
    let progress = 0;
    useEffect(() => {
        setPath(progress);
    }, []);

    const setPath = (progress) => {
        const { innderWidth } = window;
        const width = innerWidth;
        path.current.setAttributeNS("", "d", `M0 50 Q${width/2} 50, ${width} 50`);
    }

    const handleMouseMove = (e) => {
        const { movementY } = e;
        progress += movementY;
    };

  return (
        <div className="h-[1px] w-full relative my-[20px]">
            <div onMouseMove={handleMouseMove} className="h-[40px] border border-red-400 relative top-[-20px]" />
            <svg className="absolute w-full h-[100px] top-[-50px]">
                <path ref={path} className="stroke-white stroke-1 object-fill"></path>
            </svg>
        </div>
  )
}

export default Divider