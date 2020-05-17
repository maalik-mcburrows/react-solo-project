import React, { Component } from 'react';
// import PlayPauseButt from './playPauseButt';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card'
import ToggleButtFxn from './toggleButtFxn';
class AlbumContent extends Component {
    state = {
        songs: [],
    }

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
        console.log('Song snippet: ', this.state.songs.map(snippet => snippet.previewUrl));
    }


    render() {
        console.log('Ayee these the props: ', this.props)
        const { songs } = this.state;
        const single = songs.slice(0,1);
        return(
            <div>
                <div style={{backgroundColor: "#262626", color: "#ff073a" }}>
                    {single.map((single, index) => (
                    <div key={index} className="artAndInfo">
                        <div className="art">
                            <img style={{width:"150%"}} className="albumCover" alt="album Pic" src={single.artworkUrl100}></img>
                        </div>
                        <div style={{marginLeft: "100px"}} className="info">
                            <h1>{single.collectionName} ({single.contentAdvisoryRating})</h1>
                            <h2>{single.artistName}</h2>
                        </div>
                    </div>    
                    ))}
                    {songs.length > 0 ? ( songs.slice(1).map((track, index) => (
                        <Card key={index} className="trackList" style={{width:"100vw", backgroundColor: "#262626", borderBottomColor: "#ff073a", borderTopColor: "#ff073a",color: "#ff073a", display: "inline-block"}}>
                            <ListGroup className="musicInfo" variant="flush">
                                <ListGroup.Item songs={track.previewUrl} style={{backgroundColor: "#262626", display: "flex", alignItems: "baseline"}}>
                                    {/* <p>{index}</p> */}
                                    <ToggleButtFxn key={index} songs={track.previewUrl} style={{color: "#ff073a", display: "inline-block"}} />
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




