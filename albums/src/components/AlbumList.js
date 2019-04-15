import React, { Component} from 'react';
import { View, ScrollView ,SafeAreaView} from "react-native";
import axios  from "axios";
// npm install --save axios
import AlbumDetail from "./AlbumDetail";


//Class Components 
// This kind of component have to have a method called 'render()';

class AlbumList extends Component {
    //initial state
    state = { albums: [], };
    
    componentWillMount(){
        console.log('componentWillMount in AlbumList');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({albums :response.data}));
        
    }
    
    renderAlbums(){
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album}/>
            );
        }
        render(){
            console.log(this.state);
            return(
                

                <ScrollView>
                    <SafeAreaView>
                        {this.renderAlbums()}
                    </SafeAreaView>

                </ScrollView>

                

                
            );
        }
            
    }
    const styles = {
        listStyle:{
            flex:1
    }
}

export default AlbumList;