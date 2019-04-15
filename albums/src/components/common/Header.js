//import libraries for making a compontent
import React from "react";
import { Text, View} from 'react-native';

// make a component

const Header = (props) => {
    const  {textStyle, viewStyle } = styles;
    // we could user styles.textStyle without deconstructing it.
    return (
        <View style={viewStyle}>
            <Text style={textStyle}> {props.headerText}</Text>
        </View>
    );
};

//style
const styles = {
    viewStyle:{
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        paddingTop: 20,
        shadowColor: '#e2e2e2',
        shadowOffset: {width:0, height: 1},
        shadowOpacity: 0.1,
        position: 'relative',
    },
    textStyle:{
        fontSize: 20,
    }
}

// make the component available to other parts of the app
export default Header;