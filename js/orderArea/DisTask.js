mui.ready(function() {

	mui.init({
		swipeBack: false,
	});
	//切换选项卡
	(function($) {
		//阻尼系数
		var deceleration = mui.os.ios ? 0.003 : 0.0009;
		$('.mui-scroll-wrapper').scroll({
			bounce: false,
			indicators: false, //是否显示滚动条
			scrollX: true, //是否横向滚动
			deceleration: deceleration, //阻尼系数,系数越小滑动越灵敏
		});
		var html2 = '<ul class="mui-table-view"><li class="mui-table-view-cell">第二个选项卡子项-1</li><li class="mui-table-view-cell">第二个选项卡子项-2</li><li class="mui-table-view-cell">第二个选项卡子项-3</li><li class="mui-table-view-cell">第二个选项卡子项-4</li><li class="mui-table-view-cell">第二个选项卡子项-5</li></ul>';
		var html3 = '<ul class="mui-table-view"><li class="mui-table-view-cell">第三个选项卡子项-1</li><li class="mui-table-view-cell">第三个选项卡子项-2</li><li class="mui-table-view-cell">第三个选项卡子项-3</li><li class="mui-table-view-cell">第三个选项卡子项-4</li><li class="mui-table-view-cell">第三个选项卡子项-5</li></ul>';
		var html4 = '<ul class="mui-table-view"><li class="mui-table-view-cell">第四个选项卡子项-1</li><li class="mui-table-view-cell">第三个选项卡子项-2</li><li class="mui-table-view-cell">第三个选项卡子项-3</li><li class="mui-table-view-cell">第三个选项卡子项-4</li><li class="mui-table-view-cell">第四个选项卡子项-5</li></ul>';
		var item2 = document.getElementById('item2mobile');
		var item3 = document.getElementById('item3mobile');
		var item4 = document.getElementById('item4mobile');
		document.getElementById('slider').addEventListener('slide', function(e) {
			if(e.detail.slideNumber === 1) {
				if(item2.querySelector('.mui-loading')) {
					setTimeout(function() {
						item2.querySelector('.mui-scroll').innerHTML = html2;
					}, 500);
				}
			} else if(e.detail.slideNumber === 2) {
				if(item3.querySelector('.mui-loading')) {
					setTimeout(function() {
						item3.querySelector('.mui-scroll').innerHTML = html3;
					}, 500);
				}
			} else if(e.detail.slideNumber === 3) {
				if(item4.querySelector('.mui-loading')) {
					setTimeout(function() {
						item4.querySelector('.mui-scroll').innerHTML = html4;
					}, 500);
				}
			}
		});

	})(mui);

	//刷新加载
	(function($) {

		$.ready(function() {
			//循环初始化所有下拉刷新，上拉加载。
			$.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
				$(pullRefreshEl).pullToRefresh({
					down: {
						callback: function() {
							var self = this;
							setTimeout(function() {
								var ul = self.element.querySelector('.mui-table-view');
								//ul.insertBefore(createFragment(ul, index, 10, true), ul.firstChild);
								self.endPullDownToRefresh();
							}, 1000);
						}
					},
					up: {
						callback: function() {
							var self = this;
							setTimeout(function() {
								var ul = self.element.querySelector('.mui-table-view');
								ul.appendChild(createFragment(ul, index, 5));
								self.endPullUpToRefresh();
							}, 1000);
						}
					}
				});
			});
			var createFragment = function(ul, index, count, reverse) {
				console.log(index)
				var length = ul.querySelectorAll('li').length;
				var fragment = document.createDocumentFragment();
				var li;
				for(var i = 0; i < count; i++) {
					li = document.createElement('li');
					li.className = 'mui-table-view-cell';
					var str = '<div class="cell-top"><div class="cell-top-left"><span>派发时间:</span><span>2018-10-22 16:00</span></div>';
					str += '<div class="cell-top-right"><a class="" href="javacript:void(0);"><i class="mui-icon mui-icon-info "></i>106.0</a></div></div>';
					str += '<div class="cell-center"><div>订单号：<span>10455454545454</span></div>';
					str += '<div>地址：<span>这里是地址的内容你电话</span></div>';
					str += '<div>客户：<span>陆敏（185452145155 15485156155）</span></div>';
					str += '<div>服务内容：<span class="detailcolor">配送/送货</span></div>';
					str += '<div>预约：<span>18-10-22 B</span></div></div>';
					str += '<div class="cell-bottom"><a class="detail" href="#">详情</a><a class="startcar" href="#">发车</a></div>';
					li.innerHTML = str;
					fragment.appendChild(li);
				}
				return fragment;
			};
		});
	})(mui);

	//点击详情跳转
	mui('.cell-bottom').on('tap', '.detail', function(e) {
		mui.openWindow({
			url: "OrderDetail.html",
			id: "OrderDetail.html",
			createNew: false,
			waiting: {

			}
		})
	})

	//点击选项卡切换
	var heightTotal = document.body.clientHeight;
	var height = heightTotal - 240;
	document.getElementById('j_groupheight').style.height = height + 'px';
	mui('#slider').on('tap', 'a', function() {
		console.log(this.innerText)
		if(this.innerText == '新任务') {
			document.getElementById('j_totalsingular').style.display = 'block';
			document.getElementById('j_singular').style.display = 'block';
			document.getElementById('j_cc').style.display = 'none';
			//设置高度
			height = heightTotal - 240;
			document.getElementById('j_groupheight').style.height = height + 'px';

		} else if(this.innerText == '已完成') {
			document.getElementById('j_totalsingular').style.display = 'none';
			document.getElementById('j_singular').style.display = 'none';
			document.getElementById('j_cc').style.display = 'block';
			//设置高度
			height = heightTotal - 240 + 70;
			document.getElementById('j_groupheight').style.height = height + 'px';
		} else if(this.innerText == '已终止') {
			document.getElementById('j_totalsingular').style.display = 'none';
			document.getElementById('j_singular').style.display = 'none';
			document.getElementById('j_cc').style.display = 'none';
			//设置高度
			height = heightTotal - 240 + 70 + 65;
			document.getElementById('j_groupheight').style.height = height + 'px';
		} else if(this.innerText == '已取消') {
			document.getElementById('j_totalsingular').style.display = 'block';
			document.getElementById('j_singular').style.display = 'block';
			document.getElementById('j_cc').style.display = 'none';
			//设置高度
			height = heightTotal - 240;
			document.getElementById('j_groupheight').style.height = height + 'px';
		} else {

		}
	})

	//重写返回事件
	var old_back = mui.back;
	mui.back = function(){
		plus.navigator.setStatusBarBackground('#0099CC');
		old_back();
	}
});