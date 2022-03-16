import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/card";
import Collapse from "./components/collapse";

//! function component
const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card-group w-100 gap-3">
          <div className="col">
            <Collapse href="collapseExample1">
              <Card
                // cardTitle="Card Title 1"
                cardText="Lorem ipsum dolor sit amet.1"
                updatedTime="last updated 1 min ago"
                image="https://picsum.photos/id/1/200/300"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample2">
              <Card
                cardTitle="Card Title 2"
                cardText="Lorem ipsum dolor sit amet.3"
                updatedTime="last updated 2 min ago"
                image="https://picsum.photos/id/10/200/300"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample3">
              <Card
                cardTitle="Card Title 3"
                cardText="Lorem ipsum dolor sit amet.3"
                updatedTime="last updated 3 min ago"
                image="https://picsum.photos/id/100/200/300"
              />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));


  /*         <Collapse href="collapseExample2">
        <Card
          cardTitle="Card Title 2"
          cardText="Lorem ipsum dolor sit amet. 22"
          updatedTime="last updated 2 min ago"
          image="https://picsum.photos/id/10/200/300"

        /></Collapse>
        <Collapse href="collapseExample3">
        <Card
          cardTitle="Card Title 3"
          cardText="Lorem ipsum dolor sit amet. 333"
          updatedTime="last updated 3 min ago"
          image="https://picsum.photos/id/100/200/300"

        />
        </Collapse> */

