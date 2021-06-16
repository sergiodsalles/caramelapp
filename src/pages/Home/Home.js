import React from 'react'
import { ScrollView, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from './homeStyles';

import { firebase } from '../../api/auth/firebaseConfig';

import DOG_HELP from "../../assets/images/HelpDog.png";
import ANGRY_DOG from "../../assets/images/AngryDog.png";
import SAD_DOG from "../../assets/images/SadDog.png";

const Home = ({navigation, user}) => {

    const handleLogout = () => {
        firebase.auth().signOut().then(() => {
            navigation.navigate("Splash");
        }).catch((error) => {
            Alert.alert("Erro", error.message());
        });
    }

    return (
        <ScrollView style={styles.homeContainer}>
            <Image style={styles.logoText} source={require("../../assets/images/textlogo.png")} />

            <Text style={styles.welcomeText}>Olá{`${user ? ` ${user.name}.` : "!"}`} O que deseja fazer hoje?</Text>
            
            <View style={styles.cardsContainer}>
                <TouchableOpacity onPress={()=> navigation.navigate("Pedir ajuda")} style={styles.card}>
                    <Image resizeMode="contain" style={styles.cardImg} source={SAD_DOG} />
                    <Text style={styles.cardText}>Pedir ajuda</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate("Ajudar")} style={styles.card}>
                    <Image resizeMode="contain" style={styles.cardImg} source={DOG_HELP} />
                    <Text style={styles.cardText}>Ajudar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate("Denunciar")} style={styles.card}>
                    <Image resizeMode="contain" style={styles.cardImg} source={ANGRY_DOG} />
                    <Text style={styles.cardText}>Denunciar</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleLogout}>
                <Text>Sair</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Home;