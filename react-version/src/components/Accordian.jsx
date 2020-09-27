import React, { useState } from "react";

export default function Accordian(props) {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <div id="Card">
        <div
          class="accordion"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <div class="cardHead">
            <h5>{props.head}</h5>
            <span class={`fab fa-${props.fa}`}></span>
          </div>
        </div>
        <div class={expand ? "panel open" : "panel"}>
          {props.links.map((value, index) => {
            return (
              <a href={value.url} target="__blank">
                {value.name}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
