import React from "react";
import { Loader, Error, ArtistCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamcore";
const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading to charts" />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white mt-4 mb-10">
        Discover top Artist you
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track) => {
          return <ArtistCard key={track.key} track={track} />;
        })}
      </div>
    </div>
  );
};

export default TopArtists;
