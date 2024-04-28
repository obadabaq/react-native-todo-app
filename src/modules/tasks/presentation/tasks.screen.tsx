import { View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/root.store";

const TasksScreen = ({ }) => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    return (
        <View></View>
    );
};

export default TasksScreen;
