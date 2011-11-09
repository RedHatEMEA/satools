Ext.define("Search.controller.Results", {
    extend: "Ext.app.Controller",

    stores: [
	"Results"
    ],

    views: [
	"Results"
    ],

    refs: [
	{
	    ref: "panel",
	    selector: "#mypanel"
	}
    ],

    init: function() {
	this.control({
            "#myresults": {
		selectionchange: this.selectionchange
	    }
        });
    },

    selectionchange: function(_this, selections, options) {
	var panel = this.getPanel();

	if(selections.length === 0) {
	    panel.update("");
	} else {
	    panel.getStore().setProxy({
		type: "ajax",
		url: "../m",
		extraParams: {
		    path: selections[0].data.path,
		    offset: selections[0].data.offset,
		    length: selections[0].data.length
		}
	    });
	    panel.getStore().load(
		function(records, operation, success) {
		    panel.setAutoScroll(true);
		}
	    );
	}
    }
});
