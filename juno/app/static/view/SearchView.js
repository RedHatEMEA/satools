Ext.define("Juno.view.SearchView", {
    alias: "widget.search",
    extend: "Ext.panel.Panel",
    layout: {
	type: "absolute"
    },
    items: [{
	xtype: "panel",
	padding: 10,
	border: 0,
	layout: {
	    type: "hbox",
	    align: "middle"
	},
	items: [{
	    xtype: "label",
	    html: "Search:&nbsp;&nbsp;"
	}, {
	    xtype: "textfield",
	    itemId: "searchfield",
	    flex: 1
	}, {
	    xtype: "label",
	    width: 10
	}, {
	    xtype: "button",
	    itemId: "searchbutton",
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
    }, {
	xtype: "panel",
	autoScroll: true,
	items: [ { xtype: "slidebrowser" } ],
	y: "40",
	anchor: "-5 -5",
	border: 0
    }]
});
