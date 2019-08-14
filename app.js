var imprimir = (()=>{
  var barra = document.getElementById("barra");
  var logo = document.getElementById("logo-idonto");

  if(window.pageYOffset > 100){
    console.log(barra);
    barra.className = "navbar fixed-top navbar-expand-md navbar-dark";
    logo.className = "no-logo"
  }
  else{
    console.log(barra);
    barra.className = "navbar navbar-expand-md navbar-light";
    logo.className = "logo-idonto";
  }
})

window.addEventListener('scroll',imprimir);
