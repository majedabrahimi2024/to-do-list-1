import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";

const TaskItems = ()=>{
    const {taskItems,setTaskItems} = useContext(TaskContext);

    
    const handleSetDoneTask = (id)=>{
        const index = taskItems.findIndex(task=>task.id === id);
        let newTaskItems = [...taskItems];
        newTaskItems[index].done = !newTaskItems[index].done;
        setTaskItems(newTaskItems);
        
    };

    const handleDeleteTask = (id)=>{
        let newTask = taskItems.filter(task => task.id !== id);
        setTaskItems(newTask);
    };

    if(taskItems.length){
        return (
            <ul className="list-group m-0 p-2 mt-2">
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
        );
    }else{
        return <h4 className="text-center text-danger mt-3">no task</h4>
    }
};
export default TaskItems;