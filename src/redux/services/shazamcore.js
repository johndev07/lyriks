import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "f5ab4bfb1fmsh34e3f0ff42945ebp14127ajsna9ec2915e94d"
      );
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      getTopCharts: builder.query({ query: () => "/charts/world" }),
      getSongDetails: builder.query({
        query: ({ songid }) => `/tracks/details?track_id=${songid}`,
      }),
      getSongRelated: builder.query({
        query: ({ songid }) => `tracks/related?track_id=${songid}`,
      }),
      getArtistDetails: builder.query({
        query: (artistId) => `/artists/details?artist_id=${artistId}`,
      }),
      getSongByCountry: builder.query({
        query: (countryCode) => `charts/country?country_code=${countryCode} `,
      }),
      getSongsByGenre: builder.query({
        query: (genre) => `/charts/genre-world?genre_code=${genre}`,
      }),
      getSongBySearch: builder.query({
        query: (searchTerm) => {
          return `search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`;
        },
      }),
    };
  },
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongByCountryQuery,
  useGetSongsByGenreQuery,
  useGetSongBySearchQuery,
} = shazamCoreApi;
