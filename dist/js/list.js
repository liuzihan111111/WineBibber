$(function(){
	/*加载头部*/
	$(".L-header").load("header.html",function(){
		$.getScript("js/commo.js")
	});
	$(".L-right").load("right.html")
	$(".L-footer").load("footer.html")
	

	/****分页****/
	$.get(
		"http://47.104.244.134:8080/goodsbytid.do",
		{
			tid:13,
			page:1,
			limit:100,
		},
		function(data){
			//console.log(data)
			var str2=""; //存放页数
			var btnNum=Math.ceil(data.count/100);
			$(".fenye em").html(btnNum);
			for(var j=1;j<=btnNum;j++){
				str2+=`<li>${j}</li>`;
			}
			$(".pocList .pro-btn").html(str2);
			
			//默认显示第一页
			Page(1,100);
			$(".pro-btn  li").eq(0).addClass("click");
			//为按钮添加分页事件
			var count=0;
			$(".pro-btn  li").click(function(){			
				count=$(this).index();
				$(this).addClass("click").siblings().removeClass("click");
				Page(count+1,100);
				$(".fenye-center b").html(count+1);
			});
			
			//上一页
			$(".fenye-center span").first().click(function(e){
				e.preventDefault();
				count--;
				if(count>=0){
					$(".pro-btn li").eq(count).addClass("click")
					.siblings().removeClass("click");
					Page(count+1,100);
					$(".fenye-center b").html(count+1);
				}else{
					count=0;
				}
			});
			
			//下一页
			$(".fenye-center span").last().click(function(e){
				e.preventDefault();
				count++;
				if(count<=12){
					$(".pro-btn li").eq(count).addClass("click")
					.siblings().removeClass("click");
					Page(count+1,100);
					$(".fenye b").html(count+1);
				}else{
					count=12;
				}
			});
			
			
		}
	
	);
	
	
	function Page(page,limit){
		//获取商品
		$.get(
			"http://47.104.244.134:8080/goodsbytid.do",
			{
				tid:13,
				page:page,
				limit:limit
			},
			function(data){
				//console.log(data);
				var str="";			
				for(var i=0;i<data.data.length;i++){
					if(data.data[i].picurl){
						str+=`<li>
							<div class="Poc-con">
								<a href="PocDetail.html?id=${data.data[i].id}" target="_blank" >
									<img src="${data.data[i].picurl}">
								</a>
							</div>					
							<div class="tabTit ">
								<a href="PocDetail.html?id=${data.data[i].id}" target="_blank">
									${data.data[i].name}
								</a>
							</div>
							<div class="tabPrice ">
								￥${data.data[i].price/100}
								<a href="javascript:;"  data-id="${data.data[i].id}" >添加购物车</a>
							</div>
						</li>`;
					}
				}
				$(".pocList ul.pro-list").html(str);
			
				//每一个商品都添加购物车事件
				Add();
			}
		);
	}
	
	
	
	
	
	/*商品添加购物车*/
	function Add(){
		$(".tabPrice a").click(function(){
			if(getCookie("token")){
				$.get(
					"http://47.104.244.134:8080/cartsave.do",
					{
						gid:$(this).data("id"),
						token:getCookie("token"),
					},
					function(data){
						if(data.code==0){
							//alert("添加成功，商品已在购物车！")
							succEven();
						}
					}
				)
			}else{
				location.href="login.html";
			}
		})
	}
	
/*******弹窗事件*******/
function succEven(){
	$(".alt-succW").show();
	$(".alt-succ p span").click(function(){
		$(".alt-succW").hide();
	});
	$(".alt-succ div b").click(function(){
		$(".alt-succW").hide();
	});
	setTimeout(function(){
		$(".alt-succW").hide();
	},3000);
	
}


	
	
})
