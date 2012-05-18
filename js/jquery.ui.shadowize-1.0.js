(function( $ ) {
	$.widget( "pontillo.shadowize", {
		// These options will be used as defaults
		options: {
		},

		// Set up the widget
		_create: function() {
			// create the top shadow
			var $topshadow = $('<div></div>').addClass("shadow top-shadow");
			// create the bottom shadow
			var $bottomshadow = $('<div></div>').addClass("shadow bottom-shadow");
			// create the shadow container
			var $shadowcontainer = $('<div></div>')
				// add the proper class
				.addClass("shadow-container")
				// and append the shadows
				.append($topshadow, $bottomshadow);
				
			var $elem = $(this.element);
			
			var scrollTop, scrollBottom, height = 0;
			var tQ, bQ, tO, bO = 0;
			
			// this is the function that handles the scrolling
			var handleChange = function(e) {
				// the shadow box must have the same positioning and dimensions as the element to applyt he shadows to
				$shadowcontainer.height(e.innerHeight());
				$shadowcontainer.width(e.find('*').innerWidth());
				$shadowcontainer.css('top', e.offset().top);
				$shadowcontainer.css('left', e.offset().left);
				
				height = e.height();
				scrollTop = e.scrollTop();
				scrollBottom = e[0].scrollHeight - e.scrollTop() - e.innerHeight();
				
				tO = tQ;
				bO = bQ;
				tQ = "-" + ((scrollTop >= 0 && scrollTop <= 30) ? (15-scrollTop/2) : 0) + "px";
				bQ = ((scrollBottom >= 0 && scrollBottom <= 30) ? (scrollBottom/2) : 15) + "px";
				// bQ = ((scrollBottom >= 0 && scrollBottom <= 30 && scrollTop != scrollBottom) ? (scrollBottom/2) : 15) + "px";
				// if the values are the same, do nothing
				if (bO === bQ && tO === tQ) return;
				
				$topshadow.css("margin-top", tQ);
				$bottomshadow.css("bottom", bQ);
			};
			
			// select the current element's parent and add the shadows
			this.element.parent().append($shadowcontainer);
			
			// let's apply the shadows properly
			handleChange(this.element);
			
			$(window).resize(function(){
				handleChange($elem);
			});
			// on the resize of the element
			this.element.resize(function(){
				handleChange($elem);
			});
			// on the resize of the element
			this.element.parents().resize(function(){
				handleChange($elem);
			});
			// on the resize of the children elements
			this.element.find('>*').resize(function(){
				handleChange($elem);
			});
			// on the scroll of the element
			this.element.scroll(function() {
				handleChange($elem);
			});
			// on the scroll of the children elements
			this.element.find('>*').scroll(function(){
				handleChange($elem);
			});
		},

		// Use the _setOption method to respond to changes to options
		_setOption: function( key, value ) {
			switch( key ) {
			case "height":
				// handle changes to height option
				// todo
				break;
			}

			// In jQuery UI 1.8, you have to manually invoke the _setOption method from the base widget
			$.Widget.prototype._setOption.apply( this, arguments );
			// In jQuery UI 1.9 and above, you use the _super method instead
			this._super( "_setOption", key, value );
		},

		// Use the destroy method to clean up any modifications your widget has made to the DOM
		destroy: function() {
			// remove the shadow divs from the element
			// select the current element
			this.element
				// add the shadows
				.remove('.shadow');
			// In jQuery UI 1.8, you must invoke the destroy method from the base widget
			$.Widget.prototype.destroy.call( this );
			// In jQuery UI 1.9 and above, you would define _destroy instead of destroy and not call the base method
		}
	});
}( jQuery ) );