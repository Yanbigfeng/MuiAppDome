mui.ready(function() {


	//调整按钮显示
	var docmHeight = document.documentElement.clientHeight; // 默认屏幕高度
	window.onresize = function() {
		if (document.body.scrollHeight < docmHeight) {
			document.getElementById('j_bottom').style.display = 'none';
		} else {
			document.getElementById('j_bottom').style.display = 'block';
		}
	}
	
	//重写返回
	var old_back = mui.back;
	mui.back=function(e){
		console.log("返回")
		plus.navigator.setStatusBarBackground('#0099CC');
		old_back();
	}
});
