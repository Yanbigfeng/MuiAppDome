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
				input.placeholder = '扫描/请输入仓位编号';
			}
			if (e.detail.slideNumber === 1) {
				input.placeholder = '扫描/请输入订单号';
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


		/*反馈类型*/
		//普通示例
		var userPicker = new $.PopPicker();
		userPicker.setData([{
			value: '0',
			text: '反馈类型1'
		}, {
			value: '1',
			text: '反馈类型2'
		}, {
			value: '2',
			text: '反馈类型3'
		}]);
		var showUserPickerButton = document.getElementById('showUserPicker');
		var userResult = document.getElementById('userResult');
		showUserPickerButton.addEventListener('tap', function(event) {
			userPicker.show(function(items) {
				console.log()
				showUserPickerButton.value = items[0].text;
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);
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
