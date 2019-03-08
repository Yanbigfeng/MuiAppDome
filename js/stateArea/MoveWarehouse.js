mui.ready(function() {

	mui.init({
		swipeBack: false
	});
	//面板切换
	(function($) {
		$('.mui-scroll-wrapper').scroll({
			indicators: true //是否显示滚动条
		});

		//点击监听事件
		var item2 = document.getElementById('item2mobile');
		var input = document.getElementById('j_input');
		document.getElementById('slider').addEventListener('slide', function(e) {
			if (e.detail.slideNumber === 0) {
				input.placeholder = '扫描/请输入订单号';
			}
			if (e.detail.slideNumber === 1) {
				input.placeholder = '扫描/请输入仓位编号';
			}
		});
		var sliderSegmentedControl = document.getElementById('sliderSegmentedControl');
		$('.mui-input-group').on('change', 'input', function() {
			if (this.checked) {
				sliderSegmentedControl.className =
					'mui-slider-indicator mui-segmented-control mui-segmented-control-inverted mui-segmented-control-' + this.value;
				//force repaint
				sliderProgressBar.setAttribute('style', sliderProgressBar.getAttribute('style'));
			}
		});

	})(mui);




	//调整按钮显示
	var docmHeight = document.documentElement.clientHeight; // 默认屏幕高度
	window.onresize = function() {
		if (document.body.scrollHeight < docmHeight) {
			//document.getElementById('j_bottom').style.display = 'none';
		} else {
			//document.getElementById('j_bottom').style.display = 'block';
		}
	}
	//重写返回
	var old_back = mui.back;
	mui.back = function(e) {
		plus.navigator.setStatusBarBackground('#0099CC');
		old_back();
	}
});
