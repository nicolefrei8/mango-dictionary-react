import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function dictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function pexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(dictionaryResponse);
    let pexelsApiKey =
      "563492ad6f91700001000001b1983c7ed15944558605d2b0d3cba0a9";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(pexelsResponse);
  }
  function keywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={keywordChange}
            placeholder="Search for a word here..."
          />
        </form>
      </section>

      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
