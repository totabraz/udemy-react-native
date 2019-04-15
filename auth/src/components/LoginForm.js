import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from "firebase";
import { Button, Card, CardSection, Input, Spinner } from './common'

class LoginForm extends Component {
    state = { email: 'totabraz@gmail.com' , password: '123123123' , error: '', loading: false};

    onButtonPress(){
        const { email, password } = this.state;

        this.setState({error:'', loading:true})

        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch( () => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch( () => {this.onLoginFail.bind(this);});
            });
    }
    onLoginFail(){
        console.log('onLoginFail');
        this.setState({error : ' Authentication Failed.', loading:false});
    }
    onLoginSuccess(){
        console.log('onLoginSuccess');
        this.setState({ 
            error:'', 
            loading:false,
            email: '',
            password: '',
        })
    }

    renderButton(){
        if (this.state.loading){
            return(
                <Spinner size={'small'}/>
            );
        } else{
            return(
                <Button
                    onPress={this.onButtonPress.bind(this)}>
                    Log in
                </Button>
            );
        }
    }

    render(){
        return(
            <Card>
                <CardSection> 
                    <Input 
                        autoCorrect={ false }
                        placehold={'user@gmail.com'}
                        label={'E-mail'}
                        value={this.state.email}
                        onChangeText={ email => this.setState({ email })}/>
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry={true}
                        placehold={ 'password' }
                        autoCorrect={ false }
                        label={'Password'}
                        value={this.state.password }
                        onChangeText ={ password => this.setState({ password })}/>
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    { this.state.error }
                </Text>
                <CardSection>
                   {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = { 
    errorTextStyle:{
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 5,
        color: 'red',
    }
}
export default LoginForm;  