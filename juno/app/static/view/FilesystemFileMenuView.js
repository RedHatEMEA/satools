Ext.define("Juno.view.FilesystemFileMenuView", {
    alias: "widget.filesystemfilemenu",
    extend: "Ext.menu.Menu",
    plain: true,

    constructor: function() {
	this.callParent(arguments);
	this.populate();
	return this;
    },

    populate: function() {
	this.add([{
	    text: "Show presentation",
	    itemid: "ffmv_show"
	}, {
	    text: "Download presentation..."
	}, {
	    text: "Delete presentation"
	}]);
    }
});
