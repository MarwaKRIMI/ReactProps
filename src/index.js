import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import "./styles.css";
const actor1 = {
  name: "Leonardo Dicaprio",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/200px-Leonardo_DiCaprio_2014.jpg",
  wikipidiaPage: "https://en.wikipedia.org/wiki/Leonardo_DiCaprio"
};
const actor2 = {
  name: "Will Smith",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Will_Smith_Cannes_2017.jpg/260px-Will_Smith_Cannes_2017.jpg",
  wikipidiaPage: "https://fr.wikipedia.org/wiki/Will_Smith"
};
const Actor = props => (
  <a href={props.actor.wikipidiaPage}>
    <h1>{props.actor.name}</h1>
    <img src={props.actor.image} />
  </a>
);
const App = () => {
  return (
    <div>
      <Actor actor={actor1} />;
      <Actor actor={actor2} />;
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
