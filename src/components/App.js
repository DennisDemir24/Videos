import React, { Component } from 'react'
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css';

export default class App extends Component {

  // Setting state for the videos
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    // sets a default search term, and always shows that search results when the app first loads
    this.onTermSubmit('kitten');
  }

  // Connecting with the youtube file, where i do the API call
  onTermSubmit = async (term) => {
   const res = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    // Once user submits a search term, the states changes to whatever is being searched
    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0]
    });
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
