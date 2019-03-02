



//增加/修改（原来有为修改，没有为增加）
function setCookie(name, value, date) {

	var oDate = new Date();
	oDate.setDate(oDate.getDate() + date);

	document.cookie = name + "=" + escape(value)+ ";expires=" + oDate;

}

//查询
function getCookie(name) {
	var str = document.cookie;
	var arr = str.split("; ");
	for(var i = 0; i < arr.length; i++) {
		var newArr = arr[i].split("=");
		if(newArr[0] == name) {
			return newArr[1];
		}
	}
	return "";
}

//删除		

function removeCookie(name) {
	setCookie(name, 1, -1)
}