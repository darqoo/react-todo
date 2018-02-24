import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAFG2UhX5Pnu-_vkIFPwPc4UOqSUV8G1YM",
  authDomain: "react-todo-79e74.firebaseapp.com",
  databaseURL: "https://react-todo-79e74.firebaseio.com",
  projectId: "react-todo-79e74",
  storageBucket: "react-todo-79e74.appspot.com",
  messagingSenderId: "745813107913"
};

const firebaseApp = firebase.initializeApp(config);

export const database = firebaseApp.database();
