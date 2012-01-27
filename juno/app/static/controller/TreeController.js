Ext.define("Juno.controller.TreeController", {
    extend: "Ext.app.Controller",

    stores: [
	"NodesStore"
    ],

    views: [
	"TreeView"
    ],

    refs: [{
	ref: "searchfield",
	selector: "#searchfield"
    }, {
	ref: "slidebrowser",
	selector: "slidebrowser"
    }],

    init: function() {
        this.control({
            "tree": {
		itemclick: this.click,
		itemcontextmenu: this.rclick
            }
        });
    },

    rclick: function(tv, record, item, index, e) {
	sf = this.getSearchfield();
	var menu = new Ext.menu.Menu({
	    plain: true,
	    items: [{
		text: "Search in \"" + record.data.text + "\" and subtree",
		handler: function() {
		    if(record.data.id.search(" ") == -1)
			sf.setValue("under:" + record.data.id);
		    else
			sf.setValue("under:\"" + record.data.id + "\"");
		}
	    }, {
		text: "Search in \"" + record.data.text + "\"",
		handler: function() {
		    if(record.data.id.search(" ") == -1)
			sf.setValue("in:" + record.data.id);
		    else
			sf.setValue("in:\"" + record.data.id + "\"");
		}
	    }, {
		text: "Expand subtree",
		handler: function() {
		    tv.expand(record, true);
		}
	    }, {
		text: "Collapse subtree",
		handler: function() {
		    tv.collapse(record, true);
		}
	    }]
	});

	if(!record.isLeaf())
	    menu.showAt(e.getXY());
	e.stopEvent();
    },
    
    click: function(tv, record, item, index, e, options) {
	if(record.isLeaf() && tv.store.proxy.url != "/preso" + record.data.id) {
	    var s = this.getSlidebrowser().getStore();
	    s.setProxy({
		type: "ajax",
		url: "../preso" + record.data.id
	    });
	    s.load();

	    if(record.data.id.search(" ") == -1)
		this.getSearchfield().setValue("is:" + record.data.id);
	    else
		this.getSearchfield().setValue("is:\"" + record.data.id + "\"");
	} else if(!record.isLeaf()) {
	    tv.expand(record);
	}
    }
});