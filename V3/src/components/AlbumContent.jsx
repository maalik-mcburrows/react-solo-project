import React, { Component } from 'react';

class AlbumContent extends Component {
    state = {
        songs: []
    }
    // console.log(this.props)

    loadUser = async () => {
        const { albumId } = this.props.match.params;
        const url = await fetch(`https://itunes.apple.com/lookup?id=${albumId}&entity=song&media=music`);
        const response = await url.json();
        const data = response.results;
        return data; 
    }

    componentDidMount = async () => {
        const songData = await this.loadUser();
        this.setState({ 
           songs : songData 
        })
        console.log('Songs are: ', this.state.songs)
    }
    render() {
        console.log('Ayee these the props: ', this.props)
        const { songs } = this.state;
        return(
            <div>
                <p>Yoooo</p>
            </div>
        )
    }
};

export default AlbumContent;