import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCiF3LNk9jegWDMwXeWvjJCVkCdiZji238",
    authDomain: "discord-clone-ab6b6.firebaseapp.com",
    projectId: "discord-clone-ab6b6",
    storageBucket: "discord-clone-ab6b6.appspot.com",
    messagingSenderId: "1089817491705",
    appId: "1:1089817491705:web:c9cf5ff9afe8a46844ca28",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
