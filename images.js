$(document).ready(function(){
	$(window).scroll(function(){
     if( $(this).scrollTop() > 0){
     	$('header').addClass('header2');
     } else {
     	     $(?header).removeClass('header2')
     	 }
     	});
});


"use strict";

const imgs = document.querySelectorAll(".img");
const hide = document.querySelector(".hide");
 
 imgs.forEach((img) => {
 	img.addEventListener("click", () => {
 		const cloneImg = img.cloneNode(false); 
 		if (hide.ClassName === "hide") { 
 			hide.ClassList.add("visible");
 			hide.append(cloneImg); 
 		} else {
 			hide.classList.remove("visble");
 			hide.removeChild(hide.children[0]);
 		}
 	});
 })
