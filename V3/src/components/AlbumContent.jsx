import React, { Component } from 'react';
import PlayPauseButt from './playPauseButt';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card'
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
                <div style={{backgroundColor: "#262626", color: "#ff073a" }}>
                    {single.map(single => (
                    <div className="artAndInfo">
                        <div className="art">
                            <img style={{width:"150%"}} className="albumCover" alt="album Pic" src={single.artworkUrl100}></img>
                        </div>
                        <div style={{marginLeft: "100px"}} className="info">
                            <h1>{single.collectionName} ({single.contentAdvisoryRating})</h1>
                            <h2>{single.artistName}</h2>
                        </div>
                    </div>    
                    ))}
                    {songs.length > 0 ? ( songs.slice(1).map(track => (
                        <Card className="trackList" style={{width:"100vw", backgroundColor: "#262626", borderBottomColor: "#ff073a", borderTopColor: "#ff073a",color: "#ff073a", display: "inline-block"}}>
                            <ListGroup className="musicInfo" variant="flush">
                                <ListGroup.Item style={{backgroundColor: "#262626"}}>
                                    <PlayPauseButt style={{color: "#ff073a", display: "inline-block"}} onSend={playButtToggle} songs={track}/>
                                    <div style={{display: "inline-block", paddingLeft: "20px"}}>
                                        <b>{track.trackName}</b>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
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




