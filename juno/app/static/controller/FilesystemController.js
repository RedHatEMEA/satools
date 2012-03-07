Ext.define("Juno.controller.FilesystemController", {
    extend: "Ext.app.Controller",

    stores: [
	"NodesStore"
    ],

    views: [
	"FilesystemView",
	"FilesystemFolderMenuView",
	"FilesystemPresentationMenuView"
    ],

    refs: [{
	ref: "searchfield",
	selector: "#searchfield"
    }, {
	ref: "searchbutton",
	selector: "#searchbutton"
    }, {
	ref: "slidebrowser",
	selector: "slidebrowser"
    }, {
	ref: "treepanel",
	selector: "treepanel"
    }, {
	ref: "treeview",
	selector: "treeview"
    }],

    init: function() {
        this.control({
            "filesystem": {
		itemclick: this.tv_click,
		itemcontextmenu: this.tv_rclick
            },
	    "menuitem[itemid = 'fpmv_show']": {
		click: this.fpmv_show
	    },
	    "menuitem[itemid = 'fpmv_download']": {
		click: this.fpmv_download
	    },
	    "menuitem[itemid = 'fpmv_delete']": {
		click: not_implemented
	    },
	    "menuitem[itemid = 'ffmv_searchin']": {
		click: this.ffmv_searchin
	    },
	    "menuitem[itemid = 'ffmv_searchunder']": {
		click: this.ffmv_searchunder
	    },
	    "menuitem[itemid = 'ffmv_create']": {
		click: not_implemented
	    },
	    "menuitem[itemid = 'ffmv_delete']": {
		click: not_implemented
	    },
	    "menuitem[itemid = 'ffmv_upload']": {
		click: not_implemented
	    },
	    "menuitem[itemid = 'ffmv_expand']": {
		click: this.ffmv_expand
	    },
	    "menuitem[itemid = 'ffmv_collapse']": {
		click: this.ffmv_collapse
	    }
        });
    },

    tv_rclick: function(tv, rec, item, index, e) {
	var menu = Ext.ComponentManager.create({
	    xtype: rec.isLeaf() ? "filesystempresentationmenu" : "filesystemfoldermenu",
	    data: rec.data
	});

	menu.showAt(e.getXY());
	e.stopEvent();
    },
    
    tv_click: function(tv, rec, item, index, e, options) {
	if(rec.isLeaf())
	    this.fpmv_show();
	else
	    tv.expand(rec);
    },

    fpmv_download:function() {
	var rec = this.getTreepanel().getSelectionModel().getSelection()[0];

	window.open("../dl/" + rec.data.id, "_blank");
    },

    do_search: function(verb) {
	var rec = this.getTreepanel().getSelectionModel().getSelection()[0];

	this.getSearchfield().setValue(verb + ":\"" + rec.data.id + "\"");
	this.getSearchbutton().fireEvent("click");
    },

    fpmv_show: function() {
	this.do_search("is");
    },

    ffmv_searchin: function() {
	this.do_search("in");
    },

    ffmv_searchunder: function() {
	this.do_search("under");
    },

    ffmv_create: function() {
    },

    ffmv_delete: function() {
	var rec = this.getTreepanel().getSelectionModel().getSelection()[0];
	var store = this.getTreepanel().getStore();

	store.load({ node: rec });
    },

    ffmv_upload: function() {
    },

    ffmv_expand: function() {
	var rec = this.getTreepanel().getSelectionModel().getSelection()[0];
	this.getTreeview().expand(rec, true);
    },

    ffmv_collapse: function() {
	var rec = this.getTreepanel().getSelectionModel().getSelection()[0];
	this.getTreeview().collapse(rec, true);
    }
});