Ext.define("Juno.view.PresoBrowserMenuView", {
    alias: "widget.presobrowsermenu",
    extend: "Ext.menu.Menu",
    plain: true,

    constructor: function() {
	this.callParent(arguments);
	this.populate();
	return this;
    },

    populate: function() {
	this.add([{
	    text: "New presentation",
	    itemid: "pbmv_new"
	}, {
	    text: "Download presentation...",
	    itemid: "pbmv_download"
	}, "-", {
	    text: "Select all",
	    itemid: "pbmv_selectall"
	}]);

	if(this.rec)
	    this.add([{
		text: "Zoom slide...",
		itemid: "pbmv_zoom"
	    }, {
		text: this.dv.getSelectionModel().getCount() > 1 ? "Remove slides" : "Remove slide",
		itemid: "pbmv_remove"
	    }]);
    }
});
