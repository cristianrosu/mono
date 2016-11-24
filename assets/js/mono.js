/* globals jQuery, document */
(function ($, undefined) {
    /* Initialize Sintax Highlighter */
    hljs.initHighlightingOnLoad();

    "use strict";
    var html = $('html');
    var viewport = $(window);
    var post = $('.post-content');

    /* ==========================================================================
	   * Article reading progress
	   * ========================================================================== */

  	function readingProgress() {
  		if(post.length >= 1) {
  			var postBottom = post.offset().top + post.height();
  			var windowBottom = viewport.scrollTop() + viewport.height();
  			var progress = 100 - (((postBottom - windowBottom) / (postBottom - viewport.height())) * 100);
  			$('.progress-bar').css('width', progress + '%');
  			(progress > 100) ? $('.progress-container').addClass('ready') : $('.progress-container').removeClass('ready');
  		}
  	}
  	readingProgress();

  	viewport.on({
  		'scroll': function() {
  			readingProgress();
  		},
  		'resize': function() {
  			readingProgress();
  		},
  		'orientationchange': function() {
  			readingProgress();
  		}
  	});


    /* ==========================================================================
     * Parallax cover
     * ========================================================================== */

    var cover = $('.post-head');
    var main_header =  $('.main-header');
    var coverPosition = 0;

    function prlx() {
      if(cover.length >= 1 || main_header.length >= 1) {
        var windowPosition = viewport.scrollTop();
        (windowPosition > 0) ? coverPosition = Math.floor(windowPosition * 0.25) : coverPosition = 0;
        (viewport.scrollTop() < cover.height() - 20) ? html.addClass('cover-active') : html.removeClass('cover-active');
      }
      if(main_header.length >= 1) {
        var windowPosition = viewport.scrollTop();
        (windowPosition > 0) ? coverPosition = Math.floor(windowPosition * 0.25) : coverPosition = 0;
        (viewport.scrollTop() < main_header.height() - 20) ? html.addClass('cover-active') : html.removeClass('cover-active');
      }
    }
    prlx();

    viewport.on({
      'scroll': function() {
        prlx();
      },
      'resize': function() {
        prlx();
      },
      'orientationchange': function() {
        prlx();
      }
    });

  })(jQuery);
