import React from 'react';
import ArtistContent from './ArtistContent';

const ArtistList = props => {
    console.log(props)
    const { artistData } = props
    const container = React.createRef();
    return(
        <div className="container" ref={container}>
            <ul>
                {artistData.length > 0 ? ( artistData.map(data => (
                    <li className='listItem' key={data.id}> 
                        <ArtistContent artistData={data} /> 
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
