import React, {useState, useRef} from "react";
import ReactDOM from 'react-dom/client'
import { BsSearch } from 'react-icons/bs'
import './index.css'




function R10App(){

    const inputEl = useRef(null)

    const [visualisation, setVisualisation] = useState({
        opacity : "0"
    })

    function handleChange () {
            setVisualisation({
                opacity: "1"
            })
            inputEl.current.focus()
        }
    const wrapperStyling = {
    
        backgroundColor: '#555',
        height: "100vh",
        width: '100vw',
    }
    
    
    const loupStyling = {
        position: "absolute",
        top: "5%",
        right: '5%',
        fontSize: "50px",
        cursor: "pointer"
    }
    const searchBarStyling = {
        position: 'absolute',
        top: '20%',
        left: '30%',
        width: "400px",
        height: "50px",
        border: "none",
        borderBottom: '2px solid black',
        background: 'transparent',
        fontSize: "20px",
        opacity: visualisation.opacity
    
    }
    



    return (
        <div style={wrapperStyling}>
        <input type="text" placeholder="search" style={searchBarStyling} ref={inputEl}
        />
        <BsSearch style={loupStyling} onClick={handleChange}/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<R10App />)