import React, { useState } from "react";
import TopForm from "./TopForm";
import TaskItems from "./TaskItems";
import { TaskContext } from "./TaskContext";

const App = ()=>{
    const [taskItems,setTaskItems] = useState([]);

    return (
        <div className="container w-100 h-100 p-3">
            <div className="row h-100 justify-content-center align-align-itens-start">
                <div className="to-do-list col-12 col-md-8 col-lg-6 bg-dark shadow rounded-3 p-3 h_fit">
                    <TaskContext.Provider value={{
                        taskItems,
                        setTaskItems,
                    }}>
                        <TopForm/>
                        <TaskItems/>
                    </TaskContext.Provider>
                </div>
            </div>
        </div>
    )
}
export default App;