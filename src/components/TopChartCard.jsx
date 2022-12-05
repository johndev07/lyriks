import React from "react";
import { Link } from "react-router-dom";
import { SongCard } from ".";
import PlayPause from "./PlayPause";

const TopChartCard = ({
  song,
  i,
  activeSong,
  isPlaying,
  handlePauseClick,
  handlePlayClick,
}) => {
  return (
    <div className="w-full flex flex-row items-center hover:bg-[#4c426e]  py-2 p-4 rounded-lg cursor-pointer mb-2 ">
      <h3 className="font-bold text-base text-white mr-3">{i + 1}</h3>
      <div className="flex-1 flex flex-row justify-between items-center">
        <img
          className="w-12 h-12 rouded-lg"
          src={song?.images?.coverart}
          alt={song?.title}
        />
        <div className="flex-1 flex flex-col justify-center mx-3">
          <Link to={`/songs/${song.key}`}>
            <p className="text-md font-bold text-white ">
              {song?.title.length > 35
                ? song.title.slice(0, 35) + "..."
                : song.title}
            </p>
          </Link>
          <Link to={`/artists/${song?.artists[0].adamid}`}>
            <p className="text-base  text-gray-300">{song.subtitle}</p>
          </Link>
        </div>
      </div>
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
      />
    </div>
  );
};

export default TopChartCard;
