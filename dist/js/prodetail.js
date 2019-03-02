$(function(){
	
	//导入头部,异步操作
	//1.在header.html里引入js
	//2.在回调函数里面引入js文件
	$(".detail-load").load("header.html",function(){
		$.getScript("js/commo.js")
	});
	$(".right").load("right.html")
	
	//放大镜
	function Fangda(){
		$("#midArea").mouseover(function(){
				$("#zoom").show();
				$("#bigArea").show();
		})
			
		$("#midArea").mouseout(function(){
			$("#zoom").hide();
			$("#bigArea").hide();
		})
						
			//中间的框没有边框，因此offsetWidth和clientWidth的值一样
			var cw=$("#midArea").outerWidth();
			var ch=$("#midArea").outerHeight();
			
			
			$("#midArea").mousemove(function(e){
				var evt=e || event;
				
				var zw=$("#zoom").outerWidth();
				var zh=$("#zoom").outerHeight();
				
				
				var x=evt.pageX;
				var y=evt.pageY;
			
				var _x=x-$("#zoomBox").position().left-zw/2;
				var _y=y-$("#zoomBox").position().top-zh/2;
				
				
				//console.log(_x,_y)
				
				_x= _x<=0 ? 0 : _x>=cw-zw ? cw-zw:_x;
				_y= _y<=0 ? 0 : _y>=ch-zh ? ch-zh:_y;
				
	
				$("#zoom").css({"left":_x+"px","top":_y+"px"})
				$("#bigArea img").css({
					"left":-_x/cw*$("#bigArea").outerWidth()+"px",
					"top":-_y/ch*$("#bigArea").outerHeight()+"px",
				})
					
			})
			
			/*	$("#nav li").click(function(){
					midImg.src="img/rexiao0"+(i+1)+".jpg";
					bigImg.src="img/rexiao0"+(i+1)+".jpg";
				})*/
			
	}
	
	Fangda();
	
/********************放大镜结束*******************/	
	

	/*******获取地址栏中传过来的参数********/
	function GetQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg); //arch,查询？后面的参数，并匹配正则
		if(r != null) return unescape(r[2]);
		return null;
	}

	// 调用方法
	//console.log(GetQueryString("id"));

	/********商品放入详情页********/
	function GoDetail(){
			$.get(
				"http://47.104.244.134:8080/goodsbyid.do",
				{id: GetQueryString("id")},
				function(data){
					//console.log(data);
					$(".dGuide .d-cur").html(data.name);
					$(".dIntro").show();
					$(".comName h1").html(data.name);
					$(".comName  p").html(data.info);
					$(".infoPri strong").html(data.price/100);
					$("#midArea img").attr("src",data.picurl);
					$("#bigArea img").attr("src",data.picurl);
				}
			)
			//e.stopPropagation();
			//console.log($(this).data("pid"))
	}
	
	GoDetail();
	
	/*************添加购物车****************/
	
	function Addcart(){
		if(getCookie("token")){
			$.get(
				"http://47.104.244.134:8080/cartsave.do",
				{
					gid:GetQueryString("id"),
					token:getCookie("token"),
				},
				function(data){
					//console.log(data);
					if(data.code==0){
						alert("添加成功，商品已在购物车！")
					}
				}
			)
		}else{
			location.href="login.html";
		}
	}
	
	/***********添加购物车************/	
	
		$(".btnCart  input").click(function(){
			Addcart();
		})		
	

	
	
	
	
})