$(function(){
	$(window).ready(function(){
		deviceCheck(1399,1023,768);
    });
});

$(window).load(function(){
	$("#op_layout .op_open,#gnb_layout .moMenu a.opview").on("click",function(){
		$("html").addClass("fixed");
		$("#op_layout .op_wrap .btn p span").html($("#op_layout .op_wrap .grap .obj .item").length);
	});
	$("#op_layout .op_wrap .btn a").on("click",function(){
		$("html").removeClass("fixed");
		//setCookie('#op_layout', 'opClose', 1);
	});
	$("#op_layout .op_wrap .op_today").on("click",function(){
		//$("#op_layout").hide();
		setCookie('#op_layout', 'opToday', 1);
	});

	$("#op_layout .op_wrap .btn a.op_today").on("keydown",function(e){		
		if(e.keyCode == 9){
			$("#op_layout .op_wrap .grap .obj .item").eq(0).find("a").focus();
		}
	});

	$(".lp_close").on("keydown",function(e){
		e.preventDefault();
		if(e.keyCode == 9){
			$("#lp_layout .lp_wrap.on").find("a").eq(0).focus();
		}else if(e.keyCode == 13){
			$("html").removeClass("lpView");
			$("#lp_layout .lp_wrap").removeClass("on");
			$("#lp_layout .lp_wrap .box_wrap").removeClass("on");
			$("input[name='scho']").prop("checked",false);
		}
	});

	$(".lp_open").on("click",function(){
		var _this = $(this);
		$(this).on("keydown",function(e){
			var _htmlClass = $("html").attr("class");
			if(_htmlClass == "lpView"){		
				e.preventDefault();
				if(e.keyCode == 9){
					$("#lp_layout .lp_wrap.on").find("a").eq(0).focus();
				}
			}
		});
		$(".lp_close").on("keydown",function(e){
			if(e.keyCode == 13){
				e.preventDefault();
				_this.focus();
			}
		});
	});


	
	stateScrollObj("#op_layout", ".item", "#op_layout .control", 3000, 300, 0, 0, "x", 0, false, false, "easeInOutCubic", false);
	
	//dropUp 시작
	$(".dropUp a").on("mouseenter focusin",function(e){
		e.preventDefault();
		var isMobile = $("#top_layout .top_wrap .gnbOpen").css("display");
		if(isMobile == "none"){
			$(".dropUp").removeClass("on");
			$(this).parents(".dropUp").addClass("on");
		}
	});
	$(".dropUp").on("mouseleave",function(e){
		e.preventDefault();
		var isMobile = $("#top_layout .top_wrap .gnbOpen").css("display");
		if(isMobile == "none"){
			$(this).removeClass("on");
		}
	});
	$("#foot_layout .link_wrap .dropUp > a").on("click",function(e){
		e.preventDefault();
		var isMobile = $("#top_layout .top_wrap .gnbOpen").css("display");
		if(isMobile == "block"){
			$(".dropUp").removeClass("on");
			$(this).parents(".dropUp").addClass("on");
		}
	});
	$("#foot_layout .link_wrap .menu .btn_close").on("click",function(e){
		e.preventDefault();
		var isMobile = $("#top_layout .top_wrap .gnbOpen").css("display");
		if(isMobile == "block"){
			$(this).parents(".dropUp").removeClass("on");
		}
	});
	$("a, button, input").focus(function(){
		var _boxName = $(this).parents(".dropUp").attr("class");
		//console.log(">>>>>> _boxName:"+_boxName);		
		if(_boxName == "undefined" || _boxName == "" || _boxName == null){
			//console.log(">>>>>> 없다");
			$(".dropUp").removeClass("on");
		}
	});
	//dropUp 끝

});


//쿠키저장
function setCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function getCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg) {
            var end = document.cookie.indexOf(";", j);
            if (end == -1) end = document.cookie.length;
            return unescape(document.cookie.substring(j, end));
        }
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
}

//디바이스 체크 시작
function deviceCheck(in_pcStart,in_tabletStart,in_mobileStart){
	var isMobile = false;
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
		isMobile = true
	}
	//console.log(">>> isMobile:"+isMobile);
	
	var out_pcStart = in_pcStart;
	var out_tabletStart = in_tabletStart;
	var out_mobileStart = in_mobileStart;
	
	/*
	if(isMobile == false){
		pcStart = out_pcStart-17;
		tabletStart = out_tabletStart-17;
		mobileStart = out_mobileStart-17;
	}else if(isMobile = true){
		pcStart = out_pcStart;
		tabletStart = out_tabletStart;
		mobileStart = out_mobileStart; 
	}
	*/
	pcStart = out_pcStart;
	tabletStart = out_tabletStart;
	mobileStart = out_mobileStart;
	if($("body").find("#gnb_layout").length != 0){
		thisDepth(pcStart,tabletStart,mobileStart);
	}
	winReSize();
	//addFixed();
}
//디바이스 체크 끝
 
//넓이 리사즈 시작
function winReSize(){
	var winWidth = $(window).outerWidth();
	var resizeWidthArry = [winWidth];
	$(window).resize(function(){
		var resizeWidth = $(window).outerWidth();
		resizeWidthArry.push(resizeWidth);
		var resizeWidthArryNum1 = Number(resizeWidthArry.length-1);
		var resizeWidthArryNum2 = resizeWidthArryNum1-1;
		if(resizeWidthArry[resizeWidthArryNum1] != resizeWidthArry[resizeWidthArryNum2]){
			mbClose();
		}
	});
}
//넓이 리사즈 끝
	
	
//gnb 시작
function gnbOpen(_depth1,pcStart,tabletStart,mobileStart){	
	var gnbType =$("#gnb_layout").attr("class").split(" ")[0];
	//console.log(">>>>>> gnbType:"+gnbType);
	
	//gnb_layout(pcStart,tabletStart,mobileStart);
	$("#gnb_layout a, #gnb_layout .depth2_ul").on("mouseenter focus",function(){
		var _gnb_layout = $("#gnb_layout").attr("class").indexOf("mb");
		//console.log(">>>>>> _gnb_layout:"+_gnb_layout);
		if($(this).parent().parent().attr("class").indexOf("depth1_ul") != "-1"){
			console.log(">>>>>>>>>>>>>>>>>>");
			if($(this).attr("target") != "_blank"){
				if(_gnb_layout == "-1"){
					$("#top_layout, #gnb_layout").removeClass("on");
					$("#gnb_layout .depth1_ul li").removeClass("ov");
					$("#top_layout").addClass("ov");
					$("#gnb_layout").addClass("on");
					$(this).parents("li").addClass("ov");
				}		
				$("#top_layout", ".depth2_ul", ".gnb_bg, .depth2_ul").removeAttr("style");
			}else{
				$("#top_layout, #gnb_layout").removeClass("on");
				$("#gnb_layout .depth1_ul li").removeClass("ov");
			}
		}
	});
	$("#gnb_layout a").on("mouseenter focus",function(){
		var _gnb_layout = $("#gnb_layout").attr("class").indexOf("mb");
		var _gnb_layout2 = $("#gnb_layout").attr("class").indexOf("on2");
		//console.log(">>>>>> _gnb_layout:"+_gnb_layout);
		//var gnbType =$("#gnb_layout").attr("class").split(" ")[0];
		//console.log(">>>>>> gnbType:"+gnbType);
		if(_gnb_layout == "-1"){
			if(_gnb_layout2 == "-1"){
				gnbBg("#gnb_layout", ".depth2_ul", ".gnb_bg, .depth2_ul", gnbType);
			}
		}
	});
	$("#gnb_layout .depth1_ul").mouseleave(function(){
		$("#gnb_layout li").removeClass("ov");
		var _gnb_layout = $("#gnb_layout").attr("class").indexOf("mb");
		if(_gnb_layout == "-1"){
			if(gnbType == "c_type" || gnbType == "ct_type" || gnbType == "d_type" || gnbType == "dt_type"){
				gnbClose(_depth1);
			}
		}
	});
	$("#gnb_layout").mouseleave(function(){
		var _gnb_layout = $("#gnb_layout").attr("class").indexOf("mb");
		//console.log(">>>>>> _gnb_layout:"+_gnb_layout);
		console.log(">>>>>> 기본 닫기");
		if(_gnb_layout == "-1"){
			gnbClose(_depth1);
		}
	});
	$("body > div").click(function(){
		var _thisName = $(this).attr("id");
		var _gnb_layout = $("#gnb_layout").attr("class").indexOf("mb");
		//console.log(">>>>>> _gnb_layout:"+_gnb_layout);
		if(_thisName == "top_layout" || _thisName == "skipnavi"){
		}else{
			if(_gnb_layout == "-1"){
				gnbClose(_depth1);
			}
		}
	});
	$("*").focus(function(){
		var _gnb_layout = $("#gnb_layout").attr("class").indexOf("mb");
		//console.log(">>>>>> _gnb_layout:"+_gnb_layout);
		if(_gnb_layout == "-1"){
			var _navBox = $(this).parents("#gnb_layout").attr("id");
			var _searchBox = $(this).attr("id");
			//console.log(">>>>>> _navBox:"+_navBox);
			//console.log(">>>>>> _searchBox(focus):"+_searchBox);
			
			if(_searchBox == "searchOpen" || _searchBox == "searchClose" || _searchBox == "search"){
			//console.log(">>>>>> focus");
			}else{
				if(_navBox == "undefined" || _navBox == "" || _navBox == null){
					//console.log(">>>>>> 없다");
					gnbClose(_depth1);
				}
			}
		}
	});
	
	//모바일 메뉴
	$("#btnAllmenu").on("click",function(e){
		cKscroll(pcStart,tabletStart,mobileStart);
		var _pcStart = _pcStart
		_tabletStart = _tabletStart
		_mobileStart = _mobileStart;
		var _winWidth = $("body").outerWidth();
		var _gnb_layout = $("#gnb_layout").attr("class").indexOf("mb");
		console.log(">>>>>> _winWidth:"+_winWidth);
		//console.log(">>>>>> _gnb_layout:"+_gnb_layout);
		console.log(">>>>>> _tabletStart:"+_tabletStart);
		if(_gnb_layout == "-1" && _winWidth <= _tabletStart){
			e.preventDefault();
			$("html").css({"overflow":"hidden"});
			$("#gnb_layout").attr("data-gnbtype",$("#gnb_layout").attr("class"));
			$("#gnb_layout").removeClass().addClass("mb");
			/*
			$("#gnb_layout.mb").height($(window).height()-$("#top_layout").height());
			*/
			$("#gnb_layout.mb .gnb_wrap").animate({right:0},300);
			//$("#gnb_layout.mb .gnbClose").animate({right:15},300);
			$("#gnb_layout.mb .depth3_ul").parent().addClass("more");
			$("#gnb_layout.mb .gnb_bg").removeAttr("style");
		}
	});
 
 
	$("#gnb_layout .depth1_ul > li > a").on("click",function(e){
		var _gnb_layout = $("#gnb_layout").attr("class").indexOf("mb");
		$("#gnb_layout.mb .depth1_ul > li").addClass("menu");
		
		//console.log(">>>>>> _gnb_layout:"+_gnb_layout);
		if(_gnb_layout != "-1"){
			var _depthCondition = $(this).parent().find("ul").attr("class").indexOf("depth2_ul");
			if(_depthCondition != -1){
				e.preventDefault();
			}
			if($(this).parent().attr("class").indexOf("down") != -1){
			}else{
				depthUp();
				$("#gnb_layout .more").removeClass("on");
				$(this).parents("li").addClass("down");
				$(this).parents("li.down").find(".depth2_ul").css("margin-top",-$(this).parents("li.down").find(".depth2_ul").height());
				$(this).parents("li.down").find(".depth2_ul").animate({"margin-top":0},200,function(){
					//클릭메뉴 최상위 이동 시작
					var depth1Total = $("#gnb_layout .depth1_ul").find(">li").size();
					var thisliNum = $(this).parents("li").index()+1;
					var thisliHeight = $("#gnb_layout.mb .depth1_ul > li").eq(thisliNum).height();
					var _thisScrollTOp = (57*depth1Total)-(57*(depth1Total-thisliNum)+57);
					//클릭메뉴 최상위 이동 끝
				});
			}
		}
	});	
	$("#gnb_layout .depth2_ul > li > a").on("click",function(e){
		var _gnb_layout = $("#gnb_layout").attr("class").indexOf("mb");
	//console.log(">>> _gnb_layout : "+_gnb_layout);
		if(_gnb_layout != "-1"){
			if($(this).parent().attr("class").indexOf("on") != -1){
				e.preventDefault();
				$(this).parent().removeClass("on");
			}else if($(this).parent().attr("class").indexOf("more") != -1){
				e.preventDefault();
				$("#gnb_layout .more").removeClass("on");
				$(this).parent().addClass("on");
			}
		}
	});	
	$("#gnb_layout .gnbClose, #gnb_layout .gnb_bg").on("click",function(){
		var _gnb_layout = $("#gnb_layout").attr("class").indexOf("mb");
	//console.log(">>> _gnb_layout : "+_gnb_layout);
		if(_gnb_layout != "-1"){
			mbClose();
		}
	});
}
 
//디바이스 스크롤체크 시작
function cKscroll(pcStart,tabletStart,mobileStart){
	var thisHeight = $(window).height();
	var documentHeight = $(document).height();
	var innerWidth1 = window.innerWidth;
	var innerWidth2 = $(window).innerWidth();
	//console.log(">>> thisHeight : "+thisHeight);
	//console.log(">>> documentHeight : "+documentHeight);
	//console.log(">>> pcStart : "+pcStart);
	//console.log(">>> tabletStart : "+tabletStart);
	//console.log(">>> mobileStart : "+mobileStart);
	//console.log(">>> innerWidth1 : "+innerWidth1);
	//console.log(">>> innerWidth2 : "+innerWidth2);
	
	if(innerWidth1 == innerWidth2){
		var thisScroll = "noScroll";
		var _pcStart = pcStart
		_tabletStart = tabletStart
		_mobileStart = mobileStart;
	}else{
		var thisScroll = "yesScroll";
		var _pcStart = pcStart-17
		_tabletStart = tabletStart-17
		_mobileStart = mobileStart-17;
	}
	//console.log(">>> thisScroll : "+thisScroll);
}
//디바이스 스크롤체크 끝
 
function mbClose(){
	var _gnb_layout = $("#gnb_layout").attr("class").indexOf("mb");
	var _sTop = $("html").scrollTop();
	console.log(">>> _sTop : "+_sTop);
	//console.log(">>> _gnb_layout : "+_gnb_layout);
	if(_gnb_layout != "-1"){
		depthUp();
		$("#gnb_layout.mb .gnb_wrap").animate({right:$("#gnb_layout.mb .depth1_ul").width()*-1},300,function(){
			$("html, #gnb_layout, #gnb_layout.mb .lan, #gnb_layout .depth1_ul, #gnb_layout li, #gnb_layout ul, #gnb_layout.mb .gnbClose").removeClass("mb down up menu more").removeAttr("style");
			$("#gnb_layout").addClass($("#gnb_layout").attr("data-gnbtype"));
		});
	}
}
 
function depthUp(){
	$("#gnb_layout .depth1_ul > li.down").addClass("up");
	$("#gnb_layout .depth1_ul > li.up.down").removeClass("down");
	$("#gnb_layout .depth1_ul > li.up").find(".depth2_ul").animate({"margin-top":-$("#gnb_layout .depth1_ul > li.up").find(".depth2_ul").height()},200,function(){
		$("#gnb_layout .depth1_ul > li.up").removeClass("up");
	});
}
function gnbClose(_depth1){
	console.log(">>>>>> gnbClose 시작");
	if(_depth1 < 0){
		var _depth1 = 10000;
	}else{
		var _depth1 = _depth1;
	}
	var _winWidth = $("body").outerWidth();
	//console.log(">>>>>> _winWidth:"+_winWidth);
	
	cKscroll(pcStart,tabletStart,mobileStart);
	var _pcStart = _pcStart
	_tabletStart = _tabletStart
	_mobileStart = _mobileStart;
	if(_winWidth > _tabletStart){
		$("#top_layout, #gnb_layout, #gnb_layout .gnb, #gnb_layout ul, #gnb_layout .gnb_bg").removeClass("ov on mb down up menu more");
		$("#gnb_layout li").removeClass("ov");
		$("#gnb_layout .depth1_ul > li").eq(_depth1).addClass("on");
		depthUp();
		//$("#top_layout .gnb_bg").removeAttr("style");
	}
}
 
function gnbBg(parentName, thisName, bgName, gnbType){
	//console.log(">>> gnbBg 시작");
	$(window).resize(function() {
        //console.log(">>> gnbBg 리사이즈");
		$(bgName).removeAttr("style");
		$(parentName).find(".depth2_ul > li, .title_wrap").removeAttr("style");
    });
	if(gnbType == "at_type" || gnbType == "ct_type" || gnbType == "dt_type" ){
		$("#gnb_layout .depth2_ul").css("left",$("#gnb_layout .title_wrap").width());
	}
	//console.log(">>> gnbType : "+gnbType);
	if(gnbType == "a_type" || gnbType == "b_type" ){
		var arry = [];
		var _parentName = $(parentName),
			_thisName = $(parentName+" .depth1_ul > li"),
			_bgName = _parentName.find($(bgName));
			_totalNum = _thisName.size();
			//console.log("_totalNum:"+_totalNum);
		
		for(i=0; i<_totalNum; i++){
			//var _child = _thisName.eq(i).find(thisName + " > li"),
				//_height = parseInt(_child.size()*29+80);
			var _child = _thisName.eq(i).find(thisName),
				_height = parseInt(_child.height());
				//console.log(">>>>>>> _height:"+_height);
			arry.push(_height);
		}
		
		var _maxHeight = Math.max.apply(null, arry);
		_bgName.css("height",_maxHeight);
		//console.log("_maxHeight:"+_maxHeight);
	}else if(gnbType == "at_type"){
		var gnb_width = $("#gnb_layout .depth1_ul").outerWidth();
		var depth1_li = $("#gnb_layout .depth1_ul > li");
		var depth2_num = $("#gnb_layout .depth1_ul > li").size();
		var tit_width = $("#gnb_layout .title_wrap").width();
		var depth2_ul = $("#gnb_layout .depth2_ul");
		var depth2_width = (gnb_width - tit_width) /depth2_num;
		depth2_ul.width(depth2_width);
		for(var i=0; i<depth2_num; i++){
			depth1_li.eq(i).find(".depth2_ul").css({"left":(depth2_width*i)+tit_width});
		}
		
		var arry = [];
		var _parentName = $(parentName),
			_thisName = $(parentName+" .depth1_ul > li"),
			_bgName = _parentName.find($(bgName));
			_totalNum = _thisName.size();
			//console.log("_totalNum:"+_totalNum);
		
		for(i=0; i<_totalNum; i++){
			//var _child = _thisName.eq(i).find(thisName + " > li"),
				//_height = parseInt(_child.size()*29+80);
			var _child = _thisName.eq(i).find(thisName),
				_height = parseInt(_child.height());
				//console.log(">>>>>>> _height:"+_height);
			arry.push(_height);
		}
		
		var _maxHeight = Math.max.apply(null, arry);
		_bgName.css("height",_maxHeight);		
		$("#gnb_layout .title_wrap").height($("#gnb_layout .gnb_bg").outerHeight());
		//console.log("_maxHeight:"+_maxHeight);
	}else if(gnbType == "c_type" || gnbType == "ct_type"){
		var _thisHeight = $("#gnb_layout li.ov .depth2_ul").height();
		$("#gnb_layout .gnb_bg, #gnb_layout .ov .title_wrap").height(_thisHeight);
	}else if(gnbType == "d_type" || gnbType == "dt_type"){
		//gnbBg("#top_layout", ".depth2_ul", ".gnb_bg, .depth2_ul", gnbType);
		var viewNum = 4;//한줄에 보여줄 2차 메뉴수
		var arry = [];
		var _parentName = $(parentName),
			_thisName = $(parentName+" .depth1_ul li.ov .depth2_ul > li"),
			_bgName = _parentName.find($(bgName));
			_totalNum = _thisName.size();
			console.log("_totalNum:"+_totalNum);
		if(viewNum == null || viewNum == "" || viewNum == "0"){
			viewNum = _totalNum;
		}
		$("#gnb_layout .depth1_ul > li > ul").removeAttr("class").addClass("depth2_ul n"+viewNum);
		if( _totalNum < Number(viewNum+1)){
			for(i=0; i<_totalNum; i++){
				var _child = _thisName.eq(i),
					_height = parseInt(_child.height());
				arry.push(_height);
			}
			
			var _maxHeight = Math.max.apply(null, arry);
			_thisName.css("height",_maxHeight);
		}else{
			var _totalLine = Math.ceil(_totalNum/viewNum);
			//console.log("_totalLine:"+_totalLine);
			for(i=0; i<_totalNum; i++){
				var _child = _thisName.eq(i),
					_height = parseInt(_child.height());
				arry.push(_height);
				//console.log(">>> arry : "+arry);
			}
			for(a=1; a<Number(_totalLine+1); a++){
				for(b=1; b<Number(viewNum+1); b++){
					//var _thisNum = Number((a*b)-1);
					eval("var _thisNum"+a+" = Number((a*b)-1);");
				}
				//var _maxHeight = Math.max.apply(null, arry.slice(_thisNum-_totalLine, _thisNum));
				eval("var arry"+a+" = arry.slice(Number(_thisNum"+a+"-_thisNum1), Number(_thisNum"+a+"+1));");
				//console.log(">>> arryNum"+a+"_0 : "+eval("Number(_thisNum"+a+"-_thisNum1)"));
				//console.log(">>> arryNum"+a+"_1 : "+eval("Number(_thisNum"+a+"+1)"));
				//console.log(">>> arry"+a+" : "+eval("arry"+a));
				eval("var _maxHeight"+a+" = Math.max.apply(null, arry"+a+");");
				//console.log(">>> _maxHeight"+a+" : "+eval("_maxHeight"+a));
			}			
			var _sum = 0;
			for(c=1; c<Number(_totalLine+1); c++){				
				for(d=1; d<Number(viewNum+1); d++){
					_sum += 1;
					var _num = _sum-1;
					_thisName.eq(_num).css("height",eval("_maxHeight"+c));
					//console.log(">>> _num : "+_num);
				}
			}
		}
		/*
		$("#gnb_layout .depth2_ul > li").removeAttr("style");
		var _thisHeight = $("#gnb_layout li.ov .depth2_ul").height();
		$("#gnb_layout li.ov .depth2_ul > li").height(_thisHeight);
		*/
		var _bgHeight = $("#gnb_layout li.ov .depth2_ul").outerHeight();
		$("#gnb_layout .gnb_bg, #gnb_layout .ov .title_wrap").height(_bgHeight);
		$("#gnb_layout .gnb_bg").height(_bgHeight);
	}
}	
//gnb 끝
 
//메뉴 댑스활성화 시작
function thisDepth(pcStart,tabletStart,mobileStart){
	var _depth1 = $("#gnb_layout .depth1_ul > li.on").index();
	var _depth2 = $("#lnb_layout .depth2_ul > li.on").index();
	var _depth3 = $("#lnb_layout .depth3_ul > li.on").index();
	//console.log(">>> _depth1:"+_depth1);
	//console.log(">>> _depth2:"+_depth2);
	//console.log(">>> _depth3:"+_depth3);
	
	
	
	//2차메뉴수 시작
	var depth1_total = Number($("#gnb_layout .depth1_ul > li").index()+1);
	//console.log(">>> depth1_total : "+depth1_total);
	for(var i=1; i<= depth1_total; i++){
		eval("var depth2_total"+i+" = Number($('#gnb_layout .depth1_ul > li.n"+i+" .depth2_ul > li').index()+1);");
		//eval("console.log('>>> depth2_total"+i+" : '+depth2_total"+i+");");
		eval("$('#gnb_layout .depth1_ul > li.n"+i+" .depth2_ul').addClass('n'+depth2_total"+i+");");
	}
	//2차메뉴수 끝
	
	if($("body").find("#gnb_layout").length != 0){
		var at_type =$("#gnb_layout").attr("class").indexOf("at_type");
		var ct_type =$("#gnb_layout").attr("class").indexOf("ct_type");
		var dt_type =$("#gnb_layout").attr("class").indexOf("dt_type");
		console.log(">>> at_type:"+at_type);
		console.log(">>> ct_type:"+ct_type);
		console.log(">>> dt_type:"+dt_type);
	}
	if(at_type != -1){
		var gnb_txt = $("#gnb_layout .gnb_wrap").html();
		$("#gnb_layout .gnb_wrap").html("<div class='title_wrap'></div>"+gnb_txt);
	}else if(ct_type != -1){
		var depth1_total = $("#gnb_layout .depth1_ul > li").length;
		var txt = "<ul class=\"depth2_ul";
		console.log(">>> depth1_total:"+depth1_total);
		for(var i=1; i<=depth1_total; i++){
			//var depth1_a = $("#gnb_layout .depth1_ul > li.n1 > a").detach();
			//var depth1_ul = $("#gnb_layout .depth1_ul > li.n1 > ul").detach();
			//$("#gnb_layout .depth1_ul > li.n1").html("").append(depth1_a).append("<div id='gnbTit1' class='title_wrap'></div>").append(depth1_ul);
			eval("var depth"+i+"_a = $('#gnb_layout .depth1_ul > li.n"+i+" > a').detach();");
			eval("var depth"+i+"_ul = $('#gnb_layout .depth1_ul > li.n"+i+" > ul').detach();");
			eval("$('#gnb_layout .depth1_ul > li.n"+i+"').html('').append(depth"+i+"_a).append('<div id=\"gnbTit"+i+"\" class=\"title_wrap\"></div>').append(depth"+i+"_ul);");
			
			//var gnb_txt1 = $("#gnb_layout .depth1_ul > li.n1").html().split("<ul class=\"depth2_ul");
			//$("#gnb_layout .depth1_ul > li.n1").html(gnb_txt1[0]+"<div class=\"test\"></div><ul class=\"depth2_ul"+gnb_txt1[1]);
			//eval("var gnb_txt"+i+" = $('#gnb_layout .depth1_ul > li.n"+i+"').html().split('<ul class=\"depth2_ul');");
			//eval("$('#gnb_layout .depth1_ul > li.n"+i+"').html(gnb_txt"+i+"[0]+'<div id=\"gnbTit"+i+"\" class=\"title_wrap\"></div><ul class=\"depth2_ul'+gnb_txt"+i+"[1]);");
		}
	}else if(dt_type != -1){
		var depth1_total = Number($("#gnb_layout .depth1_ul > li").index()+1);
		var txt = "<ul class=\"depth2_ul";
		for(var i=1; i<=depth1_total; i++){
			//var depth1_a = $("#gnb_layout .depth1_ul > li.n1 > a").detach();
			//var depth1_ul = $("#gnb_layout .depth1_ul > li.n1 > ul").detach();
			//$("#gnb_layout .depth1_ul > li.n1").html("").append(depth1_a).append("<div id='gnbTit1' class='title_wrap'></div>").append(depth1_ul);
			eval("var depth"+i+"_a = $('#gnb_layout .depth1_ul > li.n"+i+" > a').detach();");
			eval("var depth"+i+"_ul = $('#gnb_layout .depth1_ul > li.n"+i+" > ul').detach();");
			eval("$('#gnb_layout .depth1_ul > li.n"+i+"').html('').append(depth"+i+"_a).append('<div id=\"gnbTit"+i+"\" class=\"title_wrap\"></div>').append(depth"+i+"_ul);");
			
			//var gnb_txt1 = $("#gnb_layout .depth1_ul > li.n1").html().split("<ul class=\"depth2_ul");
			//$("#gnb_layout .depth1_ul > li.n1").html(gnb_txt1[0]+"<div class=\"test\"></div><ul class=\"depth2_ul"+gnb_txt1[1]);
			//eval("var gnb_txt"+i+" = $('#gnb_layout .depth1_ul > li.n"+i+"').html().split('<ul class=\"depth2_ul');");
			//eval("$('#gnb_layout .depth1_ul > li.n"+i+"').html(gnb_txt"+i+"[0]+'<div id=\"gnbTit"+i+"\" class=\"title_wrap\"></div><ul class=\"depth2_ul'+gnb_txt"+i+"[1]);");
		}
	}
	
	gnbOpen(_depth1,pcStart,tabletStart,mobileStart);
}
//메뉴 댑스활성화 끝