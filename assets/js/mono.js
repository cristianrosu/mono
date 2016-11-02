/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var viewport = $(window);
    var post = $('.post-content');

    /* ==========================================================================
	   Article reading progress
	   ========================================================================== */

  	function readingProgress() {
      console.log('asdasda')
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
  })(jQuery);
