import { useState } from "react";

const Assignment = () => {
    const pad10 = {
        paddingLeft: '10%'
    }
    const pad20 = {
        paddingLeft: '12%'
    }
    const [task, setTask] = useState('');
    const [listTasks, setlistTasks] = useState([]);
    const [complete, setcomplete] = useState(0);
    const [notComplete, setnotComplete] = useState(0);
    
  
  return (
    <div>
        <h1>React Assignment</h1>
        <div style={pad10}>
            <input type="text" 
                value={task} 
                onChange={
                    (event)=>{
                        setTask(event.target.value)
                        }
                   }
            /> 
            <button style={{fontSize:"14px",marginLeft: '.5%'}} 
                onClick={
                    ()=>{
                        setlistTasks([...listTasks,
                            {
                                index:listTasks.length+1,
                                task:task,
                                done:false
                            }]);
                        console.log("tasks : "+listTasks);
                        console.log(listTasks);
                        setTask('');
                    }
                }
            >
                Add
            </button>
        </div>
        <div style={pad10}>
            <a>0 remaining out of 10 tasks</a>
        </div>
        <div style={pad20}>
        <Result tasksShow={""}/>
            {
                listTasks.map(task => {
                    console.log(task);
                    <Result tasksShow={task}/>
                })
            }
        </div>
    </div>
  );
};

// const  Input = ({task,onTaskChange})=>{
   
//     return (
//         <input type="text" value={task} onChange={onTaskChange}/> 
//     )
// }


const Result = ({tasksShow,onTasksClicked})=>{
    return (
        <li>
            {/* {tasksShow.task} */}
            boat
        </li>
    )
    
}

export default Assignment;