var searchYouTube = ({query, key, max=5}, callback) => {
  $.ajax({ 
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      q: query,
      key: key,
      maxResults: max
    },
    method: 'GET',
    success: (data) => {callback(data)}
  })
};

window.searchYouTube = searchYouTube;
