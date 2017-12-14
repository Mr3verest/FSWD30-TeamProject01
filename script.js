document.getElementById("home").addEventListener("click", function(){
	window.location.href = "index.html";
});

document.getElementById("member1").addEventListener("click", function(){
	window.location.href = "member-Pascal.html";
});
document.getElementById("member2").addEventListener("click", function(){
	window.location.href = "member-Sade.html";
});
document.getElementById("member3").addEventListener("click", function(){
	window.location.href = "member-Mahtab.html";
});
document.getElementById("member4").addEventListener("click", function(){
	window.location.href = "member-Ibrahimi.html";
});


// _______________ Background Carousell _____________
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("backgrounds");

    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}
// ______________ Background Carousell END_____________