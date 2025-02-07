import React, { createContext } from "react";
import TaskItems from "./TaskItems";

export const TaskContext = createContext({
    TaskItems:[],
    setTaskItems:()=>{},
})