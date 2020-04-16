import React, { Component } from 'react';

class AlbumContent extends Component {
    state = {
        songs: " "
    }
    // console.log(this.props)

    loadUser = async () => {
        const { albumId } = this.props.collectionId;
        const response = await fetch(`https://itunes.apple.com/lookup?id=${albumId}&entity=song&media=music`);
        const data = await response.json();
        return data; 
    }

    componentDidMount = async () => {
        const songData = await this.loadUser();
        this.setState({ 
           songs : songData 
        })
    }
    render() {
        console.log('Ayee these the props: ', this.props)
        // const { user } = this.state;
        return(
            <div>
                {/* <h2>{user.login}</h2>
                <img src={user.avatar_url} alt="User Pic"></img>
                <br></br>
                <a href={`/users/${user.login}/repos`} target="_blank" rel="noopener noreferrer" key={user.id}>Click Here to View Repos</a> */}
                <p>Yoooo</p>
            </div>
        )
    }
};

export default AlbumContent;