import React, { useState } from "react";

function ReactForm(){
    const [color, setColor] = useState("Blue");

    return(
        <div>
            <h1>The selected color is {color}</h1>
            <button onClick={() => setColor('Pink')}>Button 1</button>
            <button onClick={() => setColor('Lavendar')}>Button 2</button>
        </div>
    );
}
export default ReactForm;