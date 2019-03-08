// H5 plus事件处理
function plusReady() {
	console.log("设置开始")
	// 设置系统状态栏背景
	plus.navigator.setStatusBarBackground('#006699');
}
if(window.plus) {
	plusReady();
} else {
	document.addEventListener('plusready', plusReady, false);
}