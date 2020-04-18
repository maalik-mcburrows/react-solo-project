import React, { Component } from 'react';
import SingleAlbum from './SingleAlbum';
// import { render } from '@testing-library/react';

class AlbumList extends Component {
    state = {
        album: "",
        albumData: []
    }

    handleSubmit = async (e, search) => {
        e.preventDefault();
        const albumName = this.state.album;
        const url = await fetch(`https://itunes.apple.com/search?term=${albumName}&entity=album`);
        // const params = { term: search, media: 'music' };
        // url.search = new URLSearchParams(params);
        const response = await url.json();
        const data = response.results;
        console.log('Data from log on line 26: ', data);
        this.setState({
          album: "",
          albumData: data
        })
        console.log('Hey bro this is the album data: ', this.state.albumData);
        return data;
    }

    handleChange = event => {
        this.setState({
          album: event.target.value
        })
    }

    // console.log(props)
    // const { albumData } = props
    // const container = React.createRef();
    render() {
        const { albumData } = this.state;
        return(
            <div>
                <header style={{backgroundColor: "#262626", color: "#ff073a"}} className="App-header">
                    <h1 style={{padding: "20px"}}>Album Query</h1>
                    <form style={{paddingBottom: "25px"}} onSubmit={this.handleSubmit}>
                        {/* <div className="album" ref={this.albumImage}></div> */}
                        <input style={{color: "#ff073a"}} onChange={this.handleChange} value={this.state.album} autoCorrect="off" autoCapitalize="off" spellCheck="false" id="search" placeholder="Album Name" type="text" />
                        <input style={{color: "#ff073a", backgroundColor: "#262626"}} type="submit" value="GO!" />
                        {/* <div ref={this.overlay} className="overlay"></div> */}
                    </form>
                </header>
                    <ul style={{paddingLeft: "0"}}>
                        {( albumData.map(data => (
                            <li className='listItem' key={data.id}> 
                                <SingleAlbum albumData={data} /> 
                            </li>
                            ))
                        )} 
                    </ul>
            </div>
        );
    }
    
}

export default AlbumList;


