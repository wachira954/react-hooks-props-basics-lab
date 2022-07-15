import React from "react";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <links github={props.links.github} linkedin={props.links.linkein} />
    </div>
  );
}

export default About;
