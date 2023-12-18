/* Menu mouseover effect to jQuery */
$(document).ready(function(){
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });
});

/* Menu mouseover effect to Javascript */
// window.onload = function(){
//     let navList = document.querySelectorAll(".nav > ul > li");

//     navList.forEach(function(navItem){
//         navItem.addEventListener("mouseover", function(){
//             this.querySelector(".submenu").style.height = "155px";
//         });
//     });
//     navList.forEach(function(navItem){
//         navItem.addEventListener("mouseout", function(){
//             this.querySelector(".submenu").style.height = "0px";
//         })
//     });
// }