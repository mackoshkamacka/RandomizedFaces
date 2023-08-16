import React from 'react'; 
import ReactDOM from 'react-dom';
import { range } from 'd3'; 
import { Face } from './Face'; 

const width = 160; 
const height = 160; 

const array = range(6*3); 

const App = () => array.map(() => (
	<Face 
    width = {width}
    height = {height} 
    centerX = {width/2}
		centerY = {height/2} 
		strokeWidth = {Math.random()*8 + 4} 
		eyeOffsetX = {30} 
		eyeOffsetY = {20} 
		eyeRadius = {7 + Math.random()*5} 
		mouthWidth = {5 + Math.random()*7} 
		mouthRadius = {25 + Math.random()*15} 
  /> 
));

const rootElement = document.getElementById('root'); 
ReactDOM.render(<App />, rootElement)