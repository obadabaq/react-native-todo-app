import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { toggleTask } from "../../applcation/task.slice";
import { TaskStatus } from "../../domain/task.status";

const TaskCheckBox = ({ index, item }: { index: number, item: any }) => {
    const dispatch = useDispatch();

    return (
        <TouchableOpacity
            key={index}
            style={styles.container}
            onPress={() => dispatch(toggleTask(item.name))}
            activeOpacity={0.8}>
            <View style={styles.checkboxContainer}>
                <View
                    style={[
                        styles.checkbox,
                        { backgroundColor: item.status != TaskStatus.Done ? '#E5E5EA' : "#4287f5" },
                    ]}>
                    {item.status == TaskStatus.Done && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.label}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default TaskCheckBox;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 25,
        height: 25,
        borderRadius: 4,
        borderWidth: 1,
        marginRight: 10,
        borderColor: '#C7C7CC',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkmark: {
        fontSize: 16,
        color: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        marginLeft: 8,
        fontSize: 16,
        color: "#4287f5",
    },
});