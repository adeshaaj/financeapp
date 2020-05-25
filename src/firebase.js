import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCkAjy9M57UEF7b7W8samOngTiJm5ePx6E",
    authDomain: "finance-1f25b.firebaseapp.com",
    databaseURL: "https://finance-1f25b.firebaseio.com",
    projectId: "finance-1f25b",
    storageBucket: "finance-1f25b.appspot.com",
    messagingSenderId: "953092952713",
    appId: "1:953092952713:web:e7aa4c83e582a8f7eb6c58",
    measurementId: "G-CFKKF01WBV"
  };
 firebase.initializeApp(firebaseConfig);
 export const auth=firebase.auth()