import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Card, CardSection, Input, Button } from "./common";

class LoginForm extends Component {
    
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordCange(text){
        this.props.passwordChanged(text);
    }
    render (){
        return (
            <Card>
                <CardSection>
                    <Input
                    label="Email"
                    placehold="email@email.com"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={ this.props.email }
                    />
                </CardSection>
                <CardSection>
                <Input
                    secureTextEntry
                    onChangeText={this.onPasswordCange.bind(this)}
                    label="Password"
                    placehold="password"
                    value={ this.props.password }

                />
                </CardSection>
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}


const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged }) (LoginForm);