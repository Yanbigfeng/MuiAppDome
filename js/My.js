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
			waiting: {}
		})
	})
	//我的账单
	mui('body').on('tap', '#j_bill', function(e) {
		mui.openWindow({
			url: "MyBill.html",
			id: "MyBill.html",
			createNew: false,
			waiting: {}
		})
	})
	//我的余额
	mui('body').on('tap', '#j_balance', function(e) {
		mui.openWindow({
			url: "Balance.html",
			id: "Balance.html",
			createNew: false,
			waiting: {}
		})
	})
	//修改密码
	mui('body').on('tap', '#j_changepws', function(e) {
		mui.openWindow({
			url: "ChangePws.html",
			id: "ChangePws.html",
			createNew: false,
			waiting: {}
		})
	})
})
