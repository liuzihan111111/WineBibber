$(function(){
	
	/*导入尾部页面*/
	
	$(".cart-footer").load("footer.html");
	
	
	/**********全选************/
	
	function Allchecked(){
		$(".Allcheck").click(function(){
			if($(this).is(":checked")){
				$("input[type=checkbox]").not($(this)).prop("checked",true);
				$(".cart-gopay-btn a").addClass("done");
				//Total();
				$(".cart-count-total .total em").html(Total().tPice);
				$(".cart-count-total .pieces em").html(Total().tNum);
			}else{
				$(".cart-count-total .total em").html(0);
				$(".cart-count-total .pieces em").html(0);
				$("input[type=checkbox]").not($(this)).prop("checked",false);
				$(".cart-gopay-btn a").removeClass("done");
			}
		})
	}
	
	/******单选*******/
	function Singchecked(){
		
		$(".cart-tbody  input[type='checkbox']").click(function(){

			$(".cart-count-total .total em").html(Total().tPice);
			$(".cart-count-total .pieces em").html(Total().tNum);
			
			$(".cart-tbody  input[type='checkbox']").each(function(){
				if($(this).is(":checked")){
					$(".cart-gopay-btn a").addClass("done");	
					return false;
				}else{
					//表示所有的商品都没有被选中
					$(".cart-gopay-btn a").removeClass("done");
					$(".Allcheck").prop("checked",false);
				}
			});
		})
			
	};
	
	
	//调用全选
	Allchecked();
	
	/*******计算选中的商品的总件数，和总价*******/
	function  Total(){
		var totalPic=1-1;
		var totalNum=0;
		if($(".cart-tbody").length){
			$(".cart-tbody  input[type='checkbox']").each(function(){
				if($(this).is(":checked")){
					//console.log($(this))
						var Tprice=$(this).parents(".cart-checkbox")
						.siblings(".cart-subtotal").find(".goods-total-price").text();
						Tprice=Number(Tprice.replace("￥",""));
						//console.log(Tprice)
						totalPic+=Tprice;
						var Tnum=$(this).parents(".cart-checkbox")
						.siblings(".cart-quantity").find(".goods-num input").val();
						totalNum+=Number(Tnum);
				}
			})
			
		}
		//console.log(totalNum);
		return {"tPice":(totalPic).toFixed(2),"tNum":totalNum};
	}
	
	/****************查看购物车列表*****************/
	
	function CartList(){
		$.get(
			"http://47.104.244.134:8080/cartlist.do",
			{token:getCookie("token")},
			function(data){
				//console.log(data);
				var str="";
				for(var i=0;i<data.length;i++){
					str+=`<div class="cart-tbody">
						<div class="CartList-wrap">
								<div class="cart-list select-bg">

									<div class="cTab-tr cart-checkbox noMt">
										<label class="click-checkbox checkbox-checked ">
	               							<input name="" type="checkbox"   >
	               					</label>
									</div>
									<div class="cTab-tr cart-goods">
										<div class="goods-info">
											<div class="goods-img">
												<a href="pocDetail.html?id=${data[i].gid}" target="_blank">
													<img src="${data[i].goods.picurl}" width="80" height="80">
												</a>

											</div>
											<div class="goods-right">
												<div class="goods-name">
													<a href="pocDetail.html?id=${data[i].gid}" target="_blank">${data[i].goods.name}</a>
												</div>
												<div class="cart-tag">
													<span>限时抢购</span>
													<span>多买多赠</span> </div>
											</div>
										</div>
									</div>

									<div class="cTab-tr cart-price">
										<div class="goods-price">￥${data[i].goods.price/100}</div>
									</div>
									<div class="cTab-tr cart-gold">
										<div class="goods-gold">229金币</div>
									</div>
									<div class="cTab-tr cart-quantity" data-id="${data[i].id}"  data-gid="${data[i].gid}">
										<div class="goods-num">
											<button  class="reduce">-</button><input type="number" class="num" value="${data[i].count}" disabled="disabled" min="1" ><button  class="add">+</button>
										</div>
									</div>
									<div class="cTab-tr cart-subtotal">
										<div class="goods-total-price">￥${(data[i].goods.price/100*data[i].count).toFixed(2)}</div>
									</div>
									<div class="cTab-tr cart-operating">
										<div class="goods-operating">
											<p>
												<a href="javascript:;" class="list-del"  data-id="${data[i].id}"  data-gid="${data[i].gid}">删除</a>
											</p>
											<p>
												<a href="javascript:;" class="update">移入我的收藏</a>
											</p>
										</div>
									</div>

								</div>
						</div>
					</div>`;
				}
				//将商品加入列表
				$(".cart-t  .cart-Body").html(str);
				
				//为每一个商品添加删除事件
				
				$(".list-del").click(function(){					
					$(".pop-up").show();					
					var id=$(this).data("id");
					var gid=$(this).data("gid");
					//修改购物车，num=0,表示删除
					del(id,gid);
					
					
				})				
				
				//调用单选
				Singchecked();
				
				//数量添加，减少
				$(".goods-num .reduce").click(function(){
					var count=$(this).siblings("input[type=number]").val();
					console.log($(this));
					console.log(count)
					if(count>=2){
						var id=$(this).parents(".cart-quantity").data("id");
						var gid=$(this).parents(".cart-quantity").data("gid");
						upDate(id,gid,-1);
					}
					
					
				})
				
				$(".goods-num .add").click(function(){
					var count=$(this).siblings("input[type=number]").val();
					if(count<=9){
						var id=$(this).parents(".cart-quantity").data("id");
						var gid=$(this).parents(".cart-quantity").data("gid");
						upDate(id,gid,1);
					}
					
					
				})
	
				
			}
				
				
		)
	}
	
	CartList();
	
	/******修改购物车*********/
	
	function upDate(id,gid,num){
		$.get(
			"http://47.104.244.134:8080/cartupdate.do",
			{
				id:id,
				gid:gid,
				num:num,
				token:getCookie("token")
			},
			function(data){
				
				//location.reload();
				CartList();
			}
		)
	}
	
/*弹窗消失*/
$(".pop-up .del").click(function(){
	$(".pop-up").hide();
})
$(".confirm-body  div  button").last().click(function(){
	$(".pop-up").hide();
})
/******点击确认按钮删除商品*******/
function del(id,gid){
	$(".confirm-body  div  button").first().click(function(){
		upDate(id,gid,0);
		$(".pop-up").hide();
	})
}


/*************删除选中商品****************/
function Alldel(){
	$(".Alldel").click(function(){
		//判断商品是否选中
		$(".cart-tbody  input[type='checkbox']").each(function(){
				$(".pop-up").show();	
				if($(this).is(":checked")){
					var listDel=$(this).parents(".cart-checkbox")
					.siblings(".cart-quantity");
					var id=listDel.data("id");
					var gid=listDel.data("gid");
					//console.log(id,gid);
					del(id,gid);	
				}
		});
		
	})
}
Alldel();


	
})