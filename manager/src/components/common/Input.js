import React from 'react';
import { TextInput, Text, View } from 'react-native'
 
const Input = ({ label, value ,onChangeText, placehold, secureTextEntry  }) => {
    const { containerStyle, InputStyle, labelStyle } = styles;
    var placeholdValue = placehold;
    if(! placehold ){ placeholdValue = label; }

    return(
        <View style={containerStyle}>
            <Text style={ labelStyle }>{label}</Text> 
            {/* It is the same */}
            {/* onChangeText={ text => this.setState({ text: text })} */}
            {/* onChangeText={ text => this.setState({ text })} */}
            <TextInput
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                placeholder={placeholdValue}
                value={ value }
                onChangeText={ onChangeText}
                style={ InputStyle }>
            </TextInput>
        </View >
    );
}

const styles = {
    InputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 3,

    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,

    },
    containerStyle:{
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',


    },
};

export { Input };