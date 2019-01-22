import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
    
  // render every video item to display on the screen
   const renderedList = videos.map((video,index) => {
        return <VideoItem onVideoSelect={onVideoSelect} key={index} video={video}/>
    });

  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  )
}

export default VideoList;