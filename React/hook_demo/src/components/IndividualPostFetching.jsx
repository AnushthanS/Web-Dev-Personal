import axios from "axios";
import { useEffect, useState } from "react";
import './../App.css'

function IndividualPost(){
    const [paragraph, setParagraph] = useState("fetching");

    useEffect(function(){
        axios.get("https://jsonplaceholder.typicode.com/todos/1").then(response => setParagraph(response.data['title']));
    }, []);
    return (<p className="text-center text-cyan-800" >{paragraph}</p>);
}

export default IndividualPost;