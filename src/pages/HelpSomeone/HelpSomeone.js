import React, { useEffect, useState } from 'react';
import { Text, FlatList, View, TouchableOpacity } from 'react-native';
import { styles } from './helpSomeoneStyles';

import { firebase } from '../../api/auth/firebaseConfig';

const HelpSomeone = ({navigation}) => {

    const [helpList, setHelpList] = useState([]);

    const loggedUser = firebase.auth().currentUser;
    const helpsCollection = firebase.firestore().collection("helps");

    useEffect(() => {
        
        if(helpsCollection){
            helpsCollection
            .where("userid", "!=", loggedUser.uid)
            .get()
            .then(registers => {
                const helpsListArray = [];
                registers.forEach(register => {
                    const help = register.data();
                    help.id = register.id;
                    helpsListArray.push(help);
                });
                setHelpList(helpsListArray);
            })            
        }
        
    }, [])

    return (
        <View style={styles.helpSomeoneContainer}>
            <FlatList keyExtractor={(item) => item.id} data={helpList} renderItem={HelpCard} />
        </View>
    )
}

const HelpCard = ({item}) => {
    const {type, title, intro} = item;
    return (
        <View style={styles.helpCard}>
            <Text style={styles.typeText}>{type}</Text>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.descriptionText}>{intro}</Text>
            
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonHelp}>
                    <Text style={styles.textButton}>Mais informações</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default HelpSomeone;