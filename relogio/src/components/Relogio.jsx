import React from "react"; 

export default class extends React.Component{

    constructor(){
        super()
        this.state ={
            hora: new Date()
        }
    }

    componentDidMount(){
        this.timer = setInterval(() => this.tickTack(), 1000);
    }

    tickTack(){
        this.setState({hora: new Date()})
    }

    render(){
        return(
            <h2> 
                {this.state.hora.toLocaleTimeString()}
                <br />
                {this.state.hora.toLocaleDateString()}
            </h2>
        )
    }
}