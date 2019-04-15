import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from './reducers';
import firebase from 'firebase';

class App extends Component {
	
	componentWillMount(){
		const config = {
			apiKey: "AIzaSyC_wp-prsM1Aj0PK-UyIXcTQJAN6B86vhE",
			authDomain: "manager-59cd8.firebaseapp.com",
			databaseURL: "https://manager-59cd8.firebaseio.com",
			projectId: "manager-59cd8",
			storageBucket: "manager-59cd8.appspot.com",
			messagingSenderId: "563639721861"
		};
		firebase.initializeApp(config);
	}
	
	render() {
		return(
			<Provider store={createStore(reducers)}>
				<View>
					<Text>
						Hello!
					</Text>
				</View>
			</Provider>cd 
			);
		}
	}
	
	export default App;