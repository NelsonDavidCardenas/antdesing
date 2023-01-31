import React from "react";
import { Gallery } from "./Gallery";

const person = {
  name: "Cr7",
  theme: {
    backgroundColor: "yellow",
    color: "blue",
  },
};

export default function Avatar(): JSX.Element {
  const name = "cr7";
  const cr7image =
    "https://media.primicias.ec/2023/01/22145623/Cristiano-Ronaldo-debut-Al-Nassr-1024x574.jpg";

  return (
    <div style={person.theme}>
      <h1> {person.name} </h1>
      <img className="avatar" src={cr7image} alt={name} />
    </div>
  );
}
