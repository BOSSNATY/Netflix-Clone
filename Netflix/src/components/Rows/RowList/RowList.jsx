import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchAction} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorror} />
      <Row title="Animation" fetchUrl={requests.fetchAnimation} />
      <Row title="TV Shows" fetchUrl={requests.fetchTVShows} />
      <Row
        title="Scientific Fiction"
        fetchUrl={requests.fetchScientificFiction}
      />
      <Row title="Comedy" fetchUrl={requests.fetchComedy} />
    </>
  );
};

export default RowList;
