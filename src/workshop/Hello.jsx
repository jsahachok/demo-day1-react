import { useState } from "react"

const Hello = () => {
    const [name,setName] = useState("");
    function handleName(event){
        setName(event.target.value)
    }
    return (
        <div>
            <form>
                Name : <input type="text" onChange={handleName} />
            </form>
            {/* Please enter your name */}
            {name? <b>Hi, {name}</b>: "Please enter your name"}
        </div>
    )
}

export default Hello