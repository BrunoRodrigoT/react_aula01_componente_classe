import React from "react";

class Classe extends React.Component{
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>Olá Mundo React</h1>
                <p>{this.props.texto}</p>
            </div>
        )
    }
}

export default Classe