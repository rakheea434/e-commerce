//header js
$("#men-sub").hover(function(){
  $("#nav-sub-menu-wrapper").fadeToggle(200)
})
$("#women-sub").hover(function(){
  $("#nav-sub-women").fadeToggle(200)
})
$("#top-cart").click(function(){
  $("#cart-sub").fadeToggle(200)
})
//header js


//newArrival js-starts
let btn = document.querySelector(".btn");
let container = document.querySelector(".cont");
let clo = document.querySelector(".close");

let btn1 = document.querySelector(".btn1");
let container1 = document.querySelector(".cont1");
let clo1 = document.querySelector(".close1");

let btn2 = document.querySelector(".btn2");
let container2 = document.querySelector(".cont2");
let clo2 = document.querySelector(".close2");


function modalPopUp( x , y , z ) {
  x.addEventListener("click", function () {
    y.classList.add("show");
    // if (container.className == "cont") {
    //     container.className = "show";
    //   } else {
    //     container.className = "cont";
    //   }
  });

  z.addEventListener("click", function () {
    y.classList.remove('show');
    // if (y.className == "cont") {
    //   y.className = "show";
    // } else {
    //   y.className = "cont";
    // }
  });
}

modalPopUp(btn , container , clo);
modalPopUp(btn1 , container1 , clo1);
modalPopUp(btn2 , container2 , clo2)
//newArrival js-ends