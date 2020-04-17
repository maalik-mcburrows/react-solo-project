import React, { Component } from 'react';
import PlayPauseButt from './playPauseButt';

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
        // const id = this.state.songs.id
        console.log('Songs are: ', this.state.songs)
        console.log('Song snippet: ', this.state.songs.map(snippet => snippet.previewUrl));
    }


    render() {
        console.log('Ayee these the props: ', this.props)
        const playButtToggle = switchBool => {}
        const { songs } = this.state;
        const single = songs.slice(0,1);
        console.log('SINGLE: ', single)
        return(
            <div>
                <div>
                    {single.map(single => (
                    <div className="artAndInfo">
                        <div className="art">
                            <img alt="album Pic" src={single.artworkUrl100}></img>
                        </div>
                        <div className="info">
                            <p>{single.artistName}</p>
                            <p>{single.collectionName} ({single.contentAdvisoryRating})</p>
                        </div>
                    </div>    
                    ))}
                    {songs.length > 0 ? ( songs.slice(1).map(track => (
                        <li className="trackList" key={track.id}>
                            <div className="musicInfo">
                                <PlayPauseButt onSend={playButtToggle} songs={track}/> 
                                <p className="trackName">{track.trackName}</p>
                            </div>
                        </li>
                        ))
                    ) : (
                        <li>No Tunes!</li>
                    )}
                </div>
            </div>
        )
    }
};

export default AlbumContent;