$(window).load(function(){
	op_slide();
	imgResize();
	svisual();
	listMore("newsletter");
	listMore("tv");
});
$(window).resize(function(){
	imgResize();
	svisual();
})

$(window).ready(function(){
	$("a").click(function(e){
		var href = $(this).attr("href");
		if(href == "#none" || href == "#" || href == ""){
			e.preventDefault();
		}
	});
	$("#gnb_layout .depth1_ul > li").eq(0).find("a").attr("id","gnb_link");
    $("#opbox .op_open").on("click",function(e){
		e.preventDefault();
		$("#opbox").addClass("on");
    });
    $("#opbox .op_close").on("click",function(e){
		e.preventDefault();
        $("#opbox").removeClass("on");
        $("#opbox .op_open").focus();
    });
    $("#opbox .op_check").on("focusout",function(e){
		e.preventDefault();
        $("#opbox .sliderBox li:first-child a").focus();
    });
	
	$(".lp_open").on("click",function(){
		var dataLp = $(this).attr("data-lp");
		$("html").addClass("lpView");
		$("#lp_layout .lp_wrap."+dataLp).addClass("on");
		if($("#lp_layout .lp_wrap."+dataLp).find(".iscroll").length > 0){
			var myScroll = new IScroll('.lp_wrap.on .iscroll', { mouseWheel: true, scrollbars: true, keyBindings: true });
			myScroll.refresh();
			$("*").on("click keydown",function(){ 
				myScroll.refresh();
			});
		}

		if(dataLp == "scho_result"){
			var chk_arr = $("input[name='scho']");
			var chk_num = $("input[name='scho']:checked").length;
			//console.log(">>>>>>>>>>>>>>>>>> chk_arr : "+chk_arr.length);
			//console.log(">>>>>>>>>>>>>>>>>> chk_num : "+chk_num);
			var chk_data = [];
			for( var i=0; i<chk_arr.length; i++ ) {
				if( chk_arr[i].checked == true ) {
					chk_data.push(chk_arr[i].value);
				}
			}			
//			console.log(">>>>>>>>>>>>>> chk_data : "+chk_data);
//			console.log(">>>>>>>>>>>>>> chk_data.indexOf(scho_1_1) : "+chk_data.indexOf("scho_1_1"));
			if(chk_data.indexOf("scho_1_1") != -1 || chk_data.indexOf("scho_1_2") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no1").addClass("on");
			}
			if(chk_data.indexOf("scho_1_3") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no2").addClass("on");
			}
			if(chk_data.indexOf("scho_1_5") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no3").addClass("on");
			}
			if(chk_data.indexOf("scho_1_6") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no4").addClass("on");
			}
			if(chk_data.indexOf("scho_2_4") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no5").addClass("on");
			}
			if(chk_data.indexOf("scho_2_1") != -1 || chk_data.indexOf("scho_2_2") != -1 || chk_data.indexOf("scho_2_3") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no6").addClass("on");
			}
			if(chk_data.indexOf("scho_4_3") != -1 || chk_data.indexOf("scho_4_4") != -1 || chk_data.indexOf("scho_4_5") != -1 || chk_data.indexOf("scho_4_6") != -1 || chk_data.indexOf("scho_5_1") != -1 || chk_data.indexOf("scho_5_2") != -1 || chk_data.indexOf("scho_5_3") != -1 || chk_data.indexOf("scho_5_4") != -1 || chk_data.indexOf("scho_5_5") != -1 || chk_data.indexOf("scho_5_6") != -1 || chk_data.indexOf("scho_5_7") != -1 || chk_data.indexOf("scho_5_8") != -1 || chk_data.indexOf("scho_5_9") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no7").addClass("on");
			}
			if(chk_data.indexOf("scho_4_1") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no8").addClass("on");
			}
			if(chk_data.indexOf("scho_4_2") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no9").addClass("on");
			}
			if(chk_data.indexOf("scho_3_1") != -1 || chk_data.indexOf("scho_3_2") != -1 || chk_data.indexOf("scho_3_3") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no10").addClass("on");
			}
			if(chk_data.indexOf("scho_1_4") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no11").addClass("on");
			}
			if(chk_data.indexOf("scho_3_4") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no12").addClass("on");
			}
			if(chk_data.indexOf("scho_3_5") != -1 || chk_data.indexOf("scho_6_4") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no13").addClass("on");
			}
			if(chk_data.indexOf("scho_6_2") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no14").addClass("on");
			}
			if(chk_data.indexOf("scho_6_3") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no15").addClass("on");
			}
			if(chk_data.indexOf("scho_6_5") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no16").addClass("on");
			}
			if(chk_data.indexOf("scho_3_1") != -1 || chk_data.indexOf("scho_3_4") != -1 || chk_data.indexOf("scho_4_6") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no17").addClass("on");
			}
			if(chk_data.indexOf("scho_3_2") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no18").addClass("on");
			}
			if(chk_data.indexOf("scho_6_1") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no19").addClass("on");
			}
			if(chk_data.indexOf("scho_1_7") != -1 || chk_data.indexOf("scho_2_5") != -1 || chk_data.indexOf("scho_3_6") != -1 || chk_data.indexOf("scho_4_7") != -1 || chk_data.indexOf("scho_5_10") != -1 || chk_data.indexOf("scho_6_6") != -1 || chk_data.indexOf("scho_6_7") != -1|| chk_data.indexOf("scho_6_8") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no20").addClass("on");
			}			
			$("#lp_layout .lp_wrap .lp_close").on("click",function(){
				$("#lp_layout .lp_wrap .box_wrap").removeClass("on");
				$("input[name='scho']").prop("checked",false);
			});
		}

		if(dataLp == "scho_result2"){
			var chk_arr = $("input[name='scho']");
			var chk_num = $("input[name='scho']:checked").length;
			//console.log(">>>>>>>>>>>>>>>>>> chk_arr : "+chk_arr.length);
			//console.log(">>>>>>>>>>>>>>>>>> chk_num : "+chk_num);
			var chk_data = [];
			for( var i=0; i<chk_arr.length; i++ ) {
				if( chk_arr[i].checked == true ) {
					chk_data.push(chk_arr[i].value);
				}
			}			
			console.log(">>>>>>>>>>>>>> chk_data : "+chk_data);
			console.log(">>>>>>>>>>>>>> chk_data.indexOf(scho_1_1) : "+chk_data.indexOf("scho_1_1"));
			if(chk_data.indexOf("scho_1_1") != -1 || chk_data.indexOf("scho_1_2") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no1").addClass("on");
			}
			if(chk_data.indexOf("scho_1_3") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no2").addClass("on");
			}
			if(chk_data.indexOf("scho_1_5") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no3").addClass("on");
			}
			if(chk_data.indexOf("scho_1_6") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no4").addClass("on");
			}
			if(chk_data.indexOf("scho_2_4") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no5").addClass("on");
			}
			if(chk_data.indexOf("scho_2_1") != -1 || chk_data.indexOf("scho_2_2") != -1 || chk_data.indexOf("scho_2_3") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no6").addClass("on");
			}
			if(chk_data.indexOf("scho_4_3") != -1 || chk_data.indexOf("scho_4_4") != -1 || chk_data.indexOf("scho_4_5") != -1 || chk_data.indexOf("scho_4_6") != -1 || chk_data.indexOf("scho_5_1") != -1 || chk_data.indexOf("scho_5_2") != -1 || chk_data.indexOf("scho_5_3") != -1 || chk_data.indexOf("scho_5_4") != -1 || chk_data.indexOf("scho_5_5") != -1 || chk_data.indexOf("scho_5_6") != -1 || chk_data.indexOf("scho_5_7") != -1 || chk_data.indexOf("scho_5_8") != -1 || chk_data.indexOf("scho_5_9") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no7").addClass("on");
			}
			if(chk_data.indexOf("scho_4_1") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no8").addClass("on");
			}
			if(chk_data.indexOf("scho_4_2") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no9").addClass("on");
			}
			if(chk_data.indexOf("scho_3_1") != -1 || chk_data.indexOf("scho_3_2") != -1 || chk_data.indexOf("scho_3_3") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no10").addClass("on");
			}
			if(chk_data.indexOf("scho_1_4") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no11").addClass("on");
			}
			if(chk_data.indexOf("scho_3_4") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no12").addClass("on");
			}
			if(chk_data.indexOf("scho_3_5") != -1 || chk_data.indexOf("scho_6_4") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no13").addClass("on");
			}
			if(chk_data.indexOf("scho_6_2") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no14").addClass("on");
			}
			if(chk_data.indexOf("scho_6_3") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no15").addClass("on");
			}
			if(chk_data.indexOf("scho_6_5") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no16").addClass("on");
			}
			if(chk_data.indexOf("scho_3_1") != -1 || chk_data.indexOf("scho_3_4") != -1 || chk_data.indexOf("scho_4_6") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no17").addClass("on");
			}
			if(chk_data.indexOf("scho_3_2") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no18").addClass("on");
			}
			if(chk_data.indexOf("scho_6_1") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no19").addClass("on");
			}
			if(chk_data.indexOf("scho_1_7") != -1 || chk_data.indexOf("scho_2_5") != -1 || chk_data.indexOf("scho_3_6") != -1 || chk_data.indexOf("scho_4_7") != -1 || chk_data.indexOf("scho_5_10") != -1 || chk_data.indexOf("scho_6_6") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no20").addClass("on");
			}
			if(chk_data.indexOf("scho_6_7") != -1 || chk_data.indexOf("scho_6_8") != -1){
				$("#lp_layout .lp_wrap."+dataLp+" .box_wrap.no21").addClass("on");
			}
			$("#lp_layout .lp_wrap .lp_close").on("click",function(){
				$("#lp_layout .lp_wrap .box_wrap").removeClass("on");
				$("input[name='scho']").prop("checked",false);
			});
		}

	});

	$("#lp_layout .lp_wrap .lp_close").on("click",function(){
		$("html").removeClass("lpView");
		$("#lp_layout .lp_wrap").removeClass("on");
		$("#lp_layout .lp_wrap .box_wrap").removeClass("on");
		$("input[name='scho']").prop("checked",false);
	});

	/*
	$(".type_scholarship .box_wrap li label").on("click",function(){
		var isID = $(this).attr("for");
        if(isID=="scho_1_1" || isID=="scho_1_2" || isID=="scho_1_3" || isID=="scho_1_4" || isID=="scho_1_5" || isID=="scho_1_6" || isID=="scho_2_4" || isID=="scho_3_1" || isID=="scho_3_2" || isID=="scho_3_3"){
            $("html").addClass("lpView");
            $("#lp_layout .lp_wrap.scho_result").addClass("on");
            if(isID=="scho_1_1" || isID=="scho_1_2"){
                $("#lp_layout .lp_wrap.scho_result .box_wrap.no1").addClass("on");
            }
            if(isID=="scho_1_3"){
                $("#lp_layout .lp_wrap.scho_result .box_wrap.no2").addClass("on");
            }
            if(isID=="scho_1_4"){
                $("#lp_layout .lp_wrap.scho_result .box_wrap.no11").addClass("on");
            }
            if(isID=="scho_1_5"){
                $("#lp_layout .lp_wrap.scho_result .box_wrap.no3").addClass("on");
            }
            if(isID=="scho_1_6"){
                $("#lp_layout .lp_wrap.scho_result .box_wrap.no4").addClass("on");
            }
            if(isID=="scho_2_4"){
                $("#lp_layout .lp_wrap.scho_result .box_wrap.no5").addClass("on");
            }
            if(isID=="scho_3_1" || isID=="scho_3_2" || isID=="scho_3_3"){
                $("#lp_layout .lp_wrap.scho_result .box_wrap.no10").addClass("on");
            }
            if(isID=="scho_3_1"){
                $("#lp_layout .lp_wrap.scho_result .box_wrap.no17").addClass("on");
            }
            if(isID=="scho_3_2"){
                $("#lp_layout .lp_wrap.scho_result .box_wrap.no18").addClass("on");
            }
            var myScroll = new IScroll('.lp_wrap.on .iscroll', { mouseWheel: true, scrollbars: true });
            $("*").on("click",function(){
                myScroll.refresh();
            })
        }
	});
	*/
	
	
	/*230424 접근성수정*/
	$(".acco_tit a").on("click", function() {
		var $button = $(this);
		var isExpanded = $button.attr("aria-expanded") === "true";
		$button.attr("aria-expanded", !isExpanded);
		$button.parent().next(".acco_con").toggleClass("on");

		if ($(".acco_con").hasClass("on")) {
			$(".acco_tit a").attr("title", "답변 닫힘");
		} else {
			$(".acco_tit a").attr("title", "답변 열림");
		}
	});
	
});

function op_slide(){		
    var _id = "#op_slide";//시작 아이디
    var _view = 1;//슬라이더 컨텐츠 수
    var _auto = true;//오토플레이 아닐시 false
    var _slide = true;//슬라이더 아닐시 false(fade in/out)
    var _speed = 150;//슬라이더 속도 기본150
    touchSlider(_id,_view,_auto,_slide,_speed);
}

function svisual(){
	var isSub = $(".svisual_wrap").attr("class");
	
	if(isSub){
		var _this = $(".svisual_wrap");
		_this.find("img").removeAttr("class");
		var _boxW = _this.parent().width();
		var _boxH = _this.parent().height();
		var _imgW = _this.find("img").width();
		var _imgH = _this.find("img").height();

		if(_boxW > 2000){
			_this.find("img").addClass("imgW");
		}else{
			_this.find("img").addClass("imgH");
		}
	}
}

function listMore(type){
	if(type == "newsletter"){
		var moreNum = 3;
		var i=1;
		while(i<7){
			$(".type_"+type+" .box_wrap li:nth-child("+i+")").addClass("on");
			i++
		}
	}else if(type == "tv"){
		var moreNum = 4;
		var i=1;
		while(i<13){
			$(".type_"+type+" .box_wrap li:nth-child("+i+")").addClass("on");
			i++
		}
	}

	$(".h3_wrap .btnMore a").on("click",function(e){
		e.preventDefault();
		var totalNum = $(".type_"+type+" .box_wrap li").length;
		var viewNum = $(".type_"+type+" .box_wrap li.on").length;
		//console.log(">>>>>>>>>>> totalNum : "+totalNum);
		//console.log(">>>>>>>>>>> viewNum : "+viewNum);
		var sNum = viewNum +1;
		var eNum = viewNum + moreNum +1;
		//console.log(">>>>>>>>>>> eNum : "+eNum);
		for( var a=sNum;a<eNum;a++){
			$(".type_"+type+" .box_wrap li:nth-child("+a+")").addClass("on");
		}
	});
}


function imgResize(){
	$(".thumb img").each(function(){
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
			$(this).addClass("imgH");
		}else if(_boxH < _imgH){
			$(this).addClass("imgW");
		}
	});
}


//슬라이드 시작
function mainSlider(id,num,autoplay,slide,speed){
	//console.log(">>>>>>>>mainSlider")
	var $touchSlider = $(id);
	var $autoplay = autoplay;
	var $slidNum = num;
	var $slide = slide;
	var $speed = speed;
	if($slidNum==null || $slidNum=="auto" || $slidNum==0){
		var boxWidth = $touchSlider.find(".sliderBox").width();
		var conWidth = $touchSlider.find(".sliderBox > ul > li").width();
		$slidNum = Number(boxWidth/conWidth).toFixed();
		//console.log("$slidNum:"+$slidNum);
	}
	if($autoplay==null || $autoplay == true){
		$touchSlider.find(".btn_play").hide();
		$touchSlider.find(".btn_stop").show();
	}else{
		$touchSlider.find(".btn_play").show();
		$touchSlider.find(".btn_stop").hide();
	}
	if ($touchSlider.find('.sliderBox > ul > li').length > 1) {
		$touchSlider.find("> .sliderBox").touchSlider({
			view:$slidNum,
			speed : $speed,
			transition : false,
			autoplay : {
				enable : $autoplay,
				pauseHover : false,
				addHoverTarget : "", // 다른 오버영역 추가 ex) ".someBtn, .someContainer"
				interval : 7500,
			},
			initComplete : function (e) {
				var _this = this;
				var $this = $(this);
				var paging = $touchSlider.find(".paging");
				
				this._btn_play = null;
				this._btn_stop = null;
				
				paging.html("");
				$this.find(" > ul > li").each(function (i, el) {
					var num = (i+1) / _this._view;
					if((i+1) % _this._view == 0) {
						paging.append('<button type="button" class="btn_page">page' + num + '</button>');
					}
				});
				paging.find(".btn_page").bind("click", function (e) {
					_this.go_page($(this).index());
					$touchSlider.find(".btn_play").show();
					$touchSlider.find(".btn_stop").hide();
					_this.autoStop();
				});				
				
				$touchSlider.find(".btn_play").bind("click", function() {
					$touchSlider.find(".btn_play").hide();
					$touchSlider.find(".btn_stop").show();
					$touchSlider.find(".btn_stop").focus();
					_this.autoPlay();
				});
				$touchSlider.find(".btn_stop").bind("click", function() {
					$touchSlider.find(".btn_play").show();
					$touchSlider.find(".btn_stop").hide();
					$touchSlider.find(".btn_play").focus();
					_this.autoStop();
				});
				$this.find(" > ul > li a").on("focus",function(e){
					e.preventDefault();
					if(Number($slidNum) > 1){
						var _thisNumb = Math.floor(Number($(this).parents("li").index()/$slidNum));
					}else{
						var _thisNumb = $(this).parents("li").index();
					}
					$touchSlider.find(".btn_play").show();
					$touchSlider.find(".btn_stop").hide();
					_this.autoStop();
					_this.go_page(_thisNumb);
					
					$touchSlider.find("> .sliderBox > ul").css({"position":"fixed"});
					setTimeout(function(){
						$touchSlider.find("> .sliderBox > ul").css({"position":""});
					},50);
					
				});
				$this.find(" > ul > li a").on("focusout",function(){
					$touchSlider.find(".btn_play").hide();
					$touchSlider.find(".btn_stop").show();
					_this.autoPlay();
				});
			},
			counter : function (e) {
				var _this = this;
				$touchSlider.find(".paging .btn_page").removeClass("on").eq(e.current-1).addClass("on");
				$touchSlider.find(".pageCount").html("<span class='num'>"+e.current + "</span>/<span class='totalNum'>" + e.total+"</sapn>");				
				if($slide==false){
					$touchSlider.find(".sliderBox > ul > li").stop();
					$touchSlider.find(".sliderBox > ul > li").css({"opacity":"0","z-index":"1","left":"0"});
					$touchSlider.find(".sliderBox > ul > li.on").removeClass("on").css({"z-index":"2","opacity":"1","left":"0"});
					$touchSlider.find(".sliderBox > ul > li").eq(e.current-1).addClass("on").css({"z-index":"3","opacity":"0","left":"0"}).animate({"opacity":"1"},1000);
				}

				
				var _this = this;
				//console.log(">>>>>>>>>> e.current : "+e.current);
				
				var video1 = document.getElementById("mainVideo");
				if(e.current == 1 && video1 != null){
					video1.play();
					video1.addEventListener('timeupdate', function(e){
						//console.log("비디오시작");
						_this.autoStop();
						var playtime = Math.floor(video1.currentTime);
						var total = Math.floor(video1.duration);
						//console.log(">>>>>> playtime/total: "+playtime+" / "+total);
						if(playtime == total){
							if($touchSlider.find(".btn_stop").css("display") == "none"){
								video1.play();
							}else{
								//console.log("비디오정지");
								_this.go_page(1);
								_this.autoPlay();
							}
						}
						
					}, false);
				}
			},
			btn_prev : $touchSlider.find(".btn_prev"),
			btn_next : $touchSlider.find(".btn_next")
		});
	}
}
//슬라이드 끝

//슬라이드 시작
function touchSlider(id,num,autoplay,slide,speed){
	var $touchSlider = $(id);
	var $autoplay = autoplay;
	var $slidNum = num;
	var $slide = slide;
	var $speed = speed;
	if($slidNum==null || $slidNum=="auto" || $slidNum==0){
		var boxWidth = $touchSlider.find(".sliderBox").width();
		var conWidth = $touchSlider.find(".sliderBox > ul > li").width();
		$slidNum = Number(boxWidth/conWidth).toFixed();
		//console.log("$slidNum:"+$slidNum);
	}
	if($autoplay==null || $autoplay == true){
		$touchSlider.find(".btn_play").hide();
		$touchSlider.find(".btn_stop").show();
	}else{
		$touchSlider.find(".btn_play").show();
		$touchSlider.find(".btn_stop").hide();
	}
	if ($touchSlider.find('.sliderBox > ul > li').length > 1) {
		$touchSlider.find("> .sliderBox").touchSlider({
			view:$slidNum,
			speed : $speed,
			transition : false,
			autoplay : {
				enable : $autoplay,
				pauseHover : false,
				addHoverTarget : "", // 다른 오버영역 추가 ex) ".someBtn, .someContainer"
				interval : 7500,
			},
			initComplete : function (e) {
				var _this = this;
				var $this = $(this);
				var paging = $touchSlider.find(".paging");
				
				this._btn_play = null;
				this._btn_stop = null;
				
				paging.html("");
				$this.find(" > ul > li").each(function (i, el) {
					var num = (i+1) / _this._view;
					if((i+1) % _this._view == 0) {
						paging.append('<button type="button" class="btn_page">' + num + '</button>');
					}
				});
				paging.find(".btn_page").bind("click", function (e) {
					_this.go_page($(this).index());
					$touchSlider.find(".btn_play").show();
					$touchSlider.find(".btn_stop").hide();
					_this.autoStop();
				});				
				
				$touchSlider.find(".btn_play").bind("click", function() {
					$touchSlider.find(".btn_play").hide();
					$touchSlider.find(".btn_stop").show();
					$touchSlider.find(".btn_stop").focus();
					_this.autoPlay();
				});
				$touchSlider.find(".btn_stop").bind("click", function() {
					$touchSlider.find(".btn_play").show();
					$touchSlider.find(".btn_stop").hide();
					$touchSlider.find(".btn_play").focus();
					_this.autoStop();
				});
				$this.find(" > ul > li a").on("focus",function(e){
					e.preventDefault();
					if(Number($slidNum) > 1){
						var _thisNumb = Math.floor(Number($(this).parents("li").index()/$slidNum));
					}else{
						var _thisNumb = $(this).parents("li").index();
					}
					$touchSlider.find(".btn_play").show();
					$touchSlider.find(".btn_stop").hide();
					_this.autoStop();
					_this.go_page(_thisNumb);
					
					$touchSlider.find("> .sliderBox > ul").css({"position":"fixed"});
					setTimeout(function(){
						$touchSlider.find("> .sliderBox > ul").css({"position":""});
					},50);
					
				});
				$this.find(" > ul > li a").on("focusout",function(){
					$touchSlider.find(".btn_play").hide();
					$touchSlider.find(".btn_stop").show();
					_this.autoPlay();
				});
			},
			counter : function (e) {
				$touchSlider.find(".paging .btn_page").removeClass("on").eq(e.current-1).addClass("on");
				$touchSlider.find(".pageCount").html("<span class='num'>"+e.current + "</span>/<span class='totalNum'>" + e.total+"</sapn>");				
				if($slide==false){
					$touchSlider.find(".sliderBox > ul > li").stop();
					$touchSlider.find(".sliderBox > ul > li").css({"opacity":"0","z-index":"1","left":"0"});
					$touchSlider.find(".sliderBox > ul > li.on").removeClass("on").css({"z-index":"2","opacity":"1","left":"0"});
					$touchSlider.find(".sliderBox > ul > li").eq(e.current-1).addClass("on").css({"z-index":"3","opacity":"0","left":"0"}).animate({"opacity":"1"},1000);
				}
			},
			btn_prev : $touchSlider.find(".btn_prev"),
			btn_next : $touchSlider.find(".btn_next")
		});
	}
}
//슬라이드 끝