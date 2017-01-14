import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

const YOUTUBE_API_KEY = 'AIzaSyA4f2KJBDGKLdSH8g1TVwgaO9KIVf2sXfw';

//   >> COMPONENT <<
// Create a new component.
// This component should produce to produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('xunda');
  }

  videoSearch(term) {
    YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos, // this.setState({ videos: videos }); << ES5
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300); // search throttling

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
            videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App></App>, document.querySelector('.container'));
