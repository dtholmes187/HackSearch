import React from "react";

const ResultDetail = ({ result }) => {
  if (!result) {
    return <div>Loading...</div>;
  }

  const resultId = result.id.resultId;
  const url = `https://www.youtube.com/embed/${resultId}`;

  return (
    <div className="result-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
      HI! UPDATE ME TO GET DATA
        {/* <iframe className="embed-responsive-item" src={url} /> */}
      </div>
      <div className="details">
        <div>{result.snippet.title}</div>TEST
        <div>{result.snippet.description}</div>
      </div>
    </div>
  );
};

export default ResultDetail;
