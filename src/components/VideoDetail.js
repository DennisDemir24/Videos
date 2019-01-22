import React from 'react'

const VideoDetail = ({video}) => {

    if(!video) {
        return <div>Loading...</div>
    }

    // grabs the specific video ID and stores it in the variable
    // then uses the variable in the src of the iframe tag
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
    <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
    </div>   
      <div className="desc-box ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;