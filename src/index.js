import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"


function Imagegallery(){
  return(
    <div className="imagecontainer">
    
     <Images Details={details}></Images>
    </div>
  )
}

function Images({Details}){
     return(
      <>
   {
      Details.map(function(item){
        return(
          <div className="photos">
            <img src={item.image} alt=""></img>
            <h2>{item.tag}</h2>
          </div>

        );
      })}
      </>  
     )}

var details =[
  {
    image:"./Assets/images/1.jpg",
    tag: "Julies Rabbit Ears"
  },
  {
    image:"./Assets/images/2.jpg",
    tag: "The innocent look"
  },
  {
    image:"./Assets/images/3.jpg",
    tag: "big eyed pugg"
  },
  {
    image:"./Assets/images/4.jpg",
    tag: "The saint Doggo"
  },
  {
    image:"./Assets/images/3.jpg",
    tag: "big eyed pugg"
  },
  {
    image:"./Assets/images/2.jpg",
    tag: "The innocent look"
  },
 
  {
    image:"./Assets/images/4.jpg",
    tag: "The saint Doggo"
  },
  {
    image:"./Assets/images/1.jpg",
    tag: "Julies Rabbit Ears"
  }
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
   <Imagegallery></Imagegallery>
   </div>
);

