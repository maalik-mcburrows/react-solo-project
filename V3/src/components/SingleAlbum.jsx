import React from 'react';

const AlbumContent = props => {
    const { artistData } = props;
    // let audio = new Audio(artistData.previewUrl)
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
                <img alt='Artist Pic' src={artistData.artworkUrl100}></img>
                <div className='musicInfo'>
                    <p>{artistData.artistName}</p>
                    {/* <p>{artistData.trackName}</p> */}
                    <p>{artistData.collectionName}</p>
                </div>
                {/* <button onClick={playButtToggle}>{buttStatus}</button> */}
            </div>
        </div>
        
    );
};

export default AlbumContent;