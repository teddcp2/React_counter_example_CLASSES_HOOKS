import React from "react";
import "./styles.css";
import { ContainerHooks, ContainerClass } from "./components/container";

export default function App() {
  return (
    <div className="ui">
      <h2 className="ui header block title ">Counter Example</h2>
      <div className="App ui two column grid">
        <div className=" ui cards segment">
          <div className="card">
            <div className="ui header medium title "> with Hooks style</div>
            <ContainerHooks />
          </div>
          <div className="card">
            <div className="ui header medium title ">with Class Style</div>
            <ContainerClass />
          </div>
        </div>
      </div>
    </div>
  );
}
