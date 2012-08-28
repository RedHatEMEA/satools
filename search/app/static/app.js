Ext.require("Ext.container.Viewport");
Ext.require("Ext.data.HasManyAssociation");
Ext.require("Ext.form.Label");
Ext.require("Ext.grid.column.Template");
Ext.require("Ext.toolbar.Paging");
Ext.require("Ext.util.History");

Ext.application({
    name: "Search",
    appFolder: "static",

    controllers: [
	"Results",
	"Search",
	"Message"
    ],

    launch: function() {
	Ext.create("Ext.container.Viewport", {
	    layout: "absolute",
	    items: [{
		layout: {
		    type: "vbox",
		    align: "stretch"
		},
		items: [{
		    border: 0,
		    flex: 1
		}, {
		    xtype: "search"
		}, {
		    border: 0,
		    flex: 1
		}, {
		    xtype: "results",
		    itemId: "myresults",
		    flex: 12
		}, {
		    border: 0,
		    flex: 1
		}, {
		    xtype: "panel",
		    layout: "fit",
		    items: [{
			xtype: "message",
			itemId: "mypanel"
		    }],
		    flex: 20
		}, {
		    border: 0,
		    flex: 1
		}],
		border: 0,
		x: "10%",
		anchor: (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) ? "90% 100%" : "80% 100%"
	    }]
	});

	Ext.util.History.init();
	var sc = this.getController("Search");
	Ext.util.History.on('change', sc.historysearch, sc);
	sc.historysearch(Ext.util.History.getToken());
    }
});
