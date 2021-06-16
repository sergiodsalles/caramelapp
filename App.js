import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { firebase } from './src/api/auth/firebaseConfig';

import Splash from './src/pages/Splash/Splash';
import Register from './src/pages/Register/Register';
import Login from './src/pages/Login/Login';
import Home from './src/pages/Home/Home';
import Denounce from './src/pages/Denounce/Denounce';
import HelpMe from './src/pages/HelpMe/HelpMe';
import HelpSomeone from './src/pages/HelpSomeone/HelpSomeone';

const SplashStack = createStackNavigator();

export default function App() {

  const [user, setUser] = useState(null);

  useEffect(()=>{
    const usersCollection = firebase.firestore().collection('users');

    firebase.auth().onAuthStateChanged(user => {

      if (user) {
        usersCollection
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setUser(userData);
          })
          .catch((error) => {
            Alert.alert("Erro", error.message);
          });
      } else {
        setUser(null);
      }

    })

  },[])

  return (
      <NavigationContainer>
          <SplashStack.Navigator>
            <SplashStack.Screen name="Início">
              {props => <Home {...props} user={user} />}
            </SplashStack.Screen>
            <SplashStack.Screen name="Denunciar" component={Denounce} />
            <SplashStack.Screen name="Pedir ajuda" component={HelpMe} />
            <SplashStack.Screen name="Ajudar" component={HelpSomeone} />
        
            <SplashStack.Screen options={{headerShown: false}} name="Splash" component={Splash} />
            <SplashStack.Screen name="Cadastrar" component={Register} />
            <SplashStack.Screen name="Entrar" component={Login} />
          </SplashStack.Navigator>
      </NavigationContainer>
  );
}
