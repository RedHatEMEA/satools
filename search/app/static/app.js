Ext.require("Ext.container.Viewport");
Ext.require("Ext.data.HasManyAssociation");
Ext.require("Ext.form.Label");
Ext.require("Ext.grid.column.Template");
Ext.require("Ext.layout.container.Absolute");
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
		xtype: "search",
		x: "10%",
		y: "2%",
		anchor: "90% 10%"
	    }, {
		xtype: "results",
		itemId: "myresults",
		x: "10%",
		y: "12%",
		anchor: "90% 49%"
	    }, {
                xtype: "panel",
		layout: "fit",
                   items: [{
                       xtype: "message",
                       itemId: "mypanel"
                   }],
		x: "10%",
		y: "50.5%",
		anchor: "90% 98%"
            }]
	});

	Ext.util.History.init();
	var sc = this.getController("Search");
	Ext.util.History.on('change', sc.historysearch, sc);
	sc.historysearch(Ext.util.History.getToken());
    }
});
