import React from "react";
import { render } from "react-dom";
import { Card } from "/src/card";

const App = () => (
  <div>
    <Card></Card>
  </div>
);

const el = document.getElementById("root");
render(<App />, el);
