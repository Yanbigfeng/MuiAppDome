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
	//状态反馈
	mui('.content-top').on('tap', '#j_stateFeedback', function(e) {
		mui.openWindow({
			url: "stateArea/StateFeedback.html",
			id: "stateArea/StateFeedback.html",
			createNew: false,
			waiting: {

			}
		})
	})
	//黄线交接
	mui('.content-top').on('tap', '#j_yellowHand', function(e) {
		mui.openWindow({
			url: "stateArea/YellowHand.html",
			id: "stateArea/YellowHand.html",
			createNew: false,
			waiting: {

			}
		})
	})
	//消单完成
	mui('.content-top').on('tap', '#j_cancelOrder', function(e) {
		mui.openWindow({
			url: "stateArea/CancelOrder.html",
			id: "stateArea/CancelOrder.html",
			createNew: false,
			waiting: {

			}
		})
	})
	//退货完成
	mui('.content-top').on('tap', '#j_returnGoods', function(e) {
		mui.openWindow({
			url: "stateArea/ReturnGoods.html",
			id: "stateArea/ReturnGoods.html",
			createNew: false,
			waiting: {

			}
		})
	})
	//入库
	mui('.content-top').on('tap', '#j_inWarehouse', function(e) {
		mui.openWindow({
			url: "stateArea/InWarehouse.html",
			id: "stateArea/InWarehouse.html",
			createNew: false,
			waiting: {

			}
		})
	})
	//移库
	mui('.content-top').on('tap', '#j_moveWarehouse', function(e) {
		mui.openWindow({
			url: "stateArea/MoveWarehouse.html",
			id: "stateArea/MoveWarehouse.html",
			createNew: false,
			waiting: {

			}
		})
	})
	//配送任务
	mui('.content-top').on('tap', '#j_goDisTask', function(e) {
		mui.openWindow({
			url: "orderArea/DisTask.html",
			id: "orderArea/DisTask.html",
			createNew: false,
			waiting: {

			}
		})
	})
	//打印小票
	mui('body').on('tap', '#j_printticket', function(e) {
		mui.openWindow({
			url: "orderArea/PrintTicket.html",
			id: "orderArea/PrintTicket.html",
			createNew: false,
			waiting: {}
		})
	})
	//订单检验
	mui('body').on('tap', '#j_orderCheck', function(e) {
		mui.openWindow({
			url: "orderArea/OrderCheck.html",
			id: "orderArea/OrderCheck.html",
			createNew: false,
			waiting: {}
		})
	})


})
