Ext.data.JsonP.Ext_view_View({
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base",
    "Ext.AbstractComponent",
    "Ext.Component",
    "Ext.view.AbstractView"
  ],
  "inheritable": false,
  "subclasses": [
    "Ext.view.Table",
    "Ext.view.BoundList"
  ],
  "deprecated": null,
  "allMixins": [
    "Ext.util.Floating",
    "Ext.util.Observable",
    "Ext.util.Animate",
    "Ext.state.Stateful"
  ],
  "href": "View.html#Ext-view-View",
  "members": {
    "cfg": [
      {
        "inheritable": false,
        "type": "Mixed",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoEl",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "A tag name or DomHelper spec used to create the Element which will\nencapsulate this Component. ...",
        "static": false,
        "name": "autoEl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A tag name or <a href=\"#/api/Ext.core.DomHelper\" rel=\"Ext.core.DomHelper\" class=\"docClass\">DomHelper</a> spec used to create the <a href=\"#/api/Ext.view.View-method-getEl\" rel=\"Ext.view.View-method-getEl\" class=\"docClass\">Element</a> which will\nencapsulate this Component.</p>\n\n\n<p>You do not normally need to specify this. For the base classes <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> and <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>,\nthis defaults to <b><tt>'div'</tt></b>. The more complex Sencha classes use a more complex\nDOM structure specified by their own <a href=\"#/api/Ext.view.View-cfg-renderTpl\" rel=\"Ext.view.View-cfg-renderTpl\" class=\"docClass\">renderTpl</a>s.</p>\n\n\n<p>This is intended to allow the developer to create application-specific utility Components encapsulated by\ndifferent DOM elements. Example usage:</p>\n\n\n<pre><code>{\n    xtype: 'component',\n    autoEl: {\n        tag: 'img',\n        src: 'http://www.example.com/example.jpg'\n    }\n}, {\n    xtype: 'component',\n    autoEl: {\n        tag: 'blockquote',\n        html: 'autoEl is cool!'\n    }\n}, {\n    xtype: 'container',\n    autoEl: 'ul',\n    cls: 'ux-unordered-list',\n    items: {\n        xtype: 'component',\n        autoEl: 'li',\n        html: 'First list item'\n    }\n}\n</code></pre>\n\n",
        "linenr": 130,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Mixed",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoRender",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "This config is intended mainly for floating Components which may or may not be shown. ...",
        "static": false,
        "name": "autoRender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This config is intended mainly for <a href=\"#/api/Ext.view.View-cfg-floating\" rel=\"Ext.view.View-cfg-floating\" class=\"docClass\">floating</a> Components which may or may not be shown. Instead\nof using <a href=\"#/api/Ext.view.View-cfg-renderTo\" rel=\"Ext.view.View-cfg-renderTo\" class=\"docClass\">renderTo</a> in the configuration, and rendering upon construction, this allows a Component\nto render itself upon first <i><a href=\"#/api/Ext.view.View-event-show\" rel=\"Ext.view.View-event-show\" class=\"docClass\">show</a></i>.</p>\n\n\n<p>Specify as <code>true</code> to have this Component render to the document body upon first show.</p>\n\n\n<p>Specify as an element, or the ID of an element to have this Component render to a specific element upon first show.</p>\n\n\n<p><b>This defaults to <code>true</code> for the <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a> class.</b></p>\n\n",
        "linenr": 499,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Component2.html#Ext-Component-cfg-autoScroll",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "true to use overflow:'auto' on the components layout element and show scroll bars automatically when\nnecessary, false...",
        "static": false,
        "name": "autoScroll",
        "owner": "Ext.Component",
        "doc": "<p><code>true</code> to use overflow:'auto' on the components layout element and show scroll bars automatically when\nnecessary, <code>false</code> to clip any overflowing content (defaults to <code>false</code>).</p>\n",
        "linenr": 172,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-autoShow",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "True to automatically show the component upon creation. ...",
        "static": false,
        "name": "autoShow",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>True to automatically show the component upon creation.\nThis config option may only be used for <a href=\"#/api/Ext.view.View-cfg-floating\" rel=\"Ext.view.View-cfg-floating\" class=\"docClass\">floating</a> components or components\nthat use <a href=\"#/api/Ext.view.View-cfg-autoRender\" rel=\"Ext.view.View-cfg-autoRender\" class=\"docClass\">autoRender</a>. Defaults to <tt>false</tt>.</p>\n",
        "linenr": 492,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-baseCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "The base CSS class to apply to this components's element. ...",
        "static": false,
        "name": "baseCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The base CSS class to apply to this components's element. This will also be prepended to\nelements within this component like Panel's body will get a class x-panel-body. This means\nthat if you create a subclass of Panel, and you want it to get all the Panels styling for the\nelement and the body, you leave the baseCls x-panel and use componentCls to add specific styling for this\ncomponent.</p>\n",
        "linenr": 273,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-blockRefresh",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Set this to true to ignore datachanged events on the bound store. ...",
        "static": false,
        "name": "blockRefresh",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Set this to true to ignore datachanged events on the bound store. This is useful if\nyou wish to provide custom transition animations via a plugin (defaults to false)</p>\n",
        "linenr": 126,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "type": "Number/String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-border",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Specifies the border for this component. ...",
        "static": false,
        "name": "border",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specifies the border for this component. The border can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n",
        "linenr": 360,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-cls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "An optional extra CSS class that will be added to this component's Element (defaults to ''). ...",
        "static": false,
        "name": "cls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An optional extra CSS class that will be added to this component's Element (defaults to '').  This can be\nuseful for adding customized styles to the component or any of its children using standard CSS rules.</p>\n",
        "linenr": 289,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-componentCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "static": false,
        "name": "componentCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>CSS Class to be added to a components root level element to give distinction to it\nvia styling.</p>\n",
        "linenr": 283,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String/Object",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-componentLayout",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "The sizing and positioning of a Component's internal Elements is the responsibility of\nthe Component's layout manager...",
        "static": false,
        "name": "componentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The sizing and positioning of a Component's internal Elements is the responsibility of\nthe Component's layout manager which sizes a Component's internal structure in response to the Component being sized.</p>\n\n\n<p>Generally, developers will not use this configuration as all provided Components which need their internal\nelements sizing (Such as <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">input fields</a>) come with their own componentLayout managers.</p>\n\n\n<p>The <a href=\"#/api/Ext.layout.container.Auto\" rel=\"Ext.layout.container.Auto\" class=\"docClass\">default layout manager</a> will be used on instances of the base <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> class\nwhich simply sizes the Component's encapsulating element to the height and width specified in the <a href=\"#/api/Ext.view.View-method-setSize\" rel=\"Ext.view.View-method-setSize\" class=\"docClass\">setSize</a> method.</p>\n\n",
        "linenr": 242,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-contentEl",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Optional. ...",
        "static": false,
        "name": "contentEl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Optional. Specify an existing HTML element, or the <code>id</code> of an existing HTML element to use as the content\nfor this component.</p>\n\n\n<ul>\n<li><b>Description</b> :\n<div class=\"sub-desc\">This config option is used to take an existing HTML element and place it in the layout element\nof a new component (it simply moves the specified DOM element <i>after the Component is rendered</i> to use as the content.</div></li>\n<li><b>Notes</b> :\n<div class=\"sub-desc\">The specified HTML element is appended to the layout element of the component <i>after any configured\n<a href=\"#/api/Ext.view.View-cfg-html\" rel=\"Ext.view.View-cfg-html\" class=\"docClass\">HTML</a> has been inserted</i>, and so the document will not contain this element at the time the <a href=\"#/api/Ext.view.View-event-render\" rel=\"Ext.view.View-event-render\" class=\"docClass\">render</a> event is fired.</div>\n<div class=\"sub-desc\">The specified HTML element used will not participate in any <code><b><a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout</a></b></code>\nscheme that the Component may use. It is just HTML. Layouts operate on child <code><b><a href=\"#/api/Ext.container.Container-property-items\" rel=\"Ext.container.Container-property-items\" class=\"docClass\">items</a></b></code>.</div>\n<div class=\"sub-desc\">Add either the <code>x-hidden</code> or the <code>x-hide-display</code> CSS class to\nprevent a brief flicker of the content before it is rendered to the panel.</div></li>\n</ul>\n\n",
        "linenr": 422,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Mixed",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-data",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "static": false,
        "name": "data",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The initial set of data to apply to the <code><a href=\"#/api/Ext.view.View-cfg-tpl\" rel=\"Ext.view.View-cfg-tpl\" class=\"docClass\">tpl</a></code> to\nupdate the content area of the Component.</p>\n",
        "linenr": 260,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-deferEmptyText",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "static": false,
        "name": "deferEmptyText",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>True to defer emptyText being applied until the store's first load</p>\n",
        "linenr": 116,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-disableSelection",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "true to disable selection within the DataView. ...",
        "static": false,
        "name": "disableSelection",
        "owner": "Ext.view.AbstractView",
        "doc": "<p><tt>true</tt> to disable selection within the DataView. Defaults to <tt>false</tt>.\nThis configuration will lock the selection model that the DataView uses.</p>\n\n",
        "linenr": 132,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-disabled",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "static": false,
        "name": "disabled",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Defaults to false.</p>\n",
        "linenr": 384,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-disabledCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "CSS class to add when the Component is disabled. ...",
        "static": false,
        "name": "disabledCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>CSS class to add when the Component is disabled. Defaults to 'x-item-disabled'.</p>\n",
        "linenr": 302,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Mixed",
        "deprecated": null,
        "href": "Component2.html#Ext-Component-cfg-draggable",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Specify as true to make a floating Component draggable using the Component's encapsulating element as the drag handle. ...",
        "static": false,
        "name": "draggable",
        "owner": "Ext.Component",
        "doc": "<p>Specify as true to make a <a href=\"#/api/Ext.view.View-cfg-floating\" rel=\"Ext.view.View-cfg-floating\" class=\"docClass\">floating</a> Component draggable using the Component's encapsulating element as the drag handle.</p>\n\n\n<p>This may also be specified as a config object for the <a href=\"#/api/Ext.util.ComponentDragger\" rel=\"Ext.util.ComponentDragger\" class=\"docClass\">ComponentDragger</a> which is instantiated to perform dragging.</p>\n\n\n<p>For example to create a Component which may only be dragged around using a certain internal element as the drag handle,\nuse the delegate option:</p>\n\n\n<p><code></p>\n\n<pre>new Ext.Component({\n    constrain: true,\n    floating:true,\n    style: {\n        backgroundColor: '#fff',\n        border: '1px solid black'\n    },\n    html: '&lt;h1 style=\"cursor:move\"&gt;The title&lt;/h1&gt;&lt;p&gt;The content&lt;/p&gt;',\n    draggable: {\n        delegate: 'h1'\n    }\n}).show();\n</pre>\n\n\n<p></code></p>\n",
        "linenr": 237,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-emptyText",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "The text to display in the view when there is no data to display (defaults to ''). ...",
        "static": false,
        "name": "emptyText",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>The text to display in the view when there is no data to display (defaults to '').\nNote that when using local data the emptyText will not be displayed unless you set\nthe <a href=\"#/api/Ext.view.View-cfg-deferEmptyText\" rel=\"Ext.view.View-cfg-deferEmptyText\" class=\"docClass\">deferEmptyText</a> option to false.</p>\n",
        "linenr": 108,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Component2.html#Ext-Component-cfg-floating",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Specify as true to float the Component outside of the document flow using CSS absolute positioning. ...",
        "static": false,
        "name": "floating",
        "owner": "Ext.Component",
        "doc": "<p>Specify as true to float the Component outside of the document flow using CSS absolute positioning.</p>\n\n\n<p>Components such as <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s and <a href=\"#/api/Ext.menu.Menu\" rel=\"Ext.menu.Menu\" class=\"docClass\">Menu</a>s are floating\nby default.</p>\n\n\n<p>Floating Components that are programatically <a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a> will register themselves with the global\n<a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a></p>\n\n\n<h3 class=\"pa\">Floating Components as child items of a Container</h3>\n\n\n<p>A floating Component may be used as a child item of a Container. This just allows the floating Component to seek a ZIndexManager by\nexamining the ownerCt chain.</p>\n\n\n<p>When configured as floating, Components acquire, at render time, a <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> which manages a stack\nof related floating Components. The ZIndexManager brings a single floating Component to the top of its stack when\nthe Component's <a href=\"#/api/Ext.view.View-method-toFront\" rel=\"Ext.view.View-method-toFront\" class=\"docClass\">toFront</a> method is called.</p>\n\n\n<p>The ZIndexManager is found by traversing up the <a href=\"#/api/Ext.view.View-property-ownerCt\" rel=\"Ext.view.View-property-ownerCt\" class=\"docClass\">ownerCt</a> chain to find an ancestor which itself is floating. This is so that\ndescendant floating Components of floating <i>Containers</i> (Such as a ComboBox dropdown within a Window) can have its zIndex managed relative\nto any siblings, but always <b>above</b> that floating ancestor Container.</p>\n\n\n<p>If no floating ancestor is found, a floating Component registers itself with the default <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a>.</p>\n\n\n<p>Floating components <i>do not participate in the Container's layout</i>. Because of this, they are not rendered until you explicitly\n<a href=\"#/api/Ext.view.View-event-show\" rel=\"Ext.view.View-event-show\" class=\"docClass\">show</a> them.</p>\n\n\n<p>After rendering, the ownerCt reference is deleted, and the <a href=\"#/api/Ext.view.View-property-floatParent\" rel=\"Ext.view.View-property-floatParent\" class=\"docClass\">floatParent</a> property is set to the found floating ancestor Container.\nIf no floating ancestor Container was found the <a href=\"#/api/Ext.view.View-property-floatParent\" rel=\"Ext.view.View-property-floatParent\" class=\"docClass\">floatParent</a> property will not be set.</p>\n\n",
        "linenr": 178,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Floating.html#Ext-util-Floating-cfg-focusOnToFront",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "shortDoc": "Specifies whether the floated component should be automatically focused when it is\nbrought to the front. ...",
        "static": false,
        "name": "focusOnToFront",
        "owner": "Ext.util.Floating",
        "doc": "<p>Specifies whether the floated component should be automatically <a href=\"#/api/Ext.view.View-method-focus\" rel=\"Ext.view.View-method-focus\" class=\"docClass\">focused</a> when it is\n<a href=\"#/api/Ext.view.View-method-toFront\" rel=\"Ext.view.View-method-toFront\" class=\"docClass\">brought to the front</a>. Defaults to true.</p>\n",
        "linenr": 9,
        "html_filename": "Floating.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-frame",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Specify as true to have the Component inject framing elements within the Component at render time to\nprovide a graphi...",
        "static": false,
        "name": "frame",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specify as <code>true</code> to have the Component inject framing elements within the Component at render time to\nprovide a graphical rounded frame around the Component content.</p>\n\n\n<p>This is only necessary when running on outdated, or non standard-compliant browsers such as Microsoft's Internet Explorer\nprior to version 9 which do not support rounded corners natively.</p>\n\n\n<p>The extra space taken up by this framing is available from the read only property <a href=\"#/api/Ext.view.View-property-frameSize\" rel=\"Ext.view.View-property-frameSize\" class=\"docClass\">frameSize</a>.</p>\n\n",
        "linenr": 219,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-height",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "static": false,
        "name": "height",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The height of this component in pixels.</p>\n",
        "linenr": 355,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-hidden",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "static": false,
        "name": "hidden",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Defaults to false.</p>\n",
        "linenr": 378,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-hideMode",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "A String which specifies how this Component's encapsulating DOM element will be hidden. ...",
        "static": false,
        "name": "hideMode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A String which specifies how this Component's encapsulating DOM element will be hidden.\nValues may be<div class=\"mdetail-params\"><ul>\n<li><code>'display'</code> : The Component will be hidden using the <code>display: none</code> style.</li>\n<li><code>'visibility'</code> : The Component will be hidden using the <code>visibility: hidden</code> style.</li>\n<li><code>'offsets'</code> : The Component will be hidden by absolutely positioning it out of the visible area of the document. This\nis useful when a hidden Component must maintain measurable dimensions. Hiding using <code>display</code> results\nin a Component having zero dimensions.</li></ul></div>\nDefaults to <code>'display'</code>.</p>\n",
        "linenr": 409,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String/Object",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-html",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "An HTML fragment, or a DomHelper specification to use as the layout element\ncontent (defaults to ''). ...",
        "static": false,
        "name": "html",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An HTML fragment, or a <a href=\"#/api/Ext.core.DomHelper\" rel=\"Ext.core.DomHelper\" class=\"docClass\">DomHelper</a> specification to use as the layout element\ncontent (defaults to ''). The HTML content is added after the component is rendered,\nso the document will not contain this HTML at the time the <a href=\"#/api/Ext.view.View-event-render\" rel=\"Ext.view.View-event-render\" class=\"docClass\">render</a> event is fired.\nThis content is inserted into the body <i>before</i> any configured <a href=\"#/api/Ext.view.View-cfg-contentEl\" rel=\"Ext.view.View-cfg-contentEl\" class=\"docClass\">contentEl</a> is appended.</p>\n",
        "linenr": 440,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-id",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "The unique id of this component instance (defaults to an auto-assigned id). ...",
        "static": false,
        "name": "id",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The <b><u>unique id of this component instance</u></b> (defaults to an <a href=\"#/api/Ext.view.View-method-getId\" rel=\"Ext.view.View-method-getId\" class=\"docClass\">auto-assigned id</a>).</p>\n\n\n<p>It should not be necessary to use this configuration except for singleton objects in your application.\nComponents created with an id may be accessed globally using <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp</a>.</p>\n\n\n<p>Instead of using assigned ids, use the <a href=\"#/api/Ext.view.View-cfg-itemId\" rel=\"Ext.view.View-cfg-itemId\" class=\"docClass\">itemId</a> config, and <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> which\nprovides selector-based searching for Sencha Components analogous to DOM querying. The <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>\nclass contains <a href=\"#/api/Ext.container.Container-method-down\" rel=\"Ext.container.Container-method-down\" class=\"docClass\">shortcut methods</a> to query its descendant Components by selector.</p>\n\n\n<p>Note that this id will also be used as the element id for the containing HTML element\nthat is rendered to the page for this component. This allows you to write id-based CSS\nrules to style the specific instance of this component uniquely, and also to select\nsub-elements using this component's id as the parent.</p>\n\n\n<p><b>Note</b>: to avoid complications imposed by a unique <tt>id</tt> also see <code><a href=\"#/api/Ext.view.View-cfg-itemId\" rel=\"Ext.view.View-cfg-itemId\" class=\"docClass\">itemId</a></code>.</p>\n\n\n<p><b>Note</b>: to access the container of a Component see <code><a href=\"#/api/Ext.view.View-property-ownerCt\" rel=\"Ext.view.View-property-ownerCt\" class=\"docClass\">ownerCt</a></code>.</p>\n\n",
        "linenr": 50,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-itemCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "static": false,
        "name": "itemCls",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Specifies the class to be assigned to each element in the view when used in conjunction with the\n<a href=\"#/api/Ext.view.View-cfg-itemTpl\" rel=\"Ext.view.View-cfg-itemTpl\" class=\"docClass\">itemTpl</a> configuration.</p>\n",
        "linenr": 48,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-itemId",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "An itemId can be used as an alternative way to get a reference to a component\nwhen no object reference is available. ...",
        "static": false,
        "name": "itemId",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An <tt>itemId</tt> can be used as an alternative way to get a reference to a component\nwhen no object reference is available.  Instead of using an <code><a href=\"#/api/Ext.view.View-cfg-id\" rel=\"Ext.view.View-cfg-id\" class=\"docClass\">id</a></code> with\n<a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a>.<a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">getCmp</a>, use <code>itemId</code> with\n<a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a> which will retrieve\n<code>itemId</code>'s or <tt><a href=\"#/api/Ext.view.View-cfg-id\" rel=\"Ext.view.View-cfg-id\" class=\"docClass\">id</a></tt>'s. Since <code>itemId</code>'s are an index to the\ncontainer's internal MixedCollection, the <code>itemId</code> is scoped locally to the container --\navoiding potential conflicts with <a href=\"#/api/Ext.ComponentManager\" rel=\"Ext.ComponentManager\" class=\"docClass\">Ext.ComponentManager</a> which requires a <b>unique</b>\n<code><a href=\"#/api/Ext.view.View-cfg-id\" rel=\"Ext.view.View-cfg-id\" class=\"docClass\">id</a></code>.</p>\n\n\n<pre><code>var c = new Ext.panel.Panel({ //\n    <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 300,\n    <a href=\"#/api/Ext.view.View-cfg-renderTo\" rel=\"Ext.view.View-cfg-renderTo\" class=\"docClass\">renderTo</a>: document.body,\n    <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout</a>: 'auto',\n    <a href=\"#/api/Ext.container.Container-property-items\" rel=\"Ext.container.Container-property-items\" class=\"docClass\">items</a>: [\n        {\n            itemId: 'p1',\n            <a href=\"#/api/Ext.panel.Panel-cfg-title\" rel=\"Ext.panel.Panel-cfg-title\" class=\"docClass\">title</a>: 'Panel 1',\n            <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 150\n        },\n        {\n            itemId: 'p2',\n            <a href=\"#/api/Ext.panel.Panel-cfg-title\" rel=\"Ext.panel.Panel-cfg-title\" class=\"docClass\">title</a>: 'Panel 2',\n            <a href=\"#/api/Ext.Component-cfg-height\" rel=\"Ext.Component-cfg-height\" class=\"docClass\">height</a>: 150\n        }\n    ]\n})\np1 = c.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a>('p1'); // not the same as <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp()</a>\np2 = p1.<a href=\"#/api/Ext.view.View-property-ownerCt\" rel=\"Ext.view.View-property-ownerCt\" class=\"docClass\">ownerCt</a>.<a href=\"#/api/Ext.container.Container-method-getComponent\" rel=\"Ext.container.Container-method-getComponent\" class=\"docClass\">getComponent</a>('p2'); // reference via a sibling\n</code></pre>\n\n\n<p>Also see <tt><a href=\"#/api/Ext.view.View-cfg-id\" rel=\"Ext.view.View-cfg-id\" class=\"docClass\">id</a></tt>, <code><a href=\"#/api/Ext.container.Container-method-query\" rel=\"Ext.container.Container-method-query\" class=\"docClass\">Ext.container.Container.query</a></code>,\n<code><a href=\"#/api/Ext.container.Container-method-down\" rel=\"Ext.container.Container-method-down\" class=\"docClass\">Ext.container.Container.down</a></code> and <code><a href=\"#/api/Ext.container.Container-method-child\" rel=\"Ext.container.Container-method-child\" class=\"docClass\">Ext.container.Container.child</a></code>.</p>\n\n\n<p><b>Note</b>: to access the container of an item see <tt><a href=\"#/api/Ext.view.View-property-ownerCt\" rel=\"Ext.view.View-property-ownerCt\" class=\"docClass\">ownerCt</a></tt>.</p>\n\n",
        "linenr": 66,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-itemSelector",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "@required\nThis is a required setting. ...",
        "static": false,
        "name": "itemSelector",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>@required\n<b>This is a required setting</b>. A simple CSS selector (e.g. <tt>div.some-class</tt> or\n<tt>span:first-child</tt>) that will be used to determine what nodes this DataView will be\nworking with. The itemSelector is used to map DOM nodes to records. As such, there should\nonly be one root level element that matches the selector for each record.</p>\n",
        "linenr": 39,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "type": "String/Array/Ext.XTemplate",
        "deprecated": null,
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-itemTpl",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "The inner portion of the item template to be rendered. ...",
        "static": false,
        "name": "itemTpl",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>The inner portion of the item template to be rendered. Follows an XTemplate\nstructure and will be placed inside of a tpl.</p>\n",
        "linenr": 55,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "Observable.html#Ext-util-Observable-cfg-listeners",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "A config object containing one or more event handlers to be added to this object during initialization. ...",
        "static": false,
        "name": "listeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.view.View-method-addListener\" rel=\"Ext.view.View-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n",
        "linenr": 102,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "type": "Boolean/Object",
        "deprecated": null,
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-loadMask",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "False to disable a load mask from displaying will the view is loading. ...",
        "static": false,
        "name": "loadMask",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>False to disable a load mask from displaying will the view is loading. This can also be a\n<a href=\"#/api/Ext.LoadMask\" rel=\"Ext.LoadMask\" class=\"docClass\">Ext.LoadMask</a> configuration object. Defaults to <tt>true</tt>.</p>\n",
        "linenr": 75,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "type": "Ext.ComponentLoader/Object",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-loader",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "static": false,
        "name": "loader",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A configuration object or an instance of a <a href=\"#/api/Ext.ComponentLoader\" rel=\"Ext.ComponentLoader\" class=\"docClass\">Ext.ComponentLoader</a> to load remote\ncontent for this Component.</p>\n",
        "linenr": 483,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-loadingCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "static": false,
        "name": "loadingCls",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>The CSS class to apply to the loading message element (defaults to Ext.LoadMask.prototype.msgCls \"x-mask-loading\")</p>\n",
        "linenr": 82,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-loadingHeight",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "If specified, gives an explicit height for the data view when it is showing the loadingText,\nif that is specified. ...",
        "static": false,
        "name": "loadingHeight",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>If specified, gives an explicit height for the data view when it is showing the <a href=\"#/api/Ext.view.View-cfg-loadingText\" rel=\"Ext.view.View-cfg-loadingText\" class=\"docClass\">loadingText</a>,\nif that is specified. This is useful to prevent the view's height from collapsing to zero when the\nloading mask is applied and there are no other contents in the data view. Defaults to undefined.</p>\n",
        "linenr": 95,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-loadingText",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "A string to display during data load operations (defaults to undefined). ...",
        "static": false,
        "name": "loadingText",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>A string to display during data load operations (defaults to undefined).  If specified, this text will be\ndisplayed in a loading div and the view's contents will be cleared while loading, otherwise the view's\ncontents will continue to display normally until the new data is loaded and the contents are replaced.</p>\n",
        "linenr": 67,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Component2.html#Ext-Component-cfg-maintainFlex",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Only valid when a sibling element of a Splitter within a VBox or\nHBox layout. ...",
        "static": false,
        "name": "maintainFlex",
        "owner": "Ext.Component",
        "doc": "<p><b>Only valid when a sibling element of a <a href=\"#/api/Ext.resizer.Splitter\" rel=\"Ext.resizer.Splitter\" class=\"docClass\">Splitter</a> within a <a href=\"#/api/Ext.layout.container.VBox\" rel=\"Ext.layout.container.VBox\" class=\"docClass\">VBox</a> or\n<a href=\"#/api/Ext.layout.container.HBox\" rel=\"Ext.layout.container.HBox\" class=\"docClass\">HBox</a> layout.</b></p>\n\n\n<p>Specifies that if an immediate sibling Splitter is moved, the Component on the <i>other</i> side is resized, and this\nComponent maintains its configured <a href=\"#/api/Ext.layout.container.Box-cfg-flex\" rel=\"Ext.layout.container.Box-cfg-flex\" class=\"docClass\">flex</a> value.</p>\n\n",
        "linenr": 259,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "type": "Number/String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-margin",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Specifies the margin for this component. ...",
        "static": false,
        "name": "margin",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specifies the margin for this component. The margin can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n",
        "linenr": 372,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-maxHeight",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "The maximum value in pixels which this Component will set its height to. ...",
        "static": false,
        "name": "maxHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The maximum value in pixels which this Component will set its height to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
        "linenr": 472,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-maxWidth",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "The maximum value in pixels which this Component will set its width to. ...",
        "static": false,
        "name": "maxWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The maximum value in pixels which this Component will set its width to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
        "linenr": 477,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-minHeight",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "The minimum value in pixels which this Component will set its height to. ...",
        "static": false,
        "name": "minHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The minimum value in pixels which this Component will set its height to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
        "linenr": 462,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-minWidth",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "The minimum value in pixels which this Component will set its width to. ...",
        "static": false,
        "name": "minWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The minimum value in pixels which this Component will set its width to.</p>\n\n\n<p><b>Warning:</b> This will override any size management applied by layout managers.</p>\n\n",
        "linenr": 467,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-multiSelect",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "True to allow selection of more than one item at a time, false to allow selection of only a single item\nat a time or ...",
        "static": false,
        "name": "multiSelect",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>True to allow selection of more than one item at a time, false to allow selection of only a single item\nat a time or no selection at all, depending on the value of <a href=\"#/api/Ext.view.View-cfg-singleSelect\" rel=\"Ext.view.View-cfg-singleSelect\" class=\"docClass\">singleSelect</a> (defaults to false).</p>\n",
        "linenr": 796,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-overCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "An optional extra CSS class that will be added to this component's Element when the mouse moves\nover the Element, and...",
        "static": false,
        "name": "overCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An optional extra CSS class that will be added to this component's Element when the mouse moves\nover the Element, and removed when the mouse moves out. (defaults to '').  This can be\nuseful for adding customized 'active' or 'hover' styles to the component or any of its children using standard CSS rules.</p>\n",
        "linenr": 295,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-overItemCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "A CSS class to apply to each item in the view on mouseover (defaults to undefined). ...",
        "static": false,
        "name": "overItemCls",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>A CSS class to apply to each item in the view on mouseover (defaults to undefined).\nEnsure <a href=\"#/api/Ext.view.View-cfg-trackOver\" rel=\"Ext.view.View-cfg-trackOver\" class=\"docClass\">trackOver</a> is set to <code>true</code> to make use of this.</p>\n",
        "linenr": 61,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "type": "Number/String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-padding",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Specifies the padding for this component. ...",
        "static": false,
        "name": "padding",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specifies the padding for this component. The padding can be a single numeric value to apply to all sides or\nit can be a CSS style specification for each style, for example: '10 5 3 10'.</p>\n",
        "linenr": 366,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Object/Array",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-plugins",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "An object or array of objects that will provide custom functionality for this component. ...",
        "static": false,
        "name": "plugins",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An object or array of objects that will provide custom functionality for this component.  The only\nrequirement for a valid plugin is that it contain an init method that accepts a reference of type <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.\nWhen a component is created, if any plugins are available, the component will call the init method on each\nplugin, passing a reference to itself.  Each plugin can then call methods or respond to events on the\ncomponent as needed to provide its functionality.</p>\n",
        "linenr": 512,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderSelectors",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "An object containing properties specifying DomQuery selectors which identify child elements\ncreated by the render pro...",
        "static": false,
        "name": "renderSelectors",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An object containing properties specifying <a href=\"#/api/Ext.DomQuery\" rel=\"Ext.DomQuery\" class=\"docClass\">DomQuery</a> selectors which identify child elements\ncreated by the render process.</p>\n\n<p>After the Component's internal structure is rendered according to the <a href=\"#/api/Ext.view.View-cfg-renderTpl\" rel=\"Ext.view.View-cfg-renderTpl\" class=\"docClass\">renderTpl</a>, this object is iterated through,\nand the found Elements are added as properties to the Component using the <code>renderSelector</code> property name.</p>\n\n<p>For example, a Component which rendered an image, and description into its element might use the following properties\ncoded into its prototype:</p>\n\n<pre><code>renderTpl: '&amp;lt;img src=\"{imageUrl}\" class=\"x-image-component-img\"&gt;&amp;lt;div class=\"x-image-component-desc\"&gt;{description}&amp;gt;/div&amp;lt;',\n\nrenderSelectors: {\n    image: 'img.x-image-component-img',\n    descEl: 'div.x-image-component-desc'\n}\n</code></pre>\n\n<p>After rendering, the Component would have a property <code>image</code> referencing its child <code>img</code> Element,\nand a property <code>descEl</code> referencing the <code>div</code> Element which contains the description.</p>\n",
        "linenr": 179,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Mixed",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderTo",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Specify the id of the element, a DOM element or an existing Element that this component\nwill be rendered into. ...",
        "static": false,
        "name": "renderTo",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Specify the id of the element, a DOM element or an existing Element that this component\nwill be rendered into.</p>\n\n\n<div><ul>\n<li><b>Notes</b> : <ul>\n<div class=\"sub-desc\">Do <u>not</u> use this option if the Component is to be a child item of\na <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>. It is the responsibility of the\n<a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>'s <a href=\"#/api/Ext.container.Container-cfg-layout\" rel=\"Ext.container.Container-cfg-layout\" class=\"docClass\">layout manager</a>\nto render and manage its child items.</div>\n<div class=\"sub-desc\">When using this config, a call to render() is not required.</div>\n</ul></li>\n</ul></div>\n\n\n<p>See <code><a href=\"#/api/Ext.view.View-event-render\" rel=\"Ext.view.View-event-render\" class=\"docClass\">render</a></code> also.</p>\n\n",
        "linenr": 204,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Mixed",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-renderTpl",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "An XTemplate used to create the internal structure inside this Component's\nencapsulating Element. ...",
        "static": false,
        "name": "renderTpl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>An <a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">XTemplate</a> used to create the internal structure inside this Component's\nencapsulating <a href=\"#/api/Ext.view.View-method-getEl\" rel=\"Ext.view.View-method-getEl\" class=\"docClass\">Element</a>.</p>\n\n\n<p>You do not normally need to specify this. For the base classes <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>\nand <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Ext.container.Container</a>, this defaults to <b><code>null</code></b> which means that they will be initially rendered\nwith no internal structure; they render their <a href=\"#/api/Ext.view.View-method-getEl\" rel=\"Ext.view.View-method-getEl\" class=\"docClass\">Element</a> empty. The more specialized ExtJS and Touch classes\nwhich use a more complex DOM structure, provide their own template definitions.</p>\n\n\n<p>This is intended to allow the developer to create application-specific utility Components with customized\ninternal structure.</p>\n\n\n<p>Upon rendering, any created child elements may be automatically imported into object properties using the\n<a href=\"#/api/Ext.view.View-cfg-renderSelectors\" rel=\"Ext.view.View-cfg-renderSelectors\" class=\"docClass\">renderSelectors</a> option.</p>\n\n",
        "linenr": 164,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Mixed",
        "deprecated": null,
        "href": "Component2.html#Ext-Component-cfg-resizable",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Specify as true to apply a Resizer to this Component\nafter rendering. ...",
        "static": false,
        "name": "resizable",
        "owner": "Ext.Component",
        "doc": "<p>Specify as <code>true</code> to apply a <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Resizer</a> to this Component\nafter rendering.</p>\n\n\n<p>May also be specified as a config object to be passed to the constructor of <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Resizer</a>\nto override any defaults. By default the Component passes its minimum and maximum size, and uses\n<code><a href=\"#/api/Ext.resizer.Resizer-cfg-dynamic\" rel=\"Ext.resizer.Resizer-cfg-dynamic\" class=\"docClass\">Ext.resizer.Resizer.dynamic</a>: false</code></p>\n\n",
        "linenr": 157,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Component2.html#Ext-Component-cfg-resizeHandles",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "A valid Ext.resizer.Resizer handles config string (defaults to 'all'). ...",
        "static": false,
        "name": "resizeHandles",
        "owner": "Ext.Component",
        "doc": "<p>A valid <a href=\"#/api/Ext.resizer.Resizer\" rel=\"Ext.resizer.Resizer\" class=\"docClass\">Ext.resizer.Resizer</a> handles config string (defaults to 'all').  Only applies when resizable = true.</p>\n",
        "linenr": 166,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "Stateful.html#Ext-state-Stateful-cfg-saveBuffer",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "shortDoc": "A buffer to be applied if many state events are fired within\na short period. ...",
        "static": false,
        "name": "saveBuffer",
        "owner": "Ext.state.Stateful",
        "doc": "<p>A buffer to be applied if many state events are fired within\na short period. Defaults to 100.</p>\n",
        "linenr": 74,
        "html_filename": "Stateful.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-selectedItemCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "static": false,
        "name": "selectedItemCls",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>A CSS class to apply to each selected item in the view (defaults to 'x-view-selected').</p>\n",
        "linenr": 102,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "type": "String/Boolean",
        "deprecated": null,
        "href": "Floating.html#Ext-util-Floating-cfg-shadow",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "shortDoc": "Specifies whether the floating component should be given a shadow. ...",
        "static": false,
        "name": "shadow",
        "owner": "Ext.util.Floating",
        "doc": "<p>Specifies whether the floating component should be given a shadow. Set to\n<tt>true</tt> to automatically create an <a href=\"#/api/Ext.Shadow\" rel=\"Ext.Shadow\" class=\"docClass\">Ext.Shadow</a>, or a string indicating the\nshadow's display <a href=\"#/api/Ext.Shadow-cfg-mode\" rel=\"Ext.Shadow-cfg-mode\" class=\"docClass\">Ext.Shadow.mode</a>. Set to <tt>false</tt> to disable the shadow.\n(Defaults to <tt>'sides'</tt>.)</p>\n",
        "linenr": 16,
        "html_filename": "Floating.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-simpleSelect",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "True to enable multiselection by clicking on multiple items without requiring the user to hold Shift or Ctrl,\nfalse t...",
        "static": false,
        "name": "simpleSelect",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>True to enable multiselection by clicking on multiple items without requiring the user to hold Shift or Ctrl,\nfalse to force the user to hold Ctrl or Shift to select more than on item (defaults to false).</p>\n",
        "linenr": 806,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-singleSelect",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "True to allow selection of exactly one item at a time, false to allow no selection at all (defaults to false). ...",
        "static": false,
        "name": "singleSelect",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>True to allow selection of exactly one item at a time, false to allow no selection at all (defaults to false).\nNote that if <a href=\"#/api/Ext.view.View-cfg-multiSelect\" rel=\"Ext.view.View-cfg-multiSelect\" class=\"docClass\">multiSelect</a> = true, this value will be ignored.</p>\n",
        "linenr": 801,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "type": "Array",
        "deprecated": null,
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateEvents",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "shortDoc": "An array of events that, when fired, should trigger this object to\nsave its state (defaults to none). ...",
        "static": false,
        "name": "stateEvents",
        "owner": "Ext.state.Stateful",
        "doc": "<p>An array of events that, when fired, should trigger this object to\nsave its state (defaults to none). <code>stateEvents</code> may be any type\nof event supported by this object, including browser or custom events\n(e.g., <tt>['click', 'customerchange']</tt>).</p>\n\n\n<p>See <code><a href=\"#/api/Ext.view.View-cfg-stateful\" rel=\"Ext.view.View-cfg-stateful\" class=\"docClass\">stateful</a></code> for an explanation of saving and\nrestoring object state.</p>\n\n",
        "linenr": 64,
        "html_filename": "Stateful.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateId",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "shortDoc": "The unique id for this object to use for state management purposes. ...",
        "static": false,
        "name": "stateId",
        "owner": "Ext.state.Stateful",
        "doc": "<p>The unique id for this object to use for state management purposes.</p>\n\n<p>See <a href=\"#/api/Ext.view.View-cfg-stateful\" rel=\"Ext.view.View-cfg-stateful\" class=\"docClass\">stateful</a> for an explanation of saving and restoring state.</p>\n\n",
        "linenr": 58,
        "html_filename": "Stateful.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Stateful.html#Ext-state-Stateful-cfg-stateful",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "shortDoc": "A flag which causes the object to attempt to restore the state of\ninternal properties from a saved state on startup. ...",
        "static": false,
        "name": "stateful",
        "owner": "Ext.state.Stateful",
        "doc": "<p>A flag which causes the object to attempt to restore the state of\ninternal properties from a saved state on startup. The object must have\na <code><a href=\"#/api/Ext.view.View-cfg-stateId\" rel=\"Ext.view.View-cfg-stateId\" class=\"docClass\">stateId</a></code> for state to be managed.\nAuto-generated ids are not guaranteed to be stable across page loads and\ncannot be relied upon to save and restore the same state for a object.<p>\n<p>For state saving to work, the state manager's provider must have been\nset to an implementation of <a href=\"#/api/Ext.state.Provider\" rel=\"Ext.state.Provider\" class=\"docClass\">Ext.state.Provider</a> which overrides the\n<a href=\"#/api/Ext.state.Provider-method-set\" rel=\"Ext.state.Provider-method-set\" class=\"docClass\">set</a> and <a href=\"#/api/Ext.state.Provider-method-get\" rel=\"Ext.state.Provider-method-get\" class=\"docClass\">get</a>\nmethods to save and recall name/value pairs. A built-in implementation,\n<a href=\"#/api/Ext.state.CookieProvider\" rel=\"Ext.state.CookieProvider\" class=\"docClass\">Ext.state.CookieProvider</a> is available.</p>\n<p>To set the state provider for the current page:</p>\n<pre><code>Ext.state.Manager.setProvider(new Ext.state.CookieProvider({\n    expires: new Date(new Date().getTime()+(1000*60*60*24*7)), //7 days from now\n}));\n</code></pre>\n<p>A stateful object attempts to save state when one of the events\nlisted in the <code><a href=\"#/api/Ext.view.View-cfg-stateEvents\" rel=\"Ext.view.View-cfg-stateEvents\" class=\"docClass\">stateEvents</a></code> configuration fires.</p>\n<p>To save state, a stateful object first serializes its state by\ncalling <b><code><a href=\"#/api/Ext.view.View-method-getState\" rel=\"Ext.view.View-method-getState\" class=\"docClass\">getState</a></code></b>. By default, this function does\nnothing. The developer must provide an implementation which returns an\nobject hash which represents the restorable state of the object.</p>\n<p>The value yielded by getState is passed to <a href=\"#/api/Ext.state.Manager-method-set\" rel=\"Ext.state.Manager-method-set\" class=\"docClass\">Ext.state.Manager.set</a>\nwhich uses the configured <a href=\"#/api/Ext.state.Provider\" rel=\"Ext.state.Provider\" class=\"docClass\">Ext.state.Provider</a> to save the object\nkeyed by the <code><a href=\"#/api/Ext.view.View-cfg-stateId\" rel=\"Ext.view.View-cfg-stateId\" class=\"docClass\">stateId</a></code></p>.\n<p>During construction, a stateful object attempts to <i>restore</i>\nits state by calling <a href=\"#/api/Ext.state.Manager-method-get\" rel=\"Ext.state.Manager-method-get\" class=\"docClass\">Ext.state.Manager.get</a> passing the\n<code><a href=\"#/api/Ext.view.View-cfg-stateId\" rel=\"Ext.view.View-cfg-stateId\" class=\"docClass\">stateId</a></code></p>\n<p>The resulting object is passed to <b><code><a href=\"#/api/Ext.view.View-method-applyState\" rel=\"Ext.view.View-method-applyState\" class=\"docClass\">applyState</a></code></b>.\nThe default implementation of <code><a href=\"#/api/Ext.view.View-method-applyState\" rel=\"Ext.view.View-method-applyState\" class=\"docClass\">applyState</a></code> simply copies\nproperties into the object, but a developer may override this to support\nmore behaviour.</p>\n<p>You can perform extra processing on state save and restore by attaching\nhandlers to the <a href=\"#/api/Ext.view.View-event-beforestaterestore\" rel=\"Ext.view.View-event-beforestaterestore\" class=\"docClass\">beforestaterestore</a>, <a href=\"#/api/Ext.view.View-event-staterestore\" rel=\"Ext.view.View-event-staterestore\" class=\"docClass\">staterestore</a>,\n<a href=\"#/api/Ext.view.View-event-beforestatesave\" rel=\"Ext.view.View-event-beforestatesave\" class=\"docClass\">beforestatesave</a> and <a href=\"#/api/Ext.view.View-event-statesave\" rel=\"Ext.view.View-event-statesave\" class=\"docClass\">statesave</a> events.</p>\n\n",
        "linenr": 18,
        "html_filename": "Stateful.html"
      },
      {
        "inheritable": false,
        "type": "Ext.data.Store",
        "deprecated": null,
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-store",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "static": false,
        "name": "store",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>@required\nThe <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> to bind this DataView to.</p>\n",
        "linenr": 33,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-style",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "A custom style specification to be applied to this component's Element. ...",
        "static": false,
        "name": "style",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A custom style specification to be applied to this component's Element.  Should be a valid argument to\n<a href=\"#/api/Ext.core.Element-method-applyStyles\" rel=\"Ext.core.Element-method-applyStyles\" class=\"docClass\">Ext.core.Element.applyStyles</a>.</p>\n\n<pre><code>        new Ext.panel.Panel({\n            title: 'Some Title',\n            renderTo: Ext.getBody(),\n            width: 400, height: 300,\n            layout: 'form',\n            items: [{\n                xtype: 'textarea',\n                style: {\n                    width: '95%',\n                    marginBottom: '10px'\n                }\n            },\n            new Ext.button.Button({\n                text: 'Send',\n                minWidth: '100',\n                style: {\n                    marginBottom: '10px'\n                }\n            })\n            ]\n        });\n     </code></pre>\n\n",
        "linenr": 321,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-styleHtmlCls",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "The class that is added to the content target when you set styleHtmlContent to true. ...",
        "static": false,
        "name": "styleHtmlCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The class that is added to the content target when you set styleHtmlContent to true.\nDefaults to 'x-html'</p>\n",
        "linenr": 455,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-styleHtmlContent",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "True to automatically style the html inside the content target of this component (body for panels). ...",
        "static": false,
        "name": "styleHtmlContent",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>True to automatically style the html inside the content target of this component (body for panels).\nDefaults to false.</p>\n",
        "linenr": 448,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Component2.html#Ext-Component-cfg-toFrontOnShow",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "True to automatically call toFront when the show method is called\non an already visible, floating component (default ...",
        "static": false,
        "name": "toFrontOnShow",
        "owner": "Ext.Component",
        "doc": "<p>True to automatically call <a href=\"#/api/Ext.view.View-method-toFront\" rel=\"Ext.view.View-method-toFront\" class=\"docClass\">toFront</a> when the <a href=\"#/api/Ext.view.View-event-show\" rel=\"Ext.view.View-event-show\" class=\"docClass\">show</a> method is called\non an already visible, floating component (default is <code>true</code>).</p>\n\n",
        "linenr": 202,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "type": "String/Array/Ext.XTemplate",
        "deprecated": null,
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-tpl",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "@required\nThe HTML fragment or an array of fragments that will make up the template used by this DataView. ...",
        "static": false,
        "name": "tpl",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>@required\nThe HTML fragment or an array of fragments that will make up the template used by this DataView.  This should\nbe specified in the same format expected by the constructor of <a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a>.</p>\n",
        "linenr": 27,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-tplWriteMode",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "The Ext.(X)Template method to use when\nupdating the content area of the Component. ...",
        "static": false,
        "name": "tplWriteMode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The Ext.(X)Template method to use when\nupdating the content area of the Component. Defaults to <code>'overwrite'</code>\n(see <code><a href=\"#/api/Ext.XTemplate-method-overwrite\" rel=\"Ext.XTemplate-method-overwrite\" class=\"docClass\">Ext.XTemplate.overwrite</a></code>).</p>\n",
        "linenr": 266,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractView.html#Ext-view-AbstractView-cfg-trackOver",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "static": false,
        "name": "trackOver",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>True to enable mouseenter and mouseleave events</p>\n",
        "linenr": 121,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "type": "String/Array",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-ui",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "A set style for a component. ...",
        "static": false,
        "name": "ui",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>A set style for a component. Can be a string or an Array of multiple strings (UIs)</p>\n",
        "linenr": 308,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-cfg-width",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "static": false,
        "name": "width",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>The width of this component in pixels.</p>\n",
        "linenr": 350,
        "html_filename": "AbstractComponent.html"
      }
    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.core.Element/String/Object",
            "optional": false,
            "doc": "<p>The configuration options may be specified as either:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>an element</b> :\n<p class=\"sub-desc\">it is set as the internal element and its id used as the component id</p></li>\n<li><b>a string</b> :\n<p class=\"sub-desc\">it is assumed to be the id of an existing element and is used as the component id</p></li>\n<li><b>anything else</b> :\n<p class=\"sub-desc\">it is assumed to be a standard config object and is applied to the component</p></li>\n</ul></div>\n\n",
            "name": "config"
          }
        ],
        "href": "Component2.html#Ext-Component-method-constructor",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Creates new Component. ...",
        "static": false,
        "name": "constructor",
        "owner": "Ext.Component",
        "doc": "<p>Creates new Component.</p>\n",
        "linenr": 1,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": {
          "version": "4.0",
          "text": "<p>Replaced by <a href=\"#/api/Ext.picker.Time-method-addCls\" rel=\"Ext.picker.Time-method-addCls\" class=\"docClass\">addCls</a></p>\n\n\n\n",
          "tagname": "deprecated",
          "doc": "Adds a CSS class to the top level element representing this component."
        },
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The CSS class name to add</p>\n",
            "name": "cls"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addClass",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>Returns the Component to allow method chaining.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Adds a CSS class to the top level element representing this component. ...",
        "static": false,
        "name": "addClass",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Adds a CSS class to the top level element representing this component.</p>\n",
        "linenr": 2359,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The CSS class name to add</p>\n",
            "name": "cls"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addCls",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>Returns the Component to allow method chaining.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Adds a CSS class to the top level element representing this component. ...",
        "static": false,
        "name": "addCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Adds a CSS class to the top level element representing this component.</p>\n",
        "linenr": 2337,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>A string or an array of strings to add to the uiCls</p>\n",
            "name": "cls"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>(Boolean) skip True to skip adding it to the class and do it later (via the return)</p>\n",
            "name": "skip"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addClsWithUI",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Adds a cls to the uiCls array, which will also call addUIClsToElement and adds\nto all elements of this component. ...",
        "static": false,
        "name": "addClsWithUI",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Adds a cls to the uiCls array, which will also call <a href=\"#/api/Ext.view.View-method-addUIClsToElement\" rel=\"Ext.view.View-method-addUIClsToElement\" class=\"docClass\">addUIClsToElement</a> and adds\nto all elements of this component.</p>\n",
        "linenr": 1494,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>Either an object with event names as properties with a value of <code>true</code> or the first\nevent name string if multiple event names are being passed as separate parameters. Usage:</p>\n\n<pre><code>this.addEvents({\n    storeloaded: true,\n    storecleared: true\n});\n</code></pre>\n",
            "name": "o"
          },
          {
            "type": "String...",
            "optional": false,
            "doc": "<p>Optional additional event names if multiple event names are being passed as separate\nparameters. Usage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n",
            "name": "more"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-addEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Adds the specified events to the list of events which this Observable may fire. ...",
        "static": false,
        "name": "addEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n",
        "linenr": 494,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.view.View-method-fireEvent\" rel=\"Ext.view.View-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "name": "options"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-addListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Appends an event handler to this object. ...",
        "static": false,
        "name": "addListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Appends an event handler to this object.</p>\n",
        "linenr": 278,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Observable/Element",
            "optional": false,
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "name": "opt"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed. ...",
        "static": false,
        "name": "addManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "linenr": 156,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>The event name or an array of event names.</p>\n",
            "name": "events"
          }
        ],
        "href": "Stateful.html#Ext-state-Stateful-method-addStateEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "shortDoc": "Add events that will trigger the state to be saved. ...",
        "static": false,
        "name": "addStateEvents",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Add events that will trigger the state to be saved.</p>\n",
        "linenr": 159,
        "html_filename": "Stateful.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The UI to remove from the element</p>\n",
            "name": "ui"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "force"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-addUIClsToElement",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Method which adds a specified UI + uiCls to the components element. ...",
        "static": false,
        "name": "addUIClsToElement",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method which adds a specified UI + uiCls to the components element.\nCan be overridden to remove the UI from more than just the components element.</p>\n",
        "linenr": 1565,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted width that was set</p>\n",
            "name": "adjWidth"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted height that was set</p>\n",
            "name": "adjHeight"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Whether or not the height/width are stored on the component permanently</p>\n",
            "name": "isSetSize"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>Container requesting the layout. Only used when isSetSize is false.</p>\n",
            "name": "callingContainer"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-afterComponentLayout",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": " ...",
        "static": false,
        "name": "afterComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "\n",
        "linenr": 2730,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The element or <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> to align to. If passing a component, it must\nbe a omponent instance. If a string id is passed, it will be used as an element id.</p>\n",
            "name": "element"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>(optional, defaults to \"tl-bl?\") The position to align to (see <a href=\"#/api/Ext.core.Element-method-alignTo\" rel=\"Ext.core.Element-method-alignTo\" class=\"docClass\">Ext.core.Element.alignTo</a> for more details).</p>\n",
            "name": "position"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) Offset the positioning by [x, y]</p>\n",
            "name": "offsets"
          }
        ],
        "href": "Floating.html#Ext-util-Floating-method-alignTo",
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "shortDoc": "Aligns this floating Component to the specified element ...",
        "static": false,
        "name": "alignTo",
        "owner": "Ext.util.Floating",
        "doc": "<p>Aligns this floating Component to the specified element</p>\n",
        "linenr": 173,
        "html_filename": "Floating.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing properties which describe the animation's start and end states, and the timeline of the animation.</p>\n",
            "name": "config"
          }
        ],
        "href": "Animate.html#Ext-util-Animate-method-animate",
        "return": {
          "type": "Object",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "shortDoc": "Perform custom animation on this object. ...",
        "static": false,
        "name": "animate",
        "owner": "Ext.util.Animate",
        "doc": "<p>Perform custom animation on this object.<p>\n<p>This method is applicable to both the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a> class and the <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Element</a> class.\nIt performs animated transitions of certain properties of this object over a specified timeline.</p>\n<p>The sole parameter is an object which specifies start property values, end property values, and properties which\ndescribe the timeline. Of the properties listed below, only <b><code>to</code></b> is mandatory.</p>\n<p>Properties include<ul>\n<li><code>from</code> <div class=\"sub-desc\">An object which specifies start values for the properties being animated.\nIf not supplied, properties are animated from current settings. The actual properties which may be animated depend upon\nths object being animated. See the sections below on Element and Component animation.<div></li>\n<li><code>to</code> <div class=\"sub-desc\">An object which specifies end values for the properties being animated.</div></li>\n<li><code>duration</code><div class=\"sub-desc\">The duration <b>in milliseconds</b> for which the animation will run.</div></li>\n<li><code>easing</code> <div class=\"sub-desc\">A string value describing an easing type to modify the rate of change from the default linear to non-linear. Values may be one of:<code><ul>\n<li>ease</li>\n<li>easeIn</li>\n<li>easeOut</li>\n<li>easeInOut</li>\n<li>backIn</li>\n<li>backOut</li>\n<li>elasticIn</li>\n<li>elasticOut</li>\n<li>bounceIn</li>\n<li>bounceOut</li>\n</ul></code></div></li>\n<li><code>keyframes</code> <div class=\"sub-desc\">This is an object which describes the state of animated properties at certain points along the timeline.\nit is an object containing properties who's names are the percentage along the timeline being described and who's values specify the animation state at that point.</div></li>\n<li><code>listeners</code> <div class=\"sub-desc\">This is a standard <a href=\"#/api/Ext.util.Observable-cfg-listeners\" rel=\"Ext.util.Observable-cfg-listeners\" class=\"docClass\">listeners</a> configuration object which may be used\nto inject behaviour at either the <code>beforeanimate</code> event or the <code>afteranimate</code> event.</div></li>\n</ul></p>\n<h3>Animating an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Element</a></h3>\nWhen animating an Element, the following properties may be specified in <code>from</code>, <code>to</code>, and <code>keyframe</code> objects:<ul>\n<li><code>x</code> <div class=\"sub-desc\">The page X position in pixels.</div></li>\n<li><code>y</code> <div class=\"sub-desc\">The page Y position in pixels</div></li>\n<li><code>left</code> <div class=\"sub-desc\">The element's CSS <code>left</code> value. Units must be supplied.</div></li>\n<li><code>top</code> <div class=\"sub-desc\">The element's CSS <code>top</code> value. Units must be supplied.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The element's CSS <code>width</code> value. Units must be supplied.</div></li>\n<li><code>height</code> <div class=\"sub-desc\">The element's CSS <code>height</code> value. Units must be supplied.</div></li>\n<li><code>scrollLeft</code> <div class=\"sub-desc\">The element's <code>scrollLeft</code> value.</div></li>\n<li><code>scrollTop</code> <div class=\"sub-desc\">The element's <code>scrollLeft</code> value.</div></li>\n<li><code>opacity</code> <div class=\"sub-desc\">The element's <code>opacity</code> value. This must be a value between <code>0</code> and <code>1</code>.</div></li>\n</ul>\n<p><b>Be aware than animating an Element which is being used by an <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> Component without in some way informing the Component about the changed element state\nwill result in incorrect Component behaviour. This is because the Component will be using the old state of the element. To avoid this problem, it is now possible to\ndirectly animate certain properties of Components.</b></p>\n<h3>Animating a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a></h3>\nWhen animating an Element, the following properties may be specified in <code>from</code>, <code>to</code>, and <code>keyframe</code> objects:<ul>\n<li><code>x</code> <div class=\"sub-desc\">The Component's page X position in pixels.</div></li>\n<li><code>y</code> <div class=\"sub-desc\">The Component's page Y position in pixels</div></li>\n<li><code>left</code> <div class=\"sub-desc\">The Component's <code>left</code> value in pixels.</div></li>\n<li><code>top</code> <div class=\"sub-desc\">The Component's <code>top</code> value in pixels.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The Component's <code>width</code> value in pixels.</div></li>\n<li><code>width</code> <div class=\"sub-desc\">The Component's <code>width</code> value in pixels.</div></li>\n<li><code>dynamic</code> <div class=\"sub-desc\">Specify as true to update the Component's layout (if it is a Container) at every frame\nof the animation. <i>Use sparingly as laying out on every intermediate size change is an expensive operation</i>.</div></li>\n</ul>\n<p>For example, to animate a Window to a new size, ensuring that its internal layout, and any shadow is correct:</p>\n<pre><code>myWindow = Ext.create('Ext.window.Window', {\n    title: 'Test Component animation',\n    width: 500,\n    height: 300,\n    layout: {\n        type: 'hbox',\n        align: 'stretch'\n    },\n    items: [{\n        title: 'Left: 33%',\n        margins: '5 0 5 5',\n        flex: 1\n    }, {\n        title: 'Left: 66%',\n        margins: '5 5 5 5',\n        flex: 2\n    }]\n});\nmyWindow.show();\nmyWindow.header.el.on('click', function() {\n    myWindow.animate({\n        to: {\n            width: (myWindow.getWidth() == 500) ? 700 : 500,\n            height: (myWindow.getHeight() == 300) ? 400 : 300,\n        }\n    });\n});\n</code></pre>\n<p>For performance reasons, by default, the internal layout is only updated when the Window reaches its final <code>\"to\"</code> size. If dynamic updating of the Window's child\nComponents is required, then configure the animation with <code>dynamic: true</code> and the two child items will maintain their proportions during the animation.</p>\n\n",
        "linenr": 207,
        "html_filename": "Animate.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The state</p>\n",
            "name": "state"
          }
        ],
        "href": "Stateful.html#Ext-state-Stateful-method-applyState",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "shortDoc": "Applies the state to the object. ...",
        "static": false,
        "name": "applyState",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Applies the state to the object. This should be overridden in subclasses to do\nmore complex state operations. By default it applies the state properties onto\nthe current object.</p>\n",
        "linenr": 225,
        "html_filename": "Stateful.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted width that was set</p>\n",
            "name": "adjWidth"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted height that was set</p>\n",
            "name": "adjHeight"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Whether or not the height/width are stored on the component permanently</p>\n",
            "name": "isSetSize"
          },
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "<p>Container requesting sent the layout. Only used when isSetSize is false.</p>\n",
            "name": "callingContainer"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-beforeComponentLayout",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Occurs before componentLayout is run. ...",
        "static": false,
        "name": "beforeComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Occurs before componentLayout is run. Returning false from this method will prevent the componentLayout\nfrom being executed.</p>\n",
        "linenr": 2741,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Store",
            "optional": false,
            "doc": "<p>The store to bind to this view</p>\n",
            "name": "store"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "initial"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-bindStore",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Changes the data store bound to this view and refreshes it. ...",
        "static": false,
        "name": "bindStore",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Changes the data store bound to this view and refreshes it.</p>\n",
        "linenr": 536,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope of the function (defaults to current node)</p>\n",
            "name": "scope"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) The args to call the function with (default to passing the current component)</p>\n",
            "name": "args"
          }
        ],
        "href": "Component2.html#Ext-Component-method-bubble",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Bubbles up the component/container heirarchy, calling the specified function with each component. ...",
        "static": false,
        "name": "bubble",
        "owner": "Ext.Component",
        "doc": "<p>Bubbles up the component/container heirarchy, calling the specified function with each component. The scope (<i>this</i>) of\nfunction call will be the scope provided or the current component. The arguments to the function\nwill be the args provided or the current component. If the function returns false at any point,\nthe bubble is stopped.</p>\n",
        "linenr": 1007,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result after calling the overridden method</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "static": false,
        "name": "callOverridden",
        "owner": "Ext.Base",
        "doc": "<p>Call the original method that was previously overridden with Ext.Base.override</p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 269,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callParent",
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result from the superclass' method</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Call the parent's overridden method. ...",
        "static": false,
        "name": "callParent",
        "owner": "Ext.Base",
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n",
        "linenr": 124,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Floating.html#Ext-util-Floating-method-center",
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "shortDoc": "Center this Component in its container. ...",
        "static": false,
        "name": "center",
        "owner": "Ext.util.Floating",
        "doc": "<p>Center this Component in its container.</p>\n",
        "linenr": 251,
        "html_filename": "Floating.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "View.html#Ext-view-View-method-clearHighlight",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Un-highlight the currently highlighted item, if any. ...",
        "static": false,
        "name": "clearHighlight",
        "owner": "Ext.view.View",
        "doc": "<p>Un-highlight the currently highlighted item, if any.</p>\n",
        "linenr": 574,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-clearListeners",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes all listeners for this object including the managed listeners ...",
        "static": false,
        "name": "clearListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n",
        "linenr": 425,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes all managed listeners for this object. ...",
        "static": false,
        "name": "clearManagedListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all managed listeners for this object.</p>\n",
        "linenr": 454,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>A new config containing any properties to override in the cloned version.\nAn id property can be passed on this object, otherwise one will be generated to avoid duplicates.</p>\n",
            "name": "overrides"
          }
        ],
        "href": "Component2.html#Ext-Component-method-cloneConfig",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>clone The cloned copy of this component</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Clone the current component using the original config values passed into this instance by default. ...",
        "static": false,
        "name": "cloneConfig",
        "owner": "Ext.Component",
        "doc": "<p>Clone the current component using the original config values passed into this instance by default.</p>\n",
        "linenr": 947,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>s to be rendered into the DataView.</p>\n",
            "name": "records"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>the index number of the Record being prepared for rendering.</p>\n",
            "name": "startIndex"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-collectData",
        "return": {
          "type": "Array",
          "doc": "<p>An Array of data objects to be processed by a repeating XTemplate. May also\ncontain <i>named</i> properties.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Function which can be overridden which returns the data object passed to this\nDataView's template to render the whole...",
        "static": false,
        "name": "collectData",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Function which can be overridden which returns the data object passed to this\nDataView's <a href=\"#/api/Ext.view.View-cfg-tpl\" rel=\"Ext.view.View-cfg-tpl\" class=\"docClass\">template</a> to render the whole DataView.</p>\n\n\n<p>This is usually an Array of data objects, each element of which is processed by an\n<a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">XTemplate</a> which uses <tt>'&lt;tpl for=\".\"&gt;'</tt> to iterate over its supplied\ndata object as an Array. However, <i>named</i> properties may be placed into the data object to\nprovide non-repeating data such as headings, totals etc.</p>\n\n",
        "linenr": 406,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Model/Index",
            "optional": false,
            "doc": "<p>An array of records or an index</p>\n",
            "name": "records"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Set to false to not fire a deselect event</p>\n",
            "name": "suppressEvent"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-deselect",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Deselects a record instance by record instance or index. ...",
        "static": false,
        "name": "deselect",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Deselects a record instance by record instance or index.</p>\n",
        "linenr": 683,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-destroy",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Destroys the Component. ...",
        "static": false,
        "name": "destroy",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Destroys the Component.</p>\n",
        "linenr": 2923,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Passing true, will supress the 'disable' event from being fired.</p>\n",
            "name": "silent"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-disable",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Disable the component. ...",
        "static": false,
        "name": "disable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Disable the component.</p>\n",
        "linenr": 2276,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-doAutoRender",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Handles autoRender. ...",
        "static": false,
        "name": "doAutoRender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Handles autoRender.\nFloating Components may have an ownerCt. If they are asking to be constrained, constrain them within that\nownerCt, and have their z-index managed locally. Floating Components are always rendered to document.body</p>\n",
        "linenr": 936,
        "html_filename": "AbstractComponent.html"
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
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "height"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "isSetSize"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "callingContainer"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-doComponentLayout",
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "This method needs to be called whenever you change something on this component that requires the Component's\nlayout t...",
        "static": false,
        "name": "doComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This method needs to be called whenever you change something on this component that requires the Component's\nlayout to be recalculated.</p>\n",
        "linenr": 2661,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>Optional. The Element or <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> into which this Component is to be constrained.</p>\n",
            "name": "constrainTo"
          }
        ],
        "href": "Floating.html#Ext-util-Floating-method-doConstrain",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "shortDoc": "Moves this floating Component into a constrain region. ...",
        "static": false,
        "name": "doConstrain",
        "owner": "Ext.util.Floating",
        "doc": "<p>Moves this floating Component into a constrain region.</p>\n\n\n<p>By default, this Component is constrained to be within the container it was added to, or the element\nit was rendered to.</p>\n\n\n<p>An alternative constraint may be passed.</p>\n\n",
        "linenr": 135,
        "html_filename": "Floating.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Passing false will supress the 'enable' event from being fired.</p>\n",
            "name": "silent"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-enable",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Enable the component ...",
        "static": false,
        "name": "enable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Enable the component</p>\n",
        "linenr": 2253,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/[String]",
            "optional": false,
            "doc": "<p>The event name to bubble, or an Array of event names.</p>\n",
            "name": "events"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-enableBubble",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling this.getBubbleTarget() if\npresent. ...",
        "static": false,
        "name": "enableBubble",
        "owner": "Ext.util.Observable",
        "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling <code>this.getBubbleTarget()</code> if\npresent. There is no implementation in the Observable base class.</p>\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers.\nSee <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default implementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the\nComponent's immediate owner. But if a known target is required, this can be overridden to access the\nrequired target more quickly.</p>\n\n<p>Example:</p>\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n    //  Add functionality to Field's initComponent to enable the change event to bubble\n    initComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field's events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n",
        "linenr": 609,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "\n",
            "name": "node"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-findItemByChild",
        "return": {
          "type": "HTMLElement",
          "doc": "<p>The template node</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Returns the template node the passed child belongs to, or null if it doesn't belong to one. ...",
        "static": false,
        "name": "findItemByChild",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Returns the template node the passed child belongs to, or null if it doesn't belong to one.</p>\n",
        "linenr": 598,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-findLayoutController",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "This method finds the topmost active layout who's processing will eventually determine the size and position of this\n...",
        "static": false,
        "name": "findLayoutController",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This method finds the topmost active layout who's processing will eventually determine the size and position of this\nComponent.<p>\n<p>This method is useful when dynamically adding Components into Containers, and some processing must take place after the\nfinal sizing and positioning of the Component has been performed.</p>\n\n",
        "linenr": 892,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The custom function to call with the arguments (container, this component).</p>\n",
            "name": "fn"
          }
        ],
        "href": "Component2.html#Ext-Component-method-findParentBy",
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>The first Container for which the custom function returns true</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Find a container above this component at any level by a custom function. ...",
        "static": false,
        "name": "findParentBy",
        "owner": "Ext.Component",
        "doc": "<p>Find a container above this component at any level by a custom function. If the passed function returns\ntrue, the container will be returned.</p>\n",
        "linenr": 978,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Class",
            "optional": false,
            "doc": "<p>The xtype string for a component, or the class of the component directly</p>\n",
            "name": "xtype"
          }
        ],
        "href": "Component2.html#Ext-Component-method-findParentByType",
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>The first Container which matches the given xtype or class</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Find a container above this component at any level by xtype or class\n\n\nSee also the up method. ...",
        "static": false,
        "name": "findParentByType",
        "owner": "Ext.Component",
        "doc": "<p>Find a container above this component at any level by xtype or class</p>\n\n\n<p>See also the <a href=\"#/api/Ext.Component-method-up\" rel=\"Ext.Component-method-up\" class=\"docClass\">up</a> method.</p>\n\n",
        "linenr": 992,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "\n",
            "name": "e"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-findTargetByEvent",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Returns the template node by the Ext.EventObject or null if it is not found. ...",
        "static": false,
        "name": "findTargetByEvent",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Returns the template node by the <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> or null if it is not found.</p>\n",
        "linenr": 607,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to fire.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Object...",
            "optional": false,
            "doc": "<p>Variable number of parameters are passed to handlers.</p>\n",
            "name": "args"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-fireEvent",
        "return": {
          "type": "Boolean",
          "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Fires the specified event with the passed parameters (minus the event name, plus the options object passed\nto addList...",
        "static": false,
        "name": "fireEvent",
        "owner": "Ext.util.Observable",
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.view.View-method-addListener\" rel=\"Ext.view.View-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.view.View-method-enableBubble\" rel=\"Ext.view.View-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
        "linenr": 233,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If applicable, true to also select the text in this component</p>\n",
            "name": "selectText"
          },
          {
            "type": "Boolean/Number",
            "optional": true,
            "doc": "<p>(optional) Delay the focus this number of milliseconds (true for 10 milliseconds).</p>\n",
            "name": "delay"
          }
        ],
        "href": "Component2.html#Ext-Component-method-focus",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Try to focus this component. ...",
        "static": false,
        "name": "focus",
        "owner": "Ext.Component",
        "doc": "<p>Try to focus this component.</p>\n",
        "linenr": 856,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-forceComponentLayout",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Forces this component to redo its componentLayout. ...",
        "static": false,
        "name": "forceComponentLayout",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Forces this component to redo its componentLayout.</p>\n",
        "linenr": 2704,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-getActiveAnimation",
        "return": {
          "type": "Mixed",
          "doc": "<p>anim if element has active effects, else false</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "shortDoc": "Returns thq current animation if this object has any effects actively running or queued, else returns false. ...",
        "static": false,
        "name": "getActiveAnimation",
        "owner": "Ext.util.Animate",
        "doc": "<p>Returns thq current animation if this object has any effects actively running or queued, else returns false.</p>\n",
        "linenr": 377,
        "html_filename": "Animate.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If true the element's left and top are returned instead of page XY (defaults to false)</p>\n",
            "name": "local"
          }
        ],
        "href": "Component2.html#Ext-Component-method-getBox",
        "return": {
          "type": "Object",
          "doc": "<p>box An object in the format {x, y, width, height}</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Gets the current box measurements of the component's underlying element. ...",
        "static": false,
        "name": "getBox",
        "owner": "Ext.Component",
        "doc": "<p>Gets the current box measurements of the component's underlying element.</p>\n",
        "linenr": 541,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getBubbleTarget",
        "return": {
          "type": "Ext.container.Container",
          "doc": "<p>the Container which owns this Component.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Provides the link for Observable's fireEvent method to bubble up the ownership hierarchy. ...",
        "static": false,
        "name": "getBubbleTarget",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Provides the link for Observable's fireEvent method to bubble up the ownership hierarchy.</p>\n",
        "linenr": 2474,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getEl",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Retrieves the top level element representing this component. ...",
        "static": false,
        "name": "getEl",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Retrieves the top level element representing this component.</p>\n",
        "linenr": 2090,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getHeight",
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Gets the current height of the component's underlying element. ...",
        "static": false,
        "name": "getHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the current height of the component's underlying element.</p>\n",
        "linenr": 2830,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getId",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Retrieves the id of this component. ...",
        "static": false,
        "name": "getId",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Retrieves the id of this component.\nWill autogenerate an id if one has not already been set.</p>\n",
        "linenr": 2078,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Number/Element/HTMLElement",
            "optional": false,
            "doc": "<p>Index, element id or element you want\nto put this component before.</p>\n",
            "name": "position"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getInsertPosition",
        "return": {
          "type": "HTMLElement",
          "doc": "<p>DOM element that you can use in the insertBefore</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "This function takes the position argument passed to onRender and returns a\nDOM element that you can use in the insert...",
        "static": false,
        "name": "getInsertPosition",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This function takes the position argument passed to onRender and returns a\nDOM element that you can use in the insertBefore.</p>\n",
        "linenr": 1705,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getLoader",
        "return": {
          "type": "Ext.ComponentLoader",
          "doc": "<p>The loader instance, null if it doesn't exist.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Gets the Ext.ComponentLoader for this Component. ...",
        "static": false,
        "name": "getLoader",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the <a href=\"#/api/Ext.ComponentLoader\" rel=\"Ext.ComponentLoader\" class=\"docClass\">Ext.ComponentLoader</a> for this Component.</p>\n",
        "linenr": 2838,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-getName",
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the current class' name in string format. ...",
        "static": false,
        "name": "getName",
        "owner": "Ext.Base",
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
        "linenr": 631,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "HTMLElement/String/Number/Ext.data.Model",
            "optional": false,
            "doc": "<p>An HTMLElement template node, index of a template node,\nthe id of a template node or the record associated with the node.</p>\n",
            "name": "nodeInfo"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-getNode",
        "return": {
          "type": "HTMLElement",
          "doc": "<p>The node or null if it wasn't found</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Gets a template node. ...",
        "static": false,
        "name": "getNode",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Gets a template node.</p>\n",
        "linenr": 692,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) The index of the first node in the range</p>\n",
            "name": "start"
          },
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) The index of the last node in the range</p>\n",
            "name": "end"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-getNodes",
        "return": {
          "type": "Array",
          "doc": "<p>An array of nodes</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Gets a range nodes. ...",
        "static": false,
        "name": "getNodes",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Gets a range nodes.</p>\n",
        "linenr": 726,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "pluginId"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getPlugin",
        "return": {
          "type": "Ext.AbstractPlugin",
          "doc": "<p>pluginInstance</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Retrieves a plugin by its pluginId which has been bound to this\ncomponent. ...",
        "static": false,
        "name": "getPlugin",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Retrieves a plugin by its pluginId which has been bound to this\ncomponent.</p>\n",
        "linenr": 2966,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) If true the element's left and top are returned instead of page XY (defaults to false)</p>\n",
            "name": "local"
          }
        ],
        "href": "Component2.html#Ext-Component-method-getPosition",
        "return": {
          "type": "Array",
          "doc": "<p>The XY position of the element (e.g., [100, 200])</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Gets the current XY position of the component's underlying element. ...",
        "static": false,
        "name": "getPosition",
        "owner": "Ext.Component",
        "doc": "<p>Gets the current XY position of the component's underlying element.</p>\n",
        "linenr": 606,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Element/HTMLElement",
            "optional": false,
            "doc": "<p>The node to evaluate</p>\n",
            "name": "node"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-getRecord",
        "return": {
          "type": "Record",
          "doc": "<p>record The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> object</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Gets a record from a node ...",
        "static": false,
        "name": "getRecord",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Gets a record from a node</p>\n",
        "linenr": 651,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The nodes to evaluate</p>\n",
            "name": "nodes"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-getRecords",
        "return": {
          "type": "Array",
          "doc": "<p>records The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> objects</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Gets an array of the records from an array of nodes ...",
        "static": false,
        "name": "getRecords",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Gets an array of the records from an array of nodes</p>\n",
        "linenr": 633,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-getSelectedNodes",
        "return": {
          "type": "Array",
          "doc": "<p>An array of HTMLElements</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Gets the currently selected nodes. ...",
        "static": false,
        "name": "getSelectedNodes",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Gets the currently selected nodes.</p>\n",
        "linenr": 616,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-getSelectedRecords",
        "return": {
          "type": "Array",
          "doc": "<p>An array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> objects</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Gets an array of the selected records ...",
        "static": false,
        "name": "getSelectedRecords",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Gets an array of the selected records</p>\n",
        "linenr": 823,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-getSelectionCount",
        "return": {
          "type": "Number",
          "doc": "<p>The node count</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Gets the number of selected nodes. ...",
        "static": false,
        "name": "getSelectionCount",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Gets the number of selected nodes.</p>\n",
        "linenr": 812,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-getSelectionModel",
        "return": {
          "type": "Ext.selection.Model",
          "doc": "<p>The selection model</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Gets the selection model for this view. ...",
        "static": false,
        "name": "getSelectionModel",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Gets the selection model for this view.</p>\n",
        "linenr": 314,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getSize",
        "return": {
          "type": "Object",
          "doc": "<p>An object containing the element's size {width: (element width), height: (element height)}</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Gets the current size of the component's underlying element. ...",
        "static": false,
        "name": "getSize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the current size of the component's underlying element.</p>\n",
        "linenr": 2814,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getState",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "The supplied default state gathering method for the AbstractComponent class. ...",
        "static": false,
        "name": "getState",
        "owner": "Ext.AbstractComponent",
        "doc": "<p></p>The supplied default state gathering method for the AbstractComponent class.</p>\nThis method returns dimension setings such as <code>flex</code>, <code>anchor</code>, <code>width</code>\nand <code>height</code> along with <code>collapsed</code> state.</p></p>\n\n<p>Subclasses which implement more complex state should call the superclass's implementation, and apply their state\nto the result if this basic state is to be saved.</p>\n\n\n<p>Note that Component state will only be saved if the Component has a <a href=\"#/api/Ext.view.View-cfg-stateId\" rel=\"Ext.view.View-cfg-stateId\" class=\"docClass\">stateId</a> and there as a StateProvider\nconfigured for the document.</p>\n\n",
        "linenr": 758,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Stateful.html#Ext-state-Stateful-method-getStateId",
        "return": {
          "type": "String",
          "doc": "<p>The state id, null if not found.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "shortDoc": "Gets the state id for this object. ...",
        "static": false,
        "name": "getStateId",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Gets the state id for this object.</p>\n",
        "linenr": 237,
        "html_filename": "Stateful.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-getStore",
        "return": {
          "type": "Ext.data.Store",
          "doc": "<p>The store</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Returns the store associated with this DataView. ...",
        "static": false,
        "name": "getStore",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Returns the store associated with this DataView.</p>\n",
        "linenr": 528,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getWidth",
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Gets the current width of the component's underlying element. ...",
        "static": false,
        "name": "getWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Gets the current width of the component's underlying element.</p>\n",
        "linenr": 2822,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Component2.html#Ext-Component-method-getXType",
        "return": {
          "type": "String",
          "doc": "<p>The xtype</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Gets the xtype for this component as registered with Ext.ComponentManager. ...",
        "static": false,
        "name": "getXType",
        "owner": "Ext.Component",
        "doc": "<p>Gets the xtype for this component as registered with <a href=\"#/api/Ext.ComponentManager\" rel=\"Ext.ComponentManager\" class=\"docClass\">Ext.ComponentManager</a>. For a list of all\navailable xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header. Example usage:</p>\n\n<pre><code>var t = new Ext.form.field.Text();\nalert(t.getXType());  // alerts 'textfield'\n</code></pre>\n\n",
        "linenr": 965,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-getXTypes",
        "return": {
          "type": "String",
          "doc": "<p>The xtype hierarchy string</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Returns this Component's xtype hierarchy as a slash-delimited string. ...",
        "static": false,
        "name": "getXTypes",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns this Component's xtype hierarchy as a slash-delimited string. For a list of all\navailable xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header.</p>\n\n\n<p><b>If using your own subclasses, be aware that a Component must register its own xtype\nto participate in determination of inherited xtypes.</b></p>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>var t = new Ext.form.field.Text();\nalert(t.getXTypes());  // alerts 'component/field/textfield'\n</code></pre>\n\n",
        "linenr": 2136,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": {
          "version": "4.0",
          "text": "<p>Replaced by <a href=\"#/api/Ext.picker.Time-method-getActiveAnimation\" rel=\"Ext.picker.Time-method-getActiveAnimation\" class=\"docClass\">getActiveAnimation</a></p>\n\n\n\n",
          "tagname": "deprecated",
          "doc": "Returns thq current animation if this object has any effects actively running or queued, else returns false."
        },
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-hasActiveFx",
        "return": {
          "type": "Mixed",
          "doc": "<p>anim if element has active effects, else false</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "shortDoc": "Returns thq current animation if this object has any effects actively running or queued, else returns false. ...",
        "static": false,
        "name": "hasActiveFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Returns thq current animation if this object has any effects actively running or queued, else returns false.</p>\n",
        "linenr": 369,
        "html_filename": "Animate.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to check for</p>\n",
            "name": "eventName"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-hasListener",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the event is being listened for, else false</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Checks to see if this object has any listeners for a specified event ...",
        "static": false,
        "name": "hasListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n",
        "linenr": 530,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The cls to check</p>\n",
            "name": "cls"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-hasUICls",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Checks if there is currently a specified uiCls ...",
        "static": false,
        "name": "hasUICls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Checks if there is currently a specified uiCls</p>\n",
        "linenr": 1554,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Element/Component",
            "optional": false,
            "doc": "<p>Optional, and <b>only valid for <a href=\"#/api/Ext.view.View-cfg-floating\" rel=\"Ext.view.View-cfg-floating\" class=\"docClass\">floating</a> Components such as\n<a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s or <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">ToolTip</a>s, or regular Components which have been configured\nwith <code>floating: true</code>.</b>.\nThe target to which the Component should animate while hiding (defaults to null with no animation)</p>\n",
            "name": "animateTarget"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) A callback function to call after the Component is hidden.</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the callback is executed. Defaults to this Component.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Component2.html#Ext-Component-method-hide",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Hides this Component, setting it to invisible using the configured hideMode. ...",
        "static": false,
        "name": "hide",
        "owner": "Ext.Component",
        "doc": "<p>Hides this Component, setting it to invisible using the configured <a href=\"#/api/Ext.view.View-cfg-hideMode\" rel=\"Ext.view.View-cfg-hideMode\" class=\"docClass\">hideMode</a>.</p>\n",
        "linenr": 751,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item to highlight</p>\n",
            "name": "item"
          }
        ],
        "href": "View.html#Ext-view-View-method-highlightItem",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Highlight a given item in the DataView. ...",
        "static": false,
        "name": "highlightItem",
        "owner": "Ext.view.View",
        "doc": "<p>Highlight a given item in the DataView. This is called by the mouseover handler if <a href=\"#/api/Ext.view.View-cfg-overItemCls\" rel=\"Ext.view.View-cfg-overItemCls\" class=\"docClass\">overItemCls</a>\nand <a href=\"#/api/Ext.view.View-cfg-trackOver\" rel=\"Ext.view.View-cfg-trackOver\" class=\"docClass\">trackOver</a> are configured, but can also be called manually by other code, for instance to\nhandle stepping through the list via keyboard navigation.</p>\n",
        "linenr": 561,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "HTMLElement/String/Number/Record",
            "optional": false,
            "doc": "<p>An HTMLElement template node, index of a template node, the id of a template node\nor a record associated with a node.</p>\n",
            "name": "nodeInfo"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-indexOf",
        "return": {
          "type": "Number",
          "doc": "<p>The index of the node or -1</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Finds the index of the passed node. ...",
        "static": false,
        "name": "indexOf",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Finds the index of the passed node.</p>\n",
        "linenr": 751,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "href": "Base3.html#Ext-Base-method-initConfig",
        "return": {
          "type": "Object",
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Initialize configuration for this class. ...",
        "static": false,
        "name": "initConfig",
        "owner": "Ext.Base",
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n",
        "linenr": 63,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The selector string to test against.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-is",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this Component matches the selector.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Tests whether this Component matches the selector string. ...",
        "static": false,
        "name": "is",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Tests whether this Component matches the selector string.</p>\n",
        "linenr": 1917,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Container",
            "optional": false,
            "doc": "\n",
            "name": "container"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDescendantOf",
        "return": {
          "type": "Boolean",
          "doc": "<p>isDescendant</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Determines whether this component is the descendant of a particular container. ...",
        "static": false,
        "name": "isDescendantOf",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Determines whether this component is the descendant of a particular container.</p>\n",
        "linenr": 2982,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDisabled",
        "return": {
          "type": "Boolean",
          "doc": "<p>the disabled state of this Component.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Method to determine whether this Component is currently disabled. ...",
        "static": false,
        "name": "isDisabled",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is currently disabled.</p>\n",
        "linenr": 2313,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDraggable",
        "return": {
          "type": "Boolean",
          "doc": "<p>the draggable state of this component.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Method to determine whether this Component is draggable. ...",
        "static": false,
        "name": "isDraggable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is draggable.</p>\n",
        "linenr": 2490,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isDroppable",
        "return": {
          "type": "Boolean",
          "doc": "<p>the droppable state of this component.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Method to determine whether this Component is droppable. ...",
        "static": false,
        "name": "isDroppable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is droppable.</p>\n",
        "linenr": 2498,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isFloating",
        "return": {
          "type": "Boolean",
          "doc": "<p>the floating state of this component.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Method to determine whether this Component is floating. ...",
        "static": false,
        "name": "isFloating",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is floating.</p>\n",
        "linenr": 2482,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isHidden",
        "return": {
          "type": "Boolean",
          "doc": "<p>the hidden state of this Component.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Method to determine whether this Component is currently set to hidden. ...",
        "static": false,
        "name": "isHidden",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method to determine whether this Component is currently set to hidden.</p>\n",
        "linenr": 2329,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "HTMLElement/Number/Ext.data.Model",
            "optional": false,
            "doc": "<p>The node, node index or record to check</p>\n",
            "name": "node"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-isSelected",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if selected, else false</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Returns true if the passed node is selected, else false. ...",
        "static": false,
        "name": "isSelected",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Returns true if the passed node is selected, else false.</p>\n",
        "linenr": 662,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>. <p>Optional. Pass <code>true</code> to interrogate the visibility status of all\nparent Containers to determine whether this Component is truly visible to the user.</p></p>\n\n<p>Generally, to determine whether a Component is hidden, the no argument form is needed. For example\nwhen creating dynamically laid out UIs in a hidden Container before showing them.</p>\n\n",
            "name": "deep"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isVisible",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this component is visible, false otherwise.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Returns true if this component is visible. ...",
        "static": false,
        "name": "isVisible",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns true if this component is visible.</p>\n",
        "linenr": 2213,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The xtype to check for this Component</p>\n",
            "name": "xtype"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) False to check whether this Component is descended from the xtype (this is\nthe default), or true to check whether this Component is directly of the specified xtype.</p>\n",
            "name": "shallow"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-isXType",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if this component descends from the specified xtype, false otherwise.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Tests whether or not this Component is of a specific xtype. ...",
        "static": false,
        "name": "isXType",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Tests whether or not this Component is of a specific xtype. This can test whether this Component is descended\nfrom the xtype (default) or whether it is directly of the xtype specified (shallow = true).</p>\n\n\n<p><b>If using your own subclasses, be aware that a Component must register its own xtype\nto participate in determination of inherited xtypes.</b></p>\n\n\n<p>For a list of all available xtypes, see the <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> header.</p>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>var t = new Ext.form.field.Text();\nvar isText = t.isXType('textfield');        // true\nvar isBoxSubclass = t.isXType('field');       // true, descended from <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a>\nvar isBoxInstance = t.isXType('field', true); // false, not a direct <a href=\"#/api/Ext.form.field.Base\" rel=\"Ext.form.field.Base\" class=\"docClass\">Ext.form.field.Base</a> instance\n</code></pre>\n\n",
        "linenr": 2105,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Observable/Element",
            "optional": false,
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "name": "opt"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-mon",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "addManagedListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for addManagedListener. ...",
        "static": false,
        "name": "mon",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.view.View-method-addManagedListener\" rel=\"Ext.view.View-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "linenr": 681,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Observable|Element",
            "optional": false,
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object|String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-mun",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "removeManagedListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for removeManagedListener. ...",
        "static": false,
        "name": "mun",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.view.View-method-removeManagedListener\" rel=\"Ext.view.View-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.view.View-method-mon\" rel=\"Ext.view.View-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "linenr": 687,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the following nodes.</p>\n",
            "name": "selector"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "includeSelf"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-nextNode",
        "return": {
          "type": "void",
          "doc": "<p>The next node (or the next node which matches the selector). Returns null if there is no matching node.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Returns the next node in the Component tree in tree traversal order. ...",
        "static": false,
        "name": "nextNode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the next node in the Component tree in tree traversal order.</p>\n\n\n<p>Note that this is not limited to siblings, and if invoked upon a node with no matching siblings, will\nwalk the tree to attempt to find a match. Contrast with <a href=\"#/api/Ext.view.View-method-nextSibling\" rel=\"Ext.view.View-method-nextSibling\" class=\"docClass\">nextSibling</a>.</p>\n\n",
        "linenr": 2043,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the following items.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-nextSibling",
        "return": {
          "type": "void",
          "doc": "<p>The next sibling (or the next sibling which matches the selector). Returns null if there is no matching sibling.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Returns the next sibling of this Component. ...",
        "static": false,
        "name": "nextSibling",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the next sibling of this Component.</p>\n\n\n<p>Optionally selects the next sibling which matches the passed <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector.</p>\n\n\n<p>May also be refered to as <code><b>next()</b></code></p>\n\n\n<p>Note that this is limited to siblings, and if no siblings of the item match, <code>null</code> is returned. Contrast with <a href=\"#/api/Ext.view.View-method-nextNode\" rel=\"Ext.view.View-method-nextNode\" class=\"docClass\">nextNode</a></p>\n\n",
        "linenr": 1947,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.view.View-method-fireEvent\" rel=\"Ext.view.View-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "name": "options"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-on",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "addListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for addListener. ...",
        "static": false,
        "name": "on",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.view.View-method-addListener\" rel=\"Ext.view.View-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
        "linenr": 669,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Object",
            "optional": false,
            "doc": "<p>The raw data object that was used to create the Record.</p>\n",
            "name": "data"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>the index number of the Record being prepared for rendering.</p>\n",
            "name": "recordIndex"
          },
          {
            "type": "Record",
            "optional": false,
            "doc": "<p>The Record being prepared for rendering.</p>\n",
            "name": "record"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-prepareData",
        "return": {
          "type": "Array/Object",
          "doc": "<p>The formatted data in a format expected by the internal <a href=\"#/api/Ext.view.View-cfg-tpl\" rel=\"Ext.view.View-cfg-tpl\" class=\"docClass\">template</a>'s overwrite() method.\n(either an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'}))</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Function which can be overridden to provide custom formatting for each Record that is used by this\nDataView's templat...",
        "static": false,
        "name": "prepareData",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Function which can be overridden to provide custom formatting for each Record that is used by this\nDataView's <a href=\"#/api/Ext.view.View-cfg-tpl\" rel=\"Ext.view.View-cfg-tpl\" class=\"docClass\">template</a> to render each node.</p>\n",
        "linenr": 390,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional. A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the preceding nodes.</p>\n",
            "name": "selector"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "includeSelf"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-previousNode",
        "return": {
          "type": "void",
          "doc": "<p>The previous node (or the previous node which matches the selector). Returns null if there is no matching node.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Returns the previous node in the Component tree in tree traversal order. ...",
        "static": false,
        "name": "previousNode",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the previous node in the Component tree in tree traversal order.</p>\n\n\n<p>Note that this is not limited to siblings, and if invoked upon a node with no matching siblings, will\nwalk the tree in reverse order to attempt to find a match. Contrast with <a href=\"#/api/Ext.view.View-method-previousSibling\" rel=\"Ext.view.View-method-previousSibling\" class=\"docClass\">previousSibling</a>.</p>\n\n",
        "linenr": 2007,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional. A <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector to filter the preceding items.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-previousSibling",
        "return": {
          "type": "void",
          "doc": "<p>The previous sibling (or the previous sibling which matches the selector). Returns null if there is no matching sibling.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Returns the previous sibling of this Component. ...",
        "static": false,
        "name": "previousSibling",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Returns the previous sibling of this Component.</p>\n\n\n<p>Optionally selects the previous sibling which matches the passed <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector.</p>\n\n\n<p>May also be refered to as <code><b>prev()</b></code></p>\n\n\n<p>Note that this is limited to siblings, and if no siblings of the item match, <code>null</code> is returned. Contrast with <a href=\"#/api/Ext.view.View-method-previousNode\" rel=\"Ext.view.View-method-previousNode\" class=\"docClass\">previousNode</a></p>\n\n",
        "linenr": 1977,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-refresh",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Refreshes the view by reloading the data from the store and re-rendering the template. ...",
        "static": false,
        "name": "refresh",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Refreshes the view by reloading the data from the store and re-rendering the template.</p>\n",
        "linenr": 357,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's data index in the store</p>\n",
            "name": "index"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-refreshNode",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Refreshes an individual node's data from the store. ...",
        "static": false,
        "name": "refreshNode",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Refreshes an individual node's data from the store.</p>\n",
        "linenr": 505,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The Observable whose events this object is to relay.</p>\n",
            "name": "origin"
          },
          {
            "type": "[String]",
            "optional": false,
            "doc": "<p>Array of event names to relay.</p>\n",
            "name": "events"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "prefix"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-relayEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Relays selected events from the specified Observable as if the events were fired by this. ...",
        "static": false,
        "name": "relayEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code>this</code>.</p>\n",
        "linenr": 573,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "className"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeCls",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>Returns the Component to allow method chaining.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Removes a CSS class from the top level element representing this component. ...",
        "static": false,
        "name": "removeCls",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Removes a CSS class from the top level element representing this component.</p>\n",
        "linenr": 2369,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Array",
            "optional": false,
            "doc": "<p>A string or an array of strings to remove to the uiCls</p>\n",
            "name": "cls"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "skip"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeClsWithUI",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Removes a cls to the uiCls array, which will also call removeUIClsFromElement and removes\nit from all elements of thi...",
        "static": false,
        "name": "removeClsWithUI",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Removes a cls to the uiCls array, which will also call <a href=\"#/api/Ext.view.View-method-removeUIClsFromElement\" rel=\"Ext.view.View-method-removeUIClsFromElement\" class=\"docClass\">removeUIClsFromElement</a> and removes\nit from all elements of this component.</p>\n",
        "linenr": 1525,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.view.View-method-addListener\" rel=\"Ext.view.View-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-removeListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes an event handler. ...",
        "static": false,
        "name": "removeListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes an event handler.</p>\n",
        "linenr": 392,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Observable|Element",
            "optional": false,
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object|String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes listeners that were added by the mon method. ...",
        "static": false,
        "name": "removeManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.view.View-method-mon\" rel=\"Ext.view.View-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "linenr": 197,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The UI to add to the element</p>\n",
            "name": "ui"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "force"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-removeUIClsFromElement",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Method which removes a specified UI + uiCls from the components element. ...",
        "static": false,
        "name": "removeUIClsFromElement",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Method which removes a specified UI + uiCls from the components element.\nThe cls which is added to the element will be: <code>this.baseCls + '-' + ui</code></p>\n",
        "linenr": 1605,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Resumes firing events (see suspendEvents). ...",
        "static": false,
        "name": "resumeEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.view.View-method-suspendEvents\" rel=\"Ext.view.View-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
        "linenr": 554,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Model/Index",
            "optional": false,
            "doc": "<p>An array of records or an index</p>\n",
            "name": "records"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "\n",
            "name": "keepExisting"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Set to false to not fire a select event</p>\n",
            "name": "suppressEvent"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-method-select",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Selects a record instance by record instance or index. ...",
        "static": false,
        "name": "select",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Selects a record instance by record instance or index.</p>\n",
        "linenr": 673,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-sequenceFx",
        "return": {
          "type": "Object",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "shortDoc": "Ensures that all effects queued after sequenceFx is called on this object are\nrun in sequence. ...",
        "static": false,
        "name": "sequenceFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Ensures that all effects queued after sequenceFx is called on this object are\nrun in sequence.  This is the opposite of <a href=\"#/api/Ext.view.View-method-syncFx\" rel=\"Ext.view.View-method-syncFx\" class=\"docClass\">syncFx</a>.</p>\n",
        "linenr": 357,
        "html_filename": "Animate.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to activate the Component, false to deactivate it (defaults to false)</p>\n",
            "name": "active"
          },
          {
            "type": "Component",
            "optional": false,
            "doc": "<p>The newly active Component which is taking over topmost zIndex position.</p>\n",
            "name": "newActive"
          }
        ],
        "href": "Floating.html#Ext-util-Floating-method-setActive",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "shortDoc": "This method is called internally by Ext.ZIndexManager to signal that a floating\nComponent has either been moved to th...",
        "static": false,
        "name": "setActive",
        "owner": "Ext.util.Floating",
        "doc": "<p>This method is called internally by <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">Ext.ZIndexManager</a> to signal that a floating\nComponent has either been moved to the top of its zIndex stack, or pushed from the top of its zIndex stack.</p>\n\n\n<p>If a <i>Window</i> is superceded by another Window, deactivating it hides its shadow.</p>\n\n\n<p>This method also fires the <a href=\"#/api/Ext.view.View-event-activate\" rel=\"Ext.view.View-event-activate\" class=\"docClass\">activate</a> or <a href=\"#/api/Ext.view.View-event-deactivate\" rel=\"Ext.view.View-event-deactivate\" class=\"docClass\">deactivate</a> event depending on which action occurred.</p>\n\n",
        "linenr": 218,
        "html_filename": "Floating.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to allow the Component to auto scroll.</p>\n",
            "name": "scroll"
          }
        ],
        "href": "Component2.html#Ext-Component-method-setAutoScroll",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Sets the overflow on the content element of the component. ...",
        "static": false,
        "name": "setAutoScroll",
        "owner": "Ext.Component",
        "doc": "<p>Sets the overflow on the content element of the component.</p>\n",
        "linenr": 362,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "\n",
            "name": "disabled"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setDisabled",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Enable or disable the component. ...",
        "static": false,
        "name": "setDisabled",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Enable or disable the component.</p>\n",
        "linenr": 2321,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "dock"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "layoutParent"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setDocked",
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Sets the dock position of this component in its parent panel. ...",
        "static": false,
        "name": "setDocked",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the dock position of this component in its parent panel. Note that\nthis only has effect if this item is part of the dockedItems collection\nof a parent that has a DockLayout (note that any Panel has a DockLayout\nby default)</p>\n",
        "linenr": 2897,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new height to set. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in the <a href=\"#/api/Ext.view.View-method-getEl\" rel=\"Ext.view.View-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS height style.</li>\n<li><i>undefined</i> to leave the height unchanged.</li>\n</ul></div></p>\n",
            "name": "height"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setHeight",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Sets the height of the component. ...",
        "static": false,
        "name": "setHeight",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the height of the component.  This method fires the <a href=\"#/api/Ext.view.View-event-resize\" rel=\"Ext.view.View-event-resize\" class=\"docClass\">resize</a> event.</p>\n",
        "linenr": 2801,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean/Object/String",
            "optional": false,
            "doc": "<p>True to show the default LoadMask, a config object\nthat will be passed to the LoadMask constructor, or a message String to show. False to\nhide the current LoadMask.</p>\n",
            "name": "load"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to mask the targetEl of this Component instead of the this.el.\nFor example, setting this to true on a Panel will cause only the body to be masked. (defaults to false)</p>\n",
            "name": "targetEl"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setLoading",
        "return": {
          "type": "Ext.LoadMask",
          "doc": "<p>The LoadMask instance that has just been shown.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "This method allows you to show or hide a LoadMask on top of this component. ...",
        "static": false,
        "name": "setLoading",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This method allows you to show or hide a LoadMask on top of this component.</p>\n",
        "linenr": 2862,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new x position</p>\n",
            "name": "x"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new y position</p>\n",
            "name": "y"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>If passed, the Component is <i>animated</i> into its new position. If this parameter\nis a number, it is used as the animation duration in milliseconds.</p>\n",
            "name": "animate"
          }
        ],
        "href": "Component2.html#Ext-Component-method-setPagePosition",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Sets the page XY position of the component. ...",
        "static": false,
        "name": "setPagePosition",
        "owner": "Ext.Component",
        "doc": "<p>Sets the page XY position of the component.  To set the left and top instead, use <a href=\"#/api/Ext.view.View-method-setPosition\" rel=\"Ext.view.View-method-setPosition\" class=\"docClass\">setPosition</a>.\nThis method fires the <a href=\"#/api/Ext.view.View-event-move\" rel=\"Ext.view.View-event-move\" class=\"docClass\">move</a> event.</p>\n",
        "linenr": 504,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new left</p>\n",
            "name": "left"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new top</p>\n",
            "name": "top"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>If true, the Component is <i>animated</i> into its new position. You may also pass an animation configuration.</p>\n",
            "name": "animate"
          }
        ],
        "href": "Component2.html#Ext-Component-method-setPosition",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Sets the left and top of the component. ...",
        "static": false,
        "name": "setPosition",
        "owner": "Ext.Component",
        "doc": "<p>Sets the left and top of the component.  To set the page XY position instead, use <a href=\"#/api/Ext.view.View-method-setPagePosition\" rel=\"Ext.view.View-method-setPagePosition\" class=\"docClass\">setPagePosition</a>.\nThis method fires the <a href=\"#/api/Ext.view.View-event-move\" rel=\"Ext.view.View-event-move\" class=\"docClass\">move</a> event.</p>\n",
        "linenr": 420,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The new width to set. This may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in the <a href=\"#/api/Ext.view.View-method-getEl\" rel=\"Ext.view.View-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style.</li>\n<li>A size object in the format <code>{width: widthValue, height: heightValue}</code>.</li>\n<li><code>undefined</code> to leave the width unchanged.</li>\n</ul></div></p>\n",
            "name": "width"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The new height to set (not required if a size object is passed as the first arg).\nThis may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new height in the <a href=\"#/api/Ext.view.View-method-getEl\" rel=\"Ext.view.View-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS height style. Animation may <b>not</b> be used.</li>\n<li><code>undefined</code> to leave the height unchanged.</li>\n</ul></div></p>\n",
            "name": "height"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setSize",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Sets the width and height of this Component. ...",
        "static": false,
        "name": "setSize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the width and height of this Component. This method fires the <a href=\"#/api/Ext.view.View-event-resize\" rel=\"Ext.view.View-event-resize\" class=\"docClass\">resize</a> event. This method can accept\neither width and height as separate arguments, or you can pass a size object like <code>{width:10, height:20}</code>.</p>\n",
        "linenr": 2538,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The new UI for the component</p>\n",
            "name": "ui"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setUI",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Sets the UI for the component. ...",
        "static": false,
        "name": "setUI",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the UI for the component. This will remove any existing UIs on the component. It will also\nloop through any uiCls set on the component and rename them so they include the new UI</p>\n",
        "linenr": 1448,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to show, false to hide</p>\n",
            "name": "visible"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setVisible",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Convenience function to hide or show this component by boolean. ...",
        "static": false,
        "name": "setVisible",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Convenience function to hide or show this component by boolean.</p>\n",
        "linenr": 2204,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new width to setThis may be one of:<div class=\"mdetail-params\"><ul>\n<li>A Number specifying the new width in the <a href=\"#/api/Ext.view.View-method-getEl\" rel=\"Ext.view.View-method-getEl\" class=\"docClass\">Element</a>'s <a href=\"#/api/Ext.core.Element-property-defaultUnit\" rel=\"Ext.core.Element-property-defaultUnit\" class=\"docClass\">Ext.core.Element.defaultUnit</a>s (by default, pixels).</li>\n<li>A String used to set the CSS width style.</li>\n</ul></div></p>\n",
            "name": "width"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-setWidth",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Sets the width of the component. ...",
        "static": false,
        "name": "setWidth",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Sets the width of the component.  This method fires the <a href=\"#/api/Ext.view.View-event-resize\" rel=\"Ext.view.View-event-resize\" class=\"docClass\">resize</a> event.</p>\n",
        "linenr": 2789,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/Element",
            "optional": false,
            "doc": "<p>Optional, and <b>only valid for <a href=\"#/api/Ext.view.View-cfg-floating\" rel=\"Ext.view.View-cfg-floating\" class=\"docClass\">floating</a> Components such as\n<a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Window</a>s or <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">ToolTip</a>s, or regular Components which have been configured\nwith <code>floating: true</code>.</b> The target from which the Component should\nanimate from while opening (defaults to null with no animation)</p>\n",
            "name": "animateTarget"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) A callback function to call after the Component is displayed. Only necessary if animation was specified.</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the callback is executed. Defaults to this Component.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Component2.html#Ext-Component-method-show",
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Shows this Component, rendering it first if autoRender or floating are true. ...",
        "static": false,
        "name": "show",
        "owner": "Ext.Component",
        "doc": "<p>Shows this Component, rendering it first if <a href=\"#/api/Ext.view.View-cfg-autoRender\" rel=\"Ext.view.View-cfg-autoRender\" class=\"docClass\">autoRender</a> or <a href=\"#/api/Ext.view.View-cfg-floating\" rel=\"Ext.view.View-cfg-floating\" class=\"docClass\">floating</a> are <code>true</code>.</p>\n\n\n<p>After being shown, a <a href=\"#/api/Ext.view.View-cfg-floating\" rel=\"Ext.view.View-cfg-floating\" class=\"docClass\">floating</a> Component (such as a <a href=\"#/api/Ext.window.Window\" rel=\"Ext.window.Window\" class=\"docClass\">Ext.window.Window</a>), is activated it and brought to the front of\nits <a href=\"#/api/Ext.view.View-property-zIndexManager\" rel=\"Ext.view.View-property-zIndexManager\" class=\"docClass\">z-index stack</a>.</p>\n\n",
        "linenr": 648,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-statics",
        "return": {
          "type": "Class",
          "doc": "\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "static": false,
        "name": "statics",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n",
        "linenr": 199,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-stopAnimation",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The Element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "shortDoc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that ...",
        "static": false,
        "name": "stopAnimation",
        "owner": "Ext.util.Animate",
        "doc": "<p>Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet.</p>\n",
        "linenr": 335,
        "html_filename": "Animate.html"
      },
      {
        "inheritable": false,
        "deprecated": {
          "version": "4.0",
          "text": "<p>Replaced by <a href=\"#/api/Ext.picker.Time-method-stopAnimation\" rel=\"Ext.picker.Time-method-stopAnimation\" class=\"docClass\">stopAnimation</a></p>\n\n\n\n",
          "tagname": "deprecated",
          "doc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet."
        },
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-stopFx",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>The Element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "shortDoc": "Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that ...",
        "static": false,
        "name": "stopFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Stops any running effects and clears this object's internal effects queue if it contains\nany additional effects that haven't started yet.</p>\n",
        "linenr": 326,
        "html_filename": "Animate.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.view.View-method-resumeEvents\" rel=\"Ext.view.View-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
            "name": "queueSuspended"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Suspends the firing of all events. ...",
        "static": false,
        "name": "suspendEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.view.View-method-resumeEvents\" rel=\"Ext.view.View-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
        "linenr": 541,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Animate.html#Ext-util-Animate-method-syncFx",
        "return": {
          "type": "Object",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Animate.js",
        "private": false,
        "shortDoc": "Ensures that all effects queued after syncFx is called on this object are\nrun concurrently. ...",
        "static": false,
        "name": "syncFx",
        "owner": "Ext.util.Animate",
        "doc": "<p>Ensures that all effects queued after syncFx is called on this object are\nrun concurrently.  This is the opposite of <a href=\"#/api/Ext.view.View-method-sequenceFx\" rel=\"Ext.view.View-method-sequenceFx\" class=\"docClass\">sequenceFx</a>.</p>\n",
        "linenr": 345,
        "html_filename": "Animate.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Floating.html#Ext-util-Floating-method-toBack",
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "shortDoc": "Sends this Component to the back of (lower z-index than) any other visible windows ...",
        "static": false,
        "name": "toBack",
        "owner": "Ext.util.Floating",
        "doc": "<p>Sends this Component to the back of (lower z-index than) any other visible windows</p>\n",
        "linenr": 242,
        "html_filename": "Floating.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) Specify <code>true</code> to prevent the Component from being focused.</p>\n",
            "name": "preventFocus"
          }
        ],
        "href": "Floating.html#Ext-util-Floating-method-toFront",
        "return": {
          "type": "Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/Floating.js",
        "private": false,
        "shortDoc": "Brings this floating Component to the front of any other visible, floating Components managed by the same ZIndexManag...",
        "static": false,
        "name": "toFront",
        "owner": "Ext.util.Floating",
        "doc": "<p>Brings this floating Component to the front of any other visible, floating Components managed by the same <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a></p>\n\n\n<p>If this Component is modal, inserts the modal mask just below this Component in the z-index stack.</p>\n\n",
        "linenr": 190,
        "html_filename": "Floating.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.view.View-method-addListener\" rel=\"Ext.view.View-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-un",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "removeListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for removeListener. ...",
        "static": false,
        "name": "un",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.view.View-method-removeListener\" rel=\"Ext.view.View-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
        "linenr": 675,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional. The simple selector to test.</p>\n",
            "name": "selector"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-up",
        "return": {
          "type": "Container",
          "doc": "<p>The matching ancestor Container (or <code>undefined</code> if no match was found).</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Walks up the ownerCt axis looking for an ancestor Container which matches\nthe passed simple selector. ...",
        "static": false,
        "name": "up",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Walks up the <code>ownerCt</code> axis looking for an ancestor Container which matches\nthe passed simple selector.</p>\n\n\n<p>Example:\n<pre><code>var owningTabPanel = grid.up('tabpanel');\n</code></pre>\n\n",
        "linenr": 1926,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>If this component has been configured with a template via the tpl config\nthen it will use this argument as data to populate the template.\nIf this component was not configured with a template, the components\ncontent area will be updated via <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> update</p>\n",
            "name": "htmlOrData"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) Only legitimate when using the html configuration. Defaults to false</p>\n",
            "name": "loadScripts"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) Only legitimate when using the html configuration. Callback to execute when scripts have finished loading</p>\n",
            "name": "callback"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-method-update",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Update the content area of a component. ...",
        "static": false,
        "name": "update",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Update the content area of a component.</p>\n",
        "linenr": 2172,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object in the format {x, y, width, height}</p>\n",
            "name": "box"
          }
        ],
        "href": "Component2.html#Ext-Component-method-updateBox",
        "return": {
          "type": "Ext.Component",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Sets the current box measurements of the component's underlying element. ...",
        "static": false,
        "name": "updateBox",
        "owner": "Ext.Component",
        "doc": "<p>Sets the current box measurements of the component's underlying element.</p>\n",
        "linenr": 554,
        "html_filename": "Component2.html"
      }
    ],
    "event": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-activate",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after a Component has been visually activated. ...",
        "static": false,
        "name": "activate",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after a Component has been visually activated.</p>\n",
        "linenr": 573,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "<p>Parent Container</p>\n",
            "name": "container"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>position of Component</p>\n",
            "name": "pos"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-added",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after a Component had been added to a Container. ...",
        "static": false,
        "name": "added",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after a Component had been added to a Container.</p>\n",
        "linenr": 593,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-afterrender",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after the component rendering is finished. ...",
        "static": false,
        "name": "afterrender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component rendering is finished.</p>\n\n\n<p>The afterrender event is fired after this Component has been <a href=\"#/api/Ext.view.View-property-rendered\" rel=\"Ext.view.View-property-rendered\" class=\"docClass\">rendered</a>, been postprocesed\nby any afterRender method defined for the Component.</p>\n\n",
        "linenr": 660,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforeactivate",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires before a Component has been visually activated. ...",
        "static": false,
        "name": "beforeactivate",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before a Component has been visually activated.\nReturning false from an event listener can prevent the activate\nfrom occurring.</p>\n",
        "linenr": 565,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforecontainerclick",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires before the click event on the container is processed. ...",
        "static": false,
        "name": "beforecontainerclick",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the click event on the container is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 262,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforecontainercontextmenu",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires before the contextmenu event on the container is processed. ...",
        "static": false,
        "name": "beforecontainercontextmenu",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the contextmenu event on the container is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 276,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforecontainerdblclick",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires before the dblclick event on the container is processed. ...",
        "static": false,
        "name": "beforecontainerdblclick",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the dblclick event on the container is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 269,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object. Use <a href=\"#/api/Ext.EventObject-method-getKey\" rel=\"Ext.EventObject-method-getKey\" class=\"docClass\">getKey()</a> to retrieve the key that was pressed.</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforecontainerkeydown",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires before the keydown event on the container is processed. ...",
        "static": false,
        "name": "beforecontainerkeydown",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the keydown event on the container is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 283,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforecontainermousedown",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires before the mousedown event on the container is processed. ...",
        "static": false,
        "name": "beforecontainermousedown",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the mousedown event on the container is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 234,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforecontainermouseout",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires before the mouseout event on the container is processed. ...",
        "static": false,
        "name": "beforecontainermouseout",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the mouseout event on the container is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 255,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforecontainermouseover",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires before the mouseover event on the container is processed. ...",
        "static": false,
        "name": "beforecontainermouseover",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the mouseover event on the container is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 248,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforecontainermouseup",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires before the mouseup event on the container is processed. ...",
        "static": false,
        "name": "beforecontainermouseup",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the mouseup event on the container is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 241,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforedeactivate",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires before a Component has been visually deactivated. ...",
        "static": false,
        "name": "beforedeactivate",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before a Component has been visually deactivated.\nReturning false from an event listener can prevent the deactivate\nfrom occurring.</p>\n",
        "linenr": 579,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforedestroy",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires before the component is destroyed. ...",
        "static": false,
        "name": "beforedestroy",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is <a href=\"#/api/Ext.view.View-event-destroy\" rel=\"Ext.view.View-event-destroy\" class=\"docClass\">destroy</a>ed. Return false from an event handler to stop the <a href=\"#/api/Ext.view.View-event-destroy\" rel=\"Ext.view.View-event-destroy\" class=\"docClass\">destroy</a>.</p>\n",
        "linenr": 668,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforehide",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires before the component is hidden when calling the hide method. ...",
        "static": false,
        "name": "beforehide",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is hidden when calling the <a href=\"#/api/Ext.view.View-event-hide\" rel=\"Ext.view.View-event-hide\" class=\"docClass\">hide</a> method.\nReturn false from an event handler to stop the hide.</p>\n",
        "linenr": 626,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforeitemclick",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires before the click event on an item is processed. ...",
        "static": false,
        "name": "beforeitemclick",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the click event on an item is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 114,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforeitemcontextmenu",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires before the contextmenu event on an item is processed. ...",
        "static": false,
        "name": "beforeitemcontextmenu",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the contextmenu event on an item is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 134,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforeitemdblclick",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires before the dblclick event on an item is processed. ...",
        "static": false,
        "name": "beforeitemdblclick",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the dblclick event on an item is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 124,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object. Use <a href=\"#/api/Ext.EventObject-method-getKey\" rel=\"Ext.EventObject-method-getKey\" class=\"docClass\">getKey()</a> to retrieve the key that was pressed.</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforeitemkeydown",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires before the keydown event on an item is processed. ...",
        "static": false,
        "name": "beforeitemkeydown",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the keydown event on an item is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 144,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforeitemmousedown",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires before the mousedown event on an item is processed. ...",
        "static": false,
        "name": "beforeitemmousedown",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the mousedown event on an item is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 74,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforeitemmouseenter",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires before the mouseenter event on an item is processed. ...",
        "static": false,
        "name": "beforeitemmouseenter",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the mouseenter event on an item is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 94,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforeitemmouseleave",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires before the mouseleave event on an item is processed. ...",
        "static": false,
        "name": "beforeitemmouseleave",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the mouseleave event on an item is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 104,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforeitemmouseup",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires before the mouseup event on an item is processed. ...",
        "static": false,
        "name": "beforeitemmouseup",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before the mouseup event on an item is processed. Returns false to cancel the default action.</p>\n",
        "linenr": 84,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "<p>The DataView object</p>\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-event-beforerefresh",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Fires before the view is refreshed ...",
        "static": false,
        "name": "beforerefresh",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Fires before the view is refreshed</p>\n",
        "linenr": 216,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforerender",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires before the component is rendered. ...",
        "static": false,
        "name": "beforerender",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is <a href=\"#/api/Ext.view.View-property-rendered\" rel=\"Ext.view.View-property-rendered\" class=\"docClass\">rendered</a>. Return false from an\nevent handler to stop the <a href=\"#/api/Ext.view.View-event-render\" rel=\"Ext.view.View-event-render\" class=\"docClass\">render</a>.</p>\n",
        "linenr": 647,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The node to be selected</p>\n",
            "name": "node"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>Array of currently selected nodes</p>\n",
            "name": "selections"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-beforeselect",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires before a selection is made. ...",
        "static": false,
        "name": "beforeselect",
        "owner": "Ext.view.View",
        "doc": "<p>Fires before a selection is made. If any handlers return false, the selection is cancelled.</p>\n",
        "linenr": 347,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-beforeshow",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires before the component is shown when calling the show method. ...",
        "static": false,
        "name": "beforeshow",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires before the component is shown when calling the <a href=\"#/api/Ext.view.View-event-show\" rel=\"Ext.view.View-event-show\" class=\"docClass\">show</a> method.\nReturn false from an event handler to stop the show.</p>\n",
        "linenr": 613,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.state.Stateful",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The hash of state values returned from the StateProvider. If this\nevent is not vetoed, then the state object is passed to <b><tt>applyState</tt></b>. By default,\nthat simply copies property values into this object. The method maybe overriden to\nprovide custom state restoration.</p>\n",
            "name": "state"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Stateful.html#Ext-state-Stateful-event-beforestaterestore",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "shortDoc": "Fires before the state of the object is restored. ...",
        "static": false,
        "name": "beforestaterestore",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires before the state of the object is restored. Return false from an event handler to stop the restore.</p>\n",
        "linenr": 101,
        "html_filename": "Stateful.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.state.Stateful",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The hash of state values. This is determined by calling\n<b><tt>getState()</tt></b> on the object. This method must be provided by the\ndeveloper to return whetever representation of state is required, by default, <a href=\"#/api/Ext.state.Stateful\" rel=\"Ext.state.Stateful\" class=\"docClass\">Ext.state.Stateful</a>\nhas a null implementation.</p>\n",
            "name": "state"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Stateful.html#Ext-state-Stateful-event-beforestatesave",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "shortDoc": "Fires before the state of the object is saved to the configured state provider. ...",
        "static": false,
        "name": "beforestatesave",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires before the state of the object is saved to the configured state provider. Return false to stop the save.</p>\n",
        "linenr": 122,
        "html_filename": "Stateful.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-containerclick",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires when the container is clicked. ...",
        "static": false,
        "name": "containerclick",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when the container is clicked.</p>\n",
        "linenr": 311,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-containercontextmenu",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires when the container is right clicked. ...",
        "static": false,
        "name": "containercontextmenu",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when the container is right clicked.</p>\n",
        "linenr": 325,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-containerdblclick",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires when the container is double clicked. ...",
        "static": false,
        "name": "containerdblclick",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when the container is double clicked.</p>\n",
        "linenr": 318,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object. Use <a href=\"#/api/Ext.EventObject-method-getKey\" rel=\"Ext.EventObject-method-getKey\" class=\"docClass\">getKey()</a> to retrieve the key that was pressed.</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-containerkeydown",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires when a key is pressed while the container is focused, and no item is currently selected. ...",
        "static": false,
        "name": "containerkeydown",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when a key is pressed while the container is focused, and no item is currently selected.</p>\n",
        "linenr": 332,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-containermouseout",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires when you move the mouse out of the container. ...",
        "static": false,
        "name": "containermouseout",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when you move the mouse out of the container.</p>\n",
        "linenr": 304,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-containermouseover",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires when you move the mouse over the container. ...",
        "static": false,
        "name": "containermouseover",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when you move the mouse over the container.</p>\n",
        "linenr": 297,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-containermouseup",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires when there is a mouse up on the container ...",
        "static": false,
        "name": "containermouseup",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when there is a mouse up on the container</p>\n",
        "linenr": 290,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-deactivate",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after a Component has been visually deactivated. ...",
        "static": false,
        "name": "deactivate",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after a Component has been visually deactivated.</p>\n",
        "linenr": 587,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-destroy",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after the component is destroyed. ...",
        "static": false,
        "name": "destroy",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is <a href=\"#/api/Ext.view.View-event-destroy\" rel=\"Ext.view.View-event-destroy\" class=\"docClass\">destroy</a>ed.</p>\n",
        "linenr": 674,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-disable",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after the component is disabled. ...",
        "static": false,
        "name": "disable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is disabled.</p>\n",
        "linenr": 601,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-enable",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after the component is enabled. ...",
        "static": false,
        "name": "enable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is enabled.</p>\n",
        "linenr": 607,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-hide",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after the component is hidden. ...",
        "static": false,
        "name": "hide",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is hidden.\nFires after the component is hidden when calling the <a href=\"#/api/Ext.view.View-event-hide\" rel=\"Ext.view.View-event-hide\" class=\"docClass\">hide</a> method.</p>\n",
        "linenr": 633,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array[Ext.data.Model]",
            "optional": false,
            "doc": "<p>The model instance</p>\n",
            "name": "records"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index at which the set of record/nodes starts</p>\n",
            "name": "index"
          },
          {
            "type": "Array[HTMLElement]",
            "optional": false,
            "doc": "<p>The node that has just been updated</p>\n",
            "name": "node"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-event-itemadd",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Fires when the nodes associated with an recordset have been added to the underlying store ...",
        "static": false,
        "name": "itemadd",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Fires when the nodes associated with an recordset have been added to the underlying store</p>\n",
        "linenr": 236,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-itemclick",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires when an item is clicked. ...",
        "static": false,
        "name": "itemclick",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when an item is clicked.</p>\n",
        "linenr": 194,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-itemcontextmenu",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires when an item is right clicked. ...",
        "static": false,
        "name": "itemcontextmenu",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when an item is right clicked.</p>\n",
        "linenr": 214,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-itemdblclick",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires when an item is double clicked. ...",
        "static": false,
        "name": "itemdblclick",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when an item is double clicked.</p>\n",
        "linenr": 204,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object. Use <a href=\"#/api/Ext.EventObject-method-getKey\" rel=\"Ext.EventObject-method-getKey\" class=\"docClass\">getKey()</a> to retrieve the key that was pressed.</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-itemkeydown",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires when a key is pressed while an item is currently selected. ...",
        "static": false,
        "name": "itemkeydown",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when a key is pressed while an item is currently selected.</p>\n",
        "linenr": 224,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-itemmousedown",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires when there is a mouse down on an item ...",
        "static": false,
        "name": "itemmousedown",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when there is a mouse down on an item</p>\n",
        "linenr": 154,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-itemmouseenter",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires when the mouse enters an item. ...",
        "static": false,
        "name": "itemmouseenter",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when the mouse enters an item.</p>\n",
        "linenr": 174,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-itemmouseleave",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires when the mouse leaves an item. ...",
        "static": false,
        "name": "itemmouseleave",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when the mouse leaves an item.</p>\n",
        "linenr": 184,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that belongs to the item</p>\n",
            "name": "record"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The item's element</p>\n",
            "name": "item"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The item's index</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.EventObject",
            "optional": false,
            "doc": "<p>The raw event object</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-itemmouseup",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires when there is a mouse up on an item ...",
        "static": false,
        "name": "itemmouseup",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when there is a mouse up on an item</p>\n",
        "linenr": 164,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The model instance</p>\n",
            "name": "record"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index of the record/node</p>\n",
            "name": "index"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-event-itemremove",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Fires when the node associated with an individual record is removed ...",
        "static": false,
        "name": "itemremove",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Fires when the node associated with an individual record is removed</p>\n",
        "linenr": 244,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The model instance</p>\n",
            "name": "record"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index of the record/node</p>\n",
            "name": "index"
          },
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The node that has just been updated</p>\n",
            "name": "node"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-event-itemupdate",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Fires when the node associated with an individual record is updated ...",
        "static": false,
        "name": "itemupdate",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Fires when the node associated with an individual record is updated</p>\n",
        "linenr": 228,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new x position</p>\n",
            "name": "x"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The new y position</p>\n",
            "name": "y"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-move",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after the component is moved. ...",
        "static": false,
        "name": "move",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is moved.</p>\n",
        "linenr": 688,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "<p>The DataView object</p>\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractView.html#Ext-view-AbstractView-event-refresh",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/view/AbstractView.js",
        "private": false,
        "shortDoc": "Fires when the view is refreshed ...",
        "static": false,
        "name": "refresh",
        "owner": "Ext.view.AbstractView",
        "doc": "<p>Fires when the view is refreshed</p>\n",
        "linenr": 222,
        "html_filename": "AbstractView.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.container.Container",
            "optional": false,
            "doc": "<p>Container which holds the component</p>\n",
            "name": "ownerCt"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-removed",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires when a component is removed from an Ext.container.Container ...",
        "static": false,
        "name": "removed",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires when a component is removed from an Ext.container.Container</p>\n",
        "linenr": 640,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-render",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after the component markup is rendered. ...",
        "static": false,
        "name": "render",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component markup is <a href=\"#/api/Ext.view.View-property-rendered\" rel=\"Ext.view.View-property-rendered\" class=\"docClass\">rendered</a>.</p>\n",
        "linenr": 654,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted width that was set</p>\n",
            "name": "adjWidth"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The box-adjusted height that was set</p>\n",
            "name": "adjHeight"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-resize",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after the component is resized. ...",
        "static": false,
        "name": "resize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is resized.</p>\n",
        "linenr": 680,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.view.View",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>Array of the selected nodes</p>\n",
            "name": "selections"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "View.html#Ext-view-View-event-selectionchange",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
        "private": false,
        "shortDoc": "Fires when the selected nodes change. ...",
        "static": false,
        "name": "selectionchange",
        "owner": "Ext.view.View",
        "doc": "<p>Fires when the selected nodes change. Relayed event from the underlying selection model.</p>\n",
        "linenr": 340,
        "html_filename": "View.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.Component",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractComponent.html#Ext-AbstractComponent-event-show",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Fires after the component is shown when calling the show method. ...",
        "static": false,
        "name": "show",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Fires after the component is shown when calling the <a href=\"#/api/Ext.view.View-event-show\" rel=\"Ext.view.View-event-show\" class=\"docClass\">show</a> method.</p>\n",
        "linenr": 620,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.state.Stateful",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The hash of state values returned from the StateProvider. This is passed\nto <b><tt>applyState</tt></b>. By default, that simply copies property values into this\nobject. The method maybe overriden to provide custom state restoration.</p>\n",
            "name": "state"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Stateful.html#Ext-state-Stateful-event-staterestore",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "shortDoc": "Fires after the state of the object is restored. ...",
        "static": false,
        "name": "staterestore",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires after the state of the object is restored.</p>\n",
        "linenr": 112,
        "html_filename": "Stateful.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.state.Stateful",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The hash of state values. This is determined by calling\n<b><tt>getState()</tt></b> on the object. This method must be provided by the\ndeveloper to return whetever representation of state is required, by default, <a href=\"#/api/Ext.state.Stateful\" rel=\"Ext.state.Stateful\" class=\"docClass\">Ext.state.Stateful</a>\nhas a null implementation.</p>\n",
            "name": "state"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Stateful.html#Ext-state-Stateful-event-statesave",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/state/Stateful.js",
        "private": false,
        "shortDoc": "Fires after the state of the object is saved to the configured state provider. ...",
        "static": false,
        "name": "statesave",
        "owner": "Ext.state.Stateful",
        "doc": "<p>Fires after the state of the object is saved to the configured state provider.</p>\n",
        "linenr": 133,
        "html_filename": "Stateful.html"
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
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-draggable",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "static": false,
        "name": "draggable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Read-only property indicating whether or not the component can be dragged</p>\n",
        "linenr": 395,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Ext.Container",
        "deprecated": null,
        "href": "Component2.html#Ext-Component-property-floatParent",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Optional. ...",
        "static": false,
        "name": "floatParent",
        "owner": "Ext.Component",
        "doc": "<p>Optional. Only present for <a href=\"#/api/Ext.view.View-cfg-floating\" rel=\"Ext.view.View-cfg-floating\" class=\"docClass\">floating</a> Components which were inserted as descendant items of floating Containers.</p>\n\n\n<p>Floating Components that are programatically <a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a> will not have a <code>floatParent</code> property.</p>\n\n\n<p>For <a href=\"#/api/Ext.view.View-cfg-floating\" rel=\"Ext.view.View-cfg-floating\" class=\"docClass\">floating</a> Components which are child items of a Container, the floatParent will be the floating ancestor Container which is\nresponsible for the base z-index value of all its floating descendants. It provides a <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> which provides\nz-indexing services for all its descendant floating Components.</p>\n\n\n<p>For example, the dropdown <a href=\"#/api/Ext.view.BoundList\" rel=\"Ext.view.BoundList\" class=\"docClass\">BoundList</a> of a ComboBox which is in a Window will have the Window as its\n<code>floatParent</code></p>\n\n\n<p>See <a href=\"#/api/Ext.view.View-cfg-floating\" rel=\"Ext.view.View-cfg-floating\" class=\"docClass\">floating</a> and <a href=\"#/api/Ext.view.View-property-zIndexManager\" rel=\"Ext.view.View-property-zIndexManager\" class=\"docClass\">zIndexManager</a></p>\n\n",
        "linenr": 224,
        "html_filename": "Component2.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-frameSize",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "Read-only property indicating the width of any framing elements which were added within the encapsulating element\nto ...",
        "static": false,
        "name": "frameSize",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Read-only property indicating the width of any framing elements which were added within the encapsulating element\nto provide graphical, rounded borders. See the <a href=\"#/api/Ext.view.View-cfg-frame\" rel=\"Ext.view.View-cfg-frame\" class=\"docClass\">frame</a> config.</p>\n\n\n<p> This is an object containing the frame width in pixels for all four sides of the Component containing\nthe following properties:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><code>top</code> The width of the top framing element in pixels.</li>\n<li><code>right</code> The width of the right framing element in pixels.</li>\n<li><code>bottom</code> The width of the bottom framing element in pixels.</li>\n<li><code>left</code> The width of the left framing element in pixels.</li>\n</ul></div>\n\n",
        "linenr": 228,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-maskOnDisable",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "This is an internal flag that you use when creating custom components. ...",
        "static": false,
        "name": "maskOnDisable",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This is an internal flag that you use when creating custom components.\nBy default this is set to true which means that every component gets a mask when its disabled.\nComponents like FieldContainer, FieldSet, Field, Button, Tab override this property to false\nsince they want to implement custom disable logic.</p>\n",
        "linenr": 542,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Ext.Container",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-ownerCt",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "shortDoc": "This Component's owner Container (defaults to undefined, and is set automatically when\nthis Component is added to a C...",
        "static": false,
        "name": "ownerCt",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>This Component's owner <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a> (defaults to undefined, and is set automatically when\nthis Component is added to a Container).  Read-only.</p>\n\n<p><b>Note</b>: to access items within the Container see <tt><a href=\"#/api/Ext.view.View-cfg-itemId\" rel=\"Ext.view.View-cfg-itemId\" class=\"docClass\">itemId</a></tt>.</p>\n\n",
        "linenr": 102,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractComponent.html#Ext-AbstractComponent-property-rendered",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractComponent.js",
        "private": false,
        "static": false,
        "name": "rendered",
        "owner": "Ext.AbstractComponent",
        "doc": "<p>Read-only property indicating whether or not the component has been rendered.</p>\n",
        "linenr": 521,
        "html_filename": "AbstractComponent.html"
      },
      {
        "inheritable": false,
        "type": "Class",
        "deprecated": null,
        "href": "Base3.html#Ext-Base-property-self",
        "protected": true,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "static": false,
        "name": "self",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n",
        "linenr": 18,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "type": "Ext.ZIndexManager",
        "deprecated": null,
        "href": "Component2.html#Ext-Component-property-zIndexManager",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/Component.js",
        "private": false,
        "shortDoc": "Optional. ...",
        "static": false,
        "name": "zIndexManager",
        "owner": "Ext.Component",
        "doc": "<p>Optional. Only present for <a href=\"#/api/Ext.view.View-cfg-floating\" rel=\"Ext.view.View-cfg-floating\" class=\"docClass\">floating</a> Components after they have been rendered.</p>\n\n\n<p>A reference to the ZIndexManager which is managing this Component's z-index.</p>\n\n\n<p>The <a href=\"#/api/Ext.ZIndexManager\" rel=\"Ext.ZIndexManager\" class=\"docClass\">ZIndexManager</a> maintains a stack of floating Component z-indices, and also provides a single modal\nmask which is insert just beneath the topmost visible modal floating Component.</p>\n\n\n<p>Floating Components may be <a href=\"#/api/Ext.view.View-method-toFront\" rel=\"Ext.view.View-method-toFront\" class=\"docClass\">brought to the front</a> or <a href=\"#/api/Ext.view.View-method-toBack\" rel=\"Ext.view.View-method-toBack\" class=\"docClass\">sent to the back</a> of the z-index stack.</p>\n\n\n<p>This defaults to the global <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a> for floating Components that are programatically\n<a href=\"#/api/Ext.Component-event-render\" rel=\"Ext.Component-event-render\" class=\"docClass\">rendered</a>.</p>\n\n\n<p>For <a href=\"#/api/Ext.view.View-cfg-floating\" rel=\"Ext.view.View-cfg-floating\" class=\"docClass\">floating</a> Components which are added to a Container, the ZIndexManager is acquired from the first ancestor Container found\nwhich is floating, or if not found the global <a href=\"#/api/Ext.WindowManager\" rel=\"Ext.WindowManager\" class=\"docClass\">ZIndexManager</a> is used.</p>\n\n\n<p>See <a href=\"#/api/Ext.view.View-cfg-floating\" rel=\"Ext.view.View-cfg-floating\" class=\"docClass\">floating</a> and <a href=\"#/api/Ext.view.View-property-floatParent\" rel=\"Ext.view.View-property-floatParent\" class=\"docClass\">floatParent</a></p>\n\n",
        "linenr": 209,
        "html_filename": "Component2.html"
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
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/View.js",
  "private": false,
  "alternateClassNames": [
    "Ext.DataView"
  ],
  "static": false,
  "name": "Ext.view.View",
  "doc": "<p>A mechanism for displaying data using custom layout templates and formatting. DataView uses an <a href=\"#/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a>\nas its internal templating mechanism, and is bound to an <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>\nso that as the data in the store changes the view is automatically updated to reflect the changes.  The view also\nprovides built-in behavior for many common events that can occur for its contained items including click, doubleclick,\nmouseover, mouseout, etc. as well as a built-in selection model. <b>In order to use these features, an <a href=\"#/api/Ext.view.View-cfg-itemSelector\" rel=\"Ext.view.View-cfg-itemSelector\" class=\"docClass\">itemSelector</a>\nconfig must be provided for the DataView to determine what nodes it will be working with.</b></p>\n\n<p>The example below binds a DataView to a <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> and renders it into an <a href=\"#/api/Ext.panel.Panel\" rel=\"Ext.panel.Panel\" class=\"docClass\">Ext.panel.Panel</a>.</p>\n\n<p><p><img src=\"doc-resources/Ext.DataView/Ext.DataView.png\" alt=\"Ext.DataView component\"></p></p>\n\n<pre><code>Ext.regModel('Image', {\n    Fields: [\n        {name:'src', type:'string'},\n        {name:'caption', type:'string'}\n    ]\n});\n\nExt.create('Ext.data.Store', {\n    id:'imagesStore',\n    model: 'Image',\n    data: [\n        {src:'http://www.sencha.com/img/20110215-feat-drawing.png', caption:'Drawing &amp; Charts'},\n        {src:'http://www.sencha.com/img/20110215-feat-data.png', caption:'Advanced Data'},\n        {src:'http://www.sencha.com/img/20110215-feat-html5.png', caption:'Overhauled Theme'},\n        {src:'http://www.sencha.com/img/20110215-feat-perf.png', caption:'Performance Tuned'}\n    ]\n});\n\nvar imageTpl = new Ext.XTemplate(\n    '&amp;lt;tpl for=\".\"&amp;gt;',\n        '&amp;lt;div style=\"thumb-wrap\"&amp;gt;',\n          '&amp;lt;img src=\"{src}\" /&amp;gt;',\n          '&amp;lt;br/&amp;gt;&amp;lt;span&amp;gt;{caption}&amp;lt;/span&amp;gt;',\n        '&amp;lt;/div&amp;gt;',\n    '&amp;lt;/tpl&amp;gt;'\n);\n\nExt.create('Ext.DataView', {\n    store: Ext.data.StoreManager.lookup('imagesStore'),\n    tpl: imageTpl,\n    itemSelector: 'div.thumb-wrap',\n    emptyText: 'No images available',\n    renderTo: Ext.getBody()\n});\n</code></pre>\n",
  "docauthor": null,
  "component": true,
  "linenr": 1,
  "xtypes": [
    "dataview"
  ],
  "html_filename": "View.html",
  "statics": {
    "cfg": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [

    ]
  },
  "extends": "Ext.view.AbstractView"
});