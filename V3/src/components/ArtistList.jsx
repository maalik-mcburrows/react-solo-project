import React from 'react';
import ArtistContent from './ArtistContent';

const ArtistList = props => {
    console.log(props)
    const { artistData } = props
    return(
        <ul>
            {artistData.length > 0 ? ( artistData.map(data => (
                <li> 
                    { <ArtistContent artistData={data} /> }
                </li>
                ))
            ) : (
                <li>No Tunes :(</li>
            )}
        </ul>
    ).join('');
}

export default ArtistList;
