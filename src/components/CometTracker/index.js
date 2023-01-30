import './tracker.css';
import React from 'react';

export const Tracker = () => {

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#222759", 
    "#232b61", 
    "#24306a", 
    "#243472", 
    "#23397b", 
    "#223e84", 
    "#1f438d", 
    "#1b4896",
    "#1b4896", 
    "#174f9c", 
    "#1557a1", 
    "#135ea6", 
    "#1365ab", 
    "#166db0", 
    "#1b74b4", 
    "#217bb8",
    "#217bb8", 
    "#0c89c4", 
    "#0098d0",
    "#00a6da", 
    "#00b5e3", 
    "#00c3eb"
];
circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}


animateCircles();


    return (


        <div>

  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
        </div>
    )


}