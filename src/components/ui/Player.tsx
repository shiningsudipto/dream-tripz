import React from "react";
import ReactPlayer from "react-player";

type TPlayer = {
  url: string;
  isPlaying: boolean;
};

const Player = ({ url, isPlaying }: TPlayer) => {
  return (
    <div>
      <ReactPlayer playing={isPlaying} url={url} />
    </div>
  );
};

export default Player;
