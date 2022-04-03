import React from "react";

export default function Phonetic(props) {
  console.log(props);

  return (
    <div>
      <a href={props.phonetic.audio} target="_blank">
        Listen
      </a>{" "}
      {props.phonetic.text};
    </div>
  );
}
