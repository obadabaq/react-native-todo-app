import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskStatus } from "../domain/task.status";
import { Task } from "../domain/task.entity";

interface TasksState {
    tasks: Task[],
}

const initialState: TasksState = {
    tasks: [],
}

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        toggleTask: (state, actions: PayloadAction<string>) => {
            const task = state.tasks.find(task => task.name === actions.payload);
            if (task) {
                if (task.status == TaskStatus.Done) task.status = TaskStatus.NotDone;
                else task.status = TaskStatus.Done;
            }
        }
    },
});

export const { toggleTask } = taskSlice.actions;

export default taskSlice.reducer;