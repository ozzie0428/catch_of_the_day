import Rebase from 're-base'; 
import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCA5OGAZ2H4aC5M3AXax0XaWoqeuOdldiE",
    authDomain: "catch-of-the-day-ozzie.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-ozzie.firebaseio.com",
})


const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base