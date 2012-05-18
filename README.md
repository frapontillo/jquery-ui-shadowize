jquery-ui-shadowize
===================

Adds Google-like progressive shadows to a fixed element when scrolling in a page.

###Author
Francesco Pontillo

###Description:
This jQuery-UI extension allows you to add some nice **top and bottom shadows** to a fixed-positioned element in your page, just like the ones in Google products (GMail, Google Plus, Google Groups and so on).

The shadows are progressive: if you're on top of the div (or page) the shadow is invisible; as soon as you start scrolling down, the shadow becomes more and more visible. The same thing happens for the bottom one.

Currently, there's no way to set the shadow height or scroll amount to make it stop.

![Example](/frapontillo/jquery-ui-shadowize/raw/master/res/example.png)

###How to use

You simply need to reference:

 * [jQuery](http://jquery.com/)
 * [jQuery UI](http://jqueryui.com/) (js and css)
 * [`jquery.ba-resize.js`](https://github.com/cowboy/jquery-resize) (used to listen to resize events)
 * `jquery.ui.shadowize-1.0.js` and `jquery.ui.shadowize-1.0.css`
 
Checkout the `example.html` page to see the demo in action.

```html
	<body style="margin:0;overflow-y: hidden;">
		<div style="position:fixed;overflow-y:scroll;height:100%">
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum, quam vitae pellentesque luctus, mauris mauris ullamcorper urna, nec fringilla felis purus ut enim. Fusce posuere enim nec enim tempus eu vulputate magna aliquam. Quisque ultrices pretium dignissim. Nullam ut bibendum diam. Suspendisse potenti. Nullam rutrum ullamcorper tincidunt. Sed sodales, tellus in rhoncus congue, libero tellus porttitor orci, ut ultrices dui dui sed arcu. Integer iaculis elementum metus, eget egestas magna volutpat vitae. Maecenas id pharetra erat. Nulla ornare tincidunt auctor. Fusce ut purus ac tortor congue malesuada. Curabitur ac justo sit amet diam ultrices congue. Vestibulum quis turpis eu enim adipiscing egestas sit amet nec enim.
			</p>

			<p>
			Phasellus porttitor purus vel purus hendrerit at sollicitudin lacus porttitor. Ut nec purus sed enim lobortis luctus. Etiam semper metus sit amet eros commodo suscipit. Morbi fermentum, metus eget pretium vehicula, dui sapien consectetur felis, id accumsan nibh nunc ut erat. Curabitur eros dui, pulvinar ac dictum in, luctus congue est. Maecenas quis laoreet ipsum. Nunc luctus suscipit ligula cursus interdum. Vestibulum tincidunt dictum neque, sed pellentesque neque iaculis blandit. Cras eleifend tempor elementum. Fusce sodales consequat tristique. Ut dolor sapien, pretium non iaculis ut, mattis nec libero. Quisque ut commodo mauris. Ut tincidunt imperdiet arcu eu tempus.
			</p>
		</div>
	</body>
```

```javascript
	$(function() {
		// Simply call shadowize for the element
		$('body > div').shadowize();
	});
```

## License

Released under the [MIT license](http://www.opensource.org/licenses/mit-license.php).

Copyright (c) 2012 Francesco Pontillo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.