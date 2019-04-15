import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from "firebase";
import { Header, Button,Card, CardSection, Spinner} from './components/common';
import LoginForm from './components/LoginForm';
 

class App extends Component {
    state = { loggedIn : null }
    
    componentWillMount() {
        // Initialize Firebase
        firebase.initializeApp({
            apiKey: "AIzaSyCVqn1XWMKhK7u0w2tAYpuyUxWUR2T69Ds",
            authDomain: "auth-reactnative-fd79d.firebaseapp.com",
            databaseURL: "https://auth-reactnative-fd79d.firebaseio.com",
            projectId: "auth-reactnative-fd79d",
            storageBucket: "auth-reactnative-fd79d.appspot.com",
            messagingSenderId: "520995474975"
        });
        
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn : true });
            } else {
                this.setState({ loggedIn : false });
            }
        });
    }

    signOut(){
        firebase.auth().signOut()
    }
    
    renderContent(){
        switch (this.state.loggedIn) {
            case false:
                return( <LoginForm/>);
                break;
        
            case true:
                return (
                <Card>
                    <CardSection> 
                        <Button onPress={ () => this.signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                </Card>);
                break;
        
            default:
                return (
                    <Card>
                        <CardSection> 
                            <Spinner/>
                        </CardSection>
                    </Card>
                );
                break;
        }
    }

    render() {
        return(
            <View>
                <Header headerText='Auth'/>
                { this.renderContent() }
            </View>
        );
    }
}



export default App;