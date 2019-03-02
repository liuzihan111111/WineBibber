$(function() {

	/**************中间轮播***************/
	var _top = $(".pic ul li:first-child").height();
	var _index = 0;

	//初始状态
	var timer = setInterval(function() {
		move();
	}, 4000)

	//鼠标移入清除定时器
	$(".bigImg").mouseover(function() {
		clearInterval(timer);
	});
	//鼠标移除添加定时器
	$(".bigImg").mouseout(function() {
		timer = setInterval(function() {
			move();
		}, 4000)

	});
	//角标事件
	$(".B-btn s").each(function() {
		$(this).mousemove(function() {
			_index = $(this).index() - 1;
			move();
		})
	})
	function move() {
		_index++;

		//末尾边界判断
		if(_index == $(".mainBanner li").length) {
			_index = 0;
		}
		//图片移动
		$(".mainBanner li").eq(_index).fadeIn(1000).siblings().fadeOut(1000);

		//角标勾选	
		$(".B-btn s").eq(_index).addClass("on").siblings().removeClass("on");

	};

	/**************轮播结束***************/

	/***********************商品列表Tab键***********************/
		/******左侧列表******/
		//初始状态
		$(".tab-leftNav li").eq(0).addClass("hover");
		ProList(".tab-content ul"); //tab键

		$(".tab-leftNav li").each(function() {
			$(this).mouseover(function() {
				$(this).addClass("hover").siblings().removeClass("hover");
				ProList(".tab-content ul");
			})
		});
		
		//楼层一
		ProList(".spiList ul");

		function ProList(box) {
			var str = "";
			//var num=Math.floor(Math.random()*10+1);
			for(var i = 0; i < 2; i++) {
				str += `<li>
								<div class="tabPic">
									<a href="PocList.html" target="_blank"><img src="img/p${Math.floor(Math.random()*10+1)}.jpg"/></a>
									<p>买一<br>赠一</p>
								</div>
								<div class="tabTit">
									<a href="PocList.html" target="_blank"> <i class="zhenxuan"></i>53°国台·品鉴15  500ml</a>
								</div>
								<div class="tabPrice">
									￥786.00
								</div>
							</li>
							<li>
								<div class="tabPic">
									<a href="PocList.html" target="_blank"><img src="img/p${Math.floor(Math.random()*10+1)}.jpg"/></a>
								</div>
								<div class="tabTit">
									<a href="PocList.html" target="_blank"> </i>全兴头曲  500ml</a>
								</div>
								<div class="tabPrice">
									￥76.00
								</div>
							</li>
							<li>
								<div class="tabPic">
									<a href="PocList.html" target="_blank"><img src="img/p${Math.floor(Math.random()*10+1)}.jpg"/></a>
									<p>用券享<br>优惠</p>
								</div>
								<div class="tabTit">
									<a href="PocList.html" target="_blank"> </i>53°国台·品鉴15  500ml</a>
								</div>
								<div class="tabPrice">
									￥386.00
								</div>
							</li>
							<li>
								<div class="tabPic">
									<a href="PocList.html" target="_blank"><img src="img/p${Math.floor(Math.random()*10+1)}.jpg"/></a>
									<p>爆款<br>热卖</p>
								</div>
								<div class="tabTit">
									<a href="PocList.html" target="_blank"> <i class="zhenxuan"></i>法国热卖  500ml</a>
								</div>
								<div class="tabPrice">
									￥726.00
								</div>
							</li>
							<li>
								<div class="tabPic">
									<a href="PocList.html" target="_blank"><img src="img/p${Math.floor(Math.random()*10+1)}.jpg"/></a>
								</div>
								<div class="tabTit">
									<a href="PocList.html" target="_blank"> 53°国台·品鉴15  500ml</a>
								</div>
								<div class="tabPrice">
									￥286.00
								</div>
							</li>`;

			}
			$(box).html(str);
		};

		/***右侧列表***/
		var arr = [
				["新春贺岁 酒仙锦鲤送温暖", "春节快递停运通知", "​酒仙会员金币权利更新", "2018年酒仙年度好酒友微故事", "低度酒水部分地区停运公告2018", "11.11多情红洋会场中奖名单"],["茅台大牌日", "国台", "钓鱼台", "美酒换新季", "新品", "酒仙甄选会"]];
		$(".Rtab-newNav li").eq(0).addClass("hover");
		//开始让第一个自动显示
		NewList(0);
		$(".Rtab-newNav li").each(function() {
			$(this).mouseover(function() {
				$(this).addClass("hover").siblings().removeClass("hover");
				NewList($(this).index());
			})

		})

		function NewList(_index) {
			var str = "";
			for(var i = 0; i < arr[0].length; i++) {
				str += `<li><a href="#" target="_blank">${arr[_index][i]}</a></li>`
			}
			$(".Rtab-newCon ul").html(str);
		}

	/*********秒杀轮播*********/
	function Miao_lunbo() {
		var _left = $(".msList").eq(0).width();
		var i = 0;
		//封装函数，移动	
		function move() {
			i++;
			//  123 123 的临界值（前进临界值）
			if(i >= $(".msList").length) {
				$(".right-icon span").eq($(".msList").length-1).addClass("on").siblings().removeClass("on");
				i=$(".msList").length-1;
			}
			if(i <= -1) {
				$(".right-icon span").eq(0).addClass("on").siblings().removeClass("on");
				i=0;
			}
			$(".right-icon span").eq(i).addClass("on").siblings().removeClass("on");
			$(".msList-wrap").animate({
				left: -_left * i
			}, 1000);
		}
		
			$(".fbtn-1").click(function(){
				i-=2;
				move();
			});
			$(".fbtn-2").click(function(){
				move();
				console.log(2)
			});
		
	}
	//调用轮播
	Miao_lunbo()	;
	
	
	/*******类似tab键*******/
	
	function WiterWiner(a,ul){
		$(a).each(function(){
			$(this).mouseover(function(){
				$(this).addClass("hover").siblings().removeClass("hover");
				$(ul).eq($(this).index()).show().siblings().hide();
			});
		});
	};
	
	//调用白酒馆的tab
	WiterWiner(".wine-1 .topTenNav a",".wine-1 .topTenCon ul");
	//葡萄酒
	WiterWiner(".wine-2 .topTenNav a",".wine-2 .topTenCon ul");
	//logo墙
	
	
	
	/*logo墙*/
	function Logo(){
		var arr=[36,18,18,24,22,11,14,10,6];
		$(".L-wall li").first().css({"color":"#dd102e","border-bottom":"2px solid  #dd102e"})				
				.find("b").css({"border-bottom":"10px solid  #dd102e"})
		LogoPic(arr[0]);
		
		$(".L-wall li").each(function(){
			$(this).mouseover(function(){
				$(this).css({"color":"#dd102e","border-bottom":"2px solid  #dd102e"})				
				.find("b").css({"border-bottom":"10px solid  #dd102e"})
				.end().siblings().css({"color":"#666","border-bottom":"none"})
				.find("b").css({"border-bottom":"none"});
				LogoPic(arr[$(this).index()]);
			})
		});
		
	}
	
	Logo();
	
	/*logo墙换图片*/
	
	function LogoPic(count){
		var str="";
		for(var i=0;i<count;i++){
			str+=`<li><a href="#" target="_blank"><img src="img2/l-${Math.floor(Math.random()*21)+1}.jpg"/></a></li>`
		}
		$(".logoSig ul").html(str);
		
		//鼠标移到图片上，图片移动
		$(".logoAll img").each(function(){
			$(this).hover(function(){
				$(this).stop().animate({margin:"0 0 0 -100px"},400);
			},function(){
				$(this).stop().animate({margin:"0"},400);
			})
		})		
	}
	
	function Logo_lunbo() {
		var _left = $(".logoAll").width();
		var i = 0;
		//封装函数，移动	
		function move() {
			i++;
			//  123 123 的临界值（前进临界值）
			if(i>=2) {
				
				i=1;
			}
			if(i<=-1) {
				i=0;
			}
			$(".logoSig").animate({
				left: -_left * i
			}, 1000);
		}
		
			$(".prevPage").click(function(){
				i-=2;
				move();
			});
			$(".nextPage").click(function(){
				move();
			});
		
	}
	
	Logo_lunbo()
	
	
	
	/********楼梯********/
	
	function Louti(){
		//移动
		$(".floorBox .floor").each(function(){
			$(this).hover(
				function(){
					$(this).find(".floorOn").show(400);
				},
				function(){
					$(this).find(".floorOn").hide();
				}
			)
		});
		
		var flag=true;
		var _color=["#d43d4e","#c2782f","#296693","#6c9d0e","#fe7a65"]
		$(".floorBox  .floor").click(function(){
			flag=false;
			var str=$(this).index()+1+"F";
			var bg=_color[$(this).index()];
			$(this).find(".floorbg").html(str).css({"background":bg})
			.end().siblings(".floor").find(".floorbg").html("<span></span>").css({"background":"#f1f1f1"});
		
			
			var _top=$(".WhiteWine").eq($(this).index()).offset().top-200;
			$("body,html").stop().animate({
						scrollTop: _top}, 500,function(){
							flag=true;
						});
				});
				$(".floorBox  li:last").click(function(){
					$("body,html").stop().animate({
						scrollTop: 0}, 500);
				})
			
			
				$(window).scroll(function(){
					var scrollTop=$(this).scrollTop();
					if(scrollTop>=$(".wine-1").offset().top-500){
						$(".floorBox").fadeIn();
					}else{
						$(".floorBox").fadeOut();
					}
					if(flag){
						$(".WhiteWine").each(function(){
							//console.log($(".WhiteWine"))
							//console.log($(this),$(this).index())
							if(scrollTop>$(this).offset().top-$(this).outerHeight()/2){
							
								var index=$(this).index()-6;
								var str=index+1+"F";
								var bg=_color[index];
								$(".floorBox  .floor").eq(index).find(".floorbg")
								.html(str).css({"background":bg})
								.end().siblings(".floor").find(".floorbg").html("<span></span>").css({"background":"#f1f1f1"});
							}
							
							if(scrollTop>$(".wine-5").offset().top+$(".wine-5").outerHeight()){
								$(".floorBox  .floor").find(".floorbg")
								.html("<span></span>").css({"background":"#f1f1f1"});
							}
						});
					}
					
					
				})
				
	}
	Louti();

	



})