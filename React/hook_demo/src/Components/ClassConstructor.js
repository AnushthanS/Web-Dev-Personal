import React, {Component} from "react";

class CarClassProps extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <h2>I am a {this.props.model}!</h2>;
    }
}