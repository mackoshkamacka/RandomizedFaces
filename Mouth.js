import { arc } from 'd3'; 

export const Mouth = ({mouthRadius, mouthWidth}) => {
  const mouthArc = arc()
  	.innerRadius(mouthRadius) 
  	.outerRadius(mouthRadius + mouthWidth) 
		.startAngle(Math.PI/1.5)
		.endAngle(Math.PI/2*2.66); 
  
  return <path d={mouthArc()}/>;
};