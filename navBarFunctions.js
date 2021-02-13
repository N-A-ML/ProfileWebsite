
    $(document).ready(function(){
      $('button').click(function(){
          $('li').toggleClass('show');
      });
    });


    
    // https://www.w3schools.com/howto/howto_js_media_queries.asp
    function myFunction(x) {
  if (x.matches) { // If media query matches
    $('li').toggleClass('show');
  } 
  else {

  }
}
  var x = window.matchMedia("(max-width: 400px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
