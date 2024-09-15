"use client";
import React from "react";
import ReactPlayer from "react-player";
import "./style.css";

type TPlayer = {
  url: string;
  isPlaying?: boolean;
};

const Player = ({ url, isPlaying = false }: TPlayer) => {
  return (
    <div className="reactPlayer">
      <ReactPlayer
        playing={isPlaying}
        url={url}
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Player;
