function jQuery33(data){
	console.log(data )
		var str="";		
		if(data.resultList){
			for(var i=0;i<data.resultList.length;i++){
				str+=`<li class="Sdetail-li">
									<a href="${data.resultList[i].url}">
										<sapn>${data.resultList[i].word}</span><em>约${data.resultList[i].count}件商品</em></a>

								</li>
`;
			}
		}
		
		$(".Sdetail ul").html(str);
	}


$(function() {
		
/**********************搜索接口**************************/

	$(".head-txt").on("input propertychange",function(){
		$(".Sdetail ul").show();
		var value=$(".head-txt").val();		
		var script = document.createElement("script");
		script.src = "http://list.jiuxian.com/assKeyWords.htm?t=1550824882257&callback=jQuery33&wd="+$(".head-txt").val()+"&area=11&searchUserKey=93101861-2049-12c1-8bfb-dff76dcba45f&randomTest=0.5380927109821705&_=1550824650294	"		;
		document.body.appendChild(script);
	})
	
$(document).click(function(){
	$(".Sdetail ul").html("");
})

/******************搜索接口结束*******************/	

	
/*******topHeder最顶部实现下拉列表********/	
	/*鼠标移入标题显示*/
	$(".dropTitle").each(function() {
		$(this).on("mouseover",function() {
			$(this).find(".dropDetail").show()
		});
	});
	/*鼠标移出列表隐藏*/
	$(".dropDetail").each(function() {
		$(this).on("mouseout",function() {
			$(this).hide();
		});
	});
	/*鼠标移出标题隐藏*/
	$(".dropTitle").each(function() {
		$(this).on("mouseout",function() {
			$(this).find(".dropDetail").hide()
		});
	});

	/************最顶部下拉列表结束*********/

/*****************全部商品分类***************/
function CateList(){
	
	var str=`<div class="menuBox " style="display:none;">
						<!-- 右侧文字 start -->
						<div class="menuCon">
							<div class="menuItem first clearfix">
								<div class="menuItemTitle">
									<h4>特色会场</h4></div>
								<div class="menuItemCon">
									<div class="menuCon-list">
										<p class="clearfix">
											<a class="hot" href="PocList.html" target="_blank">国礼酱香</a>
											<a href="PocList.html" target="_blank">整箱购</a>
											<a href="PocList.html" target="_blank">精品酒铺</a>
											<a href="PocList.html" target="_blank">家乡名酒</a>
											<a href="PocList.html" target="_blank">年份老酒</a>
											<a href="PocList.html" target="_blank">实惠大坛</a>
											<a href="PocList.html" target="_blank">有礼有面</a>
											<a href="PocList.html" target=" _blank ">海外直采</a>
										</p>
									</div>
								</div>
							</div>
							<div class="menuItem clearfix ">
								<div class="menuItemTitle ">
									<h4>精选会场</h4>
								</div>
								<div class="menuItemCon ">
									<div class="menuCon-list ">
										<p class="clearfix ">
											<a class="hot " href="PocList.html " target="_blank ">新品尝鲜</a>
											<a href="PocList.html" target="_blank ">清仓特卖</a>
											<a href="PocList.html " target="_blank ">值得买</a>
											<a class="hot " href="#" target="_blank">名优白酒</a>
										</p>
									</div>
								</div>
							</div>
							<div class="menuItem clearfix ">
								<div class="menuItemTitle ">
									<h4>企业用酒</h4></div>
								<div class="menuItemCon ">
									<div class="menuCon-list ">
										<p class="clearfix ">
											<a href="PocList.html" target="_blank ">商务用酒</a>
											<a href="PocList.html" target="_blank ">员工福利</a>
											<a href="PocList.html" target="_blank ">聚餐用酒</a>
										</p>
									</div>
								</div>
							</div>
							<div class="menuItem clearfix ">
								<div class="menuItemTitle ">
									<h4>红洋酒专区</h4></div>
								<div class="menuItemCon ">
									<div class="menuCon-list ">
										<p class="clearfix ">
											<a href="PocList.html" target="_blank ">洋酒疯抢</a>
											<a class="hot " href="PocList.html" target="_blank ">整箱特惠</a>
											<a href="PocList.html" target="_blank ">高分推荐</a>
											<a href="PocList.html" target="_blank ">送礼优选</a>
										</p>
									</div>
								</div>
							</div>
							<div class="menuItem clearfix ">
								<div class="menuItemTitle ">
									<h4>名庄推荐</h4></div>
								<div class="menuItemCon ">
									<div class="menuCon-list ">
										<p class="clearfix ">
											<a href="PocList.html " target="_blank ">名庄名窖</a>
											<a class="hot " href="PocList.html " target="_blank ">名庄特卖</a>
										</p>
									</div>
								</div>
							</div>

							<div class="menuHeight clearfix ">
								<div class="menuItemTitle "></div>
								<div class="menuItemCon ">
									<div class="menuCon-list " style="height: 229px; "></div>
								</div>
							</div>
						</div>
						<!-- 右侧文字 end -->
						<!-- 右侧广告位 start -->
						<div class="menuFoc ">
							<a href="# " target="_blank "><img title=" " alt=" " src="img/dd217d940c5c4f48b244448aab94c385.jpg " width="220 " height="470 ">
							</a>
						</div>
						<!-- 右侧广告位 end -->
					</div>`;
	
	
	
	
	
	$(".categoryBox .catItem").hover(function(){		
			//$(".menuBox").eq($(this).index()).show();
			$(this).append(str);
			$(this).find(".menuBox").show();
	},function(){
		//$(this).find(".menuBox").hide();
		($(this).find(".menuBox")).remove();
	})
	
	/*鼠标移出列表隐藏*/
	/*$(".menuBox").each(function() {
		$(this).mouseleave(function() {
			$(this).hide();
		});
	});*/
	/*鼠标移出标题隐藏*/
/*	$(".categoryBox .catItem").each(function() {
		$(this).mouseout(function() {
			$(".menuBox").eq($(this).index()).hide();
		});
	});*/
}
	
CateList()
	
	


	/************横向移动轮播*************/
	//打开页面
/*	$(".rlunbo-btn span").eq(0).addClass("s_on");
	var _left = $(".Rlunbo-1 li").eq(0).width();
	var i = 0;
	//封装函数，移动	
	function move() {
		i++;
		//console.log(i)
		//  123 123 的临界值（前进临界值）
		if(i == $(".Rlunbo-1 li").length) {
			$(".Rlunbo-1 ul").css("left","0px");
			i = 1;
			console.log("1")
		}
		if(i >= $(".Rlunbo-1 li").length-1) {
			$(".rlunbo-btn span").eq(0).addClass("s_on").siblings().removeClass("s_on");
			console.log("2")
		}else{
			$(".rlunbo-btn span").eq(i).addClass("s_on").siblings().removeClass("s_on");
			console.log(3);
		}
		
		
		$(".Rlunbo-1 ul").animate({left:- _left*i},1000);
		//$(".rlunbo-btn span").eq(j).addClass("s_on").siblings().removeClass("s_on");	

	}
	var timer = 0;
	timer = setInterval(move, 2000);
	$(".Rlunbo-1").hover(
		//鼠标移入清除定时器
		function() {
			clearInterval(timer);
		},
		//鼠标移除，添加定时器
		function() {
			timer = setInterval(move, 2000);
		}
	);
	$(".rlunbo-btn span").each(function(){
			$(this).click(function(){
				i=$(this).index()-1;
				move();
				//console.log($(this).index(),i);
			})
		})
	*/

	//右侧第一个轮播
	Lunbo(".Rlunbo-1 .rlunbo-btn span", ".Rlunbo-1 ul", "s_on");
	Lunbo(".Rlunbo-2 .rlunbo-btn span",".Rlunbo-2 ul","s_on");

	//一楼轮播
	Lunbo(".wine-1 .btnBox-1 span",".wine-1 .imgBox-1","on");
	//二楼轮播
	Lunbo(".wine-2 .btnBox-2 span",".wine-2 .imgBox-2","on");
	//三楼轮播
	Lunbo(".wine-3 .btnBox-3 span",".wine-3 .imgBox-3","on");
	//四楼轮播
	Lunbo(".wine-4 .btnBox-4 span",".wine-4 .imgBox-4","on");
	Lunbo(".wine-5 .btnBox-5 span",".wine-5 .imgBox-5","on");
	
	
//封装的轮播图
	function Lunbo(btn, lunbo, btnHover) {
		//打开页面
		$(btn).eq(0).addClass(btnHover);
		var _left = $(lunbo).find("li").eq(0).width();
		var i = 0;
		//封装函数，移动	
		function move() {
			i++;
			
			//  123 123 的临界值（前进临界值）
			if(i == $(lunbo).find("li").length) {
				$(lunbo).css("left", "0px");
				i = 1;
			}
			if(i >= $(lunbo).find("li").length - 1) {
				$(btn).eq(0).addClass(btnHover).siblings().removeClass(btnHover);
			} else {
				$(btn).eq(i).addClass(btnHover).siblings().removeClass(btnHover);
			}

			$(lunbo).animate({
				left: -_left * i
			}, 1000);
		}
		
		var timer = 0;
		timer = setInterval(move, 2000);
		$(lunbo).parent().hover(
			//鼠标移入清除定时器
			function() {
				clearInterval(timer);
			},
			//鼠标移除，添加定时器
			function() {
				timer = setInterval(move, 2000);
			}
		);
		
		$(btn).each(function(){
			$(this).click(function(){
				i=$(this).index()-1;
				move();
			})
		})
		


	}


/******右侧固定列表*******/
	function RightList(){
		//console.log($(".rBIten"))
		$(".rBIten").hover(function(){
			$(this).find(".rBcontent").show();
			//console.log($(this))
		},function(){
			$(this).find(".rBcontent").hide()
		});
		
		$(".rBItenbacktop").click(function(){
			$("body,html").stop().animate({
						scrollTop: 0}, 500);
		})
		
		$(".rscart-tit em ").click(function(){
			$(".rscart-box").hide();
		})
	}

	RightList();
	
	/*显示购物车*/	
	function showCart(){
		$.get(
			"http://47.104.244.134:8080/cartlist.do",
			{token:getCookie("token")},
			function(data){
				//console.log(data);
				var str="";
				var count=0;
				var totalP=0;
				for(var i=0;i<data.length;i++){
					str+=`<li>
								<a href="PocDetail.html?id=${data[i].gid}"  target="_blank" >
									<img src="${data[i].goods.picurl}"/>
								</a>
								<p  class="pro-tit">
									<a href="PocDetail.html?id=${data[i].gid}" target="_blank">
										${data[i].goods.name}
									</a>
								</p>
								<span>${data[i].count}</span>
								<em>￥${(data[i].goods.price/100*data[i].count).toFixed(2)}</em>
							</li>`;
							
							count+=data[i].count;
							totalP+=Number(data[i].goods.price/100*data[i].count);
				}
				totalP=totalP.toFixed(2);
				//将商品加入列表
				$(".rscart-box .cart-pro").append(str);
				$(".pro-count p b").html(count);
				$(".pro-count span").append(totalP);
				$(".topHeder-right .hr-3  b").html(count)
					
					
			}									
		)
	}
	showCart();
	
	
	
	
	

/****************右侧固定列表结束********************/


/********判断是否登录*********/
function IsLogin(){
	var name=getCookie("name");	
	if(name){
		$(".topHeder-left p").html("Hi,  "+name);
		$(".user_login p").html(name);
		$(".topHeder-left  a:first").html("退出");
		$(".topHeder-left  a:first").attr("href","");
		$(".topHeder-left  a:last").hide();
	}
}

IsLogin();

/***************退出登录***************/
function Exit(){
	if(!$(".topHeder-left  a:first").attr("href")){
		$(".topHeder-left  a:first").click(function(){
			removeCookie("token");
			removeCookie("name");
			location.reload();
		})
		
		//sconsole.log(111)
	}
	
}

Exit();



	/*******获取地址栏中传过来的参数********/
	function GetQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg); //arch,查询？后面的参数，并匹配正则
		if(r != null) return unescape(r[2]);
		return null;
	}



/** 
			 * 返回前一页（或关闭本页面） 
			 * <li>如果没有前一页历史，则直接关闭当前页面</li> 
			 */
/*function goBack() {
	if((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)) { // IE 
		if(history.length > 0){
			window.history.go(-1);
		} else {
			window.opener = null;
			window.close();
		}
	} else { //非IE浏览器 
		if(navigator.userAgent.indexOf('Firefox') >= 0 ||
			navigator.userAgent.indexOf('Opera') >= 0 ||
			navigator.userAgent.indexOf('Safari') >= 0 ||
			navigator.userAgent.indexOf('Chrome') >= 0 ||
			navigator.userAgent.indexOf('WebKit') >= 0) {

			if(window.history.length > 1) {
				window.history.go(-1);
			} else {
				//window.opener = null;
				//window.close();
				location.href="index.html";
			}
			} else { //未知的浏览器 
				window.history.go(-1);
			}
		}
}
*/





//最下面
})