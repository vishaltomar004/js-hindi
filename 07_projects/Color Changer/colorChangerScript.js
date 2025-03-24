 const buttons = document.querySelectorAll('.button');
 const body = document.querySelector("body");

//  let grey = document.getElementById("grey");
//  grey.addEventListener('click' , function(e)
// {
//   console.log("grey Clicked");
  
//   body.style.backgroundColor = "grey";
// })
// let white = document.getElementById("white");
//  white.addEventListener('click' , function(e)
// {
//   console.log("White Clicked");
  
//   body.style.backgroundColor = "white";
// })
// let yellow = document.getElementById("yellow");
//  yellow.addEventListener('click' , function(e)
// {
//   console.log("yellow Clicked");
  
//   body.style.backgroundColor = "yellow";
// })

// let blue = document.getElementById("blue");
//  blue.addEventListener('click' , function(e)
// {
//   console.log("blue Clicked");
  
//   body.style.backgroundColor = "blue";
// })



// Method 2 
 buttons.forEach( function(button) 
{
    // console.log(button);
    button.addEventListener('click' , function(e){
          console.log(e);
          console.log(e.target);
          
          if(e.target.id === "grey"){
            console.log("Inside grey");
            
            body.style.backgroundColor = e.target.id;
          }
          if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id;
          }
          if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id;
          }
          if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id;
          }
    });
    
} );