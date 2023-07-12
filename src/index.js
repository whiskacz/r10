import React from "react";
import ReactDOM from 'react-dom/client'
import { BsSearch } from 'react-icons/bs'

document.body.style = {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box'
}


const wrapperStyling ={
    backgroundColor: '#555',
    height: "100vh",
    width: '100vw',
   

}


const loupStyling = {
    position: "absolute",
    top: "5%",
    right: '5%',
    fontSize: "50px",
}
const searchBarStyling = {
    position: 'absolute',
    top: '30%'
}


function R10App(){
    return (
        <div style={wrapperStyling}>
        <input type="text" style={{searchBarStyling}}
        />
        <BsSearch style={loupStyling}/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<R10App />)