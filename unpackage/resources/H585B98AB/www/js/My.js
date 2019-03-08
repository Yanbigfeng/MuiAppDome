mui.ready(function() {
	//初始化mui
	mui.init({});
	(function($) {
		var deceleration = mui.os.ios ? 0.003 : 0.0009;
		$('mui-scroll-wrapper').scroll({
			bounce: false,

		});
	})(mui);
	//绑定事件
	mui('body').on('tap', '.head', function(e) {
		mui.openWindow({
			url: "MyDetail.html",
			id: "MyDetail.html",
			createNew: false,
			waiting: {
			}
		})
	})

})