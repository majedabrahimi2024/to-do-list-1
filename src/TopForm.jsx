import { Fragment, useContext, useState } from "react";
import { TaskContext } from "./TaskContext";

const TopForm = ()=>{
    const [task,setTask] = useState("");
    const {taskItems,setTaskItems} = useContext(TaskContext);

    const handleSetTask = (event)=>{
        setTask(event.target.value)
    };
    const handleAddTask = (event)=>{
        event.preventDefault();
        if(task.length){
            setTaskItems([...taskItems, {id:Math.random(),title:task,done:false}])
            setTask("")
        }else{
            setTask(task)
        }
    };
    return (
        <Fragment>
            <h4 className="text-center text-info text_shadow">To Do List
            </h4>
            <form action="#" onSubmit={handleAddTask}>
                <div className="form-group d-flex">
                    <input type="text" name="" id="" className="form-control" value={task} onChange={handleSetTask}/>
                    <button type="submit" className="btn btn-success add-task me-1">Add Task</button>
                </div>
            </form>
        </Fragment>
    );
};
export default TopForm;