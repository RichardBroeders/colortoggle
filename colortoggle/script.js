//hide menu
let toggleNavStatus = true;

const toggleNav = function(){
  const getSidebar = document.querySelector(".nav");
  const getSidebarUl = document.querySelector(".nav ul");
  const getSidebarLinks = document.querySelectorAll("a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
     toggleNavStatus = true;
  }
  else if (toggleNavStatus === true) {
    getSidebarUl.style.visibility = "hidden";
    toggleNavStatus = false;
  }
};

   //change color
    homebtn.addEventListener("click",  function(){
    document.body.style.backgroundColor = "grey";
    });
    rbutton.addEventListener("click",  function(){
    document.body.style.backgroundColor = "red" ;
    });
    obutton.addEventListener("click",  function(){
    document.body.style.backgroundColor = "orange";
    });
    pbutton.addEventListener("click",  function(){
    document.body.style.backgroundColor = "purple";
    });
    gbutton.addEventListener("click",  function(){
    document.body.style.backgroundColor = "green";
    });      