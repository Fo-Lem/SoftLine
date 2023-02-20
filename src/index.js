import "./index.html";
import "./index.scss";

window.mapFill = function (id) {
  //Убираем подчеркивание
  for (var i = 1; i <= 9; i++) {
    document.getElementById("list" + i).style.borderBottom = "none";
    document.getElementById("list" + i).style.color = "#444444";
  }
  //прячем все точки
  for (var i = 1; i <= 27; i++) {
    document.getElementById("point" + i).style.visibility = "hidden";
  }

  document.getElementById(id).style.borderBottom = " 3px solid #A30C33";
  document.getElementById(id).style.color = "#A30C33";
  var list = [];

  switch (id) {
    case "list1":
      for (var i = 1; i <= 27; i++) {
        document.getElementById("point" + i).style.visibility = "visible";
      }
      break;

    case "list2":
      list = [4];
      listState(list);

      break;

    case "list3":
      list = [3, 5, 6];
      listState(list);

      break;
    case "list4":
      list = [1, 2];
      listState(list);

      break;
    case "list5":
      list = [7, 8, 9];
      listState(list);

      break;
    case "list6":
      list = [10, 11, 12, 13, 14];
      listState(list);

      break;
    case "list7":
      list = [15, 16, 17, 18, 19, 20];
      listState(list);

      break;
    case "list8":
      list = [21, 22, 23, 24, 25];
      listState(list);

      break;
    case "list9":
      list = [26, 27];
      listState(list);

      break;
  }
};
window.listState = function (list) {
  console.log(list);

  for (var v = 1; v <= 27; v++) {
    for (var d = 0; d < Object.keys(list).length; d++) {
      if (list[d] == v) {
        console.log(d);
        document.getElementById("point" + list[d]).style.visibility = "visible";
        console.log(document.getElementById("point" + v));
      }
    }
  }
};
window.mapLock = function () {
  if (document.getElementById("liState").style.visibility == "visible") {
    document.getElementById("liState").style.visibility = "hidden";
    document.getElementById("navlock").style.visibility = "hidden";
    document.getElementById("maplock").style.visibility = "hidden";
    document.getElementById("mapLock").classList.remove("h3anim");
    console.log(document.getElementById("section-map"));
    
    if(document.body.scrollWidth<=400){
      document.getElementById("section-map").style.overflowX = 'visible';
    }

  } else {
    document.getElementById("liState").style.visibility = "visible";
    document.getElementById("navlock").style.visibility = "visible";
    document.getElementById("maplock").style.visibility = "visible";
    document.getElementById("mapLock").classList.add("h3anim");
    
    if(document.body.scrollWidth<=400){
      document.getElementById("section-map").style.overflowX = 'hidden';
    }
    
    

  }
};
var left = 0;
window.slederBut = function (orientation) {
  if (orientation == "left" && left < 0) {
    left += 1;
    console.log(document.getElementById("slide").offsetWidth)
    
    document.getElementById("slids").style.left = left * document.getElementById("slide").offsetWidth + "px";
  }
  if (orientation == "right" && left > -4) {
    left -= 1;
    document.getElementById("slids").style.left = left * document.getElementById("slide").offsetWidth + "px";
  }

  for (var i = 0; i < 5; i++) {
    if (Math.abs(left) == i) {
      document.getElementById("pag" + i).style.background = "#A30C33";
    } else {
      document.getElementById("pag" + i).style.background = "#dddddd";
    }
  }
};

window.limove = function (id){
  if(document.getElementById(id).parentNode.style.height == "auto"){
    if(id=="liState7"){
      document.getElementById(id).parentNode.style.height = "40px";

    }
    else{
      document.getElementById(id).parentNode.style.height = "20px";
    }
    
    document.getElementById(id).classList.remove("h3anim");
    document.getElementById(id).style.color = "#444444";
    

  }else{
    document.getElementById(id).parentNode.style.height = "auto";
    document.getElementById(id).classList.add("h3anim");
    document.getElementById(id).style.color = "#A30C33";
  }


  
  
  

}
window.bacmove = function (id){
  if(document.getElementById(id).style.height == "260px"){

    document.getElementById(id).style.height = "60px";
    document.getElementById(id).childNodes[1].childNodes[1].classList.remove("h4anim");
  
    

  }else{
    document.getElementById(id).style.height = "260px";
    document.getElementById(id).childNodes[1].childNodes[1].classList.add("h4anim");
    console.log(document.getElementById(id).childNodes[1].childNodes[1]);
    
  }


  
  
  

}

