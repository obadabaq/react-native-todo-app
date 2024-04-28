import { StyleSheet, Text, TouchableOpacity } from "react-native";

const FloatingButton = ({ navigation }: { navigation: any }) => {
    const handleFloatingButtonPress = () => {
        ///TODO: Navigate to AddTaskScreen
    };

    return (
        <TouchableOpacity
            style={styles.floatingButton}
            onPress={handleFloatingButtonPress}>
            <Text style={styles.floatingButtonText}>+</Text>
        </TouchableOpacity>
    );
};

export default FloatingButton;


const styles = StyleSheet.create({
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
});