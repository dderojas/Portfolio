$(document).ready(function(){
  
  
  $("#face").on('click', function(){
  window.open("https://www.facebook.com/dderojas");
  });
  
  $("#git").on('click', function(){
    window.open('https://github.com/dderojas')
  });
  
  $("#free").on('click', function(){
  window.open('https://www.freecodecamp.com/dderojas')
  });
  
  $("#linkedin").on('click', function(){    window.open('https://www.linkedin.com/in/don-de-rojas1/')
  });
  
  $("#Bowie").on("click",function(){
  window.open('https://codepen.io/Dderojas/full/PmRXjd/')
  });
  
  $("#Gob").on("click",function(){
  window.open('https://codepen.io/Dderojas/full/OmrzrV/')
  });
  
  $("#weather").on("click",function(){
  window.open('https://codepen.io/Dderojas/full/RgZqQR/')
  });
  
  $("#calculator").on("click",function(){
  window.open('https://codepen.io/Dderojas/full/qjvERL/')
  });
  
  //Scroll animation 
  $("a").on('click',function(event){
    if(this.hash!==""){
      var hash= this.hash;
      event.preventDefault();
      
      
      $('html,body').animate({scrollTop: $(hash).offset().top}, 800, function(){
        window.location.hash= hash;
      })
    }
  })
});