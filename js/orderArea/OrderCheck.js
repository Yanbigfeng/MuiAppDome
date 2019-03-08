mui.ready(function() {

	mui.init({
		swipeBack: false
	});
	//面板切换
	(function($) {
		$('.mui-scroll-wrapper').scroll({
			indicators: true //是否显示滚动条
		});
		var html2 =
			'<ul class="mui-table-view"><li class="mui-table-view-cell">第二个选项卡子项-1</li><li class="mui-table-view-cell">第二个选项卡子项-2</li><li class="mui-table-view-cell">第二个选项卡子项-3</li><li class="mui-table-view-cell">第二个选项卡子项-4</li><li class="mui-table-view-cell">第二个选项卡子项-5</li></ul>';
		var html3 =
			'<ul class="mui-table-view"><li class="mui-table-view-cell">第三个选项卡子项-1</li><li class="mui-table-view-cell">第三个选项卡子项-2</li><li class="mui-table-view-cell">第三个选项卡子项-3</li><li class="mui-table-view-cell">第三个选项卡子项-4</li><li class="mui-table-view-cell">第三个选项卡子项-5</li></ul>';
		var item2 = document.getElementById('item2mobile');
		document.getElementById('slider').addEventListener('slide', function(e) {
			if (e.detail.slideNumber === 1) {
				if (item2.querySelector('.mui-loading')) {
					setTimeout(function() {
						item2.querySelector('.mui-scroll').innerHTML = html2;
					}, 500);
				}
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
			document.getElementById('j_bottom').style.display = 'none';
		} else {
			document.getElementById('j_bottom').style.display = 'block';
		}
	}
	//重写返回
	var old_back = mui.back;
	mui.back=function(e){
		plus.navigator.setStatusBarBackground('#0099CC');
		old_back();
	}
});
