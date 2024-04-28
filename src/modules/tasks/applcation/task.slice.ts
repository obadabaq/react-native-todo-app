import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskStatus } from "../domain/task.status";
import { Task } from "../domain/task.entity";

interface TasksState {
    tasks: Task[],
    addTaskInput: string,
}

const initialState: TasksState = {
    tasks: [],
    addTaskInput: "",
}

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, actions: PayloadAction<string>) => {
            state.tasks = [...state.tasks, { name: actions.payload, status: TaskStatus.NotDone }];
        },
        toggleTask: (state, actions: PayloadAction<string>) => {
            const task = state.tasks.find(task => task.name === actions.payload);
            if (task) {
                if (task.status == TaskStatus.Done) task.status = TaskStatus.NotDone;
                else task.status = TaskStatus.Done;
            }
        },
        changeAddTaskInput: (state, actions: PayloadAction<string>) => {
            state.addTaskInput = actions.payload;
        },
        clearTaskInput: (state) => {
            state.addTaskInput = "";
        }
    },
});

export const { addTask, toggleTask, changeAddTaskInput, clearTaskInput } = taskSlice.actions;

export default taskSlice.reducer;