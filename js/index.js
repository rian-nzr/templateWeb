
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    
    var currentScrollPos = window.pageYOffset;
    console.log('hello world')
    
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } 
    else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}
