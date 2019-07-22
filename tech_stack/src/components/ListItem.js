import React, { Component } from "react";
import { Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation } from "react-native";
import { connect } from 'react-redux'
import { CardSection } from "./common";
import * as actions from  '../actions';

class ListItem extends Component {
    
    componentWillUpdate () {
        LayoutAnimation.spring();
    }
    renderDescription() {
        const { library, selectedLibraryId } = this.props;
        if (library.item.id === selectedLibraryId) {
            return (
                <Text style={styles.bodyStyle}>{library.item.description}</Text>
            );
        }
    }

    render(){
        const {titleStyle } = styles;    
        const {id, title } = this.props.library.item;
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectedLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {console.log(this.props)}
                    { this.renderDescription() }
                </View>
            </TouchableWithoutFeedback>
        );
   }
}

const styles = { 
    titleStyle:{
        fontSize:18,
        paddingLeft: 15
    },
    bodyStyle:{
        paddingLeft: 10,
        padding: 10,
    }
}

 
const mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId };
};


export default connect(mapStateToProps, actions)(ListItem);


