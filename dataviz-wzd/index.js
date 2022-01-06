import React from 'react';
import ReactDOM from 'react-dom';
import { arc } from 'd3';

const width = 960;
const height = 500;
const circleX = width / 2;
const circleY = height / 2;
const circleRadius = 30;

const handleMouseMove = (event) => {
 const {clientX, clientY} = event;
  console.log(clientX, clientY);
};

const App = () => (
  <svg
    width={width}
    height={height}
    onMouseMode={handleMouseMove}
  >
    <circle cx={circleX} cy={circleY} r={circleRadius} />
  </svg>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
