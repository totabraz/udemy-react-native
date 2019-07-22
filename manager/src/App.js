import React, { Component  } from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from "firebase";
import reducers from './reducers';
import LoginForm from "./components/LoginForn";
import { Header } from "./components/common";

class App extends Component {

    componentWillMount() {

        const firebaseConfig = {
            apiKey: "AIzaSyC_wp-prsM1Aj0PK-UyIXcTQJAN6B86vhE",
            authDomain: "manager-59cd8.firebaseapp.com",
            databaseURL: "https://manager-59cd8.firebaseio.com",
            projectId: "manager-59cd8",
            storageBucket: "manager-59cd8.appspot.com",
            messagingSenderId: "563639721861",
            appId: "1:563639721861:web:1ba12f8a8e6842d5"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
         
    }

    render(){
        return (
            <Provider store={ createStore(reducers) }>
                <Header headerText="Login"/>
                <LoginForm />
            </Provider>
        )
    }
}

export default App;