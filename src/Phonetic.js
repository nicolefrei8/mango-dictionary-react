import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div>
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="phonetic-audio"
      >
        Listen
      </a>{" "}
      <span className="phonetic-text"> {props.phonetic.text}</span>;
    </div>
  );
}
