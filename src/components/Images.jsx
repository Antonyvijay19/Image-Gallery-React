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


    export default Images