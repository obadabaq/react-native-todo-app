import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/root.store";
import { addTask, changeAddTaskInput, clearTaskInput } from "../../applcation/task.slice";
import AppBar from "../components/appbar";

const AddTaskScreen = ({ navigation }: { navigation: any }) => {
    const inputValue = useSelector((state: RootState) => state.tasks.addTaskInput);
    const dispatch = useDispatch();

    const handleInputChange = (text: string) => {
        dispatch(changeAddTaskInput(text));
    };

    const handleButtonPress = () => {
        dispatch(addTask(inputValue));
        dispatch(clearTaskInput());
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {/* App bar */}
            <AppBar title={"Add"}></AppBar>
            {/* Main content */}
            <View style={styles.inputContainer}>
                <TextInput
                    value={inputValue}
                    placeholderTextColor="black"
                    onChangeText={handleInputChange}
                    placeholder="Task"
                    style={styles.textInput}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleButtonPress}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};

export default AddTaskScreen;


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4287f5',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    textInput: {
        borderWidth: 1,
        width: 250,
        marginBottom: 40,
        borderColor: 'black',
        color: "black",
        textAlign: "left",
        left: 0,
        paddingVertical: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});