Ext.define("Search.view.Search", {
    alias: "widget.search",
    extend: "Ext.form.Panel",
    bodyPadding: 10,
    layout: {
	type: "hbox",
	align: "middle"
    },
    items: [{
	xtype: "label",
	html: "Search:&nbsp;&nbsp;"
    }, {
	xtype: "textfield",
	itemId: "mytextfield",
	flex: 1
    }, {
	xtype: "label",
	width: 10
    }, {
	xtype: "button",
	itemId: "mybutton",
	text: "Submit"
    }, {
	xtype: "label",
	width: 10
    }, {
	xtype: "label",
	html: "<a href='help' target='_blank'>Help</a>"
    }, {
	xtype: "label",
	width: 10
    }, {
	xtype: "label",
	html: "<a href='/' target='_blank'>More SA tools</a>"
    }]
});
