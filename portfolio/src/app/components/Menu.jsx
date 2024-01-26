import { useState } from 'react'

function Menu() {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <div className="fixed left-[48vw] top-2 w-[40px] h-[40px] rounded-full bg-white cursor-pointer flex justify-center items-center" onClick={() => setIsActive(!isActive)}>

                <div className={`block h-[1px] w-[50%] m-auto bg-color2 absolute transition-transform ${isActive ? 'rotate-[-45deg]' : 'rotate-0'} duration-500 ease-in-out`} />
                <div className={`block h-[1px] w-[50%] m-auto bg-color2 absolute transition-transform ${isActive ? 'rotate-45' : 'rotate-0'} duration-500 ease-in-out`} />

            </div>
        </>
    )
}

export default Menu