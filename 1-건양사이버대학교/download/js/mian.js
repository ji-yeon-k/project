$(window).ready(function(){
});
$(window).load(function(){


	console.log(">>>>>>>>>>>>> "+getCookie('#op_layout'));
	if(getCookie('#op_layout') == 'opToday'){
		//$("#op_layout").hide();
		$("html").removeClass("fixed");
	}else if(getCookie('#op_layout') == 'opClose'){
		$("html").removeClass("fixed");
	}else{
		$("html").addClass("fixed");
		$("#op_layout .op_wrap .btn p span").html($("#op_layout .op_wrap .grap .obj .item").length);
		setTimeout(function(){
			$(window).scrollTop("0px");
		},100);
	}
	
	videoResize();

    mainSlider("#slide_visual",1,true,true,150);
    touchSlider("#slide_popup",1,true,true,150);

	$(".quick_wrap > ul > li > a").on("click",function(){
		$(".quick_wrap > ul > li").removeClass("on");
		$(this).parent().addClass("on");
	});
	$(".quick_wrap .menu_close").on("click",function(){
		$(".quick_wrap > ul > li").removeClass("on");
		$(this).parents("li").find(">a").focus();
	});

	//배너모음 
	stateScrollObj("#slider_pride", ".item", "#slider_pride .control", 3000, 300, 0, 0, "x", 0, true, false, "easeInOutCubic", false);
	stateScrollObj("#slide_schedule", ".item", "#slide_schedule .control", 3000, 300, 0, 0, "x", 0, false, false, "easeInOutCubic", false);
});

$(window).resize(function(){
	videoResize();
});


function videoResize(){
	//console.log(">>>>>>>>>>>>>videoResize")
	$(".thumb video").each(function(){
		$(this).removeAttr("class");

		var _boxW = $(this).parent().width();
		var _boxH = $(this).parent().height();
		var _imgW = $(this).width();
		var _imgH = $(this).height();
		//console.log(">>>>>>>>>>>>>> _boxW : "+_boxW);
		//console.log(">>>>>>>>>>>>>> _boxH : "+_boxH);
		//console.log(">>>>>>>>>>>>>> _imgW : "+_imgW);
		//console.log(">>>>>>>>>>>>>> _imgH : "+_imgH);

		if(_boxH > _imgH){
			$(this).addClass("imgW");
		}else if(_boxH < _imgH){
			$(this).addClass("imgH");
		}
	});
}