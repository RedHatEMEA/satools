Ext.define("Juno.view.FilesystemFolderMenuView", {
    alias: "widget.filesystemfoldermenu",
    extend: "Ext.menu.Menu",
    plain: true,

    constructor: function() {
	this.callParent(arguments);
	this.populate();
	return this;
    },

    populate: function() {
	this.add([{
	    text: "Search in \"" + this.data.text + "\"",
	    itemid: "ffmv_searchin"
	}, {
	    text: "Search in \"" + this.data.text + "\" and subfolders",
	    itemid: "ffmv_searchunder"
	}, "-", {
	    text: "Expand subfolders",
	    itemid: "ffmv_expand"
	}, {
	    text: "Collapse subfolders",
	    itemid: "ffmv_collapse"
	}]);
    }
});
