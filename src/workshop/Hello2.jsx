import { useState } from "react";

const Hello2 = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
  return (
    <div>
      <form>
        <Name name={name} onNameChange={(event)=> setName(event.target.value)}/>
        <Age age={age} onAgeChange={(event)=> setAge(event.target.value)}/>
        <Show name={name} age={age}/>
      </form>
    </div>
  );



};

const  Name = ({name,onNameChange})=>{
    return (
    <div>
        Name: <input type="text" value={name} onChange={onNameChange}/>
    </div>
    )
}

const  Age = ({age,onAgeChange})=>{
    return(
    <div>
        Age: <input type="text" value={age} onChange={onAgeChange}/>
    </div>
    )
}

const  Show = ({name,age})=>{
    return(
    <div>
        Hi, {name} with age = {age}
    </div>
    )
}

export default Hello2;
