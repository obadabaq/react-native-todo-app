import { TaskStatus } from "./task.status";

export interface Task {
    name: string;
    status: TaskStatus;
}