import { StyleSheet, Text, View } from "react-native";


const AppBar = ({ title }: { title: string }) => {
    return (
        <View style={styles.appBar}>
            <Text style={styles.appBarTitle}>{title}</Text>
        </View>
    );
};

export default AppBar;

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
    appBar: {
        height: 60,
        backgroundColor: '#4287f5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    appBarTitle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});