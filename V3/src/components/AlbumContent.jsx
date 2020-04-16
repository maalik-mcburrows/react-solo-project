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
        console.log('Song snippet: ', this.state.songs.previewUrl);
    }

    

    playButtToggle = () => {
        const { songs } = this.state;
        let audio = new Audio(songs.previewUrl)
        let playing = false
        // let buttStatus = 'PLAY'

        if (playing) {
            playing = false
            audio.pause()
            // buttStatus = 'PLAY'
        } else {
            playing = true
            audio.play()
            // buttStatus = 'PAUSE'
        }
    }


    render() {
        console.log('Ayee these the props: ', this.props)
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
                    {songs.length > 0 ? ( songs.map(track => (
                        <li className="trackList" key={track.id}> 
                            <div className="musicInfo">
                                <p>{track.trackName}</p>
                            </div>
                            <button className="playPauseButt" onClick={this.playButtToggle}>PLAY</button> 
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