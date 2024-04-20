import "./../App.css"

function Modal({ isVisible, onCancel }) {

    if (!isVisible) return null;

    return (
        <>
            <section className="fixed bg-opacity-25 bg-black backdrop-blur-sm inset-0 flex justify-center items-center" onClick={()=>{onCancel()}}>
                <div className="text-center bg-white border-2 rounded-lg py-4 m-2 w-1/2 h-[150px]">
                    <h2 className="p-2 mb-4 text-4xl">Are you sure?</h2>
                    <button className="p-1 m-1 bg-gray-900 rounded-lg text-white" onClick={()=>{onCancel()}}>Cancel</button>
                    <button className="p-1 m-1 bg-gray-900 rounded-lg text-white">Confirm</button>
                </div>
            </section>
        </>

    );
}
export default Modal; 