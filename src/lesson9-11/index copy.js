import React from "react";
import  ReactDOM  from "react-dom"

//!jsx

// const names = ["öznur", "pınar", "hacer"];


//! function component
const App = ()=> {
return(
    <div>
       <h1>Merhaba</h1> 
       <h1 className="display-4">Display 4</h1>

    </div>
    
)
}

ReactDOM.render(
    
    <App/>,
    document.getElementById("root")
    )
    
    
    //! class component
    /* class App2 extends React.Component {
        render(){
            return <h2>Benim Adım deren</h2>;
        }
    } */

    //     const buttonValue = "benim button"
    //     return (
    //     <div>
    // <button tabIndex="2" className="jsxClass" type="button" style={{padding:'10px', color: 'white', backgroundColor: 'blue', border: '2px 5px 3px solid black', }}>{buttonValue}</button>
    // {/* <button type="button" style={"padding: 10px; background-color: red; border: 2px 2px solid yellow; color: aliceblue;"}>Html button</button> */}
    
    //         {/* {names.map(name=> ( <h1>{name}</h1> ))}
    //         <h2>Gürcan</h2> */}
    //     </div>);