


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
