var searchlocalname = $(".searchlocalname").val();
var initCondition = function(jobcate, joblocalid, jobkeyword, city_name) {
		if (jobcate) {
			$("#jobcate").children().each(function() {
				if (this.id == jobcate) {
					$("#jobcate").attr("value", this.id)
				}
			})
		}
		if (joblocalid) {
			$("#ulInfoGroup").attr("value", joblocalid);
			$("#nowPos").text(city_name)
		}
		if (jobkeywordinit) {
			jobkeyword = jobkeyword.replace(/x3c/g, "<");
			jobkeyword = jobkeyword.replace(/x3e/g, ">");
			jobkeyword = jobkeyword.replace(/x27/g, "’");
			jobkeyword = jobkeyword.replace(/x22/g, "”");
			$("#keywordtop").val(jobkeyword)
		}
	};
$(function() {
	initCondition(jobcateinit, joblocalidinit, jobkeywordinit, searchlocalname)
});
(function($) {
	var Carousel = function(poster) {
			var self = this;
			this.poster = poster;
			this.posterItemMain = poster.find("ul.poster-list");
			this.nextBtn = poster.find("div.poster-next-btn");
			this.prevBtn = poster.find("div.poster-prev-btn");
			this.posterItems = poster.find("li.poster-item");
			if (this.posterItems.size() % 2 == 0) {
				this.posterItemMain.append(this.posterItems.eq(0).clone());
				this.posterItems = this.posterItemMain.children()
			}
			this.posterFirstItem = this.posterItems.first();
			this.posterLastItem = this.posterItems.last();
			this.rotateFlag = true;
			this.setting = {
				width: 980,
				height: 270,
				posterWidth: 640,
				posterHeight: 270,
				scale: .9,
				speed: 500,
				autoPlay: false,
				delay: 5e3,
				verticalAlign: "middle"
			};
			$.extend(this.setting, this.getSetting());
			this.setSettingValue();
			this.setPosterPos();
			this.nextBtn.click(function() {
				if (self.rotateFlag) {
					self.rotateFlag = false;
					self.carouseRotate("left")
				}
			});
			this.prevBtn.click(function() {
				if (self.rotateFlag) {
					self.rotateFlag = false;
					self.carouseRotate("right")
				}
			});
			if (this.setting.autoPlay) {
				this.autoPlay();
				this.poster.hover(function() {
					window.clearInterval(self.timer)
				}, function() {
					self.autoPlay()
				})
			}
		};
	Carousel.prototype = {
		autoPlay: function() {
			var self = this;
			this.timer = window.setInterval(function() {
				self.nextBtn.click()
			}, this.setting.delay)
		},
		carouseRotate: function(dir) {
			var _this_ = this;
			var zIndexArr = [];
			if (dir === "left") {
				this.posterItems.each(function() {
					var self = $(this),
						prev = self.prev().get(0) ? self.prev() : _this_.posterLastItem,
						width = prev.width(),
						height = prev.height(),
						zIndex = prev.css("zIndex"),
						opacity = prev.css("opacity"),
						left = prev.css("left"),
						top = prev.css("top");
					zIndexArr.push(zIndex);
					self.animate({
						width: width,
						height: height,
						opacity: opacity,
						left: left,
						top: top
					}, _this_.setting.speed, function() {
						_this_.rotateFlag = true
					})
				});
				this.posterItems.each(function(i) {
					$(this).css("zIndex", zIndexArr[i])
				})
			} else if (dir === "right") {
				this.posterItems.each(function() {
					var self = $(this),
						next = self.next().get(0) ? self.next() : _this_.posterFirstItem,
						width = next.width(),
						height = next.height(),
						zIndex = next.css("zIndex"),
						opacity = next.css("opacity"),
						left = next.css("left"),
						top = next.css("top");
					zIndexArr.push(zIndex);
					self.animate({
						width: width,
						height: height,
						zIndex: zIndex,
						opacity: opacity,
						left: left,
						top: top
					}, _this_.setting.speed, function() {
						_this_.rotateFlag = true
					})
				})
			}
		},
		setPosterPos: function() {
			var self = this;
			var sliceItems = this.posterItems.slice(1),
				sliceSize = sliceItems.size() / 2,
				rightSlice = sliceItems.slice(0, sliceSize),
				level = Math.floor(this.posterItems.size() / 2),
				leftSlice = sliceItems.slice(sliceSize);
			var rw = this.setting.posterWidth,
				rh = this.setting.posterHeight,
				gap = (this.setting.width - this.setting.posterWidth) / 2 / level;
			var firstLeft = (this.setting.width - this.setting.posterWidth) / 2;
			var fixOffsetLeft = firstLeft + rw;
			rightSlice.each(function(i) {
				level--;
				rw = rw * self.setting.scale;
				rh = rh * self.setting.scale;
				var j = i;
				$(this).css({
					zIndex: level,
					width: rw,
					height: rh,
					opacity: 1 / ++j,
					left: fixOffsetLeft + ++i * gap - rw,
					top: self.setVerticalAlign(rh)
				})
			});
			var lw = rightSlice.last().width(),
				lh = rightSlice.last().height(),
				oloop = Math.floor(this.posterItems.size() / 2);
			leftSlice.each(function(i) {
				$(this).css({
					zIndex: i,
					width: lw,
					height: lh,
					opacity: 1 / oloop,
					left: i * gap,
					top: self.setVerticalAlign(lh)
				});
				lw = lw / self.setting.scale;
				lh = lh / self.setting.scale;
				oloop--
			})
		},
		setVerticalAlign: function(height) {
			var verticalType = this.setting.verticalAlign,
				top = 0;
			if (verticalType === "middle") {
				top = (this.setting.height - height) / 2
			} else if (verticalType === "top") {
				top = 0
			} else if (verticalType === "bottom") {
				top = this.setting.height - height
			} else {
				top = (this.setting.height - height) / 2
			}
			return top
		},
		setSettingValue: function() {
			this.poster.css({
				width: this.setting.width,
				height: this.setting.height
			});
			this.posterItemMain.css({
				width: this.setting.width,
				height: this.setting.height
			});
			var w = (this.setting.width - this.setting.posterWidth) / 2;
			this.nextBtn.css({
				width: 17,
				height: 97,
				zIndex: Math.ceil(this.posterItems.size() / 2)
			});
			this.prevBtn.css({
				width: 17,
				height: 97,
				zIndex: Math.ceil(this.posterItems.size() / 2)
			});
			this.posterFirstItem.css({
				width: this.setting.posterWidth,
				height: this.setting.posterHeight,
				left: w,
				top: 0,
				zIndex: Math.floor(this.posterItems.size() / 2)
			})
		},
		getSetting: function() {
			var setting = this.poster.attr("data-setting");
			if (setting && setting != "") {
				return $.parseJSON(setting)
			} else {
				return {}
			}
		}
	};
	Carousel.init = function(posters) {
		var _this_ = this;
		posters.each(function() {
			new _this_($(this))
		})
	};
	window["Carousel"] = Carousel
})(jQuery);
$(function() {
	Carousel.init($(".J_Poster"))
});
$(function() {
	$(".poster-prev-btn").hover(function() {
		$(this).addClass("poster-prev-btn-hover")
	}, function() {
		$(this).removeClass("poster-prev-btn-hover")
	});
	$(".poster-next-btn").hover(function() {
		$(this).addClass("poster-next-btn-hover")
	}, function() {
		$(this).removeClass("poster-next-btn-hover")
	})
});
$(function() {
	$(".invitePosition").mouseenter(function() {
		$(".city_catalog").removeClass("dis_non")
	}).mouseleave(function() {});
	$(".city_catalog").mouseenter(function() {}).mouseleave(function() {
		$(".city_catalog").addClass("dis_non")
	});
	$(function() {
		$(".city_detail").delegate("li", "click", function(event) {
			$("#nowPos").text($(this).text());
			$(".city_catalog").addClass("dis_non");
			$("#ulInfoGroup").attr("value", $(this).attr("id"))
		});
		$(".navigation").delegate("li", "click", function() {
			$(this).addClass("bg-head").siblings().removeClass("bg-head")
		})
	});
	var catalog_arr = [];

	function joint_dom(catalogname, objectname) {
		if (!catalogname || !objectname) {
			return false
		}
		var obj = objectname[catalogname];
		var dom = "";
		for (var i in obj) {
			dom += '<li id="' + obj[i] + '">' + i + "</li>"
		}
		return dom
	}
	catalog_arr[0] = '<li id="241">石家庄</li><li id="1">北京</li><li id="2">上海</li><li id="18">天津</li><li id="37">重庆</li><li id="3">广州</li><li id="4">深圳</li><li id="413">东莞</li><li id="79">杭州</li><li id="102">成都</li><li id="188">沈阳</li><li id="147">大连</li><li id="172">南京</li><li id="5">苏州</li><li id="202">哈尔滨</li><li id="342">郑州</li><li id="265">济南</li><li id="122">青岛</li><li id="837">合肥</li><li id="483">西安</li><li id="158">武汉</li><li id="414">长沙</li><li id="0">不限</li>';
	catalog_arr[1] = joint_dom("a", cityJsonZm);
	catalog_arr[2] = joint_dom("d", cityJsonZm);
	catalog_arr[3] = joint_dom("h", cityJsonZm);
	catalog_arr[4] = joint_dom("k", cityJsonZm);
	catalog_arr[5] = joint_dom("p", cityJsonZm);
	catalog_arr[6] = joint_dom("w", cityJsonZm);
	$(".city_title li").hover(function(event) {
		var index = $(this).index();
		$(".city_detail").html(catalog_arr[index]);
		$(".city_detail li").click(function(enent) {
			$("#nowPos").text($(this).text());
			$(".city_catalog").addClass("dis_non");
			$("#ulInfoGroup").attr("value", $(this).attr("id"))
		});
		$(this).addClass("catalog_active").siblings("li").removeClass("catalog_active")
	}, function() {})
});