var Search = ({onClickCb}) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button 
      className="btn hidden-sm-down" 
      onClick = ()=> {
        let query = // get query
        searchYouTube({query: query, key: YOUTUBE_API_KEY, max: 5}, updateVideos);
      } 
    >
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
