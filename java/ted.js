function opented(ttg) {
  var i;
  var x = document.getElementsByClassName("talk");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(ttg).style.display = "block";
}

function mynav(){
  var x=document.getElementById("mybar");
  if(x.className==="bar"){
    x.className += " responsive";
  }
  else{
    x.className = "bar";
  }
}
