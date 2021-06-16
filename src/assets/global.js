import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const GlobalContainer = styled.SafeAreaView`
    flex: 1;
    padding: 10px;
`

export const globalStyles = StyleSheet.create({
    navContainer: {
        padding: '10px'
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: "#fff",
        borderRadius: 8,
        fontSize: 16,
        marginVertical: 5
    }
});