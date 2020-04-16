import React, { Component } from 'react';
import ArtistList from './components/ArtistList'
import ArtistContent from './components/ArtistContent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class SearchMusic extends Component{

  artistImage = React.createRef();
  media = React.createRef();
  overlay = React.createRef();
  searchElem = React.createRef();

  state = {
    artist: "",
    artistData: []
}

  handleSubmit = async (e, search) => {
    e.preventDefault();
    const artistName = this.state.artist;
    const url = await fetch(`https://itunes.apple.com/search?term=${artistName}&media=music`);
    // const params = { term: search, media: 'music' };
    // url.search = new URLSearchParams(params);
    const data = await url.json();
    console.log('Data from log on line 26: ', data.results);
    this.setState({
      artist: "",
      artistData: [data.results]
    })
    console.log('Hey bro this is the artist data: ', this.state.artistData[0]);
    return data;
  }

  // componentDidMount = async () => {
  //   const data = await this.handleSubmit()
  //   this.setState({
  //     artistData: [...this.state.artistData, data]
  //   });
  // };

  handleChange = event => {
    this.setState({
      artist: event.target.value
    })
  }

  render() {
    const { artistData } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Artist Query</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
            <div className="artist" ref={this.artistImage}></div>
            <input ref={this.searchElem} onChange={this.handleChange} value={this.state.artist} autoCorrect="off" autoCapitalize="off" spellCheck="false" id="search" placeholder="Artist..." type="text" />
            <input type="submit" value="GO!" />
            <div ref={this.overlay} className="overlay"></div>
            <div ref={this.media} className="media hidden"></div>
        </form>
        <Router>
          <Route path="/" ref={ this.container } exact render={(props) => <ArtistList{...props} artistData={ artistData }/>} />
          <Route path="/artist" component={ArtistContent} />
        </Router>
      </div>
    )
  }
}

export default SearchMusic;
