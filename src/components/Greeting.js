// import { event } from "cypress/types/jquery";
import React from "react"
import { useState } from "react"


const Greeting = () => {
    const [name, setName] = useState("");
    return(
        <>
        <p>Enter your name:</p>
        <input type="text" onChange={e => setName(e.target.value)}/>
        {name.trim().length > 0 && <p>Hello {name}!</p>}
        </>
    )
}

export default Greeting;