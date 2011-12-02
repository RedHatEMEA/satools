Ext.define("Juno.controller.TreeController", {
    extend: "Ext.app.Controller",

    stores: [
	"NodesStore"
    ],

    views: [
	"TreeView"
    ],

    init: function() {
        this.control({
            "tree": {
		itemclick: this.click,
		itemcontextmenu: this.rclick
            }
        });
    },

    rclick: function(tv, rec, item, index, e) {
	var menu = new Ext.menu.Menu({
	    plain: true,
	    items: [{
		text: "Expand subtree",
		handler: function() {
		    tv.expand(rec, true);
		}
	    },{
		text: "Collapse subtree",
		handler: function() {
		    tv.collapse(rec, true);
		}
	    }]
	});
	menu.showAt(e.getXY());
	e.stopEvent();
    },
    
    click: function(tv, record, item, index, e, options) {
	if(record.isLeaf() && tv.store.proxy.url != "/preso/" + record.data.id) {
	    newstore = Ext.create("Ext.data.Store", {
		model: "Image",
		proxy: {
		    type: "ajax",
		    url: "/preso/" + record.data.id
		},
		autoLoad: true
	    });
	    
	    var dv = Ext.ComponentQuery.query("slidebrowser")[0];
	    dv.bindStore(newstore);
	} else if(!record.isLeaf()) {
	    tv.expand(record);
	}
    }
});