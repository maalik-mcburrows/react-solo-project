import React from 'react';
import AlbumList from './components/AlbumList'
import SingleAlbum from './components/SingleAlbum';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AlbumContent from './components/AlbumContent';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchMusic() {
  return (
    <div className="App">
      {/* <form onSubmit={this.handleSubmit}> */}
          {/* <div className="artist" ref={this.artistImage}></div> */}
          {/* <input onChange={this.handleChange} value={this.state.artist} autoCorrect="off" autoCapitalize="off" spellCheck="false" id="search" placeholder="Album Name" type="text" /> */}
          {/* <input type="submit" value="GO!" /> */}
          {/* <div ref={this.overlay} className="overlay"></div> */}
      {/* </form> */}
      <Router>
        <Switch>
          <Route exact path="/" component={AlbumList}/>
          <Route path="/albums" component={SingleAlbum} />
          <Route path="/songs/:albumId?" component={AlbumContent} />
        </Switch>
      </Router>
    </div>
  )
}

export default SearchMusic;
