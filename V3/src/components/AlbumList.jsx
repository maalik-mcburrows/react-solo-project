import React from 'react';
import SingleAlbum from './SingleAlbum';

const ArtistList = props => {
    console.log(props)
    const { artistData } = props
    const container = React.createRef();
    return(
        <div className="container" ref={container}>
            <ul>
                {artistData.length > 0 ? ( artistData.map(data => (
                    <li className='listItem' key={data.id}> 
                        <SingleAlbum artistData={data} /> 
                    </li>
                    ))
                ) : (
                    <li>No Tunes!</li>
                )}
            </ul>
        </div>
    );
}

export default ArtistList;
