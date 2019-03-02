$(function(){
	
	/*帮助中心*/
	function HelpCenter(){
		$(".login-help").hover(function(){
			$(this).find(".help-con").show();
		},function(){
			$(this).find(".help-con").hide();
		})
	};
	HelpCenter();
	
/*******************登录*********************/	
//判断是否为7天免登陆
FreeLogin()
	$(".login-sub").click(function(){
		$.post(
			"http://47.104.244.134:8080/userlogin.do",
			{	"name":$("#LoginName").val(),
				"password":$("#LoginPsw").val(),
			},
			function(data){
				if(data.code==0){
					if($("#auto").is(":checked")){
						setCookie("name",$("#LoginName").val(),7);
						setCookie("password",$("#LoginPsw").val(),7);
						setCookie("token",data.data.token,7)
					}else{
						setCookie("name",$("#LoginName").val());
						setCookie("password",$("#LoginPsw").val());
						setCookie("token",data.data.token);
					}
					
					alert("登陆成功");
					//history.back();
					goBack();//成功后页面跳转
					
				}else{
					alert("登录失败，用户名或密码有错");
				}
			});
	});
	
	
/** 
			 * 返回前一页（或关闭本页面） 
			 * <li>如果没有前一页历史，则直接关闭当前页面</li> 
			 */
function goBack() {
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
				/*window.opener = null;
				window.close();*/
				location.href="index.html";
			}
			} else { //未知的浏览器 
				window.history.go(-1);
			}
		}
}

/********七天免登陆*******/
function  FreeLogin(){
	if(getCookie("token")){
		$("#LoginName").val(getCookie("name"));
		$("#LoginPsw").val(getCookie("password"));
	}						
}


	
	
	
/***************注册验证*****************/
	
	//js验证
	function  JsYanzheng(){
		//验证函数
		function  Verify(reg,value,i,context){
			if(!value){
				$(".hint").eq(i).html("内容不能为空！");	
				return false;
						
			}else if(!reg.test(value)){
				$(".hint").eq(i).html(context);							
				return false;
			}else{
				$(".hint").eq(i).html("");
				return true;
			}				
		}
			
		//密码强弱
		function PsStrength(str){			
			var count1=0,count2=0,count3=0;
			
			$(".user b").css("display","block");
			
			for(var i=0;i<str.length;i++){
				/*var code=str.charCodeAt(i);
				if(code>=48 && code<=57)*/
				
				if(str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57){
					count1++;
					
				}
				if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
					count2++;
					
				}
				if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
					count3++;
					
				}
				
			}
			
			
			if(count1!=0 && count2!=0 && count3!=0){
				
				$(".user b").html("强");
			}else if(count1==str.length || count2==str.length || count3==str.length){
				
				$(".user b").html("弱");
			}else{
				
				$(".user b").html("中");
			}
		}	
		
		//用户名
		$("#username").change(function(){
			var reg=/^[a-zA-Z]\w{5,9}$/gi;
			var value=$(this).val();
			var con="长度6~10位,第一位必须是字母";
			
			return Verify(reg,value,0,con);
		})
		//登录密码
		$("#login_password").change(function(){
			
			var reg=/^\w{6,10}$/gi;
			var value=$(this).val();
			var con="密码为字母数字组合,长度为6-10";
			PsStrength(value);
			return Verify(reg,value,1,con);
		})
		//重复输入密码
		$("#confirm_password").change(function(){
			var value1=$("#login_password").val();
			var value2=$(this).val();
			if(value1!=value2){
				$(this).parent().find(".hint").html("两次输入密码不一致");	
				return false;
			}else{
				$(this).parent().find(".hint").html("");	
				return true;
			}
		})		
		//邮箱
		$("#ver_code").change(function(){
			
			var reg=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/gi ;
			var value=$(this).val();
			var con="邮箱格式不正确，请重新输入";
			  return Verify(reg,value,3,con)	;
		})
		$(".RegType .sub").click(function(){
			//如果输入的每个输入都通过正则验证，或输入不为空，则调用接口进行验证
			if((!$(".hint").text()) && $("#username").val() && $("#login_password").val()  && $("#confirm_password").val() && $("#ver_code").val()){
				//接口验证  判断用户名是否存在 存在返回成功
				$.get(
					"http://47.104.244.134:8080/username.do",
					{"username":$("#username").val()},
					function(data){
						//console.log(data);
						//{code: 1, msg: "失败", data: null}表示该用户名不再数据库中
						if(data.code){
							//判断邮箱是否存在
							$.get(
								"http://47.104.244.134:8080/useremail.do",
								{"email":$("#ver_code").val()},
								function(Edata){
									//console.log(Edata);
									if(Edata.code){
										//注册接口
										$.post(
											"http://47.104.244.134:8080/usersave.do",
											{	"username":$("#username").val(),
												"password":$("#login_password").val(),
												"email":$("#ver_code").val(),
												"sex":$(".sex:checked").val()
											},
											function(data){
												console.log(data);
												if(!data.code){
													alert("注册成功！")
													location.href="index.html";
												}
												
											});
									}else{
										alert("该邮箱已被使用！")
									}
								}
							)							
						}else{
							alert("该用户名已经存在，请重新输入！");
						}
					});
				
			}else{
				alert("信息输入不正确");
			}
		
			
			
		});
		
	}
	
	JsYanzheng();
	
	
	
})


