var $ = jQuery.noConflict();

$(document).ready(function () {
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();
		if (scrollTop > 200) {
			$('header').addClass('header_scroll');
		} else {
			$('header').removeClass('header_scroll');
		}
	});

	$('.swiper-container').each(function (index) {
		var count = index + 1;
		var swiper = new Swiper(".slider_" + count + "", {
			slidesPerView: 'auto',
			spaceBetween: 16,
			slidesPerGroup: 1,
			loop: false,
			loopFillGroupWithBlank: true,
			breakpoints: {
				576: {
					spaceBetween: 30
				}
			}
		});
	});

	if ($('#demo').length > 0) {
		$('#demo').steps({
			onFinish: function () {

			}
		});
	}

	$.fn.datepicker.language['en'] = {
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		today: 'Today',
		clear: 'Clear',
		dateFormat: 'dd M, yyyy',
		timeFormat: 'hh:ii aa',
		firstDay: 0,
	};

	$('.datepicker_new').datepicker({
		language: 'en',
	})

	$('.scroll_box').each(function (index, el) {
		new SimpleBar(el);
	});

	$('.money').mask('0000 - 0000 - 0000 - 0000');
	$('.money_2').mask('0000   -   0000   -   0000   -   0000');
	$('.money_2_mob').mask('0000  -  0000  -  0000  -  0000');

	$(window).on('resize', function () {
		card_mc();
	});

	card_mc();

	function card_mc() {
		if ($(window).width() < 991) {
			$('.card_mc').removeClass('money_2');
			$('.card_mc').addClass('money_2_mob');
		} else {
			$('.card_mc').addClass('money_2');
			$('.card_mc').removeClass('money_2_mob');
		}
	}

	$('.cvv').mask('000');

	$('.open-popup-link').magnificPopup({
		type: 'inline',
		midClick: true,
	});

	var tab = $('#tabs .tabs-items > div');
	tab.hide().filter(':first').show();

	$('#tabs .tabs-nav a').click(function () {
		tab.hide();
		tab.filter(this.hash).show();
		$('#tabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();

	$('.tabs-target').click(function () {
		$('#tabs .tabs-nav a[href=' + $(this).attr('href') + ']').click();
	});

	if (window.location.hash) {
		$('#tabs-nav a[href=' + window.location.hash + ']').click();
		window.scrollTo(0, $("#".window.location.hash).offset().top);
	}


	$(".accordion__title").on("click", function (e) {

		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("accordion-active")) {
			$(".accordion__content").slideUp(300);
			$(".accordion__title").removeClass("accordion-active");
			$('.accordion__arrow').removeClass('accordion__rotate');
		}

		$this.toggleClass("accordion-active");
		$this.next().slideToggle(300);
		$('.accordion__arrow', this).toggleClass('accordion__rotate');
	});


	initMegaMenu();

	$(window).on('resize', function () {
		initMegaMenu();
	});

	function initMegaMenu() {
		if ($(window).width() < 991) {
			$(".burger").on('click', function (e) {
				$('.main_menu').addClass('active');
				$('.close_menu').show();
				$('.burger').hide();
				$('body').addClass('overflow_body');
			});
			$(".close_menu").on('click', function (e) {
				$('.main_menu').removeClass('active');
				$('.close_menu').hide();
				$('.burger').show();
				$('body').removeClass('overflow_body');
			});
		} else {
			resetMenuState();
		}
	}

	function resetMenuState() {
		$('.main_menu').removeClass('active');
		$('.icon_menu').removeAttr("style");
		$('body').removeClass('overflow_body');
	}

	var catalogSlider = null;
	var mediaQuerySize = 576;

	function catalogSliderInit() {
		if (!catalogSlider) {
			catalogSlider = new Swiper('.blog_slider', {
				slidesPerView: 1,
				spaceBetween: 30,
				slidesPerGroup: 1,
				loop: true,
				loopFillGroupWithBlank: true,
				navigation: {
					nextEl: ".swiper-next",
					prevEl: ".swiper-prev",
				},
			});
		}
	}

	function catalogSliderDestroy() {
		if (catalogSlider) {
			catalogSlider.destroy();
			catalogSlider = null;
		}
	}

	$(window).on('load resize', function () {
		var windowWidth = $(this).innerWidth();

		if (windowWidth <= mediaQuerySize) {
			catalogSliderInit()
		} else {
			catalogSliderDestroy()
		}
	});

	$('.header_login .module__user').click(function () {
		$(this).toggleClass('open');
		return false;
	});

	$('.open_menu').click(function () {
		$(this).next('.menu_profile').slideToggle();
		return false;
	});

	$(window).on('resize', function () {
		$('.menu_profile').removeAttr('style');
	});

	function chat() {
		if ($(window).width() > 991) {
			$('.open_chat_js').click(function () {
				$('.module__messenger.show_js').show();
				$('.module__messages.show_js').hide();
				return false;
			});

			$('.open_mes_js').click(function () {
				$('.module__messenger.show_js').hide();
				$('.module__messages.show_js').show();
				return false;
			});
		} else {
			$('.show_js').removeAttr('style');
		}
	}

	chat();

	$(window).on('resize', function () {
		chat();
	});

});
