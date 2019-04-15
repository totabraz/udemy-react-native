import React from "react";
import { Text, View, Image, Linking  } from "react-native";
import Card from "./common/Card";
import CardSection from "./common/CardSection";
import Button from "./common/Button";

const AlbumDetail = ({album}) => {
    const { thumbnail_image, title, artist, image, url } = album;


    const { headerCardStyle, thumbnailStyle, headerContentStyle, titleStyle, imageStyle } = styles;
    return(
        <Card>
            <CardSection style={headerCardStyle}>
                <Image 
                    style={thumbnailStyle}
                    source={{ uri : thumbnail_image}}/>
                <View style={headerContentStyle}>
                    <Text style={titleStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection style={headerCardStyle}>
                <Image 
                    style={imageStyle}
                    source={{ uri : image }}/>
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now!
                </Button>
                {/* 
                // this onPress= could be anything,
                // but, we need to call it in the props
                */}
            </CardSection>
        </Card>
    );
};

const styles = {
    titleStyle:{
        fontSize: 18,
    },
    headerContentStyle:{
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    thumbnailStyle:{
        position: 'relative',
        width:50,
        height:50,
        marginRight: 10,
    },

    imageStyle:{
        height: 300,
        flex: 1,        
        width: null,

    },

    headerCardStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',

    },
};

export default AlbumDetail; 