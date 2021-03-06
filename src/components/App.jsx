class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeVideo: exampleVideoData[0],
      videos: exampleVideoData  
    }


  }
  // getYouTubeVideos(query, key) {
  //   searchYouTube({query, key, 5}, ca)
  // }
  
  updateActiveVideo (newActiveVideo) {
    this.setState({
      activeVideo: newActiveVideo
    })
  }

  updateVideos ({items}) {
    this.setState({
      videos: items
    });
  } 
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onClickCb={this.updateVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.activeVideo} />
          </div>
          <div className="col-md-5">
              <VideoList videos={this.state.videos} onClickCb={this.updateActiveVideo.bind(this)}/>
          </div>
        </div>
      </div>
    )  
  } 
} 



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
