import { useState } from "react";
import "./../App.css"
import Modal from "./Overlay";

function Todo(props) {
    const [modalState, setModalState] = useState(false);
    return (
        <>
            <div className="text-center border-2 rounded-lg py-4 m-2 w-3/4 sm:w-1/3 md:w-1/4 h-[150px]">
                <h2 className="p-2 mb-4 text-4xl">{props.text}</h2>
                <div>
                    <button className="p-1 bg-gray-900 rounded-lg text-white sm:w-1/3 hover:opacity-80" onClick={() => { setModalState(true) }}>Delete</button>
                </div>
            </div>
            <Modal isVisible={modalState} onCancel={()=> setModalState()} />
        </>
    );
}
export default Todo;