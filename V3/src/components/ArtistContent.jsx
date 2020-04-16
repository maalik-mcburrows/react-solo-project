import React from 'react';

const ArtistContent = props => {
    const { artistData } = props;

    return(
        <div>
            <div onClick={artistData.previewUrl} className='result'>
                <img alt='Artist Pic' src={artistData.artworkUrl100}></img>
                <div className='musicInfo'>
                    <p>{artistData.artistName}</p>
                    <p>{artistData.trackName}</p>
                    <p>{artistData.collectionName}</p>
                </div>
            </div>
        </div>
        
    );
};

export default ArtistContent;