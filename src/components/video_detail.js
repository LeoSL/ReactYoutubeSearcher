import React from 'react';

const VideoDetail = ({video}) => {
                    // ^ const video = props.video
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
                // ^ sintax to easily interpolate ^ (ES6)
  return (
    <div className="col-md-8 video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={embedUrl}></iframe>
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
