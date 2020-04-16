import React from 'react';

const ArtistContent = props => {
    const { artistData } = props;

    return(
        <div onClick={artistData.previewUrl} className='result'>
            <img alt='Artist Pic' src={artistData.artworkUrl100}></img>
            <p>{artistData.artistName}</p>
            <p>{artistData.trackName}</p>
            <p>{artistData.collectionName}</p>
        </div>
    );
};

export default ArtistContent;