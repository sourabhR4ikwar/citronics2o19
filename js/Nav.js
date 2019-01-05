function openNav(){
  document.getElementById("sideNav").style.width = "100%";
}

function closeNav(){
  document.getElementById("sideNav").style.width = "0";
}

function dropMenu(){
  document.getElementById("dropDown").classList.toggle("show");
}
var scrollobject = {};
window.addEventListener('scroll',function(){

    scrollobject = {
        x: window.pageXOffset,
        y: window.pageYOffset
    };

    if(scrollobject.y > 0)
    {
        document.getElementById('mainNav').classList.remove("topTouch");
    }
    else
    {
         document.getElementById('mainNav').classList.add("topTouch");
    }

});
