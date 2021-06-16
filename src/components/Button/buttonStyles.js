import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
        padding: 20,
        borderRadius: 8,
        marginVertical: 5
    }, 
    buttonPrimary: {
        backgroundColor: '#9F7542',
    },
    buttonLabel: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: "uppercase",
        textAlign: "center",
    },
    buttonSecondary: {
        backgroundColor: '#FFFFFF',
        borderColor: '#9F7542',
        borderStyle: "solid",
        borderWidth: 1
        
    },
    buttonLabelSecondary: {
        color: '#73A68C',
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: "uppercase",
        textAlign: "center",
    }

})