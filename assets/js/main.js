let btn = document.querySelector(".btn");
let container = document.querySelector(".cont");
let close = document.querySelector(".close");
btn.addEventListener('click' , function(){
    container.classList.toggle('show');
    // if (container.className == "cont") {
    //     container.className = "show";
    //   } else {
    //     container.className = "cont";
    //   }
})

close.addEventListener('click' , function(){
    // container.classList.toggle('show');
    if (container.className == "cont") {
        container.className = "show";
      } else {
        container.className = "cont";
      }
})