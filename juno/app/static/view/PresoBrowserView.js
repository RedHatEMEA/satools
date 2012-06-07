Ext.define("Juno.view.PresoBrowserView", {
    alias: "widget.presobrowser",
    extend: "Ext.view.View",
    itemSelector: "span.thumb-wrap",
    multiSelect: true,
    store: "PresosStore",
    tpl: new Ext.XTemplate(
	'<tpl for=".">',
	'<span class="thumb-wrap" style="display:inline-block;margin:3px;">',
	'<img src="{src}" style="display:inline-block;margin:6px;"/>',
	'</span>',
	'</tpl>')
});
