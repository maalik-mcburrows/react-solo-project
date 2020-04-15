import React from 'react';

const ArtistContent = props => {
    const { data } = props;

    return(
        <div style={`background-image: url(${data.artworkUrl100})`} onClick={`openMedia('${data.previewUrl}', '${data.trackCencoredName}')`} className='result'></div>
    );
};

export default ArtistContent;