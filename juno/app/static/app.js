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
	"TreeController"
    ],

    launch: function() {
	Ext.define("Image", {
	    extend: "Ext.data.Model",
	    fields: [
		{name: "src", type: "string"},
		{name: "png", type: "string"},
		{name: "preso", type: "string"},
		{name: "slide", type: "int"},
		{name: "height", type: "int"},
		{name: "width", type: "int"}
	    ]
	});

	var dvwrap = Ext.create("Ext.panel.Panel", {
	    autoScroll: true,
	    items: [ { xtype: "slidebrowser" } ],
	    region: "center",
	    title: "Slides"
	});

	var dv2wrap = Ext.create("Ext.panel.Panel", {
	    autoScroll: true,
	    collapsible: true,
	    height: 250,
	    items: [ { xtype: "presobrowser" } ],
	    region: "south",
	    title: "Presentation"
	});

        Ext.create("Ext.container.Viewport", {
	    id: "myviewport",
            defaults: {
		split: true
            },
            items: [
		{
		    collapsible: true,
		    height: "100", //bug
		    items: [
			{ xtype: "tree" },
			{ xtype: "search" }
		    ],
		    layout: "accordion",
		    region: "west",
		    title: "Juno",
		    width: "20%"
		},
		{
		    border: false,
		    defaults: {
			split: true
		    },
		    items: [
			dvwrap,
			dv2wrap
		    ],
		    layout: {
			type: "border"
		    },
		    region: "center"
		}
	    ],
            layout: {
		padding: 5,
		type: "border"
            }
        });
    }
});