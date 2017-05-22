import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  const {
    title,
    thumbnails,
  } = video.snippet;

  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="meia-object" src={thumbnails.default.url} alt={title} />
        </div>

        <div className="media-body">
          <div className="media-heading">
            {title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
