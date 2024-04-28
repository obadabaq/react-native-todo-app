import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/root.store";
import { TaskStatus } from "../../domain/task.status";
import AppBar from "../components/appbar";
import TaskCheckBox from "../components/task.checkbox";
import FloatingButton from "../components/floating.button";

const TasksScreen = ({ navigation }: { navigation: any }) => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    return (
        <View style={styles.container}>
            {/* App bar */}
            <AppBar title={"To do app"}></AppBar>
            {/* Main content */}
            <View style={styles.content}>
                {/* Not completed tasks */}
                <ScrollView>
                    {tasks.map((item, index) => (
                        item.status === TaskStatus.NotDone
                            ? <TaskCheckBox index={index} item={item}></TaskCheckBox> : null
                    ))}
                </ScrollView>

                <Text style={styles.completed}>Completed</Text>
                <View style={styles.size}></View>

                {/* Completed tasks */}
                <ScrollView>
                    {tasks.map((item, index) => (
                        item.status === TaskStatus.Done
                            ? <TaskCheckBox index={index} item={item}></TaskCheckBox> : null
                    ))}
                </ScrollView>
            </View>
            {/* Floating button */}
            <FloatingButton navigation={navigation}></FloatingButton>
        </View>
    );
};

export default TasksScreen;


const styles = StyleSheet.create({
    size: {
        marginBottom: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        marginTop: 30,
        marginLeft: 30
    },
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#4287f5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    floatingButtonText: {
        fontSize: 24,
        color: '#fff',
    },
    completed: {
        marginLeft: 8,
        fontSize: 26,
        color: "#4287f5",
        fontWeight: "bold",
    },
});