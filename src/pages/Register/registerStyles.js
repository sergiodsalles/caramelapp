import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const RegisterContainer = styled.ScrollView`
    flex: 1;
    padding: 0 15px;
`

export const InputsContainer = styled.View`
    margin: 10px 0;
`

export const styles = StyleSheet.create({
    switchContainer: {
        display: "flex",
        
        flexDirection: "row",
        marginVertical: 10,
        alignItems: "center",
        marginTop: 20,
        flex: 1,
    },
    switchLabel: {
        fontSize: 15,
        maxWidth: "auto",
    },
    switch: {
        height: 25
    }
})