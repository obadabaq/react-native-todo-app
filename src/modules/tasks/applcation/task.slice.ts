import { createSlice } from "@reduxjs/toolkit";
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
    reducers: {},
});

export const { } = taskSlice.actions;

export default taskSlice.reducer;