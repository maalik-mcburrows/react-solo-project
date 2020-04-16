import React from 'react';
import { Link } from 'react-router-dom';

const SingleAlbum = props => {
    const { albumData } = props;
    // let audio = new Audio(albumData.previewUrl)
    // let playing = false
    // let buttStatus = 'PLAY'

    // Dont really need next line:
    // const media = React.createRef();

    // const playButtToggle = () => {
        
    //     if (playing) {
    //         playing = false
    //         audio.pause()
    //     } else {
    //         playing = true
    //         audio.play()
    //         buttStatus = 'PAUSE'
    //     }
    // }

    return(
        <div>
            <div className='result'>
                <img alt='album Pic' src={albumData.artworkUrl100}></img>
                <div className='musicInfo'>
                    <p>{albumData.albumName}</p>
                    {/* <p>{albumData.trackName}</p> */}
                    <p>{albumData.collectionName}</p>
                    <p>({albumData.contentAdvisoryRating})</p>
                </div>
                <Link to={`/songs/${albumData.collectionId}`}>View this Album</Link>
                {/* <button onClick={playButtToggle}>{buttStatus}</button> */}
            </div>
        </div>
        
    );
};

export default SingleAlbum;