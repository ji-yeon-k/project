$(document).ready(function(){
    /* Menu mouseover effect */
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });

    /* Main Slider */
    let currentIndex = 0; //현재 이미지

    setInterval(function(){
        let nextIndex = (currentIndex + 1)%3; //1 2 0 1 2 무한반복

        $(".slider").eq(currentIndex).fadeOut(1200); //첫번째 이미지 사라짐
        $(".slider").eq(nextIndex).fadeIn(1200); //두번째 이미지 나타남

        currentIndex = nextIndex; //두번째 인덱스값을 현재 인덱스값에 저장
    },3000);
});