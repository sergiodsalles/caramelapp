import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    homeContainer: {
        padding: 15,
        display: "flex",
        flex: 1,
    },
    logoText: {
        marginVertical: 20,
        alignSelf: "center"
    },
    welcomeText: {
        alignSelf: "center"
    },
    cardsContainer: {
        marginTop: 30,
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "space-between"
    },
    card: {
        padding: 30,
        margin: 5,
        backgroundColor: "#e5e5e5",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        width: "47%"
    },
    cardText: {
        fontSize: 20
    },
    cardImg: {
        maxHeight: 80
    }
})