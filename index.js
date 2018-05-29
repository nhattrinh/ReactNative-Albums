import React from 'react';
import { AppRegistry, View } from 'react-native';

// import the components
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create our main App component
// stateless function call
const App = () => {
    return(
        <View style={{ flex: 1}}>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    );
};

// render
AppRegistry.registerComponent('albums', ()=>App);