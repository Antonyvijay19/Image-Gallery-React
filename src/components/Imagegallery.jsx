import Images from "./Images"


function Imagegallery(){


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

    return(
      <div className="imagecontainer">
      
       <Images Details={details}></Images>
      </div>
    )
  }

  export default Imagegallery