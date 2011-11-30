Ext.define("Juno.view.PresoBrowser", {
    alias: "widget.presobrowser",
    extend: "Ext.view.View",
    height: 205, //bug
    itemSelector: "span.thumb-wrap",
    multiSelect: true,
    store: "Slides",
    tpl: new Ext.XTemplate(
	'<tpl for=".">',
	'<span class="thumb-wrap" style="display:inline-block;margin:3px;">',
	'<img src="{src}" style="display:inline-block;margin:6px;"/>',
	'</span>',
	'</tpl>')
});
