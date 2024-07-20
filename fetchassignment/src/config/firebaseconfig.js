import { initializeApp } from "firebase/app";
import {getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBUoKVqeYj6f5Doc0qWv7H1H-LVJEKIFoc",
    authDomain: "ecommerce-assign-b4235.firebaseapp.com",
    projectId: "ecommerce-assign-b4235",
    storageBucket: "ecommerce-assign-b4235.appspot.com",
    messagingSenderId: "379890310079",
    appId: "1:379890310079:web:b1d64f62a08769f581df0a",
    measurementId: "G-M7SCTBPW4R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

function register (email , password) {
createUserWithEmailAndPassword(auth , email , password)
.then((Response) => {
console.log(Response , "response");
})
.catch((Error) => {
console.log(Error , "error");
})
}

function LogIn (email , password) {
signInWithEmailAndPassword(auth , email , password)
.then((Response) => {
    console.log(Response , "response");
})
.catch((Error) => {
    console.log(Error , "error");
})
}

export {
    register , 
    LogIn
}