import React, { Component } from 'react';
import ArtistList from './components/ArtistList'
import ArtistContent from './components/ArtistContent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class SearchMusic extends Component{

  container = React.createRef();
  artistImage = React.createRef();
  media = React.createRef();
  overlay = React.createRef();
  searchElem = React.createRef();

  state = {
    artist: "",
    artistData: []
}

  handleSubmit = ( search) => {
    // e.preventDefault();
    const url = new URL('https://itunes.apple.com/search');
    const params = { term: search, media: 'music' };
    url.search = new URLSearchParams(params);
    fetch(url, { method: 'POST' })
        .then(results => results.json())
        .then(data => {
          
        })
    console.log(this.state.artist);
  }

  loadData = async () => {
    const response = await this.handleSubmit()
    const data = response.json();
    this.setState({
      artistData: data
    });
  };

  handleChange = event => {
    this.setState({
      artist: event.target.value
    })
  }

  render() {
    this.handleSubmit('beyonce');

    return (
      <div className="App">
        <header className="App-header">
          <h1>Artist Query</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
            <div className="container" ref={this.container}></div>
            <div className="artist" ref={this.artistImage}></div>
            <input ref={this.searchElem} onChange={this.handleChange} value={this.state.artist} autoCorrect="off" autoCapitalize="off" spellCheck="false" id="search" placeholder="Artist..." type="text" />
            <input type="submit" value="GO!" />
            <div ref={this.overlay} className="overlay"></div>
            <div ref={this.media} className="media hidden"></div>
        </form>
        {<Router>
          <Route path="/" ref={ this.container } exact render={(props) => <ArtistList{...props} artistData={ artistData }/>} />
          <Route path="/artist" component={ArtistContent} />
        </Router>}
      </div>
    )
  }
}

export default SearchMusic;
