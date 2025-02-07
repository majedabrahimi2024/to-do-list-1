import React, { Fragment, useContext } from "react";
import { TaskContext } from "./TaskContext";

let newTask;
const TaskItems = ()=>{
    const {taskItems,setTaskItems} = useContext(TaskContext);

    
    const handleSetDoneTask = (id)=>{
        const index = taskItems.findIndex(task=>task.id === id);
        let newTaskItems = [...taskItems];
        newTaskItems[index].done = !newTaskItems[index].done;
        setTaskItems(newTaskItems);
        
    };
    const handleDeleteTask = (id)=>{
        newTask = taskItems.filter(task => task.id !== id);
        setTaskItems(newTask);
    };
    const handleDeleteAllTask = ()=>{
       newTask = taskItems.filter((task)=>task.done !== true);
       setTaskItems(newTask);
    };
    const handleSetAllDoneTask = ()=>{
        newTask = taskItems.filter((task)=>task.done = true);
        setTaskItems(newTask);
    };
    const handleSetAllNotDoneTask = ()=>{
        newTask = [...taskItems];
        newTask.forEach(task=>task.done = false);
        setTaskItems(newTask);
    };

    if(taskItems.length){
        return (
            <Fragment>
                <div className="d-flex justify-center text-center mt-3">
                    <i onClick={handleSetAllDoneTask} className="fas fa-check pointer text-success list-group-item d-flex justify-content-between"></i>
                    <i onClick={handleSetAllNotDoneTask} className="fas fa-times pointer text-warning me-3 list-group-item d-flex justify-content-between"></i>
                    <i onClick={handleDeleteAllTask} className="fas fa-trash pointer text-danger me-3 list-group-item d-flex justify-content-between"></i>
                </div>
                <ul className="list-group m-0 p-0 mt-4">
                    {taskItems.map(task=>(
                        <li className={`list-group-item d-flex justify-content-between ${task.done? "list-group-item-success":""}`}>
                        {task.title}
                            <span>
                                <i  className={`${task.done ?
                                                            "me-3 pointer fas fa-times text-warning transition_200 text_hover_shadow" 
                                                            :
                                                            "me-3 pointer fas fa-check text-success transition_200 text_hover_shadow"}`}
                                    onClick={()=> handleSetDoneTask(task.id)}>
                                </i>
                                <i  className={`${task.done ?
                                                            "me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow"
                                                            :
                                                            ""
                                }`}
                                    onClick={()=> handleDeleteTask(task.id)}>
                                </i>
                            </span>
                        </li>
                    ))}
                </ul>
            </Fragment>
        );
    }else{
        return <h4 className="text-center text-danger mt-3">No Task</h4>
    }
};
export default TaskItems;