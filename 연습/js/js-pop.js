/* effect to jQuery */
// $(document).ready(function(){
//     $(".popup-btn").click(function(){
//         $(".popup-view").show();
//     });
//     $(".popup-close").click(function(){
//         $(".popup-view").hide();
//     });
// });

/* effect to Javascript */
window.onload = function() {
    document.querySelector(".popup-btn").addEventListener("click",function(){
        document.querySelector(".popup-view").style.display = "block";
    });
    document.querySelector(".popup-close").addEventListener("click",function(){
        document.querySelector(".popup-view").style.display = "none";
    });
}