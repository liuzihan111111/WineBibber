/************横向移动轮播*************/
//角标,轮播图,角标类
$(function() {
			function Lunbo(btn,lunbo,btnHover) {
				//打开页面
				$(btn).eq(0).addClass("s_on");
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
				}
			})