/* ========================================================================
 * Bootstrap-Pagy
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2013 Kai Schlamp
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

	var PageProxy = function(options, page) {
		this.isCurrent = function() {
			return page == options.currentPage;
		}

		this.isFirst = function() {
			return page == 1;
		}

		this.isLast = function() {
			return page == options.totalPages;
		}

		this.isPrev = function() {
			return page == (options.currentPage - 1);
		}

		this.isNext = function() {
			return page == (options.currentPage + 1);
		}

		this.isLeftOuter = function() {
			return page <= options.outerWindow;
		}

		this.isRightOuter = function() {
			return (options.totalPages - page) < options.outerWindow;
		}

		this.isInsideWindow = function() {
			if (options.currentPage < options.innerWindow + 1) {
				return page <= ((options.innerWindow * 2) + 1);
			}
			else if (options.currentPage > (options.totalPages - options.innerWindow)) {
				return (options.totalPages - page) <= (options.innerWindow * 2);
			}
			else {
				return Math.abs(options.currentPage - page) <= options.innerWindow;
			}
		}

		this.number = function() {
			return page;
		}
	}

	var View = {
		firstPage: function(pagy, options, currentPageProxy) {
			var li = $('<li>').append(
				$('<a href="#">')
				.html(options.first)
				.bind('click.bs-pagy', function() {
					pagy.firstPage();
					return false;
				}));

			if (currentPageProxy.isFirst()) {
				li.addClass("disabled");
			}

			return li;
		},

		prevPage: function(pagy, options, currentPageProxy) {
			var li = $('<li>').append(
				$('<a href="#">')
				.attr("rel", "prev")
				.html(options.prev)
				.bind('click.bs-pagy', function() {
					pagy.prevPage();
					return false;
				}));

			if (currentPageProxy.isFirst()) {
				li.addClass("disabled");
			}

			return li;
		},

		nextPage: function(pagy, options, currentPageProxy) {
			var li = $('<li>').append(
				$('<a href="#">')
				.attr("rel", "next")
				.html(options.next)
				.bind('click.bs-pagy', function() {
					pagy.nextPage();
					return false;
				}));

			if (currentPageProxy.isLast()) {
				li.addClass("disabled");
			}

			return li;
		},

		lastPage: function(pagy, options, currentPageProxy) {
			var li = $('<li>').append(
				$('<a href="#">')
				.html(options.last)
				.bind('click.bs-pagy', function() {
					pagy.lastPage();
					return false;
				}));

			if (currentPageProxy.isLast()) {
				li.addClass("disabled");
			}

			return li;
		},

		gap: function(pagy, options) {
			return $('<li>').addClass("disabled")
				.append($('<a href="#">').html(options.gap));
		},

		page: function(pagy, options, pageProxy) {
			var li = $('<li>').append(function() {
				var link = $('<a href="#">');
				if (pageProxy.isNext()) { link.attr("rel", "next") }
				if (pageProxy.isPrev()) { link.attr("rel", "prev") }
				link.html(pageProxy.number());
				link.bind('click.bs-pagy', function() {
					pagy.page(pageProxy.number());
					return false;
				});
				return link;
			});

			if (pageProxy.isCurrent()) {
				li.addClass("active");
			}

			return li;
		}
	}

  // PAGY PUBLIC CLASS DEFINITION
  // ===============================

  var Pagy = function (element, options) {
		this.$element = $(element);
		this.options = $.extend({}, Pagy.DEFAULTS, options);

		this.$ul = this.$element.find("ul");

		this.render();
  }

  Pagy.DEFAULTS = {
    currentPage: null
  , totalPages: null
  , innerWindow: 2
  , outerWindow: 0
  , first: '&laquo;'
  , prev: '&lsaquo;'
  , next: '&rsaquo;'
  , last: '&raquo;'
  , gap: '..'
	, truncate: false
  , page: function(page) { return true }
  }

	Pagy.prototype.render = function () {
		var options = this.options;

		if (!options.totalPages) {
			this.$element.hide();
			return;
		}
		else {
			this.$element.show();
		}

		var currentPageProxy = new PageProxy(options, options.currentPage);

		if (!currentPageProxy.isFirst() || !options.truncate) {
			if (options.first) {
				this.$ul.append(View.firstPage(this, options, currentPageProxy));
			}

			if (options.prev) {
				this.$ul.append(View.prevPage(this, options, currentPageProxy));
			}
		}

		var wasTruncated = false;
		for (var i = 1, length = options.totalPages; i <= length; i++) {
			var pageProxy = new PageProxy(options, i);
			if (pageProxy.isLeftOuter() || pageProxy.isRightOuter() || pageProxy.isInsideWindow()) {
				this.$ul.append(View.page(this, options, pageProxy));
				wasTruncated = false;
			}
			else {
				if (!wasTruncated && options.outerWindow > 0) {
					this.$ul.append(View.gap(this, options));
					wasTruncated = true;
				}
			}
		}

		if (!currentPageProxy.isLast() || !options.truncate) {
			if (options.next) {
				this.$ul.append(View.nextPage(this, options, currentPageProxy));
			}

			if (options.last) {
				this.$ul.append(View.lastPage(this, options, currentPageProxy));
			}
		}
	}

	Pagy.prototype.page = function (page, totalPages) {
		var options = this.options;

		if (totalPages === undefined) {
			totalPages = options.totalPages;
		}

		if (page > 0 && page <= totalPages) {
			if (options.page(page)) {
				this.$ul.empty();
				options.currentPage = page;
				options.totalPages = totalPages;
				this.render();
			}
		}

		return false;
	}

	Pagy.prototype.firstPage = function () {
		return this.page(1);
	}

	Pagy.prototype.lastPage = function () {
		return this.page(this.options.totalPages);
	}

	Pagy.prototype.nextPage = function () {
		return this.page(this.options.currentPage + 1);
	}

	Pagy.prototype.prevPage = function () {
		return this.page(this.options.currentPage - 1);
	}

  // PAGY PLUGIN DEFINITION
  // =========================

  var old = $.fn.pagy;

  $.fn.pagy = function (option) {
		var args = arguments;

    return this.each(function () {
      var $this   = $(this);
      var data    = $this.data('bs.pagy');
      var options = typeof option == 'object' && option;

      if (!data) $this.data('bs.pagy', (data = new Pagy(this, options)));
      if (typeof option == 'string') {
				data[option].apply(data, Array.prototype.slice.call(args, 1));
			}
    });
  }

  $.fn.pagy.Constructor = Pagy;


  // PAGY NO CONFLICT
  // ===================

  $.fn.pagy.noConflict = function () {
    $.fn.pagy = old;
    return this;
  }

}(jQuery);
