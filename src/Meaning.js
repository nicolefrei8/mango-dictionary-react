import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props);
  return (
    <div>
      <h4> {props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>
            <div className="example"> {definition.example}</div>
            <br />
          </div>
        );
      })}
    </div>
  );
}
