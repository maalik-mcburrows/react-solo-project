import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const SingleAlbum = props => {
    const { albumData } = props;
    console.log('ALBUM DATA: ', albumData);
    return(
        <div>
            <Card className="trackList" style={{backgroundColor: "#262626", borderBottomColor: "#ff073a", borderTopColor: "#ff073a",color: "#ff073a"}}>
                <ListGroup className="musicInfo" variant="flush">
                    <ListGroup.Item style={{backgroundColor: "#262626"}}><img className="albumCover" alt='album Pic' src={albumData.artworkUrl100}></img>{albumData.trackName}<p style={{display: "-webkit-inline-box", paddingLeft: "40px", paddingRight: "40px"}}><b>{albumData.collectionName} ({albumData.contentAdvisoryRating})</b></p><Link style={{color:"#ff073a"}} to={`/songs/${albumData.collectionId}`}>View this Album</Link></ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
        
    );
};

export default SingleAlbum;

