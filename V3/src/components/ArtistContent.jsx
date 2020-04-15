import React from 'react';

const ArtistContent = props => {
    const { data } = props;

    return(
        <div>
            <img src={data} alt="User Pic" />
            <br></br>
            <a href={`/artist/${data}`} target="_blank" rel="noopener noreferrer" key={data.id}>{data}</a>
        </div>
    );
};

export default ArtistContent;