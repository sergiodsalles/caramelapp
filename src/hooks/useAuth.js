import firebase from "firebase";

const useAuth = () => {

    const db = firebase.firestore();

    const getLoggedUser = async () => {
        return firebase.auth().currentUser;
    }

    const isLogged = async () => {
        const user = firebase.auth().currentUser;
        if (user) {
            return true;
        }
        return false;
    }

    const getLoggedUserInfo = async (uid) => {
            
        db.collection("users").where("userid", "==", uid).limit(1).get()
        .then(documentSnapShots => { 
            return documentSnapShots.docs[0].data();
        });
            
    }

    const doLogin = async ( email, password ) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            return true;
        })
        .catch((error) => {
            console.error(error);
            return false;
        });
    }

    return {isLogged, getLoggedUser, getLoggedUserInfo, doLogin};

}

export default useAuth;