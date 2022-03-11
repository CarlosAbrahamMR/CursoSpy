import React, {useState} from "react";

function Pokemon(props){
    const {name, setName} = useState("4");
        return (
            <>
            <h1> Pokemon: {props.name} </h1>
            <button onClick={()=> setName(name="a")}> Cambiar Nombre </button>
            </>
        );
}
export default Pokemon;