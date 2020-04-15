import React, { Component } from 'react';
import ArtistList from './components/ArtistList'
// import SingleUser from './components/SingleUser';
// // import RepoData from './components/repoData';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class SearchMusic extends Component{
  state = {
    artist: "",
    artistData: []
}


  // handleSubmit = async(event) => {
  //   event.preventDefault();
  //   const artist = this.state.artist;
  //   const response = await fetch('https://itunes.apple.com/search')
  //   const data = await response.json();
  //   this.setState({
  //     artist: "",
  //     users: [...this.state.users, data]
  //   });
  //   return data
  // };

  // getContent = search => {
  //   const url = new URL('https://itunes.apple.com/search');
  //   const params = { term: search, media: 'tracks' };
  //   url.search = new URLSearchParams(params);
  //   fetch(url, { method: 'POST' })
  //       .then(results => results.json())
  //       .then(data => {

  //       })
  // };

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



  // render(){
  //   const { users } = this.state;
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <h1>User Query Exercise</h1>
  //       </header>
  //       <form onSubmit={this.handleSubmit}>
  //         <label> Type a User's Name
  //           <input type="text" value={this.state.artist} placeholder="type sum" onChange={this.handleChange} />
  //         </label>
  //         <button type="submit">Submit</button>
  //       </form>
  //       <Router>
  //         <Route path="/" exact render={(props) => <UserCardList{...props} users={ users }/>} />
  //         <Route path="/users/:artist?" component={SingleUser} />
  //         {/* <Route path="/users/:artist?/repos" component={RepoData} /> */}
  //       </Router>
  //     </div>
  //   );
  // }

  render() {
    this.handleSubmit('beyonce');

    return (
      <div className="App">
        <header className="App-header">
          <h1>Artist Query</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
            <div className="container"></div>
            <div className="artist"></div>
            <input onChange={this.handleChange} value={this.state.artist} autoCorrect="off" autoCapitalize="off" spellCheck="false" id="search" placeholder="Artist..." type="text" />
            <input type="submit" value="GO!" />
            <div className="overlay"></div>
            <div className="media hidden"></div>
        </form>
        {<Router>
          <Route path="/" exact render={(props) => <ArtistList{...props} artistData={ artistData }/>} />
        </Router>}
      </div>
    )
  }
}

export default SearchMusic;
