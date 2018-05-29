import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';

// import components
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component{
    constructor(props){
        super(props);
        this.state={
            albums: []
        };
    }

    componentWillMount(){
        // fetch the album details from our api
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data}));
    }

    renderAlbums(){
        return(
            this.state.albums.map((v,i) => {
                return(
                    <AlbumDetail key={v.title} album={v} />
                );
            })
        );
    }

    render(){
        return(
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}