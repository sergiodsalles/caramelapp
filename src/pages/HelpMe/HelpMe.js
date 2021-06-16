import React, { useState } from 'react';
import { Alert, ScrollView, TextInput } from 'react-native';
import { styles } from './helpMeStyles';

import { firebase } from '../../api/auth/firebaseConfig';

import { globalStyles } from '../../assets/global';
import Button from '../../components/Button/Button';

const HelpMe = ({navigation}) => {

    const initialState = {
        title: null,
        intro: null,
        description: null,
        userid: null,
        type: "Ajuda"
    }

    const [helpData, setHelpData] = useState(initialState);

    const handleSaveHelp = () => {
        const loggedUser = firebase.auth().currentUser;
        const helpsCollection = firebase.firestore().collection("helps");
        helpsCollection
            .doc()
            .set({...helpData, userid: loggedUser.uid})
            .then(()=>{
                Alert.alert("Sucesso", "Pedido de ajuda salvo com sucesso.");
                navigation.navigate("Início");
            })
            .catch((error) => {
                Alert.alert("Erro ao salvar", error.message);
            })
    }

    return (
        <ScrollView style={styles.helpMeContainer}>

            <TextInput onChangeText={value => setHelpData({...helpData, title: value})} style={globalStyles.input} placeholder="Título"/>
            <TextInput onChangeText={value => setHelpData({...helpData, intro: value})} multiline={true} textAlignVertical="top" numberOfLines={3} style={globalStyles.input} placeholder="Introdução"/>
            <TextInput onChangeText={value => setHelpData({...helpData, description: value})} multiline={true} textAlignVertical="top" numberOfLines={10} style={globalStyles.input} placeholder="Descrição detalhada"/>

            <Button onPress={handleSaveHelp} label="Salvar" />
        </ScrollView>    
    )
}

export default HelpMe;