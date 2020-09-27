import React, { useState } from "react";
import data from "../data.json";
import Accordian from "./Accordian";

export default function () {
  const [topic, setTopic] = useState("web");
  return (
    <container>
      <div class="tab">
        <button
          class="tablinks"
          onClick={() => {
            setTopic("web");
          }}
        >
          Web Development
        </button>
        <button
          class="tablinks"
          onClick={() => {
            setTopic("mobile");
          }}
        >
          Mobile Development
        </button>
        <button
          class="tablinks"
          onClick={() => {
            setTopic("basics");
          }}
        >
          Basics
        </button>
      </div>
      <div className="tabcontent">
        {data[`${topic}`].map((value, index) => {
          return (
            <Accordian
              head={value.subtopic}
              fa={value.fa}
              links={value.links}
            />
          );
        })}
      </div>
    </container>
  );
}
