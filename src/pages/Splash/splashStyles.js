import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const SplashContainer = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
`

export const LogoContainer = styled.View`
    align-items: center;
    align-self: center;
`

export const ButtonsContainer = styled.View`
    width: 100%;
    margin: 10px 0;
    position: absolute;
    bottom: 0;
`

export const styles = StyleSheet.create({
    logo: {
        width: 375,
        height: 301,
    },
    subTitle: {
        color: '#666666',
        fontSize: 18,
        marginTop: 10,
    },
    button: {
        marginVertical: 5
    }
})