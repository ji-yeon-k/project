/* effect to jQuery */
$(document).ready(function(){
    let currentIndex = 0; //현재 이미지

    setInterval(function(){ //3초에 한번씩 실행
        let nextIndex = (currentIndex + 1) % 3 //1 2 0 1 2 무한반복

        $(".slider").eq(currentIndex).fadeOut(1200); //첫번째 이미지 사라짐
        $(".slider").eq(nextIndex).fadeIn(1200); //두번재 이미지 나타남

        currentIndex = nextIndex; //두번째 인덱스값을 현재 인덱스값에 저장
    },3000);
});

/* effect to Javascript */
// window.onload = function(){
    
// }