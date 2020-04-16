import React from 'react';
import AlbumList from './components/AlbumList'
import SingleAlbum from './components/SingleAlbum';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AlbumContent from './components/AlbumContent';

function SearchMusic() {

  // artistImage = React.createRef();
  // overlay = React.createRef();
  // searchElem = React.createRef();

//   state = {
//     artist: "",
//     artistData: []
// }

  // handleSubmit = async (e, search) => {
  //   e.preventDefault();
  //   const albumName = this.state.artist;
  //   const url = await fetch(`https://itunes.apple.com/search?term=${albumName}&entity=album`);
  //   // const params = { term: search, media: 'music' };
  //   // url.search = new URLSearchParams(params);
  //   const response = await url.json();
  //   const data = response.results;
  //   console.log('Data from log on line 26: ', data);
  //   this.setState({
  //     artist: "",
  //     artistData: data
  //   })
  //   console.log('Hey bro this is the artist data: ', this.state.artistData);
  //   return data;
  // }

  // componentDidMount = async () => {
  //   const data = await this.handleSubmit()
  //   this.setState({
  //     artistData: [...this.state.artistData, data]
  //   });
  // };

  // handleChange = event => {
  //   this.setState({
  //     artist: event.target.value
  //   })
  // }

  // render() {
    // const { artistData } = this.state;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Album Query</h1>
      </header>
      {/* <form onSubmit={this.handleSubmit}> */}
          {/* <div className="artist" ref={this.artistImage}></div> */}
          {/* <input onChange={this.handleChange} value={this.state.artist} autoCorrect="off" autoCapitalize="off" spellCheck="false" id="search" placeholder="Album Name" type="text" /> */}
          {/* <input type="submit" value="GO!" /> */}
          {/* <div ref={this.overlay} className="overlay"></div> */}
      {/* </form> */}
      <Router>
        <Switch>
          <Route exact path="/" component={AlbumList}/>
          <Route path="/artist" component={SingleAlbum} />
          <Route path="/lookup?id=:albumId?&entity=song&media=music" component={AlbumContent} />
        </Switch>
      </Router>
    </div>
  )
}

export default SearchMusic;
