Ext.data.JsonP.Ext_core_Element({
  "mixedInto": [

  ],
  "superclasses": [

  ],
  "inheritable": false,
  "subclasses": [
    "Ext.Layer"
  ],
  "deprecated": null,
  "xtype": null,
  "allMixins": [

  ],
  "href": "Element.traversal.html#Ext-core-Element",
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>The CSS classes to add separated by space, or an array of classes</p>\n",
            "name": "className"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-addCls",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Adds one or more CSS classes to the element. ...",
        "static": false,
        "name": "addCls",
        "owner": "Ext.core.Element",
        "doc": "<p>Adds one or more CSS classes to the element. Duplicate classes are automatically filtered out.</p>\n",
        "linenr": 64,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "className"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-addClsOnClick",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Sets up event handlers to add and remove a css class when the mouse is down and then up on this element (a click effect) ...",
        "static": false,
        "name": "addClsOnClick",
        "owner": "Ext.core.Element",
        "doc": "<p>Sets up event handlers to add and remove a css class when the mouse is down and then up on this element (a click effect)</p>\n",
        "linenr": 885,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "className"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-addClsOnFocus",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Sets up event handlers to add and remove a css class when this element has the focus ...",
        "static": false,
        "name": "addClsOnFocus",
        "owner": "Ext.core.Element",
        "doc": "<p>Sets up event handlers to add and remove a css class when this element has the focus</p>\n",
        "linenr": 868,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "className"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-addClsOnOver",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Sets up event handlers to add and remove a css class when the mouse is over this element ...",
        "static": false,
        "name": "addClsOnOver",
        "owner": "Ext.core.Element",
        "doc": "<p>Sets up event handlers to add and remove a css class when the mouse is over this element</p>\n",
        "linenr": 850,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number/Array/Object/String",
            "optional": false,
            "doc": "<p>Either a string with the keys to listen for, the numeric key code, array of key codes or an object with the following options:\n<code>{key: (number or array), shift: (true/false), ctrl: (true/false), alt: (true/false)}</code></p>\n",
            "name": "key"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the specified function is executed. Defaults to this Element.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Element.keys.html#Ext-core-Element-method-addKeyListener",
        "return": {
          "type": "Ext.util.KeyMap",
          "doc": "<p>The KeyMap created</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.keys.js",
        "private": false,
        "shortDoc": "Convenience method for constructing a KeyMap ...",
        "static": false,
        "name": "addKeyListener",
        "owner": "Ext.core.Element",
        "doc": "<p>Convenience method for constructing a KeyMap</p>\n",
        "linenr": 5,
        "html_filename": "Element.keys.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The KeyMap config. See <a href=\"#/api/Ext.util.KeyMap\" rel=\"Ext.util.KeyMap\" class=\"docClass\">Ext.util.KeyMap</a> for more details</p>\n",
            "name": "config"
          }
        ],
        "href": "Element.keys.html#Ext-core-Element-method-addKeyMap",
        "return": {
          "type": "Ext.util.KeyMap",
          "doc": "<p>The KeyMap created</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.keys.js",
        "private": false,
        "shortDoc": "Creates a KeyMap for this element ...",
        "static": false,
        "name": "addKeyMap",
        "owner": "Ext.core.Element",
        "doc": "<p>Creates a KeyMap for this element</p>\n",
        "linenr": 34,
        "html_filename": "Element.keys.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of event to handle.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler function the event invokes. This function is passed\nthe following parameters:<ul>\n<li><b>evt</b> : EventObject<div class=\"sub-desc\">The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">EventObject</a> describing the event.</div></li>\n<li><b>el</b> : HtmlElement<div class=\"sub-desc\">The DOM element which was the target of the event.\nNote that this may be filtered by using the <tt>delegate</tt> option.</div></li>\n<li><b>o</b> : Object<div class=\"sub-desc\">The options object from the addListener call.</div></li>\n</ul></p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to this Element.</b>.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing handler configuration properties.\nThis may contain any of the following properties:<ul>\n<li><b>scope</b> Object : <div class=\"sub-desc\">The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to this Element.</b></div></li>\n<li><b>delegate</b> String: <div class=\"sub-desc\">A simple selector to filter the target or look for a descendant of the target. See below for additional details.</div></li>\n<li><b>stopEvent</b> Boolean: <div class=\"sub-desc\">True to stop the event. That is stop propagation, and prevent the default action.</div></li>\n<li><b>preventDefault</b> Boolean: <div class=\"sub-desc\">True to prevent the default action</div></li>\n<li><b>stopPropagation</b> Boolean: <div class=\"sub-desc\">True to prevent event propagation</div></li>\n<li><b>normalized</b> Boolean: <div class=\"sub-desc\">False to pass a browser event to the handler function instead of an Ext.EventObject</div></li>\n<li><b>target</b> Ext.core.Element: <div class=\"sub-desc\">Only call the handler if the event was fired on the target Element, <i>not</i> if the event was bubbled up from a child node.</div></li>\n<li><b>delay</b> Number: <div class=\"sub-desc\">The number of milliseconds to delay the invocation of the handler after the event fires.</div></li>\n<li><b>single</b> Boolean: <div class=\"sub-desc\">True to add a handler to handle just the next firing of the event, and then remove itself.</div></li>\n<li><b>buffer</b> Number: <div class=\"sub-desc\">Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed\nby the specified number of milliseconds. If the event fires again within that time, the original\nhandler is <em>not</em> invoked, but the new handler is scheduled in its place.</div></li>\n</ul><br></p>\n\n<p>\n<b>Combining Options</b><br>\nIn the following examples, the shorthand form <a href=\"#/api/Ext.core.Element-method-on\" rel=\"Ext.core.Element-method-on\" class=\"docClass\">on</a> is used rather than the more verbose\naddListener.  The two are equivalent.  Using the options argument, it is possible to combine different\ntypes of listeners:<br>\n<br>\nA delayed, one-time listener that auto stops the event and adds a custom argument (forumId) to the\noptions object. The options object is available as the third parameter in the handler function.<div style=\"margin: 5px 20px 20px;\">\nCode:\n<pre><code>el.on('click', this.onClick, this, {\n    single: true,\n    delay: 100,\n    stopEvent : true,\n    forumId: 4\n});</code></pre></p>\n\n\n<p>\n<b>Attaching multiple handlers in 1 call</b><br>\nThe method also allows for a single argument to be passed which is a config object containing properties\nwhich specify multiple handlers.</p>\n\n\n<p>\nCode:\n<pre><code>el.on({\n    'click' : {\n        fn: this.onClick,\n        scope: this,\n        delay: 100\n    },\n    'mouseover' : {\n        fn: this.onMouseOver,\n        scope: this\n    },\n    'mouseout' : {\n        fn: this.onMouseOut,\n        scope: this\n    }\n});</code></pre>\n<p>\nOr a shorthand syntax:<br>\nCode:\n<pre><code></p>\nel.on({\n    'click' : this.onClick,\n    'mouseover' : this.onMouseOver,\n    'mouseout' : this.onMouseOut,\n    scope: this\n});\n</code></pre></p>\n\n\n<p><b>delegate</b></p>\n\n\n<p>This is a configuration option that you can pass along when registering a handler for\nan event to assist with event delegation. Event delegation is a technique that is used to\nreduce memory consumption and prevent exposure to memory-leaks. By registering an event\nfor a container element as opposed to each element within a container. By setting this\nconfiguration option to a simple selector, the target element will be filtered to look for\na descendant of the target.\nFor example:\n<pre><code>// using this markup:\n&lt;div id='elId'>\n    &lt;p id='p1'>paragraph one&lt;/p>\n    &lt;p id='p2' class='clickable'>paragraph two&lt;/p>\n    &lt;p id='p3'>paragraph three&lt;/p>\n&lt;/div>\n// utilize event delegation to registering just one handler on the container element:\nel = Ext.get('elId');\nel.on(\n    'click',\n    function(e,t) {\n        // handle click\n        console.info(t.id); // 'p2'\n    },\n    this,\n    {\n        // filter the target element to be a descendant with the class 'clickable'\n        delegate: '.clickable'\n    }\n);\n</code></pre></p>\n\n",
            "name": "options"
          }
        ],
        "href": "Element2.html#Ext-core-Element-method-addListener",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Appends an event handler to this element. ...",
        "static": false,
        "name": "addListener",
        "owner": "Ext.core.Element",
        "doc": "<p>Appends an event handler to this element.  The shorthand version <a href=\"#/api/Ext.core.Element-method-on\" rel=\"Ext.core.Element-method-on\" class=\"docClass\">on</a> is equivalent.</p>\n",
        "linenr": 450,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "width"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-adjustWidth",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "TODO: Look at this ...",
        "static": false,
        "name": "adjustWidth",
        "owner": "Ext.core.Element",
        "doc": "<p>TODO: Look at this</p>\n",
        "linenr": 38,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The element to align to.</p>\n",
            "name": "element"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>(optional, defaults to \"tl-bl?\") The position to align to.</p>\n",
            "name": "position"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) Offset the positioning by [x, y]</p>\n",
            "name": "offsets"
          },
          {
            "type": "Boolean/Object",
            "optional": true,
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "name": "animate"
          }
        ],
        "href": "Element.alignment.html#Ext-core-Element-method-alignTo",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.alignment.js",
        "private": false,
        "shortDoc": "Aligns this element with another element relative to the specified anchor points. ...",
        "static": false,
        "name": "alignTo",
        "owner": "Ext.core.Element",
        "doc": "<p>Aligns this element with another element relative to the specified anchor points. If the other element is the\ndocument it aligns it to the viewport.\nThe position parameter is optional, and can be specified in any one of the following formats:</p>\n\n<ul>\n  <li><b>Blank</b>: Defaults to aligning the element's top-left corner to the target's bottom-left corner (\"tl-bl\").</li>\n  <li><b>One anchor (deprecated)</b>: The passed anchor position is used as the target element's anchor point.\n      The element being aligned will position its top-left corner (tl) to that point.  <i>This method has been\n      deprecated in favor of the newer two anchor syntax below</i>.</li>\n  <li><b>Two anchors</b>: If two values from the table below are passed separated by a dash, the first value is used as the\n      element's anchor point, and the second value is used as the target's anchor point.</li>\n</ul>\n\n\n<p>In addition to the anchor points, the position parameter also supports the \"?\" character.  If \"?\" is passed at the end of\nthe position string, the element will attempt to align as specified, but the position will be adjusted to constrain to\nthe viewport if necessary.  Note that the element being aligned might be swapped to align to a different position than\nthat specified in order to enforce the viewport constraints.\nFollowing are all of the supported anchor positions:</p>\n\n<pre>Value  Description\n-----  -----------------------------\ntl     The top left corner (default)\nt      The center of the top edge\ntr     The top right corner\nl      The center of the left edge\nc      In the center of the element\nr      The center of the right edge\nbl     The bottom left corner\nb      The center of the bottom edge\nbr     The bottom right corner\n</pre>\n\n\n<p>Example Usage:</p>\n\n<pre><code>// align el to other-el using the default positioning (\"tl-bl\", non-constrained)\nel.alignTo(\"other-el\");\n\n// align the top left corner of el with the top right corner of other-el (constrained to viewport)\nel.alignTo(\"other-el\", \"tr?\");\n\n// align the bottom right corner of el with the center left edge of other-el\nel.alignTo(\"other-el\", \"br-l?\");\n\n// align the center of el with the bottom left corner of other-el and\n// adjust the x position by -6 pixels (and the y position by 0)\nel.alignTo(\"other-el\", \"c-bl\", [-6, 0]);\n</code></pre>\n\n",
        "linenr": 246,
        "html_filename": "Element.alignment.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The element to align to.</p>\n",
            "name": "element"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The position to align to.</p>\n",
            "name": "position"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) Offset the positioning by [x, y]</p>\n",
            "name": "offsets"
          },
          {
            "type": "Boolean/Object",
            "optional": true,
            "doc": "<p>(optional) True for the default animation or a standard Element animation config object</p>\n",
            "name": "animate"
          },
          {
            "type": "Boolean/Number",
            "optional": true,
            "doc": "<p>(optional) True to monitor body scroll and reposition. If this parameter\nis a number, it is used as the buffer delay (defaults to 50ms).</p>\n",
            "name": "monitorScroll"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call after the animation finishes</p>\n",
            "name": "callback"
          }
        ],
        "href": "Element.alignment.html#Ext-core-Element-method-anchorTo",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.alignment.js",
        "private": false,
        "shortDoc": "Anchors an element to another element and realigns it when the window is resized. ...",
        "static": false,
        "name": "anchorTo",
        "owner": "Ext.core.Element",
        "doc": "<p>Anchors an element to another element and realigns it when the window is resized.</p>\n",
        "linenr": 47,
        "html_filename": "Element.alignment.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/HTMLElement/Array/Element/CompositeElement",
            "optional": false,
            "doc": "\n",
            "name": "el"
          }
        ],
        "href": "Element.insertion.html#Ext-core-Element-method-appendChild",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.insertion.js",
        "private": false,
        "shortDoc": "Appends the passed element(s) to this element ...",
        "static": false,
        "name": "appendChild",
        "owner": "Ext.core.Element",
        "doc": "<p>Appends the passed element(s) to this element</p>\n",
        "linenr": 5,
        "html_filename": "Element.insertion.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The new parent element</p>\n",
            "name": "el"
          }
        ],
        "href": "Element.insertion.html#Ext-core-Element-method-appendTo",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.insertion.js",
        "private": false,
        "shortDoc": "Appends this element to the passed element ...",
        "static": false,
        "name": "appendTo",
        "owner": "Ext.core.Element",
        "doc": "<p>Appends this element to the passed element</p>\n",
        "linenr": 14,
        "html_filename": "Element.insertion.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Object/Function",
            "optional": false,
            "doc": "<p>A style specification string, e.g. \"width:100px\", or object in the form {width:\"100px\"}, or\na function which returns such a specification.</p>\n",
            "name": "styles"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-applyStyles",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "More flexible version of setStyle for setting style properties. ...",
        "static": false,
        "name": "applyStyles",
        "owner": "Ext.core.Element",
        "doc": "<p>More flexible version of <a href=\"#/api/Ext.core.Element-method-setStyle\" rel=\"Ext.core.Element-method-setStyle\" class=\"docClass\">setStyle</a> for setting style properties.</p>\n",
        "linenr": 695,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element2.html#Ext-core-Element-method-blur",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Tries to blur the element. ...",
        "static": false,
        "name": "blur",
        "owner": "Ext.core.Element",
        "doc": "<p>Tries to blur the element. Any exceptions are caught and ignored.</p>\n",
        "linenr": 429,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) A base CSS class to apply to the containing wrapper element\n(defaults to <tt>'x-box'</tt>). Note that there are a number of CSS rules that are dependent on\nthis name to make the overall effect work, so if you supply an alternate base class, make sure you\nalso supply all of the necessary rules.</p>\n",
            "name": "class"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-boxWrap",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The outermost wrapping element of the created box structure.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Wraps the specified element with a special 9 element markup/CSS block that renders by default as\na gray container wit...",
        "static": false,
        "name": "boxWrap",
        "owner": "Ext.core.Element",
        "doc": "<p>Wraps the specified element with a special 9 element markup/CSS block that renders by default as\na gray container with a gradient background, rounded corners and a 4-way shadow.</p>\n\n\n<p>This special markup is used throughout <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> when box wrapping elements (<a href=\"#/api/Ext.button.Button\" rel=\"Ext.button.Button\" class=\"docClass\">Ext.button.Button</a>,\n<a href=\"#/api/Ext.panel.Panel\" rel=\"Ext.panel.Panel\" class=\"docClass\">Ext.panel.Panel</a> when <tt><a href=\"#/api/Ext.panel.Panel-cfg-frame\" rel=\"Ext.panel.Panel-cfg-frame\" class=\"docClass\">frame=true</a></tt>, <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Ext.window.Window</a>).  The markup\nis of this form:</p>\n\n\n<pre><code>    Ext.core.Element.boxMarkup =\n    &#39;&lt;div class=\"{0}-tl\">&lt;div class=\"{0}-tr\">&lt;div class=\"{0}-tc\">&lt;/div>&lt;/div>&lt;/div>\n     &lt;div class=\"{0}-ml\">&lt;div class=\"{0}-mr\">&lt;div class=\"{0}-mc\">&lt;/div>&lt;/div>&lt;/div>\n     &lt;div class=\"{0}-bl\">&lt;div class=\"{0}-br\">&lt;div class=\"{0}-bc\">&lt;/div>&lt;/div>&lt;/div>&#39;;\n</code></pre>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>    // Basic box wrap\n    Ext.get(\"foo\").boxWrap();\n\n    // You can also add a custom class and use CSS inheritance rules to customize the box look.\n    // 'x-box-blue' is a built-in alternative -- look at the related CSS definitions as an example\n    // for how to create a custom box wrap style.\n    Ext.get(\"foo\").boxWrap().addCls(\"x-box-blue\");\n</code></pre>\n\n",
        "linenr": 727,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": true,
            "doc": "<p>(optional) The element in which to center the element.</p>\n",
            "name": "centerIn"
          }
        ],
        "href": "Element.alignment.html#Ext-core-Element-method-center",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.alignment.js",
        "private": false,
        "shortDoc": "Centers the Element in either the viewport, or another Element. ...",
        "static": false,
        "name": "center",
        "owner": "Ext.core.Element",
        "doc": "<p>Centers the Element in either the viewport, or another Element.</p>\n",
        "linenr": 375,
        "html_filename": "Element.alignment.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The CSS selector</p>\n",
            "name": "selector"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to return the DOM node instead of <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> (defaults to false)</p>\n",
            "name": "returnDom"
          }
        ],
        "href": "Element.traversal.html#Ext-core-Element-method-child",
        "return": {
          "type": "HTMLElement/Ext.core.Element",
          "doc": "<p>The child <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> (or DOM node if returnDom = true)</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
        "private": false,
        "shortDoc": "Selects a single direct child based on the passed CSS selector (the selector should not contain an id). ...",
        "static": false,
        "name": "child",
        "owner": "Ext.core.Element",
        "doc": "<p>Selects a single <em>direct</em> child based on the passed CSS selector (the selector should not contain an id).</p>\n",
        "linenr": 87,
        "html_filename": "Element.traversal.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) By default the element\nkeeps track if it has been cleaned already so\nyou can call this over and over. However, if you update the element and\nneed to force a reclean, you can pass true.</p>\n",
            "name": "forceReclean"
          }
        ],
        "href": "Element-more.html#Ext-core-Element-method-clean",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element-more.js",
        "private": false,
        "shortDoc": "Removes Empty, or whitespace filled text nodes. ...",
        "static": false,
        "name": "clean",
        "owner": "Ext.core.Element",
        "doc": "<p>Removes Empty, or whitespace filled text nodes. Combines adjacent text nodes.</p>\n",
        "linenr": 78,
        "html_filename": "Element-more.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element2.html#Ext-core-Element-method-clearListeners",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Removes all previous added listeners from this element ...",
        "static": false,
        "name": "clearListeners",
        "owner": "Ext.core.Element",
        "doc": "<p>Removes all previous added listeners from this element</p>\n",
        "linenr": 756,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.style.html#Ext-core-Element-method-clearOpacity",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Clears any opacity settings from this element. ...",
        "static": false,
        "name": "clearOpacity",
        "owner": "Ext.core.Element",
        "doc": "<p>Clears any opacity settings from this element. Required in some cases for IE.</p>\n",
        "linenr": 376,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) The value to use for the left,right,top,bottom, defaults to '' (empty string). You could use 'auto'.</p>\n",
            "name": "value"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-clearPositioning",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Clear positioning back to the default when the document was loaded ...",
        "static": false,
        "name": "clearPositioning",
        "owner": "Ext.core.Element",
        "doc": "<p>Clear positioning back to the default when the document was loaded</p>\n",
        "linenr": 220,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.style.html#Ext-core-Element-method-clip",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Store the current overflow setting and clip overflow on the element - use unclip to remove ...",
        "static": false,
        "name": "clip",
        "owner": "Ext.core.Element",
        "doc": "<p>Store the current overflow setting and clip overflow on the element - use <tt><a href=\"#/api/Ext.core.Element-method-unclip\" rel=\"Ext.core.Element-method-unclip\" class=\"docClass\">unclip</a></tt> to remove</p>\n",
        "linenr": 629,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "HTMLElement/String",
            "optional": false,
            "doc": "<p>The element to check</p>\n",
            "name": "el"
          }
        ],
        "href": "Element2.html#Ext-core-Element-method-contains",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this element is an ancestor of el, else false</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Returns true if this element is an ancestor of the passed element ...",
        "static": false,
        "name": "contains",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns true if this element is an ancestor of the passed element</p>\n",
        "linenr": 664,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>DomHelper element config object.  If no tag is specified (e.g., {tag:'input'}) then a div will be\nautomatically generated with the specified attributes.</p>\n",
            "name": "config"
          },
          {
            "type": "HTMLElement",
            "optional": true,
            "doc": "<p>(optional) a child element of this element</p>\n",
            "name": "insertBefore"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to return the dom node instead of creating an Element</p>\n",
            "name": "returnDom"
          }
        ],
        "href": "Element.insertion.html#Ext-core-Element-method-createChild",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The new child element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.insertion.js",
        "private": false,
        "shortDoc": "Creates the passed DomHelper config and appends it to this element or optionally inserts it before the passed child e...",
        "static": false,
        "name": "createChild",
        "owner": "Ext.core.Element",
        "doc": "<p>Creates the passed DomHelper config and appends it to this element or optionally inserts it before the passed child element.</p>\n",
        "linenr": 137,
        "html_filename": "Element.insertion.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The class name of the proxy element or a DomHelper config object</p>\n",
            "name": "config"
          },
          {
            "type": "String/HTMLElement",
            "optional": true,
            "doc": "<p>(optional) The element or element id to render the proxy to (defaults to document.body)</p>\n",
            "name": "renderTo"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to align and size the proxy to this element now (defaults to false)</p>\n",
            "name": "matchBox"
          }
        ],
        "href": "Element-more.html#Ext-core-Element-method-createProxy",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The new proxy element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element-more.js",
        "private": false,
        "shortDoc": "Creates a proxy element of this element ...",
        "static": false,
        "name": "createProxy",
        "owner": "Ext.core.Element",
        "doc": "<p>Creates a proxy element of this element</p>\n",
        "linenr": 231,
        "html_filename": "Element-more.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.fx-more.html#Ext-core-Element-method-createShim",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The new shim element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx-more.js",
        "private": false,
        "shortDoc": "Creates an iframe shim for this element to keep selects and other windowed objects from\nshowing through. ...",
        "static": false,
        "name": "createShim",
        "owner": "Ext.core.Element",
        "doc": "<p>Creates an iframe shim for this element to keep selects and other windowed objects from\nshowing through.</p>\n",
        "linenr": 166,
        "html_filename": "Element.fx-more.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element2.html#Ext-core-Element-method-destroy",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Removes this element's dom reference. ...",
        "static": false,
        "name": "destroy",
        "owner": "Ext.core.Element",
        "doc": "<p>Removes this element's dom reference.  Note that event and cache removal is handled at <a href=\"#/api/Ext-method-removeNode\" rel=\"Ext-method-removeNode\" class=\"docClass\">Ext.removeNode</a>.\nAlias to <a href=\"#/api/Ext.core.Element-method-remove\" rel=\"Ext.core.Element-method-remove\" class=\"docClass\">remove</a>.</p>\n",
        "linenr": 764,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The CSS selector</p>\n",
            "name": "selector"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to return the DOM node instead of <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> (defaults to false)</p>\n",
            "name": "returnDom"
          }
        ],
        "href": "Element.traversal.html#Ext-core-Element-method-down",
        "return": {
          "type": "HTMLElement/Ext.core.Element",
          "doc": "<p>The child <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> (or DOM node if returnDom = true)</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
        "private": false,
        "shortDoc": "Selects a single child at any depth below this element based on the passed CSS selector (the selector should not cont...",
        "static": false,
        "name": "down",
        "owner": "Ext.core.Element",
        "doc": "<p>Selects a single child at any depth below this element based on the passed CSS selector (the selector should not contain an id).</p>\n",
        "linenr": 76,
        "html_filename": "Element.traversal.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) What to set display to when visible</p>\n",
            "name": "display"
          }
        ],
        "href": "Element.fx-more.html#Ext-core-Element-method-enableDisplayMode",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx-more.js",
        "private": false,
        "shortDoc": "Convenience method for setVisibilityMode(Element.DISPLAY) ...",
        "static": false,
        "name": "enableDisplayMode",
        "owner": "Ext.core.Element",
        "doc": "<p>Convenience method for setVisibilityMode(Element.DISPLAY)</p>\n",
        "linenr": 45,
        "html_filename": "Element.fx-more.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
            "name": "options"
          }
        ],
        "href": "Element.anim.html#Ext-core-Element-method-fadeIn",
        "return": {
          "type": "Ext.Element",
          "doc": "<p>The Element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "shortDoc": "Fade an element in (from transparent to opaque). ...",
        "static": false,
        "name": "fadeIn",
        "owner": "Ext.core.Element",
        "doc": "<p>Fade an element in (from transparent to opaque).  The ending opacity can be specified\nusing the <tt>endOpacity</tt> config option.\nUsage:</p>\n\n<pre><code>// default: fade in from opacity 0 to 100%\nel.fadeIn();\n\n// custom: fade in from opacity 0 to 75% over 2 seconds\nel.fadeIn({ endOpacity: .75, duration: 2});\n\n// common config options shown with default values\nel.fadeIn({\n    endOpacity: 1, //can be any value between 0 and 1 (e.g. .5)\n    easing: 'easeOut',\n    duration: 500\n});\n</code></pre>\n\n",
        "linenr": 773,
        "html_filename": "Element.anim.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
            "name": "options"
          }
        ],
        "href": "Element.anim.html#Ext-core-Element-method-fadeOut",
        "return": {
          "type": "Ext.Element",
          "doc": "<p>The Element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "shortDoc": "Fade an element out (from opaque to transparent). ...",
        "static": false,
        "name": "fadeOut",
        "owner": "Ext.core.Element",
        "doc": "<p>Fade an element out (from opaque to transparent).  The ending opacity can be specified\nusing the <tt>endOpacity</tt> config option.  Note that IE may require\n<tt>useDisplay:true</tt> in order to redisplay correctly.\nUsage:</p>\n\n<pre><code>// default: fade out from the element's current opacity to 0\nel.fadeOut();\n\n// custom: fade out from the element's current opacity to 25% over 2 seconds\nel.fadeOut({ endOpacity: .25, duration: 2});\n\n// common config options shown with default values\nel.fadeOut({\n    endOpacity: 0, //can be any value between 0 and 1 (e.g. .5)\n    easing: 'easeOut',\n    duration: 500,\n    remove: false,\n    useDisplay: false\n});\n</code></pre>\n\n",
        "linenr": 801,
        "html_filename": "Element.anim.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The simple selector to test</p>\n",
            "name": "selector"
          },
          {
            "type": "Number/Mixed",
            "optional": true,
            "doc": "<p>(optional) The max depth to search as a number or element (defaults to 50 || document.body)</p>\n",
            "name": "maxDepth"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to return a <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> object instead of DOM node</p>\n",
            "name": "returnEl"
          }
        ],
        "href": "Element.traversal.html#Ext-core-Element-method-findParent",
        "return": {
          "type": "HTMLElement",
          "doc": "<p>The matching DOM node (or null if no match was found)</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
        "private": false,
        "shortDoc": "Looks at this node and then at parent nodes for a match of the passed simple selector (e.g. ...",
        "static": false,
        "name": "findParent",
        "owner": "Ext.core.Element",
        "doc": "<p>Looks at this node and then at parent nodes for a match of the passed simple selector (e.g. div.some-class or span:first-child)</p>\n",
        "linenr": 5,
        "html_filename": "Element.traversal.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The simple selector to test</p>\n",
            "name": "selector"
          },
          {
            "type": "Number/Mixed",
            "optional": true,
            "doc": "<p>(optional) The max depth to</p>\n\n<pre><code>        search as a number or element (defaults to 10 || document.body)\n</code></pre>\n",
            "name": "maxDepth"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to return a <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> object instead of DOM node</p>\n",
            "name": "returnEl"
          }
        ],
        "href": "Element.traversal.html#Ext-core-Element-method-findParentNode",
        "return": {
          "type": "HTMLElement",
          "doc": "<p>The matching DOM node (or null if no match was found)</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
        "private": false,
        "shortDoc": "Looks at parent nodes for a match of the passed simple selector (e.g. ...",
        "static": false,
        "name": "findParentNode",
        "owner": "Ext.core.Element",
        "doc": "<p>Looks at parent nodes for a match of the passed simple selector (e.g. div.some-class or span:first-child)</p>\n",
        "linenr": 33,
        "html_filename": "Element.traversal.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) Find the next sibling that matches the passed simple selector</p>\n",
            "name": "selector"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to return a raw dom node instead of an Ext.core.Element</p>\n",
            "name": "returnDom"
          }
        ],
        "href": "Element.traversal.html#Ext-core-Element-method-first",
        "return": {
          "type": "Ext.core.Element/HTMLElement",
          "doc": "<p>The first child or null</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
        "private": false,
        "shortDoc": "Gets the first child, skipping text nodes ...",
        "static": false,
        "name": "first",
        "owner": "Ext.core.Element",
        "doc": "<p>Gets the first child, skipping text nodes</p>\n",
        "linenr": 135,
        "html_filename": "Element.traversal.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/HTMLElement",
            "optional": false,
            "doc": "<p>The dom node or id</p>\n",
            "name": "el"
          },
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) Allows for creation of named reusable flyweights to prevent conflicts\n(e.g. internally <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> uses \"_global\")</p>\n",
            "name": "named"
          }
        ],
        "href": "Element2.html#Ext-core-Element-method-fly",
        "return": {
          "type": "Element",
          "doc": "<p>The shared Element object (or null if no matching element was found)</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Gets the globally shared flyweight Element, with the passed node as the active element. ...",
        "static": false,
        "name": "fly",
        "owner": "Ext.core.Element",
        "doc": "<p>Gets the globally shared flyweight Element, with the passed node as the active element. Do not store a reference to this element -\nthe dom node can be overwritten by other code. Shorthand of <a href=\"#/api/Ext.core.Element-method-fly\" rel=\"Ext.core.Element-method-fly\" class=\"docClass\">fly</a></p>\n\n\n<p>Use this to make one-time references to DOM elements which are not going to be accessed again either by\napplication code, or by Ext's classes. If accessing an element which will be processed regularly, then <a href=\"#/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a>\nwill be more appropriate to take advantage of the caching provided by the <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> class.</p>\n\n",
        "linenr": 953,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) Milliseconds to defer the focus</p>\n",
            "name": "defer"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "dom"
          }
        ],
        "href": "Element2.html#Ext-core-Element-method-focus",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Tries to focus the element. ...",
        "static": false,
        "name": "focus",
        "owner": "Ext.core.Element",
        "doc": "<p>Tries to focus the element. Any exceptions are caught and ignored.</p>\n",
        "linenr": 409,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) The color of the border.  Should be a 6 char hex color without the leading # (defaults to light blue: 'C3DAF9').</p>\n",
            "name": "color"
          },
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) The number of ripples to display (defaults to 1)</p>\n",
            "name": "count"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
            "name": "options"
          }
        ],
        "href": "Element.anim.html#Ext-core-Element-method-frame",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The Element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "shortDoc": "Shows a ripple of exploding, attenuating borders to draw attention to an Element. ...",
        "static": false,
        "name": "frame",
        "owner": "Ext.core.Element",
        "doc": "<p>Shows a ripple of exploding, attenuating borders to draw attention to an Element.\nUsage:</p>\n\n<pre><code>// default: a single light blue ripple\nel.frame();\n\n// custom: 3 red ripples lasting 3 seconds total\nel.frame(\"#ff0000\", 3, { duration: 3 });\n\n// common config options shown with default values\nel.frame(\"#C3DAF9\", 1, {\n    duration: 1 //duration of each individual ripple.\n    // Note: Easing is not configurable and will be ignored if included\n});\n</code></pre>\n\n",
        "linenr": 510,
        "html_filename": "Element.anim.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.static-more.html#Ext-core-Element-method-getActiveElement",
        "return": {
          "type": "HTMLElement",
          "doc": "<p>The active (focused) element in the document.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.static-more.js",
        "private": false,
        "shortDoc": "Returns the active element in the DOM. ...",
        "static": false,
        "name": "getActiveElement",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns the active element in the DOM. If the browser supports activeElement\non the document, this is returned. If not, the focus is tracked and the active\nelement is maintained internally.</p>\n",
        "linenr": 59,
        "html_filename": "Element.static-more.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The element to align to.</p>\n",
            "name": "element"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>(optional, defaults to \"tl-bl?\") The position to align to.</p>\n",
            "name": "position"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) Offset the positioning by [x, y]</p>\n",
            "name": "offsets"
          }
        ],
        "href": "Element.alignment.html#Ext-core-Element-method-getAlignToXY",
        "return": {
          "type": "Array",
          "doc": "<p>[x, y]</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.alignment.js",
        "private": false,
        "shortDoc": "Gets the x,y coordinates to align this element with another element. ...",
        "static": false,
        "name": "getAlignToXY",
        "owner": "Ext.core.Element",
        "doc": "<p>Gets the x,y coordinates to align this element with another element. See <a href=\"#/api/Ext.core.Element-method-alignTo\" rel=\"Ext.core.Element-method-alignTo\" class=\"docClass\">alignTo</a> for more info on the\nsupported position values.</p>\n",
        "linenr": 138,
        "html_filename": "Element.alignment.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) The specified anchor position (defaults to \"c\").  See <a href=\"#/api/Ext.core.Element-method-alignTo\" rel=\"Ext.core.Element-method-alignTo\" class=\"docClass\">alignTo</a>\nfor details on supported anchor positions.</p>\n",
            "name": "anchor"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to get the local (element top/left-relative) anchor position instead\nof page coordinates</p>\n",
            "name": "local"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing the size to use for calculating anchor position\n{width: (target width), height: (target height)} (defaults to the element's current size)</p>\n",
            "name": "size"
          }
        ],
        "href": "Element.alignment.html#Ext-core-Element-method-getAnchorXY",
        "return": {
          "type": "Array",
          "doc": "<p>[x, y] An array containing the element's x and y coordinates</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.alignment.js",
        "private": false,
        "shortDoc": "Gets the x,y coordinates specified by the anchor position on the element. ...",
        "static": false,
        "name": "getAnchorXY",
        "owner": "Ext.core.Element",
        "doc": "<p>Gets the x,y coordinates specified by the anchor position on the element.</p>\n",
        "linenr": 5,
        "html_filename": "Element.alignment.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The attribute name</p>\n",
            "name": "name"
          },
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) The namespace in which to look for the attribute</p>\n",
            "name": "namespace"
          }
        ],
        "href": "Element2.html#Ext-core-Element-method-getAttribute",
        "return": {
          "type": "String",
          "doc": "<p>The attribute value</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Returns the value of an attribute from the element's underlying DOM node. ...",
        "static": false,
        "name": "getAttribute",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns the value of an attribute from the element's underlying DOM node.</p>\n",
        "linenr": 684,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": {
          "version": null,
          "text": "\n",
          "tagname": "deprecated",
          "doc": null
        },
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The namespace in which to look for the attribute</p>\n",
            "name": "namespace"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The attribute name</p>\n",
            "name": "name"
          }
        ],
        "href": "Element2.html#Ext-core-Element-method-getAttributeNS",
        "return": {
          "type": "String",
          "doc": "<p>The attribute value</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Returns the value of a namespaced attribute from the element's underlying DOM node. ...",
        "static": false,
        "name": "getAttributeNS",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns the value of a namespaced attribute from the element's underlying DOM node.</p>\n",
        "linenr": 673,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Can be t, l, r, b or any combination of those to add multiple values. For example,\npassing <tt>'lr'</tt> would get the border <b><u>l</u></b>eft width + the border <b><u>r</u></b>ight width.</p>\n",
            "name": "side"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-getBorderWidth",
        "return": {
          "type": "Number",
          "doc": "<p>The width of the sides passed added together</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Gets the width of the border(s) for the specified side(s) ...",
        "static": false,
        "name": "getBorderWidth",
        "owner": "Ext.core.Element",
        "doc": "<p>Gets the width of the border(s) for the specified side(s)</p>\n",
        "linenr": 609,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to get the local css position instead of page coordinate</p>\n",
            "name": "local"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-getBottom",
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Gets the bottom Y coordinate of the element (element Y position + element height) ...",
        "static": false,
        "name": "getBottom",
        "owner": "Ext.core.Element",
        "doc": "<p>Gets the bottom Y coordinate of the element (element Y position + element height)</p>\n",
        "linenr": 186,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If true a box for the content of the element is returned.</p>\n",
            "name": "contentBox"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If true the element's left and top are returned instead of page x/y.</p>\n",
            "name": "local"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-getBox",
        "return": {
          "type": "Object",
          "doc": "<p>box An object in the format</p>\n\n<pre><code>{\n    x: &lt;Element's X position>,\n    y: &lt;Element's Y position>,\n    width: &lt;Element's width>,\n    height: &lt;Element's height>,\n    bottom: &lt;Element's lower bound>,\n    right: &lt;Element's rightmost bound>\n}\n</code></pre>\n\n\n<p>The returned object may also be addressed as an Array where index 0 contains the X position\nand index 1 contains the Y position. So the result may also be used for <a href=\"#/api/Ext.core.Element-method-setXY\" rel=\"Ext.core.Element-method-setXY\" class=\"docClass\">setXY</a></p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Return an object defining the area of this Element which can be passed to setBox to\nset another Element's size/locati...",
        "static": false,
        "name": "getBox",
        "owner": "Ext.core.Element",
        "doc": "<p>Return an object defining the area of this Element which can be passed to <a href=\"#/api/Ext.core.Element-method-setBox\" rel=\"Ext.core.Element-method-setBox\" class=\"docClass\">setBox</a> to\nset another Element's size/location to match this element.</p>\n",
        "linenr": 327,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.alignment.html#Ext-core-Element-method-getCenterXY",
        "return": {
          "type": "Array",
          "doc": "<p>The x, y values [x, y]</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.alignment.js",
        "private": false,
        "shortDoc": "Calculates the x, y to center this element on the screen ...",
        "static": false,
        "name": "getCenterXY",
        "owner": "Ext.core.Element",
        "doc": "<p>Calculates the x, y to center this element on the screen</p>\n",
        "linenr": 367,
        "html_filename": "Element.alignment.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The css attribute</p>\n",
            "name": "attr"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The default value to use when a valid color isn't found</p>\n",
            "name": "defaultValue"
          },
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) defaults to #. Use an empty string when working with\ncolor anims.</p>\n",
            "name": "prefix"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-getColor",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Return the CSS color for the specified CSS attribute. ...",
        "static": false,
        "name": "getColor",
        "owner": "Ext.core.Element",
        "doc": "<p>Return the CSS color for the specified CSS attribute. rgb, 3 digit (like #fff) and valid values\nare convert to standard 6 digit hex color.</p>\n",
        "linenr": 267,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.style.html#Ext-core-Element-method-getComputedHeight",
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Returns either the offsetHeight or the height of this element based on CSS height adjusted by padding or borders\nwhen...",
        "static": false,
        "name": "getComputedHeight",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns either the offsetHeight or the height of this element based on CSS height adjusted by padding or borders\nwhen needed to simulate offsetHeight when offsets aren't available. This may not work on display:none elements\nif a height has not been set using CSS.</p>\n",
        "linenr": 803,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.style.html#Ext-core-Element-method-getComputedWidth",
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Returns either the offsetWidth or the width of this element based on CSS width adjusted by padding or borders\nwhen ne...",
        "static": false,
        "name": "getComputedWidth",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns either the offsetWidth or the width of this element based on CSS width adjusted by padding or borders\nwhen needed to simulate offsetWidth when offsets aren't available. This may not work on display:none elements\nif a width has not been set using CSS.</p>\n",
        "linenr": 821,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>{Mixed} The Element or <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> into which this element is to be constrained.</p>\n",
            "name": "constrainTo"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>{Array} A proposed <code>[X, Y]</code> position to test for validity and to produce a vector for instead\nof using this Element's current position;</p>\n",
            "name": "proposedPosition"
          }
        ],
        "href": "Element.alignment.html#Ext-core-Element-method-getConstrainVector",
        "return": {
          "type": "Array",
          "doc": "<p><b>If</b> this element <i>needs</i> to be translated, an <code>[X, Y]</code>\nvector by which this element must be translated. Otherwise, <code>false</code>.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.alignment.js",
        "private": false,
        "shortDoc": "Returns the [X, Y] vector by which this element must be translated to make a best attempt\nto constrain within the pas...",
        "static": false,
        "name": "getConstrainVector",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns the <code>[X, Y]</code> vector by which this element must be translated to make a best attempt\nto constrain within the passed constraint. Returns <code>false</code> is this element does not need to be moved.</p>\n\n\n<p>Priority is given to constraining the top and left within the constraint.</p>\n\n\n<p>The constraint may either be an existing element into which this element is to be constrained, or\nan <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> into which this element is to be constrained.</p>\n\n",
        "linenr": 313,
        "html_filename": "Element.alignment.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "sides"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "onlyContentBox"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-getFrameWidth",
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Returns the sum width of the padding and borders for the passed \"sides\". ...",
        "static": false,
        "name": "getFrameWidth",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns the sum width of the padding and borders for the passed \"sides\". See getBorderWidth()</p>\n\n<pre><code>     for more information about the sides.\n</code></pre>\n",
        "linenr": 840,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to get the height minus borders and padding</p>\n",
            "name": "contentHeight"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "preciseHeight"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-getHeight",
        "return": {
          "type": "Number",
          "doc": "<p>The element's height</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Returns the offset height of the element ...",
        "static": false,
        "name": "getHeight",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns the offset height of the element</p>\n",
        "linenr": 425,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to get the local css position instead of page coordinate</p>\n",
            "name": "local"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-getLeft",
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Gets the left X coordinate ...",
        "static": false,
        "name": "getLeft",
        "owner": "Ext.core.Element",
        "doc": "<p>Gets the left X coordinate</p>\n",
        "linenr": 158,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element-more.html#Ext-core-Element-method-getLoader",
        "return": {
          "type": "Ext.ElementLoader",
          "doc": "<p>The loader</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element-more.js",
        "private": false,
        "shortDoc": "Gets this element's ElementLoader ...",
        "static": false,
        "name": "getLoader",
        "owner": "Ext.core.Element",
        "doc": "<p>Gets this element's <a href=\"#/api/Ext.ElementLoader\" rel=\"Ext.ElementLoader\" class=\"docClass\">ElementLoader</a></p>\n",
        "linenr": 131,
        "html_filename": "Element-more.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) Any combination of l, r, t, b to get the sum of those sides</p>\n",
            "name": "sides"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-getMargin",
        "return": {
          "type": "Object/Number",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Returns an object with properties top, left, right and bottom representing the margins of this element unless sides i...",
        "static": false,
        "name": "getMargin",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns an object with properties top, left, right and bottom representing the margins of this element unless sides is passed,\nthen it returns the calculated width of the sides (see getPadding)</p>\n",
        "linenr": 1037,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The element to get the offsets from.</p>\n",
            "name": "element"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-getOffsetsTo",
        "return": {
          "type": "Array",
          "doc": "<p>The XY page offsets (e.g. [100, -200])</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Returns the offsets of this element from the passed element. ...",
        "static": false,
        "name": "getOffsetsTo",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns the offsets of this element from the passed element. Both element must be part of the DOM tree and not have display:none to have page coordinates.</p>\n",
        "linenr": 42,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Can be t, l, r, b or any combination of those to add multiple values. For example,\npassing <tt>'lr'</tt> would get the padding <b><u>l</u></b>eft + the padding <b><u>r</u></b>ight.</p>\n",
            "name": "side"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-getPadding",
        "return": {
          "type": "Number",
          "doc": "<p>The padding of the sides passed added together</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Gets the width of the padding(s) for the specified side(s) ...",
        "static": false,
        "name": "getPadding",
        "owner": "Ext.core.Element",
        "doc": "<p>Gets the width of the padding(s) for the specified side(s)</p>\n",
        "linenr": 619,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If true an <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Ext.util.Region</a> will be returned</p>\n",
            "name": "asRegion"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-getPageBox",
        "return": {
          "type": "Object",
          "doc": "<p>box An object in the format</p>\n\n<pre><code>{\n    x: &lt;Element's X position>,\n    y: &lt;Element's Y position>,\n    width: &lt;Element's width>,\n    height: &lt;Element's height>,\n    bottom: &lt;Element's lower bound>,\n    right: &lt;Element's rightmost bound>\n}\n</code></pre>\n\n\n<p>The returned object may also be addressed as an Array where index 0 contains the X position\nand index 1 contains the Y position. So the result may also be used for <a href=\"#/api/Ext.core.Element-method-setXY\" rel=\"Ext.core.Element-method-setXY\" class=\"docClass\">setXY</a></p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Return an object defining the area of this Element which can be passed to setBox to\nset another Element's size/locati...",
        "static": false,
        "name": "getPageBox",
        "owner": "Ext.core.Element",
        "doc": "<p>Return an object defining the area of this Element which can be passed to <a href=\"#/api/Ext.core.Element-method-setBox\" rel=\"Ext.core.Element-method-setBox\" class=\"docClass\">setBox</a> to\nset another Element's size/location to match this element.</p>\n",
        "linenr": 474,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.position.html#Ext-core-Element-method-getPositioning",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Gets an object with all CSS positioning properties. ...",
        "static": false,
        "name": "getPositioning",
        "owner": "Ext.core.Element",
        "doc": "<p>Gets an object with all CSS positioning properties. Useful along with setPostioning to get\nsnapshot before performing an update and then restoring the element.</p>\n",
        "linenr": 238,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.position.html#Ext-core-Element-method-getRegion",
        "return": {
          "type": "Region",
          "doc": "<p>A <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Ext.util.Region</a> containing \"top, left, bottom, right\" member data.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Returns the region of this element. ...",
        "static": false,
        "name": "getRegion",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns the region of this element.\nThe element must be part of the DOM tree to have a region (display:none or elements not appended return false).</p>\n",
        "linenr": 437,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to get the local css position instead of page coordinate</p>\n",
            "name": "local"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-getRight",
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Gets the right X coordinate of the element (element X position + element width) ...",
        "static": false,
        "name": "getRight",
        "owner": "Ext.core.Element",
        "doc": "<p>Gets the right X coordinate of the element (element X position + element width)</p>\n",
        "linenr": 167,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.scroll.html#Ext-core-Element-method-getScroll",
        "return": {
          "type": "Object",
          "doc": "<p>An object containing the scroll position in the format {left: (scrollLeft), top: (scrollTop)}</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.scroll.js",
        "private": false,
        "shortDoc": "Returns the current scroll position of the element. ...",
        "static": false,
        "name": "getScroll",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns the current scroll position of the element.</p>\n",
        "linenr": 14,
        "html_filename": "Element.scroll.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to get the width/size minus borders and padding</p>\n",
            "name": "contentSize"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-getSize",
        "return": {
          "type": "Object",
          "doc": "<p>An object containing the element's size {width: (element width), height: (element height)}</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Returns the size of the element. ...",
        "static": false,
        "name": "getSize",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns the size of the element.</p>\n",
        "linenr": 1000,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The style property whose value is returned.</p>\n",
            "name": "property"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-getStyle",
        "return": {
          "type": "String",
          "doc": "<p>The current value of the style property for this element.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Normalizes currentStyle and computedStyle. ...",
        "static": false,
        "name": "getStyle",
        "owner": "Ext.core.Element",
        "doc": "<p>Normalizes currentStyle and computedStyle.</p>\n",
        "linenr": 207,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.style.html#Ext-core-Element-method-getStyleSize",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Returns the dimensions of the element available to lay content out in. ...",
        "static": false,
        "name": "getStyleSize",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns the dimensions of the element available to lay content out in.<p>\n\ngetStyleSize utilizes prefers style sizing if present, otherwise it chooses the larger of offsetHeight/clientHeight and offsetWidth/clientWidth.\nTo obtain the size excluding scrollbars, use getViewSize\n\nSizing of the document body is handled at the adapter level which handles special cases for IE and strict modes, etc.\n\n",
        "linenr": 958,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>A style name</p>\n",
            "name": "style1"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>A style name</p>\n",
            "name": "style2"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>.</p>\n",
            "name": "etc"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-getStyles",
        "return": {
          "type": "Object",
          "doc": "<p>The style object</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Returns an object with properties matching the styles requested. ...",
        "static": false,
        "name": "getStyles",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns an object with properties matching the styles requested.\nFor example, el.getStyles('color', 'font-size', 'width') might return\n{'color': '#FFFFFF', 'font-size': '13px', 'width': '100px'}.</p>\n",
        "linenr": 706,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The text to measure. Defaults to the innerHTML of the element.</p>\n",
            "name": "text"
          },
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) The minumum value to return.</p>\n",
            "name": "min"
          },
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) The maximum value to return.</p>\n",
            "name": "max"
          }
        ],
        "href": "TextMetrics.html#Ext-core-Element-method-getTextWidth",
        "return": {
          "type": "Number",
          "doc": "<p>The text width in pixels.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/TextMetrics.js",
        "private": false,
        "shortDoc": "Returns the width in pixels of the passed text, or the width of the text in this Element. ...",
        "static": false,
        "name": "getTextWidth",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns the width in pixels of the passed text, or the width of the text in this Element.</p>\n",
        "linenr": 134,
        "html_filename": "TextMetrics.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to get the local css position instead of page coordinate</p>\n",
            "name": "local"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-getTop",
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Gets the top Y coordinate ...",
        "static": false,
        "name": "getTop",
        "owner": "Ext.core.Element",
        "doc": "<p>Gets the top Y coordinate</p>\n",
        "linenr": 177,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>true to parse the value as a number</p>\n",
            "name": "asNumber"
          }
        ],
        "href": "Element2.html#Ext-core-Element-method-getValue",
        "return": {
          "type": "String/Number",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Returns the value of the \"value\" attribute ...",
        "static": false,
        "name": "getValue",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns the value of the \"value\" attribute</p>\n",
        "linenr": 440,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.position.html#Ext-core-Element-method-getViewRegion",
        "return": {
          "type": "Region",
          "doc": "<p>A <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Ext.util.Region</a> containing \"top, left, bottom, right\" member data.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Returns the content region of this element. ...",
        "static": false,
        "name": "getViewRegion",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns the <b>content</b> region of this element. That is the region within the borders and padding.</p>\n",
        "linenr": 446,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.style.html#Ext-core-Element-method-getViewSize",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Returns the dimensions of the element available to lay content out in. ...",
        "static": false,
        "name": "getViewSize",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns the dimensions of the element available to lay content out in.<p>\n<p>If the element (or any ancestor element) has CSS style <code>display : none</code>, the dimensions will be zero.</p>\nexample:\n<pre><code>        var vpSize = Ext.getBody().getViewSize();\n\n        // all Windows created afterwards will have a default value of 90% height and 95% width\n        Ext.Window.override({\n            width: vpSize.width * 0.9,\n            height: vpSize.height * 0.95\n        });\n        // To handle window resizing you would have to hook onto onWindowResize.\n</code></pre>\n\ngetViewSize utilizes clientHeight/clientWidth which excludes sizing of scrollbars.\nTo obtain the size including scrollbars, use getStyleSize\n\nSizing of the document body is handled at the adapter level which handles special cases for IE and strict modes, etc.\n\n",
        "linenr": 904,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to get the width minus borders and padding</p>\n",
            "name": "contentWidth"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "preciseWidth"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-getWidth",
        "return": {
          "type": "Number",
          "doc": "<p>The element's width</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Returns the offset width of the element ...",
        "static": false,
        "name": "getWidth",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns the offset width of the element</p>\n",
        "linenr": 473,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.position.html#Ext-core-Element-method-getX",
        "return": {
          "type": "Number",
          "doc": "<p>The X position of the element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Gets the current X position of the element based on page coordinates. ...",
        "static": false,
        "name": "getX",
        "owner": "Ext.core.Element",
        "doc": "<p>Gets the current X position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "linenr": 18,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.position.html#Ext-core-Element-method-getXY",
        "return": {
          "type": "Array",
          "doc": "<p>The XY position of the element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Gets the current position of the element based on page coordinates. ...",
        "static": false,
        "name": "getXY",
        "owner": "Ext.core.Element",
        "doc": "<p>Gets the current position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "linenr": 34,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.position.html#Ext-core-Element-method-getY",
        "return": {
          "type": "Number",
          "doc": "<p>The Y position of the element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Gets the current Y position of the element based on page coordinates. ...",
        "static": false,
        "name": "getY",
        "owner": "Ext.core.Element",
        "doc": "<p>Gets the current Y position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "linenr": 26,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) One of the valid Fx anchor positions (defaults to bottom: 'b')</p>\n",
            "name": "anchor"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
            "name": "options"
          }
        ],
        "href": "Element.anim.html#Ext-core-Element-method-ghost",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The Element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "shortDoc": "Slides the element while fading it out of view. ...",
        "static": false,
        "name": "ghost",
        "owner": "Ext.core.Element",
        "doc": "<p>Slides the element while fading it out of view.  An anchor point can be optionally passed to set the\nending point of the effect.\nUsage:</p>\n\n<pre><code>// default: slide the element downward while fading out\nel.ghost();\n\n// custom: slide the element out to the right with a 2-second duration\nel.ghost('r', { duration: 2 });\n\n// common config options shown with default values\nel.ghost('b', {\n    easing: 'easeOut',\n    duration: 500\n});\n</code></pre>\n\n",
        "linenr": 590,
        "html_filename": "Element.anim.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The CSS class to check for</p>\n",
            "name": "className"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-hasCls",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the class exists, else false</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Checks if the specified CSS class exists on this element's DOM node. ...",
        "static": false,
        "name": "hasCls",
        "owner": "Ext.core.Element",
        "doc": "<p>Checks if the specified CSS class exists on this element's DOM node.</p>\n",
        "linenr": 168,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean/Object",
            "optional": true,
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "name": "animate"
          }
        ],
        "href": "Element.fx.html#Ext-core-Element-method-hide",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx.js",
        "private": false,
        "shortDoc": "Hide this element - Uses display mode to determine whether to use \"display\" or \"visibility\". ...",
        "static": false,
        "name": "hide",
        "owner": "Ext.core.Element",
        "doc": "<p>Hide this element - Uses display mode to determine whether to use \"display\" or \"visibility\". See <a href=\"#/api/Ext.core.Element-method-setVisible\" rel=\"Ext.core.Element-method-setVisible\" class=\"docClass\">setVisible</a>.</p>\n",
        "linenr": 245,
        "html_filename": "Element.fx.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) The highlight color. Should be a 6 char hex color without the leading # (defaults to yellow: 'ffff9c')</p>\n",
            "name": "color"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
            "name": "options"
          }
        ],
        "href": "Element.anim.html#Ext-core-Element-method-highlight",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The Element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "shortDoc": "Highlights the Element by setting a color (applies to the background-color by default, but can be\nchanged using the \"...",
        "static": false,
        "name": "highlight",
        "owner": "Ext.core.Element",
        "doc": "<p>Highlights the Element by setting a color (applies to the background-color by default, but can be\nchanged using the \"attr\" config option) and then fading back to the original color. If no original\ncolor is available, you should provide the \"endColor\" config option which will be cleared after the animation.\nUsage:</p>\n\n<pre><code>// default: highlight background to yellow\nel.highlight();\n\n// custom: highlight foreground text to blue for 2 seconds\nel.highlight(\"0000ff\", { attr: 'color', duration: 2 });\n\n// common config options shown with default values\nel.highlight(\"ffff9c\", {\n    attr: \"backgroundColor\", //can be any valid CSS property (attribute) that supports a color value\n    endColor: (current color) or \"ffffff\",\n    easing: 'easeIn',\n    duration: 1000\n});\n</code></pre>\n\n",
        "linenr": 676,
        "html_filename": "Element.anim.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call when the mouse enters the Element.</p>\n",
            "name": "overFn"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call when the mouse leaves the Element.</p>\n",
            "name": "outFn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the functions are executed. Defaults to the Element's DOM element.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Options for the listener. See <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">the &lt;tt&gt;options&lt;/tt&gt; parameter</a>.</p>\n",
            "name": "options"
          }
        ],
        "href": "Element2.html#Ext-core-Element-method-hover",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Sets up event handlers to call the passed functions when the mouse is moved into and out of the Element. ...",
        "static": false,
        "name": "hover",
        "owner": "Ext.core.Element",
        "doc": "<p>Sets up event handlers to call the passed functions when the mouse is moved into and out of the Element.</p>\n",
        "linenr": 649,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The group the DD object is member of</p>\n",
            "name": "group"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The DD config object</p>\n",
            "name": "config"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing methods to override/implement on the DD object</p>\n",
            "name": "overrides"
          }
        ],
        "href": "Element.dd.html#Ext-core-Element-method-initDD",
        "return": {
          "type": "Ext.dd.DD",
          "doc": "<p>The DD object</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.dd.js",
        "private": false,
        "shortDoc": "Initializes a Ext.dd.DD drag drop object for this element. ...",
        "static": false,
        "name": "initDD",
        "owner": "Ext.core.Element",
        "doc": "<p>Initializes a <a href=\"#/api/Ext.dd.DD\" rel=\"Ext.dd.DD\" class=\"docClass\">Ext.dd.DD</a> drag drop object for this element.</p>\n",
        "linenr": 5,
        "html_filename": "Element.dd.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The group the DDProxy object is member of</p>\n",
            "name": "group"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The DDProxy config object</p>\n",
            "name": "config"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing methods to override/implement on the DDProxy object</p>\n",
            "name": "overrides"
          }
        ],
        "href": "Element.dd.html#Ext-core-Element-method-initDDProxy",
        "return": {
          "type": "Ext.dd.DDProxy",
          "doc": "<p>The DDProxy object</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.dd.js",
        "private": false,
        "shortDoc": "Initializes a Ext.dd.DDProxy object for this element. ...",
        "static": false,
        "name": "initDDProxy",
        "owner": "Ext.core.Element",
        "doc": "<p>Initializes a <a href=\"#/api/Ext.dd.DDProxy\" rel=\"Ext.dd.DDProxy\" class=\"docClass\">Ext.dd.DDProxy</a> object for this element.</p>\n",
        "linenr": 17,
        "html_filename": "Element.dd.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The group the DDTarget object is member of</p>\n",
            "name": "group"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The DDTarget config object</p>\n",
            "name": "config"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing methods to override/implement on the DDTarget object</p>\n",
            "name": "overrides"
          }
        ],
        "href": "Element.dd.html#Ext-core-Element-method-initDDTarget",
        "return": {
          "type": "Ext.dd.DDTarget",
          "doc": "<p>The DDTarget object</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.dd.js",
        "private": false,
        "shortDoc": "Initializes a Ext.dd.DDTarget object for this element. ...",
        "static": false,
        "name": "initDDTarget",
        "owner": "Ext.core.Element",
        "doc": "<p>Initializes a <a href=\"#/api/Ext.dd.DDTarget\" rel=\"Ext.dd.DDTarget\" class=\"docClass\">Ext.dd.DDTarget</a> object for this element.</p>\n",
        "linenr": 29,
        "html_filename": "Element.dd.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The element to insert after</p>\n",
            "name": "el"
          }
        ],
        "href": "Element.insertion.html#Ext-core-Element-method-insertAfter",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.insertion.js",
        "private": false,
        "shortDoc": "Inserts this element after the passed element in the DOM ...",
        "static": false,
        "name": "insertAfter",
        "owner": "Ext.core.Element",
        "doc": "<p>Inserts this element after the passed element in the DOM</p>\n",
        "linenr": 35,
        "html_filename": "Element.insertion.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The element before which this element will be inserted</p>\n",
            "name": "el"
          }
        ],
        "href": "Element.insertion.html#Ext-core-Element-method-insertBefore",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.insertion.js",
        "private": false,
        "shortDoc": "Inserts this element before the passed element in the DOM ...",
        "static": false,
        "name": "insertBefore",
        "owner": "Ext.core.Element",
        "doc": "<p>Inserts this element before the passed element in the DOM</p>\n",
        "linenr": 24,
        "html_filename": "Element.insertion.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed/Object",
            "optional": false,
            "doc": "<p>The id or element to insert or a DomHelper config to create and insert</p>\n",
            "name": "el"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "returnDom"
          }
        ],
        "href": "Element.insertion.html#Ext-core-Element-method-insertFirst",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The new child</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.insertion.js",
        "private": false,
        "shortDoc": "Inserts (or creates) an element (or DomHelper config) as the first child of this element ...",
        "static": false,
        "name": "insertFirst",
        "owner": "Ext.core.Element",
        "doc": "<p>Inserts (or creates) an element (or DomHelper config) as the first child of this element</p>\n",
        "linenr": 46,
        "html_filename": "Element.insertion.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Where to insert the html in relation to this element - beforeBegin, afterBegin, beforeEnd, afterEnd.</p>\n",
            "name": "where"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The HTML fragment</p>\n",
            "name": "html"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to return an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> (defaults to false)</p>\n",
            "name": "returnEl"
          }
        ],
        "href": "Element.insertion.html#Ext-core-Element-method-insertHtml",
        "return": {
          "type": "HTMLElement/Ext.core.Element",
          "doc": "<p>The inserted node (or nearest related if more than 1 inserted)</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.insertion.js",
        "private": false,
        "shortDoc": "Inserts an html fragment into this element ...",
        "static": false,
        "name": "insertHtml",
        "owner": "Ext.core.Element",
        "doc": "<p>Inserts an html fragment into this element</p>\n",
        "linenr": 169,
        "html_filename": "Element.insertion.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed/Object/Array",
            "optional": false,
            "doc": "<p>The id, element to insert or a DomHelper config to create and insert <em>or</em> an array of any of those.</p>\n",
            "name": "el"
          },
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) 'before' or 'after' defaults to before</p>\n",
            "name": "where"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to return the .;ll;l,raw DOM element instead of Ext.core.Element</p>\n",
            "name": "returnDom"
          }
        ],
        "href": "Element.insertion.html#Ext-core-Element-method-insertSibling",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The inserted Element. If an array is passed, the last inserted element is returned.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.insertion.js",
        "private": false,
        "shortDoc": "Inserts (or creates) the passed element (or DomHelper config) as a sibling of this element ...",
        "static": false,
        "name": "insertSibling",
        "owner": "Ext.core.Element",
        "doc": "<p>Inserts (or creates) the passed element (or DomHelper config) as a sibling of this element</p>\n",
        "linenr": 63,
        "html_filename": "Element.insertion.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The simple selector to test</p>\n",
            "name": "selector"
          }
        ],
        "href": "Element2.html#Ext-core-Element-method-is",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this element matches the selector, else false</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Returns true if this element matches the passed simple selector (e.g. ...",
        "static": false,
        "name": "is",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns true if this element matches the passed simple selector (e.g. div.some-class or span:first-child)</p>\n",
        "linenr": 400,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element2.html#Ext-core-Element-method-isBorderBox",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Tests various css rules/browsers to determine if this element uses a border box ...",
        "static": false,
        "name": "isBorderBox",
        "owner": "Ext.core.Element",
        "doc": "<p>Tests various css rules/browsers to determine if this element uses a border box</p>\n",
        "linenr": 628,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.fx-more.html#Ext-core-Element-method-isDisplayed",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx-more.js",
        "private": false,
        "shortDoc": "Returns true if display is not \"none\" ...",
        "static": false,
        "name": "isDisplayed",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns true if display is not \"none\"</p>\n",
        "linenr": 37,
        "html_filename": "Element.fx-more.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.fx-more.html#Ext-core-Element-method-isMasked",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx-more.js",
        "private": false,
        "shortDoc": "Returns true if this element is masked. ...",
        "static": false,
        "name": "isMasked",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns true if this element is masked. Also re-centers any displayed message within the mask.</p>\n",
        "linenr": 148,
        "html_filename": "Element.fx-more.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.scroll.html#Ext-core-Element-method-isScrollable",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.scroll.js",
        "private": false,
        "shortDoc": "Returns true if this element is scrollable. ...",
        "static": false,
        "name": "isScrollable",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns true if this element is scrollable.</p>\n",
        "linenr": 5,
        "html_filename": "Element.scroll.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to walk the dom and see if parent elements are hidden (defaults to false)</p>\n",
            "name": "deep"
          }
        ],
        "href": "Element.fx-more.html#Ext-core-Element-method-isVisible",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the element is currently visible, else false</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx-more.js",
        "private": false,
        "shortDoc": "Checks whether the element is currently visible using both visibility and display properties. ...",
        "static": false,
        "name": "isVisible",
        "owner": "Ext.core.Element",
        "doc": "<p>Checks whether the element is currently visible using both visibility and display properties.</p>\n",
        "linenr": 15,
        "html_filename": "Element.fx-more.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) Find the previous sibling that matches the passed simple selector</p>\n",
            "name": "selector"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to return a raw dom node instead of an Ext.core.Element</p>\n",
            "name": "returnDom"
          }
        ],
        "href": "Element.traversal.html#Ext-core-Element-method-last",
        "return": {
          "type": "Ext.core.Element/HTMLElement",
          "doc": "<p>The last child or null</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
        "private": false,
        "shortDoc": "Gets the last child, skipping text nodes ...",
        "static": false,
        "name": "last",
        "owner": "Ext.core.Element",
        "doc": "<p>Gets the last child, skipping text nodes</p>\n",
        "linenr": 145,
        "html_filename": "Element.traversal.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "options"
          }
        ],
        "href": "Element-more.html#Ext-core-Element-method-load",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element-more.js",
        "private": false,
        "shortDoc": "Direct access to the Ext.ElementLoader Ext.ElementLoader.load method. ...",
        "static": false,
        "name": "load",
        "owner": "Ext.core.Element",
        "doc": "<p>Direct access to the <a href=\"#/api/Ext.ElementLoader\" rel=\"Ext.ElementLoader\" class=\"docClass\">Ext.ElementLoader</a> <a href=\"#/api/Ext.ElementLoader-method-load\" rel=\"Ext.ElementLoader-method-load\" class=\"docClass\">Ext.ElementLoader.load</a> method. The method takes the same object\nparameter as <a href=\"#/api/Ext.ElementLoader-method-load\" rel=\"Ext.ElementLoader-method-load\" class=\"docClass\">Ext.ElementLoader.load</a></p>\n",
        "linenr": 121,
        "html_filename": "Element-more.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) A message to display in the mask</p>\n",
            "name": "msg"
          },
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) A css class to apply to the msg element</p>\n",
            "name": "msgCls"
          }
        ],
        "href": "Element.fx-more.html#Ext-core-Element-method-mask",
        "return": {
          "type": "Element",
          "doc": "<p>The mask element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx-more.js",
        "private": false,
        "shortDoc": "Puts a mask over this element to disable user interaction. ...",
        "static": false,
        "name": "mask",
        "owner": "Ext.core.Element",
        "doc": "<p>Puts a mask over this element to disable user interaction. Requires core.css.\nThis method can only be applied to elements which accept child nodes.</p>\n",
        "linenr": 60,
        "html_filename": "Element.fx-more.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The delay <b>in milliseconds</b> to wait for possible mouse re-entry before calling the handler function.</p>\n",
            "name": "delay"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call if the mouse remains outside of this Element for the specified time.</p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The scope (<code>this</code> reference) in which the handler function executes. Defaults to this Element.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Element-more.html#Ext-core-Element-method-monitorMouseLeave",
        "return": {
          "type": "Object",
          "doc": "<p>The listeners object which was added to this element so that monitoring can be stopped. Example usage:</pre><code>\n// Hide the menu if the mouse moves out for 250ms or more\nthis.mouseLeaveMonitor = this.menuEl.monitorMouseLeave(250, this.hideMenu, this);</p>\n\n<p>...\n// Remove mouseleave monitor on menu destroy\nthis.menuEl.un(this.mouseLeaveMonitor);\n</code></pre></p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element-more.js",
        "private": false,
        "shortDoc": "Monitors this Element for the mouse leaving. ...",
        "static": false,
        "name": "monitorMouseLeave",
        "owner": "Ext.core.Element",
        "doc": "<p>Monitors this Element for the mouse leaving. Calls the function after the specified delay only if\nthe mouse was not moved back into the Element within the delay. If the mouse <i>was</i> moved\nback in, the function is not called.</p>\n",
        "linenr": 7,
        "html_filename": "Element-more.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Possible values are: \"l\" (or \"left\"), \"r\" (or \"right\"), \"t\" (or \"top\", or \"up\"), \"b\" (or \"bottom\", or \"down\").</p>\n",
            "name": "direction"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>How far to move the element in pixels</p>\n",
            "name": "distance"
          },
          {
            "type": "Boolean/Object",
            "optional": true,
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "name": "animate"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-move",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Move this element relative to its current position. ...",
        "static": false,
        "name": "move",
        "owner": "Ext.core.Element",
        "doc": "<p>Move this element relative to its current position.</p>\n",
        "linenr": 390,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>X value for new position (coordinates are page-based)</p>\n",
            "name": "x"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Y value for new position (coordinates are page-based)</p>\n",
            "name": "y"
          },
          {
            "type": "Boolean/Object",
            "optional": true,
            "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n",
            "name": "animate"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-moveTo",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Sets the position of the element in page coordinates, regardless of how the element is positioned. ...",
        "static": false,
        "name": "moveTo",
        "owner": "Ext.core.Element",
        "doc": "<p>Sets the position of the element in page coordinates, regardless of how the element is positioned.\nThe element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "linenr": 146,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) Find the next sibling that matches the passed simple selector</p>\n",
            "name": "selector"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to return a raw dom node instead of an Ext.core.Element</p>\n",
            "name": "returnDom"
          }
        ],
        "href": "Element.traversal.html#Ext-core-Element-method-next",
        "return": {
          "type": "Ext.core.Element/HTMLElement",
          "doc": "<p>The next sibling or null</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
        "private": false,
        "shortDoc": "Gets the next sibling, skipping text nodes ...",
        "static": false,
        "name": "next",
        "owner": "Ext.core.Element",
        "doc": "<p>Gets the next sibling, skipping text nodes</p>\n",
        "linenr": 114,
        "html_filename": "Element.traversal.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of event to handle.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler function the event invokes.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing standard <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> options</p>\n",
            "name": "options"
          }
        ],
        "href": "Element2.html#Ext-core-Element-method-on",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Appends an event handler (shorthand for addListener). ...",
        "static": false,
        "name": "on",
        "owner": "Ext.core.Element",
        "doc": "<p>Appends an event handler (shorthand for <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a>).</p>\n",
        "linenr": 733,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) Find a parent node that matches the passed simple selector</p>\n",
            "name": "selector"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to return a raw dom node instead of an Ext.core.Element</p>\n",
            "name": "returnDom"
          }
        ],
        "href": "Element.traversal.html#Ext-core-Element-method-parent",
        "return": {
          "type": "Ext.core.Element/HTMLElement",
          "doc": "<p>The parent node or null</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
        "private": false,
        "shortDoc": "Gets the parent node for this element, optionally chaining up trying to match a selector ...",
        "static": false,
        "name": "parent",
        "owner": "Ext.core.Element",
        "doc": "<p>Gets the parent node for this element, optionally chaining up trying to match a selector</p>\n",
        "linenr": 104,
        "html_filename": "Element.traversal.html"
      },
      {
        "inheritable": false,
        "deprecated": {
          "version": "4.0",
          "text": "\n",
          "tagname": "deprecated",
          "doc": "Creates a pause before any subsequent queued effects begin.  If there are\nno effects queued after the pause it will have no effect.\nUsage:\n<pre><code>\nel.pause(1);\n</code></pre>"
        },
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The length of time to pause (in seconds)</p>\n",
            "name": "seconds"
          }
        ],
        "href": "Element.anim.html#Ext-core-Element-method-pause",
        "return": {
          "type": "Ext.Element",
          "doc": "<p>The Element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "shortDoc": "Creates a pause before any subsequent queued effects begin. ...",
        "static": false,
        "name": "pause",
        "owner": "Ext.core.Element",
        "doc": "<p>Creates a pause before any subsequent queued effects begin.  If there are\nno effects queued after the pause it will have no effect.\nUsage:</p>\n\n<pre><code>el.pause(1);\n</code></pre>\n\n",
        "linenr": 754,
        "html_filename": "Element.anim.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) Positioning to use \"relative\", \"absolute\" or \"fixed\"</p>\n",
            "name": "pos"
          },
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) The zIndex to apply</p>\n",
            "name": "zIndex"
          },
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) Set the page X position</p>\n",
            "name": "x"
          },
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) Set the page Y position</p>\n",
            "name": "y"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-position",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Initializes positioning on this element. ...",
        "static": false,
        "name": "position",
        "owner": "Ext.core.Element",
        "doc": "<p>Initializes positioning on this element. If a desired position is not passed, it will make the\nthe element positioned relative IF it is not already positioned.</p>\n",
        "linenr": 196,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) Find the previous sibling that matches the passed simple selector</p>\n",
            "name": "selector"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to return a raw dom node instead of an Ext.core.Element</p>\n",
            "name": "returnDom"
          }
        ],
        "href": "Element.traversal.html#Ext-core-Element-method-prev",
        "return": {
          "type": "Ext.core.Element/HTMLElement",
          "doc": "<p>The previous sibling or null</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
        "private": false,
        "shortDoc": "Gets the previous sibling, skipping text nodes ...",
        "static": false,
        "name": "prev",
        "owner": "Ext.core.Element",
        "doc": "<p>Gets the previous sibling, skipping text nodes</p>\n",
        "linenr": 124,
        "html_filename": "Element.traversal.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
            "name": "options"
          }
        ],
        "href": "Element.anim.html#Ext-core-Element-method-puff",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The Element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "shortDoc": "Fades the element out while slowly expanding it in all directions. ...",
        "static": false,
        "name": "puff",
        "owner": "Ext.core.Element",
        "doc": "<p>Fades the element out while slowly expanding it in all directions.  When the effect is completed, the\nelement will be hidden (visibility = 'hidden') but block elements will still take up space in the document.\nUsage:</p>\n\n<pre><code>// default\nel.puff();\n\n// common config options shown with default values\nel.puff({\n    easing: 'easeOut',\n    duration: 500,\n    useDisplay: false\n});\n</code></pre>\n\n",
        "linenr": 360,
        "html_filename": "Element.anim.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element2.html#Ext-core-Element-method-purgeAllListeners",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Recursively removes all previous added listeners from this element and its children ...",
        "static": false,
        "name": "purgeAllListeners",
        "owner": "Ext.core.Element",
        "doc": "<p>Recursively removes all previous added listeners from this element and its children</p>\n",
        "linenr": 590,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The CSS selector</p>\n",
            "name": "selector"
          }
        ],
        "href": "Element.traversal.html#Ext-core-Element-method-query",
        "return": {
          "type": "Array",
          "doc": "<p>An array of the matched nodes</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
        "private": false,
        "shortDoc": "Selects child nodes based on the passed CSS selector (the selector should not contain an id). ...",
        "static": false,
        "name": "query",
        "owner": "Ext.core.Element",
        "doc": "<p>Selects child nodes based on the passed CSS selector (the selector should not contain an id).</p>\n",
        "linenr": 67,
        "html_filename": "Element.traversal.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>The CSS class to add, or an array of classes</p>\n",
            "name": "className"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-radioCls",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Adds one or more CSS classes to this element and removes the same class(es) from all siblings. ...",
        "static": false,
        "name": "radioCls",
        "owner": "Ext.core.Element",
        "doc": "<p>Adds one or more CSS classes to this element and removes the same class(es) from all siblings.</p>\n",
        "linenr": 135,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type of event to relay</p>\n",
            "name": "eventName"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Any object that extends <a href=\"#/api/Ext.util.Observable\" rel=\"Ext.util.Observable\" class=\"docClass\">Ext.util.Observable</a> that will provide the context\nfor firing the relayed event</p>\n",
            "name": "object"
          }
        ],
        "href": "Element-more.html#Ext-core-Element-method-relayEvent",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element-more.js",
        "private": false,
        "shortDoc": "Create an event handler on this element such that when the event fires and is handled by this element,\nit will be rel...",
        "static": false,
        "name": "relayEvent",
        "owner": "Ext.core.Element",
        "doc": "<p>Create an event handler on this element such that when the event fires and is handled by this element,\nit will be relayed to another object (i.e., fired again as if it originated from that object instead).</p>\n",
        "linenr": 65,
        "html_filename": "Element-more.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element2.html#Ext-core-Element-method-remove",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Removes this element's dom reference. ...",
        "static": false,
        "name": "remove",
        "owner": "Ext.core.Element",
        "doc": "<p>Removes this element's dom reference.  Note that event and cache removal is handled at <a href=\"#/api/Ext-method-removeNode\" rel=\"Ext-method-removeNode\" class=\"docClass\">Ext.removeNode</a></p>\n\n",
        "linenr": 636,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element2.html#Ext-core-Element-method-removeAllListeners",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Removes all previous added listeners from this element ...",
        "static": false,
        "name": "removeAllListeners",
        "owner": "Ext.core.Element",
        "doc": "<p>Removes all previous added listeners from this element</p>\n",
        "linenr": 581,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.alignment.html#Ext-core-Element-method-removeAnchor",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.alignment.js",
        "private": false,
        "shortDoc": "Remove any anchor to this element. ...",
        "static": false,
        "name": "removeAnchor",
        "owner": "Ext.core.Element",
        "doc": "<p>Remove any anchor to this element. See <a href=\"#/api/Ext.core.Element-method-anchorTo\" rel=\"Ext.core.Element-method-anchorTo\" class=\"docClass\">anchorTo</a>.</p>\n",
        "linenr": 85,
        "html_filename": "Element.alignment.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>The CSS classes to remove separated by space, or an array of classes</p>\n",
            "name": "className"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-removeCls",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Removes one or more CSS classes from the element. ...",
        "static": false,
        "name": "removeCls",
        "owner": "Ext.core.Element",
        "doc": "<p>Removes one or more CSS classes from the element.</p>\n",
        "linenr": 104,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event from which to remove the handler.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler function to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>If a scope (<b><code>this</code></b> reference) was specified when the listener was added,\nthen this must refer to the same object.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Element2.html#Ext-core-Element-method-removeListener",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Removes an event handler from this element. ...",
        "static": false,
        "name": "removeListener",
        "owner": "Ext.core.Element",
        "doc": "<p>Removes an event handler from this element.  The shorthand version <a href=\"#/api/Ext.core.Element-method-un\" rel=\"Ext.core.Element-method-un\" class=\"docClass\">un</a> is equivalent.\n<b>Note</b>: if a <i>scope</i> was explicitly specified when <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">adding</a> the\nlistener, the same scope must be specified here.\nExample:</p>\n\n<pre><code>el.removeListener('click', this.handlerFn);\n// or\nel.un('click', this.handlerFn);\n</code></pre>\n\n",
        "linenr": 560,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.style.html#Ext-core-Element-method-repaint",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Forces the browser to repaint this element ...",
        "static": false,
        "name": "repaint",
        "owner": "Ext.core.Element",
        "doc": "<p>Forces the browser to repaint this element</p>\n",
        "linenr": 1009,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The element to replace</p>\n",
            "name": "el"
          }
        ],
        "href": "Element.insertion.html#Ext-core-Element-method-replace",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.insertion.js",
        "private": false,
        "shortDoc": "Replaces the passed element with this element ...",
        "static": false,
        "name": "replace",
        "owner": "Ext.core.Element",
        "doc": "<p>Replaces the passed element with this element</p>\n",
        "linenr": 103,
        "html_filename": "Element.insertion.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The CSS class to replace</p>\n",
            "name": "oldClassName"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The replacement CSS class</p>\n",
            "name": "newClassName"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-replaceCls",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Replaces a CSS class on the element with another. ...",
        "static": false,
        "name": "replaceCls",
        "owner": "Ext.core.Element",
        "doc": "<p>Replaces a CSS class on the element with another.  If the old name does not exist, the new name will simply be added.</p>\n",
        "linenr": 193,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed/Object",
            "optional": false,
            "doc": "<p>The new element or a DomHelper config of an element to create</p>\n",
            "name": "el"
          }
        ],
        "href": "Element.insertion.html#Ext-core-Element-method-replaceWith",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.insertion.js",
        "private": false,
        "shortDoc": "Replaces this element with the passed element ...",
        "static": false,
        "name": "replaceWith",
        "owner": "Ext.core.Element",
        "doc": "<p>Replaces this element with the passed element</p>\n",
        "linenr": 115,
        "html_filename": "Element.insertion.html"
      },
      {
        "inheritable": false,
        "deprecated": {
          "version": "4.0",
          "text": "\n",
          "tagname": "deprecated",
          "doc": "Animates the transition of an element's dimensions from a starting height/width\nto an ending height/width.  This method is a convenience implementation of {@link #shift}.\nUsage:\n<pre><code>\n// change height and width to 100x100 pixels\nel.scale(100, 100);\n\n// common config options shown with default values.  The height and width will default to\n// the element&#39;s existing values if passed as null.\nel.scale(\n    [element&#39;s width],\n    [element&#39;s height], {\n        easing: 'easeOut',\n        duration: .35\n    }\n);\n</code></pre>"
        },
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new width (pass undefined to keep the original width)</p>\n",
            "name": "width"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new height (pass undefined to keep the original height)</p>\n",
            "name": "height"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
            "name": "options"
          }
        ],
        "href": "Element.anim.html#Ext-core-Element-method-scale",
        "return": {
          "type": "Ext.Element",
          "doc": "<p>The Element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "shortDoc": "Animates the transition of an element's dimensions from a starting height/width\nto an ending height/width. ...",
        "static": false,
        "name": "scale",
        "owner": "Ext.core.Element",
        "doc": "<p>Animates the transition of an element's dimensions from a starting height/width\nto an ending height/width.  This method is a convenience implementation of <a href=\"#/api/Ext.core.Element-method-shift\" rel=\"Ext.core.Element-method-shift\" class=\"docClass\">shift</a>.\nUsage:</p>\n\n<pre><code>// change height and width to 100x100 pixels\nel.scale(100, 100);\n\n// common config options shown with default values.  The height and width will default to\n// the element&#39;s existing values if passed as null.\nel.scale(\n    [element&#39;s width],\n    [element&#39;s height], {\n        easing: 'easeOut',\n        duration: .35\n    }\n);\n</code></pre>\n\n",
        "linenr": 832,
        "html_filename": "Element.anim.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Possible values are: \"l\" (or \"left\"), \"r\" (or \"right\"), \"t\" (or \"top\", or \"up\"), \"b\" (or \"bottom\", or \"down\").</p>\n",
            "name": "direction"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>How far to scroll the element in pixels</p>\n",
            "name": "distance"
          },
          {
            "type": "Boolean/Object",
            "optional": true,
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "name": "animate"
          }
        ],
        "href": "Element.scroll.html#Ext-core-Element-method-scroll",
        "return": {
          "type": "Boolean",
          "doc": "<p>Returns true if a scroll was triggered or false if the element\nwas scrolled as far as it could go.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.scroll.js",
        "private": false,
        "shortDoc": "Scrolls this element the specified direction. ...",
        "static": false,
        "name": "scroll",
        "owner": "Ext.core.Element",
        "doc": "<p>Scrolls this element the specified direction. Does bounds checking to make sure the scroll is\nwithin this element's scrollable range.</p>\n",
        "linenr": 128,
        "html_filename": "Element.scroll.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": true,
            "doc": "<p>(optional) The container element to scroll (defaults to document.body).  Should be a\nstring (id), dom node, or Ext.core.Element.</p>\n",
            "name": "container"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) False to disable horizontal scroll (defaults to true)</p>\n",
            "name": "hscroll"
          }
        ],
        "href": "Element.scroll.html#Ext-core-Element-method-scrollIntoView",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.scroll.js",
        "private": false,
        "shortDoc": "Scrolls this element into view within the passed container. ...",
        "static": false,
        "name": "scrollIntoView",
        "owner": "Ext.core.Element",
        "doc": "<p>Scrolls this element into view within the passed container.</p>\n",
        "linenr": 80,
        "html_filename": "Element.scroll.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Either \"left\" for scrollLeft values or \"top\" for scrollTop values.</p>\n",
            "name": "side"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new scroll value</p>\n",
            "name": "value"
          },
          {
            "type": "Boolean/Object",
            "optional": true,
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "name": "animate"
          }
        ],
        "href": "Element.scroll.html#Ext-core-Element-method-scrollTo",
        "return": {
          "type": "Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.scroll.js",
        "private": false,
        "shortDoc": "Scrolls this element the specified scroll point. ...",
        "static": false,
        "name": "scrollTo",
        "owner": "Ext.core.Element",
        "doc": "<p>Scrolls this element the specified scroll point. It does NOT do bounds checking so if you scroll to a weird value it will try to do it. For auto bounds checking, use scroll().</p>\n",
        "linenr": 49,
        "html_filename": "Element.scroll.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>The CSS selector or an array of elements</p>\n",
            "name": "selector"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to create a unique <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> for each element (defaults to a shared flyweight object)</p>\n",
            "name": "unique"
          },
          {
            "type": "HTMLElement/String",
            "optional": true,
            "doc": "<p>(optional) The root element of the query or id of the root</p>\n",
            "name": "root"
          }
        ],
        "href": "CompositeElement2.html#Ext-core-Element-method-select",
        "return": {
          "type": "CompositeElementLite/CompositeElement",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/CompositeElement.js",
        "private": false,
        "shortDoc": "Selects elements based on the passed CSS selector to enable Element methods\nto be applied to many related elements in...",
        "static": false,
        "name": "select",
        "owner": "Ext.core.Element",
        "doc": "<p>Selects elements based on the passed CSS selector to enable <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Element</a> methods\nto be applied to many related elements in one statement through the returned <a href=\"#/api/Ext.CompositeElement\" rel=\"Ext.CompositeElement\" class=\"docClass\">CompositeElement</a> or\n<a href=\"#/api/Ext.CompositeElementLite\" rel=\"Ext.CompositeElementLite\" class=\"docClass\">CompositeElementLite</a> object.</p>\n",
        "linenr": 77,
        "html_filename": "CompositeElement2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The form</p>\n",
            "name": "form"
          }
        ],
        "href": "Element.static-more.html#Ext-core-Element-method-serializeForm",
        "return": {
          "type": "String",
          "doc": "<p>The url encoded form</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.static-more.js",
        "private": false,
        "shortDoc": "Serializes a DOM form into a url encoded string ...",
        "static": false,
        "name": "serializeForm",
        "owner": "Ext.core.Element",
        "doc": "<p>Serializes a DOM form into a url encoded string</p>\n",
        "linenr": 239,
        "html_filename": "Element.static-more.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The object with the attributes</p>\n",
            "name": "o"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) false to override the default setAttribute to use expandos.</p>\n",
            "name": "useSet"
          }
        ],
        "href": "Element2.html#Ext-core-Element-method-set",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Sets the passed attributes as attributes of this element (a style attribute can be a string, object or function) ...",
        "static": false,
        "name": "set",
        "owner": "Ext.core.Element",
        "doc": "<p>Sets the passed attributes as attributes of this element (a style attribute can be a string, object or function)</p>\n",
        "linenr": 107,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The bottom CSS property value</p>\n",
            "name": "bottom"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-setBottom",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Sets the element's CSS bottom style. ...",
        "static": false,
        "name": "setBottom",
        "owner": "Ext.core.Element",
        "doc": "<p>Sets the element's CSS bottom style.</p>\n",
        "linenr": 103,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>X value for new position (coordinates are page-based)</p>\n",
            "name": "x"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Y value for new position (coordinates are page-based)</p>\n",
            "name": "y"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The new width. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in this Element's <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels)</li>\n<li>A String used to set the CSS width style. Animation may <b>not</b> be used.\n</ul></div></p>\n",
            "name": "width"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The new height. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in this Element's <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels)</li>\n<li>A String used to set the CSS height style. Animation may <b>not</b> be used.</li>\n</ul></div></p>\n",
            "name": "height"
          },
          {
            "type": "Boolean/Object",
            "optional": true,
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "name": "animate"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-setBounds",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Sets the element's position and size in one shot. ...",
        "static": false,
        "name": "setBounds",
        "owner": "Ext.core.Element",
        "doc": "<p>Sets the element's position and size in one shot. If animation is true then width, height, x and y will be animated concurrently.</p>\n",
        "linenr": 518,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The box to fill {x, y, width, height}</p>\n",
            "name": "box"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) Whether to adjust for box-model issues automatically</p>\n",
            "name": "adjust"
          },
          {
            "type": "Boolean/Object",
            "optional": true,
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "name": "animate"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-setBox",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Sets the element's box. ...",
        "static": false,
        "name": "setBox",
        "owner": "Ext.core.Element",
        "doc": "<p>Sets the element's box. Use getBox() on another element to get a box obj. If animate is true then width, height, x and y will be animated concurrently.</p>\n",
        "linenr": 308,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>Boolean value to display the element using its default display, or a string to set the display directly.</p>\n",
            "name": "value"
          }
        ],
        "href": "Element.fx.html#Ext-core-Element-method-setDisplayed",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx.js",
        "private": false,
        "shortDoc": "Sets the CSS display property. ...",
        "static": false,
        "name": "setDisplayed",
        "owner": "Ext.core.Element",
        "doc": "<p>Sets the CSS display property. Uses originalDisplay if the specified value is a boolean true.</p>\n",
        "linenr": 220,
        "html_filename": "Element.fx.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The new height. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in this Element's <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels.)</li>\n<li>A String used to set the CSS height style. Animation may <b>not</b> be used.</li>\n</ul></div></p>\n",
            "name": "height"
          },
          {
            "type": "Boolean/Object",
            "optional": true,
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "name": "animate"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-setHeight",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Set the height of this Element. ...",
        "static": false,
        "name": "setHeight",
        "owner": "Ext.core.Element",
        "doc": "<p>Set the height of this Element.</p>\n\n<pre><code>// change the height to 200px and animate with default configuration\nExt.fly('elementId').setHeight(200, true);\n\n// change the height to 150px and animate with a custom configuration\nExt.fly('elId').setHeight(150, {\n    duration : .5, // animation will have a duration of .5 seconds\n    // will change the content to \"finished\"\n    callback: function(){ this.<a href=\"#/api/Ext.core.Element-method-update\" rel=\"Ext.core.Element-method-update\" class=\"docClass\">update</a>(\"finished\"); }\n});\n</code></pre>\n\n",
        "linenr": 570,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The left CSS property value</p>\n",
            "name": "left"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-setLeft",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Sets the element's left position directly using CSS style (instead of setX). ...",
        "static": false,
        "name": "setLeft",
        "owner": "Ext.core.Element",
        "doc": "<p>Sets the element's left position directly using CSS style (instead of <a href=\"#/api/Ext.core.Element-method-setX\" rel=\"Ext.core.Element-method-setX\" class=\"docClass\">setX</a>).</p>\n",
        "linenr": 73,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The left CSS property value</p>\n",
            "name": "left"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The top CSS property value</p>\n",
            "name": "top"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-setLeftTop",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Quick set left and top adding default units ...",
        "static": false,
        "name": "setLeftTop",
        "owner": "Ext.core.Element",
        "doc": "<p>Quick set left and top adding default units</p>\n",
        "linenr": 423,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>X value for new position (coordinates are page-based)</p>\n",
            "name": "x"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Y value for new position (coordinates are page-based)</p>\n",
            "name": "y"
          },
          {
            "type": "Boolean/Object",
            "optional": true,
            "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n",
            "name": "animate"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-setLocation",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Sets the position of the element in page coordinates, regardless of how the element is positioned. ...",
        "static": false,
        "name": "setLocation",
        "owner": "Ext.core.Element",
        "doc": "<p>Sets the position of the element in page coordinates, regardless of how the element is positioned.\nThe element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "linenr": 134,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Float",
            "optional": false,
            "doc": "<p>The new opacity. 0 = transparent, .5 = 50% visibile, 1 = fully visible, etc</p>\n",
            "name": "opacity"
          },
          {
            "type": "Boolean/Object",
            "optional": true,
            "doc": "<p>(optional) a standard Element animation config object or <tt>true</tt> for\nthe default animation (<tt>{duration: .35, easing: 'easeIn'}</tt>)</p>\n",
            "name": "animate"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-setOpacity",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Set the opacity of the element ...",
        "static": false,
        "name": "setOpacity",
        "owner": "Ext.core.Element",
        "doc": "<p>Set the opacity of the element</p>\n",
        "linenr": 327,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "posCfg"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-setPositioning",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Set positioning with an object returned by getPositioning(). ...",
        "static": false,
        "name": "setPositioning",
        "owner": "Ext.core.Element",
        "doc": "<p>Set positioning with an object returned by getPositioning().</p>\n",
        "linenr": 256,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.util.Region",
            "optional": false,
            "doc": "<p>The region to fill</p>\n",
            "name": "region"
          },
          {
            "type": "Boolean/Object",
            "optional": true,
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "name": "animate"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-setRegion",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Sets the element's position and size the specified region. ...",
        "static": false,
        "name": "setRegion",
        "owner": "Ext.core.Element",
        "doc": "<p>Sets the element's position and size the specified region. If animation is true then width, height, x and y will be animated concurrently.</p>\n",
        "linenr": 554,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The right CSS property value</p>\n",
            "name": "right"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-setRight",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Sets the element's CSS right style. ...",
        "static": false,
        "name": "setRight",
        "owner": "Ext.core.Element",
        "doc": "<p>Sets the element's CSS right style.</p>\n",
        "linenr": 93,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The new width. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in this Element's <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style. Animation may <b>not</b> be used.\n<li>A size object in the format <code>{width: widthValue, height: heightValue}</code>.</li>\n</ul></div></p>\n",
            "name": "width"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The new height. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in this Element's <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS height style. Animation may <b>not</b> be used.</li>\n</ul></div></p>\n",
            "name": "height"
          },
          {
            "type": "Boolean/Object",
            "optional": true,
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "name": "animate"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-setSize",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Set the size of this Element. ...",
        "static": false,
        "name": "setSize",
        "owner": "Ext.core.Element",
        "doc": "<p>Set the size of this Element. If animation is true, both width and height will be animated concurrently.</p>\n",
        "linenr": 762,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The style property to be set, or an object of multiple styles.</p>\n",
            "name": "property"
          },
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) The value to apply to the given property, or null if an object was passed.</p>\n",
            "name": "value"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-setStyle",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Wrapper for setting style properties, also takes single object parameter of multiple styles. ...",
        "static": false,
        "name": "setStyle",
        "owner": "Ext.core.Element",
        "doc": "<p>Wrapper for setting style properties, also takes single object parameter of multiple styles.</p>\n",
        "linenr": 295,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The top CSS property value</p>\n",
            "name": "top"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-setTop",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Sets the element's top position directly using CSS style (instead of setY). ...",
        "static": false,
        "name": "setTop",
        "owner": "Ext.core.Element",
        "doc": "<p>Sets the element's top position directly using CSS style (instead of <a href=\"#/api/Ext.core.Element-method-setY\" rel=\"Ext.core.Element-method-setY\" class=\"docClass\">setY</a>).</p>\n",
        "linenr": 83,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Ext.core.Element.VISIBILITY or Ext.core.Element.DISPLAY</p>\n",
            "name": "visMode"
          }
        ],
        "href": "Element.fx.html#Ext-core-Element-method-setVisibilityMode",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx.js",
        "private": false,
        "shortDoc": "Sets the element's visibility mode. ...",
        "static": false,
        "name": "setVisibilityMode",
        "owner": "Ext.core.Element",
        "doc": "<p>Sets the element's visibility mode. When setVisible() is called it\nwill use this to determine whether to set the visibility or the display property.</p>\n",
        "linenr": 72,
        "html_filename": "Element.fx.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Whether the element is visible</p>\n",
            "name": "visible"
          },
          {
            "type": "Boolean/Object",
            "optional": true,
            "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n",
            "name": "animate"
          }
        ],
        "href": "Element.fx.html#Ext-core-Element-method-setVisible",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx.js",
        "private": false,
        "shortDoc": "Sets the visibility of the element (see details). ...",
        "static": false,
        "name": "setVisible",
        "owner": "Ext.core.Element",
        "doc": "<p>Sets the visibility of the element (see details). If the visibilityMode is set to Element.DISPLAY, it will use\nthe display property to hide the element, otherwise it uses visibility. The default is to hide and show using the visibility property.</p>\n",
        "linenr": 104,
        "html_filename": "Element.fx.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The new width. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in this Element's <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style. Animation may <b>not</b> be used.\n</ul></div></p>\n",
            "name": "width"
          },
          {
            "type": "Boolean/Object",
            "optional": true,
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "name": "animate"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-setWidth",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Set the width of this Element. ...",
        "static": false,
        "name": "setWidth",
        "owner": "Ext.core.Element",
        "doc": "<p>Set the width of this Element.</p>\n",
        "linenr": 542,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>X position of the element</p>\n",
            "name": "The"
          },
          {
            "type": "Boolean/Object",
            "optional": true,
            "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n",
            "name": "animate"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-setX",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Sets the X position of the element based on page coordinates. ...",
        "static": false,
        "name": "setX",
        "owner": "Ext.core.Element",
        "doc": "<p>Sets the X position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "linenr": 53,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>Contains X &amp; Y [x, y] values for new position (coordinates are page-based)</p>\n",
            "name": "pos"
          },
          {
            "type": "Boolean/Object",
            "optional": true,
            "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n",
            "name": "animate"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-setXY",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Sets the position of the element in page coordinates, regardless of how the element is positioned. ...",
        "static": false,
        "name": "setXY",
        "owner": "Ext.core.Element",
        "doc": "<p>Sets the position of the element in page coordinates, regardless of how the element is positioned.\nThe element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "linenr": 113,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Y position of the element</p>\n",
            "name": "The"
          },
          {
            "type": "Boolean/Object",
            "optional": true,
            "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n",
            "name": "animate"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-setY",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Sets the Y position of the element based on page coordinates. ...",
        "static": false,
        "name": "setY",
        "owner": "Ext.core.Element",
        "doc": "<p>Sets the Y position of the element based on page coordinates.  Element must be part of the DOM tree to have page coordinates (display:none or elements not appended return false).</p>\n",
        "linenr": 63,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": {
          "version": "4.0",
          "text": "\n",
          "tagname": "deprecated",
          "doc": "Animates the transition of any combination of an element's dimensions, xy position and/or opacity.\nAny of these properties not specified in the config object will not be changed.  This effect \nrequires that at least one new dimension, position or opacity setting must be passed in on\nthe config object in order for the function to have any effect.\nUsage:\n<pre><code>\n// slide the element horizontally to x position 200 while changing the height and opacity\nel.shift({ x: 200, height: 50, opacity: .8 });\n\n// common config options shown with default values.\nel.shift({\n    width: [element&#39;s width],\n    height: [element&#39;s height],\n    x: [element&#39;s x position],\n    y: [element&#39;s y position],\n    opacity: [element&#39;s opacity],\n    easing: 'easeOut',\n    duration: .35\n});\n</code></pre>"
        },
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Object literal with any of the Fx config options</p>\n",
            "name": "options"
          }
        ],
        "href": "Element.anim.html#Ext-core-Element-method-shift",
        "return": {
          "type": "Ext.Element",
          "doc": "<p>The Element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "shortDoc": "Animates the transition of any combination of an element's dimensions, xy position and/or opacity. ...",
        "static": false,
        "name": "shift",
        "owner": "Ext.core.Element",
        "doc": "<p>Animates the transition of any combination of an element's dimensions, xy position and/or opacity.\nAny of these properties not specified in the config object will not be changed.  This effect\nrequires that at least one new dimension, position or opacity setting must be passed in on\nthe config object in order for the function to have any effect.\nUsage:</p>\n\n<pre><code>// slide the element horizontally to x position 200 while changing the height and opacity\nel.shift({ x: 200, height: 50, opacity: .8 });\n\n// common config options shown with default values.\nel.shift({\n    width: [element&#39;s width],\n    height: [element&#39;s height],\n    x: [element&#39;s x position],\n    y: [element&#39;s y position],\n    opacity: [element&#39;s opacity],\n    easing: 'easeOut',\n    duration: .35\n});\n</code></pre>\n\n",
        "linenr": 864,
        "html_filename": "Element.anim.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean/Object",
            "optional": true,
            "doc": "<p>(optional) true for the default animation or a standard Element animation config object</p>\n",
            "name": "animate"
          }
        ],
        "href": "Element.fx.html#Ext-core-Element-method-show",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx.js",
        "private": false,
        "shortDoc": "Show this element - Uses display mode to determine whether to use \"display\" or \"visibility\". ...",
        "static": false,
        "name": "show",
        "owner": "Ext.core.Element",
        "doc": "<p>Show this element - Uses display mode to determine whether to use \"display\" or \"visibility\". See <a href=\"#/api/Ext.core.Element-method-setVisible\" rel=\"Ext.core.Element-method-setVisible\" class=\"docClass\">setVisible</a>.</p>\n",
        "linenr": 260,
        "html_filename": "Element.fx.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) One of the valid Fx anchor positions (defaults to top: 't')</p>\n",
            "name": "anchor"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
            "name": "options"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "slideOut"
          }
        ],
        "href": "Element.anim.html#Ext-core-Element-method-slideIn",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The Element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "shortDoc": "Slides the element into view. ...",
        "static": false,
        "name": "slideIn",
        "owner": "Ext.core.Element",
        "doc": "<p>Slides the element into view.  An anchor point can be optionally passed to set the point of\norigin for the slide effect.  This function automatically handles wrapping the element with\na fixed-size container if needed.  See the Fx class overview for valid anchor point options.\nUsage:</p>\n\n<pre><code>// default: slide the element in from the top\nel.slideIn();\n\n// custom: slide the element in from the right with a 2-second duration\nel.slideIn('r', { duration: 2 });\n\n// common config options shown with default values\nel.slideIn('t', {\n    easing: 'easeOut',\n    duration: 500\n});\n</code></pre>\n\n",
        "linenr": 81,
        "html_filename": "Element.anim.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) One of the valid Fx anchor positions (defaults to top: 't')</p>\n",
            "name": "anchor"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
            "name": "options"
          }
        ],
        "href": "Element.anim.html#Ext-core-Element-method-slideOut",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The Element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "shortDoc": "Slides the element out of view. ...",
        "static": false,
        "name": "slideOut",
        "owner": "Ext.core.Element",
        "doc": "<p>Slides the element out of view.  An anchor point can be optionally passed to set the end point\nfor the slide effect.  When the effect is completed, the element will be hidden (visibility =\n'hidden') but block elements will still take up space in the document.  The element must be removed\nfrom the DOM using the 'remove' config option if desired.  This function automatically handles\nwrapping the element with a fixed-size container if needed.  See the Fx class overview for valid anchor point options.\nUsage:</p>\n\n<pre><code>// default: slide the element out to the top\nel.slideOut();\n\n// custom: slide the element out to the right with a 2-second duration\nel.slideOut('r', { duration: 2 });\n\n// common config options shown with default values\nel.slideOut('t', {\n    easing: 'easeOut',\n    duration: 500,\n    remove: false,\n    useDisplay: false\n});\n</code></pre>\n\n",
        "linenr": 330,
        "html_filename": "Element.anim.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>an event / array of events to stop from bubbling</p>\n",
            "name": "eventName"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to prevent the default action too</p>\n",
            "name": "preventDefault"
          }
        ],
        "href": "Element-more.html#Ext-core-Element-method-swallowEvent",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element-more.js",
        "private": false,
        "shortDoc": "Stops the specified event(s) from bubbling and optionally prevents the default action ...",
        "static": false,
        "name": "swallowEvent",
        "owner": "Ext.core.Element",
        "doc": "<p>Stops the specified event(s) from bubbling and optionally prevents the default action</p>\n",
        "linenr": 40,
        "html_filename": "Element-more.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Object literal with any of the Fx config options</p>\n",
            "name": "options"
          }
        ],
        "href": "Element.anim.html#Ext-core-Element-method-switchOff",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The Element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.anim.js",
        "private": false,
        "shortDoc": "Blinks the element as if it was clicked and then collapses on its center (similar to switching off a television). ...",
        "static": false,
        "name": "switchOff",
        "owner": "Ext.core.Element",
        "doc": "<p>Blinks the element as if it was clicked and then collapses on its center (similar to switching off a television).\nWhen the effect is completed, the element will be hidden (visibility = 'hidden') but block elements will still\ntake up space in the document. The element must be removed from the DOM using the 'remove' config option if desired.\nUsage:</p>\n\n<pre><code>// default\nel.switchOff();\n\n// all config options shown with default values\nel.switchOff({\n    easing: 'easeIn',\n    duration: .3,\n    remove: false,\n    useDisplay: false\n});\n</code></pre>\n\n",
        "linenr": 429,
        "html_filename": "Element.anim.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean/Object",
            "optional": true,
            "doc": "<p>(optional) True for the default animation, or a standard Element animation config object</p>\n",
            "name": "animate"
          }
        ],
        "href": "Element.fx.html#Ext-core-Element-method-toggle",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx.js",
        "private": false,
        "shortDoc": "Toggles the element's visibility or display, depending on visibility mode. ...",
        "static": false,
        "name": "toggle",
        "owner": "Ext.core.Element",
        "doc": "<p>Toggles the element's visibility or display, depending on visibility mode.</p>\n",
        "linenr": 209,
        "html_filename": "Element.fx.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The CSS class to toggle</p>\n",
            "name": "className"
          }
        ],
        "href": "Element.style.html#Ext-core-Element-method-toggleCls",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Toggles the specified CSS class on this element (removes it if it already exists, otherwise adds it). ...",
        "static": false,
        "name": "toggleCls",
        "owner": "Ext.core.Element",
        "doc": "<p>Toggles the specified CSS class on this element (removes it if it already exists, otherwise adds it).</p>\n",
        "linenr": 153,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number/Array",
            "optional": false,
            "doc": "<p>The page x or an array containing [x, y]</p>\n",
            "name": "x"
          },
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) The page y, required if x is not an array</p>\n",
            "name": "y"
          }
        ],
        "href": "Element.position.html#Ext-core-Element-method-translatePoints",
        "return": {
          "type": "Object",
          "doc": "<p>An object with left and top properties. e.g. {left: (value), top: (value)}</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.position.js",
        "private": false,
        "shortDoc": "Translates the passed page coordinates into left/top css values for this element ...",
        "static": false,
        "name": "translatePoints",
        "owner": "Ext.core.Element",
        "doc": "<p>Translates the passed page coordinates into left/top css values for this element</p>\n",
        "linenr": 277,
        "html_filename": "Element.position.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event from which to remove the handler.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler function to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>If a scope (<b><code>this</code></b> reference) was specified when the listener was added,\nthen this must refer to the same object.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Element2.html#Ext-core-Element-method-un",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Removes an event handler from this element (see removeListener for additional notes). ...",
        "static": false,
        "name": "un",
        "owner": "Ext.core.Element",
        "doc": "<p>Removes an event handler from this element (see <a href=\"#/api/Ext.core.Element-method-removeListener\" rel=\"Ext.core.Element-method-removeListener\" class=\"docClass\">removeListener</a> for additional notes).</p>\n",
        "linenr": 744,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.style.html#Ext-core-Element-method-unclip",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Return clipping (overflow) to original clipping before clip was called ...",
        "static": false,
        "name": "unclip",
        "owner": "Ext.core.Element",
        "doc": "<p>Return clipping (overflow) to original clipping before <tt><a href=\"#/api/Ext.core.Element-method-clip\" rel=\"Ext.core.Element-method-clip\" class=\"docClass\">clip</a></tt> was called</p>\n",
        "linenr": 651,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.fx-more.html#Ext-core-Element-method-unmask",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx-more.js",
        "private": false,
        "shortDoc": "Removes a previously applied mask. ...",
        "static": false,
        "name": "unmask",
        "owner": "Ext.core.Element",
        "doc": "<p>Removes a previously applied mask.</p>\n",
        "linenr": 123,
        "html_filename": "Element.fx-more.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.style.html#Ext-core-Element-method-unselectable",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.style.js",
        "private": false,
        "shortDoc": "Disables text selection for this element (normalized across browsers) ...",
        "static": false,
        "name": "unselectable",
        "owner": "Ext.core.Element",
        "doc": "<p>Disables text selection for this element (normalized across browsers)</p>\n",
        "linenr": 1022,
        "html_filename": "Element.style.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The simple selector to test</p>\n",
            "name": "selector"
          },
          {
            "type": "Number/Mixed",
            "optional": true,
            "doc": "<p>(optional) The max depth to</p>\n\n<pre><code>        search as a number or element (defaults to 10 || document.body)\n</code></pre>\n",
            "name": "maxDepth"
          }
        ],
        "href": "Element.traversal.html#Ext-core-Element-method-up",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The matching DOM node (or null if no match was found)</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
        "private": false,
        "shortDoc": "Walks up the dom looking for a parent node that matches the passed simple selector (e.g. ...",
        "static": false,
        "name": "up",
        "owner": "Ext.core.Element",
        "doc": "<p>Walks up the dom looking for a parent node that matches the passed simple selector (e.g. div.some-class or span:first-child).\nThis is a shortcut for findParentNode() that always returns an Ext.core.Element.</p>\n",
        "linenr": 46,
        "html_filename": "Element.traversal.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The new HTML</p>\n",
            "name": "html"
          }
        ],
        "href": "Element2.html#Ext-core-Element-method-update",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Update the innerHTML of this element ...",
        "static": false,
        "name": "update",
        "owner": "Ext.core.Element",
        "doc": "<p>Update the innerHTML of this element</p>\n",
        "linenr": 714,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) DomHelper element config object for the wrapper element or null for an empty div</p>\n",
            "name": "config"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to return the raw DOM element instead of Ext.core.Element</p>\n",
            "name": "returnDom"
          }
        ],
        "href": "Element.insertion.html#Ext-core-Element-method-wrap",
        "return": {
          "type": "HTMLElement/Element",
          "doc": "<p>The newly created wrapper element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.insertion.js",
        "private": false,
        "shortDoc": "Creates and wraps this element with another element ...",
        "static": false,
        "name": "wrap",
        "owner": "Ext.core.Element",
        "doc": "<p>Creates and wraps this element with another element</p>\n",
        "linenr": 155,
        "html_filename": "Element.insertion.html"
      }
    ],
    "event": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-DOMActivate",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Where supported. ...",
        "static": false,
        "name": "DOMActivate",
        "owner": "Ext.core.Element",
        "doc": "<p>Where supported. Fires when an element is activated, for instance, through a mouse click or a keypress.</p>\n",
        "linenr": 335,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-DOMAttrModified",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Where supported. ...",
        "static": false,
        "name": "DOMAttrModified",
        "owner": "Ext.core.Element",
        "doc": "<p>Where supported. Fires when an attribute has been modified.</p>\n",
        "linenr": 379,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-DOMCharacterDataModified",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Where supported. ...",
        "static": false,
        "name": "DOMCharacterDataModified",
        "owner": "Ext.core.Element",
        "doc": "<p>Where supported. Fires when the character data has been modified.</p>\n",
        "linenr": 386,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-DOMFocusIn",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Where supported. ...",
        "static": false,
        "name": "DOMFocusIn",
        "owner": "Ext.core.Element",
        "doc": "<p>Where supported. Similar to HTML focus event, but can be applied to any focusable element.</p>\n",
        "linenr": 321,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-DOMFocusOut",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Where supported. ...",
        "static": false,
        "name": "DOMFocusOut",
        "owner": "Ext.core.Element",
        "doc": "<p>Where supported. Similar to HTML blur event, but can be applied to any focusable element.</p>\n",
        "linenr": 328,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-DOMNodeInserted",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Where supported. ...",
        "static": false,
        "name": "DOMNodeInserted",
        "owner": "Ext.core.Element",
        "doc": "<p>Where supported. Fires when a node has been added as a child of another node.</p>\n",
        "linenr": 351,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-DOMNodeInsertedIntoDocument",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Where supported. ...",
        "static": false,
        "name": "DOMNodeInsertedIntoDocument",
        "owner": "Ext.core.Element",
        "doc": "<p>Where supported. Fires when a node is being inserted into a document.</p>\n",
        "linenr": 372,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-DOMNodeRemoved",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Where supported. ...",
        "static": false,
        "name": "DOMNodeRemoved",
        "owner": "Ext.core.Element",
        "doc": "<p>Where supported. Fires when a descendant node of the element is removed.</p>\n",
        "linenr": 358,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-DOMNodeRemovedFromDocument",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Where supported. ...",
        "static": false,
        "name": "DOMNodeRemovedFromDocument",
        "owner": "Ext.core.Element",
        "doc": "<p>Where supported. Fires when a node is being removed from a document.</p>\n",
        "linenr": 365,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-DOMSubtreeModified",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Where supported. ...",
        "static": false,
        "name": "DOMSubtreeModified",
        "owner": "Ext.core.Element",
        "doc": "<p>Where supported. Fires when the subtree is modified.</p>\n",
        "linenr": 344,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-abort",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when an object/image is stopped from loading before completely loaded. ...",
        "static": false,
        "name": "abort",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when an object/image is stopped from loading before completely loaded.</p>\n",
        "linenr": 247,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-blur",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when an element loses focus either via the pointing device or by tabbing navigation. ...",
        "static": false,
        "name": "blur",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when an element loses focus either via the pointing device or by tabbing navigation.</p>\n",
        "linenr": 312,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-change",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when a control loses the input focus and its value has been modified since gaining focus. ...",
        "static": false,
        "name": "change",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when a control loses the input focus and its value has been modified since gaining focus.</p>\n",
        "linenr": 284,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-click",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when a mouse click is detected within the element. ...",
        "static": false,
        "name": "click",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when a mouse click is detected within the element.</p>\n",
        "linenr": 137,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-contextmenu",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when a right click is detected within the element. ...",
        "static": false,
        "name": "contextmenu",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when a right click is detected within the element.</p>\n",
        "linenr": 144,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-dblclick",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when a mouse double click is detected within the element. ...",
        "static": false,
        "name": "dblclick",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when a mouse double click is detected within the element.</p>\n",
        "linenr": 151,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-error",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when an object/image/frame cannot be loaded properly. ...",
        "static": false,
        "name": "error",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when an object/image/frame cannot be loaded properly.</p>\n",
        "linenr": 254,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-focus",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when an element receives focus either via the pointing device or by tab navigation. ...",
        "static": false,
        "name": "focus",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when an element receives focus either via the pointing device or by tab navigation.</p>\n",
        "linenr": 305,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-keydown",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when a keydown is detected within the element. ...",
        "static": false,
        "name": "keydown",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when a keydown is detected within the element.</p>\n",
        "linenr": 216,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-keypress",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when a keypress is detected within the element. ...",
        "static": false,
        "name": "keypress",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when a keypress is detected within the element.</p>\n",
        "linenr": 209,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-keyup",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when a keyup is detected within the element. ...",
        "static": false,
        "name": "keyup",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when a keyup is detected within the element.</p>\n",
        "linenr": 223,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-load",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when the user agent finishes loading all content within the element. ...",
        "static": false,
        "name": "load",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when the user agent finishes loading all content within the element. Only supported by window, frames, objects and images.</p>\n",
        "linenr": 233,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-mousedown",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when a mousedown is detected within the element. ...",
        "static": false,
        "name": "mousedown",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when a mousedown is detected within the element.</p>\n",
        "linenr": 158,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-mouseenter",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when the mouse enters the element. ...",
        "static": false,
        "name": "mouseenter",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when the mouse enters the element.</p>\n",
        "linenr": 193,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-mouseleave",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when the mouse leaves the element. ...",
        "static": false,
        "name": "mouseleave",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when the mouse leaves the element.</p>\n",
        "linenr": 200,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-mousemove",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when a mousemove is detected with the element. ...",
        "static": false,
        "name": "mousemove",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when a mousemove is detected with the element.</p>\n",
        "linenr": 179,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-mouseout",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when a mouseout is detected with the element. ...",
        "static": false,
        "name": "mouseout",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when a mouseout is detected with the element.</p>\n",
        "linenr": 186,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-mouseover",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when a mouseover is detected within the element. ...",
        "static": false,
        "name": "mouseover",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when a mouseover is detected within the element.</p>\n",
        "linenr": 172,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-mouseup",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when a mouseup is detected within the element. ...",
        "static": false,
        "name": "mouseup",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when a mouseup is detected within the element.</p>\n",
        "linenr": 165,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-reset",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when a form is reset. ...",
        "static": false,
        "name": "reset",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when a form is reset.</p>\n",
        "linenr": 298,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-resize",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when a document view is resized. ...",
        "static": false,
        "name": "resize",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when a document view is resized.</p>\n",
        "linenr": 261,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-scroll",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when a document view is scrolled. ...",
        "static": false,
        "name": "scroll",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when a document view is scrolled.</p>\n",
        "linenr": 268,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-select",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when a user selects some text in a text field, including input and textarea. ...",
        "static": false,
        "name": "select",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when a user selects some text in a text field, including input and textarea.</p>\n",
        "linenr": 277,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-submit",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when a form is submitted. ...",
        "static": false,
        "name": "submit",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when a form is submitted.</p>\n",
        "linenr": 291,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> encapsulating the DOM event.</p>\n",
            "name": "e"
          },
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The target of the event.</p>\n",
            "name": "t"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The options configuration passed to the <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">addListener</a> call.</p>\n",
            "name": "o"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Element2.html#Ext-core-Element-event-unload",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Fires when the user agent removes all content from a window or frame. ...",
        "static": false,
        "name": "unload",
        "owner": "Ext.core.Element",
        "doc": "<p>Fires when the user agent removes all content from a window or frame. For elements, it fires when the target element or any of its content has been removed.</p>\n",
        "linenr": 240,
        "html_filename": "Element2.html"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Element2.html#Ext-core-Element-property-autoBoxAdjust",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "static": false,
        "name": "autoBoxAdjust",
        "owner": "Ext.core.Element",
        "doc": "<p>true to automatically adjust width and height settings for box-model issues (default to true)</p>\n",
        "linenr": 772,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Element2.html#Ext-core-Element-property-defaultUnit",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "static": false,
        "name": "defaultUnit",
        "owner": "Ext.core.Element",
        "doc": "<p>The default unit to append to CSS values where a unit isn't provided (defaults to px).</p>\n",
        "linenr": 394,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "type": "HTMLElement",
        "deprecated": null,
        "href": "Element2.html#Ext-core-Element-property-dom",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "static": false,
        "name": "dom",
        "owner": "Ext.core.Element",
        "doc": "<p>The DOM element</p>\n",
        "linenr": 89,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Element2.html#Ext-core-Element-property-id",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "static": false,
        "name": "id",
        "owner": "Ext.core.Element",
        "doc": "<p>The DOM element ID</p>\n",
        "linenr": 95,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Element.fx.html#Ext-core-Element-property-originalDisplay",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx.js",
        "private": false,
        "static": false,
        "name": "originalDisplay",
        "owner": "Ext.core.Element",
        "doc": "<p>The element's default display mode  (defaults to \"\")</p>\n",
        "linenr": 65,
        "html_filename": "Element.fx.html"
      }
    ]
  },
  "singleton": false,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": null,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.traversal.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.core.Element",
  "doc": "<p>Encapsulates a DOM element, adding simple DOM manipulation facilities, normalizing for browser differences.</p>\n\n\n<p>All instances of this class inherit the methods of <a href=\"#/api/Ext.fx.Anim\" rel=\"Ext.fx.Anim\" class=\"docClass\">Ext.fx.Anim</a> making visual effects easily available to all DOM elements.</p>\n\n\n<p>Note that the events documented in this class are not <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> events, they encapsulate browser events. To\naccess the underlying browser event, see Ext.EventObject.browserEvent. Some older\nbrowsers may not support the full range of events. Which events are supported is beyond the control of ExtJs.</p>\n\n\n<p>Usage:<br></p>\n\n<pre><code>// by id\nvar el = Ext.get(\"my-div\");\n\n// by DOM element reference\nvar el = Ext.get(myDivElement);\n</code></pre>\n\n\n<p><b>Animations</b><br /></p>\n\n<p>When an element is manipulated, by default there is no animation.</p>\n\n\n<pre><code>var el = Ext.get(\"my-div\");\n\n// no animation\nel.setWidth(100);\n</code></pre>\n\n\n<p>Many of the functions for manipulating an element have an optional \"animate\" parameter.  This\nparameter can be specified as boolean (<tt>true</tt>) for default animation effects.</p>\n\n\n<pre><code>// default animation\nel.setWidth(100, true);\n</code></pre>\n\n\n\n\n<p>To configure the effects, an object literal with animation options to use as the Element animation\nconfiguration object can also be specified. Note that the supported Element animation configuration\noptions are a subset of the <a href=\"#/api/Ext.fx.Anim\" rel=\"Ext.fx.Anim\" class=\"docClass\">Ext.fx.Anim</a> animation options specific to Fx effects.  The supported\nElement animation configuration options are:</p>\n\n\n<pre>Option    Default   Description\n--------- --------  ---------------------------------------------\n<a href=\"#/api/Ext.fx.Anim-cfg-duration\" rel=\"Ext.fx.Anim-cfg-duration\" class=\"docClass\">duration</a>  .35       The duration of the animation in seconds\n<a href=\"#/api/Ext.fx.Anim-cfg-easing\" rel=\"Ext.fx.Anim-cfg-easing\" class=\"docClass\">easing</a>    easeOut   The easing method\ncallback  none      A function to execute when the anim completes\nscope     this      The scope (this) of the callback function\n</pre>\n\n\n\n\n<pre><code>// Element animation options object\nvar opt = {\n    <a href=\"#/api/Ext.fx.Anim-cfg-duration\" rel=\"Ext.fx.Anim-cfg-duration\" class=\"docClass\">duration</a>: 1,\n    <a href=\"#/api/Ext.fx.Anim-cfg-easing\" rel=\"Ext.fx.Anim-cfg-easing\" class=\"docClass\">easing</a>: 'elasticIn',\n    callback: this.foo,\n    scope: this\n};\n// animation with some options set\nel.setWidth(100, opt);\n</code></pre>\n\n\n<p>The Element animation object being used for the animation will be set on the options\nobject as \"anim\", which allows you to stop or manipulate the animation. Here is an example:</p>\n\n\n<pre><code>// using the \"anim\" property to get the Anim object\nif(opt.anim.isAnimated()){\n    opt.anim.stop();\n}\n</code></pre>\n\n\n<p>Also see the <tt>animate</tt> method for another animation technique.</p>\n\n\n<p><b> Composite (Collections of) Elements</b></p>\n\n\n<p>For working with collections of Elements, see <a href=\"#/api/Ext.CompositeElement\" rel=\"Ext.CompositeElement\" class=\"docClass\">Ext.CompositeElement</a></p>\n\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Element.traversal.html",
  "statics": {
    "cfg": [

    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The x coordinate</p>\n",
            "name": "x"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The y coordinate</p>\n",
            "name": "x"
          }
        ],
        "href": "Element.static.html#Ext-core-Element-method-fromPoint",
        "return": {
          "type": "String",
          "doc": "<p>The found Element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.static.js",
        "private": false,
        "shortDoc": "Returns the top Element that is located at the passed coordinates ...",
        "static": true,
        "name": "fromPoint",
        "owner": "Ext.core.Element",
        "doc": "<p>Returns the top Element that is located at the passed coordinates</p>\n",
        "linenr": 165,
        "html_filename": "Element.static.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The id of the node, a DOM Node or an existing Element.</p>\n",
            "name": "el"
          }
        ],
        "href": "Element2.html#Ext-core-Element-method-get",
        "return": {
          "type": "Element",
          "doc": "<p>The Element object (or null if no matching element was found)</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.js",
        "private": false,
        "shortDoc": "Retrieves Ext.core.Element objects. ...",
        "static": true,
        "name": "get",
        "owner": "Ext.core.Element",
        "doc": "<p>Retrieves <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> objects.</p>\n\n<p><b>This method does not retrieve <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a>s.</b> This method\nretrieves <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> objects which encapsulate DOM elements. To retrieve a Component by\nits ID, use <a href=\"#/api/Ext.ComponentManager-method-get\" rel=\"Ext.ComponentManager-method-get\" class=\"docClass\">Ext.ComponentManager.get</a>.</p>\n\n\n<p>Uses simple caching to consistently return the same object. Automatically fixes if an\nobject was recreated with the same id via AJAX or DOM.</p>\n\n",
        "linenr": 781,
        "html_filename": "Element2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.static.html#Ext-core-Element-method-getDocumentHeight",
        "return": {
          "type": "Number",
          "doc": "<p>documentHeight</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.static.js",
        "private": false,
        "shortDoc": "Retrieves the document height ...",
        "static": true,
        "name": "getDocumentHeight",
        "owner": "Ext.core.Element",
        "doc": "<p>Retrieves the document height</p>\n",
        "linenr": 103,
        "html_filename": "Element.static.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.static.html#Ext-core-Element-method-getDocumentWidth",
        "return": {
          "type": "Number",
          "doc": "<p>documentWidth</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.static.js",
        "private": false,
        "shortDoc": "Retrieves the document width ...",
        "static": true,
        "name": "getDocumentWidth",
        "owner": "Ext.core.Element",
        "doc": "<p>Retrieves the document width</p>\n",
        "linenr": 112,
        "html_filename": "Element.static.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.static.html#Ext-core-Element-method-getOrientation",
        "return": {
          "type": "String",
          "doc": "<p>Orientation of window: 'portrait' or 'landscape'</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.static.js",
        "private": false,
        "shortDoc": "Retrieves the current orientation of the window. ...",
        "static": true,
        "name": "getOrientation",
        "owner": "Ext.core.Element",
        "doc": "<p>Retrieves the current orientation of the window. This is calculated by\ndeterming if the height is greater than the width.</p>\n",
        "linenr": 151,
        "html_filename": "Element.static.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.static.html#Ext-core-Element-method-getViewSize",
        "return": {
          "type": "Object",
          "doc": "<p>object containing width and height properties</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.static.js",
        "private": false,
        "shortDoc": "Retrieves the viewport size of the window. ...",
        "static": true,
        "name": "getViewSize",
        "owner": "Ext.core.Element",
        "doc": "<p>Retrieves the viewport size of the window.</p>\n",
        "linenr": 139,
        "html_filename": "Element.static.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.static.html#Ext-core-Element-method-getViewportHeight",
        "return": {
          "type": "Number",
          "doc": "<p>viewportHeight</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.static.js",
        "private": false,
        "shortDoc": "Retrieves the viewport height of the window. ...",
        "static": true,
        "name": "getViewportHeight",
        "owner": "Ext.core.Element",
        "doc": "<p>Retrieves the viewport height of the window.</p>\n",
        "linenr": 121,
        "html_filename": "Element.static.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Element.static.html#Ext-core-Element-method-getViewportWidth",
        "return": {
          "type": "Number",
          "doc": "<p>viewportWidth</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.static.js",
        "private": false,
        "shortDoc": "Retrieves the viewport width of the window. ...",
        "static": true,
        "name": "getViewportWidth",
        "owner": "Ext.core.Element",
        "doc": "<p>Retrieves the viewport width of the window.</p>\n",
        "linenr": 130,
        "html_filename": "Element.static.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The property to normalize</p>\n",
            "name": "prop"
          }
        ],
        "href": "Element.static.html#Ext-core-Element-method-normalize",
        "return": {
          "type": "String",
          "doc": "<p>The normalized string</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.static.js",
        "private": false,
        "shortDoc": "Normalizes CSS property keys from dash delimited to camel case JavaScript Syntax. ...",
        "static": true,
        "name": "normalize",
        "owner": "Ext.core.Element",
        "doc": "<p>Normalizes CSS property keys from dash delimited to camel case JavaScript Syntax.\nFor example:</p>\n\n<ul>\n <li>border-width -> borderWidth</li>\n <li>padding-top -> paddingTop</li>\n</ul>\n\n",
        "linenr": 85,
        "html_filename": "Element.static.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number|String",
            "optional": false,
            "doc": "<p>The encoded margins</p>\n",
            "name": "box"
          }
        ],
        "href": "Element.static.html#Ext-core-Element-method-parseBox",
        "return": {
          "type": "Object",
          "doc": "<p>An object with margin sizes for top, right, bottom and left</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.static.js",
        "private": false,
        "shortDoc": "Parses a number or string representing margin sizes into an object. ...",
        "static": true,
        "name": "parseBox",
        "owner": "Ext.core.Element",
        "doc": "<p>Parses a number or string representing margin sizes into an object. Supports CSS-style margin declarations\n(e.g. 10, \"10\", \"10 10\", \"10 10 10\" and \"10 10 10 10\" are all valid options and would return the same result)</p>\n",
        "linenr": 18,
        "html_filename": "Element.static.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>A CSS string</p>\n",
            "name": "styles"
          }
        ],
        "href": "Element.static.html#Ext-core-Element-method-parseStyles",
        "return": {
          "type": "Object",
          "doc": "<p>styles</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.static.js",
        "private": false,
        "shortDoc": "Converts a CSS string into an object with a property for each style. ...",
        "static": true,
        "name": "parseStyles",
        "owner": "Ext.core.Element",
        "doc": "<p>Converts a CSS string into an object with a property for each style.</p>\n\n<p>\nThe sample code below would return an object with 2 properties, one\nfor background-color and one for color.</p>\n\n\n<pre><code>var css = 'background-color: red;color: blue; ';\nconsole.log(Ext.core.Element.parseStyles(css));\n</code></pre>\n\n",
        "linenr": 176,
        "html_filename": "Element.static.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number|String",
            "optional": false,
            "doc": "<p>The encoded margins</p>\n",
            "name": "box"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type of units to add</p>\n",
            "name": "units"
          }
        ],
        "href": "Element.static.html#Ext-core-Element-method-unitizeBox",
        "return": {
          "type": "String",
          "doc": "<p>An string with unitized (px if units is not specified) metrics for top, right, bottom and left</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.static.js",
        "private": false,
        "shortDoc": "Parses a number or string representing margin sizes into an object. ...",
        "static": true,
        "name": "unitizeBox",
        "owner": "Ext.core.Element",
        "doc": "<p>Parses a number or string representing margin sizes into an object. Supports CSS-style margin declarations\n(e.g. 10, \"10\", \"10 10\", \"10 10 10\" and \"10 10 10 10\" are all valid options and would return the same result)</p>\n",
        "linenr": 61,
        "html_filename": "Element.static.html"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "Element.fx.html#Ext-core-Element-property-DISPLAY",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx.js",
        "private": false,
        "shortDoc": "Visibility mode constant for use with setVisibilityMode. ...",
        "static": true,
        "name": "DISPLAY",
        "owner": "Ext.core.Element",
        "doc": "<p>Visibility mode constant for use with <a href=\"#/api/Ext.core.Element-method-setVisibilityMode\" rel=\"Ext.core.Element-method-setVisibilityMode\" class=\"docClass\">setVisibilityMode</a>. Use display to hide element</p>\n",
        "linenr": 10,
        "html_filename": "Element.fx.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "Element.fx.html#Ext-core-Element-property-OFFSETS",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx.js",
        "private": false,
        "shortDoc": "Visibility mode constant for use with setVisibilityMode. ...",
        "static": true,
        "name": "OFFSETS",
        "owner": "Ext.core.Element",
        "doc": "<p>Visibility mode constant for use with <a href=\"#/api/Ext.core.Element-method-setVisibilityMode\" rel=\"Ext.core.Element-method-setVisibilityMode\" class=\"docClass\">setVisibilityMode</a>. Use offsets (x and y positioning offscreen)\nto hide element.</p>\n",
        "linenr": 17,
        "html_filename": "Element.fx.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "Element.fx.html#Ext-core-Element-property-VISIBILITY",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx.js",
        "private": false,
        "shortDoc": "Visibility mode constant for use with setVisibilityMode. ...",
        "static": true,
        "name": "VISIBILITY",
        "owner": "Ext.core.Element",
        "doc": "<p>Visibility mode constant for use with <a href=\"#/api/Ext.core.Element-method-setVisibilityMode\" rel=\"Ext.core.Element-method-setVisibilityMode\" class=\"docClass\">setVisibilityMode</a>. Use visibility to hide element</p>\n",
        "linenr": 4,
        "html_filename": "Element.fx.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Element.fx.html#Ext-core-Element-property-visibilityCls",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/dom/Element.fx.js",
        "private": false,
        "static": true,
        "name": "visibilityCls",
        "owner": "Ext.core.Element",
        "doc": "<p>Defaults to 'x-hide-nosize'</p>\n",
        "linenr": 28,
        "html_filename": "Element.fx.html"
      }
    ]
  },
  "extends": null
});