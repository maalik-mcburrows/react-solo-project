import React from 'react';

const ArtistContent = props => {
    const { artistData } = props;
    let audio = new Audio(artistData.previewUrl)
    let playing = false

    // const media = React.createRef();

    const playButtToggle = () => {
        
        if (playing) {
            playing = false
            audio.pause()
        } else {
            playing = true
            audio.play()
        }
    }

    return(
        <div>
            <div className='result'>
                <img alt='Artist Pic' src={artistData.artworkUrl100}></img>
                <div className='musicInfo'>
                    <p>{artistData.artistName}</p>
                    <p>{artistData.trackName}</p>
                    <p>{artistData.collectionName}</p>
                </div>
                <button onClick={playButtToggle}>Play</button>
            </div>
        </div>
        
    );
};

export default ArtistContent;