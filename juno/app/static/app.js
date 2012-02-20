Ext.require("Ext.container.Viewport");
Ext.require("Ext.data.TreeStore");
Ext.require("Ext.form.Panel");
Ext.require("Ext.layout.container.Accordion");
Ext.require("Ext.layout.container.Border");
Ext.require("Ext.tree.Panel");
Ext.require("Ext.Img");

Ext.application({
    name: "Juno",
    appFolder: "",

    controllers: [
	"SearchController",
	"SlidesController",
	"FilesystemController"
    ],

    launch: function() {
        Ext.create("Ext.container.Viewport", {
	    items: [{
		xtype: "filesystem",
		region: "west",
		title: "Filesystem",
		collapsible: true,
		split: true,
		width: "18%"
	    }, {
		items: [{
		    xtype: "search",
		    region: "center"
		}, {
		    items: [{
			xtype: "presobrowser"
		    }],
		    region: "south",
		    title: "Presentation",
		    autoScroll: true,
		    collapsible: true,
		    layout: "fit",
		    height: 252,
		    split: true
		}],
		layout: {
		    type: "border"
		},
		region: "center",
		border: false
	    }],
	    layout: {
		padding: 5,
		type: "border"
	    },
	    id: "myviewport"
        });
    }
});
