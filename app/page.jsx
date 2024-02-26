import React from "react";
import CardPerson from "./components/CardPerson/CardPerson";
import rafaelData from "./../data/cumpri";

export default function Home() {
  return (
    <main>
      <CardPerson pessoa={rafaelData} />
    </main>
  );
}
