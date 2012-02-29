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
		click: this.not_implemented
	    },
	    "menuitem[itemid = 'fpmv_delete']": {
		click: this.not_implemented
	    },
	    "menuitem[itemid = 'ffmv_searchin']": {
		click: this.ffmv_searchin
	    },
	    "menuitem[itemid = 'ffmv_searchunder']": {
		click: this.ffmv_searchunder
	    },
	    "menuitem[itemid = 'ffmv_create']": {
		click: this.not_implemented
	    },
	    "menuitem[itemid = 'ffmv_delete']": {
		click: this.not_implemented
	    },
	    "menuitem[itemid = 'ffmv_upload']": {
		click: this.not_implemented
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

    not_implemented: function() {
	Ext.Msg.alert(_["title"], "Functionality not implemented yet");
    },

    do_search: function(verb, noclick) {
	var rec = this.getTreepanel().getSelectionModel().getSelection()[0];
	var id = rec.data.id;

	if(id.search(" ") != -1)
	    id = "\"" + id + "\"";

	this.getSearchfield().setValue(verb + ":" + id);
	if(!noclick)
	    this.getSearchbutton().fireEvent("click");
    },

    fpmv_show: function() {
	this.do_search("is", 1);

	// TODO: not necessary when "is" logic implemented
	var rec = this.getTreepanel().getSelectionModel().getSelection()[0];
	var newurl = "../preso" + rec.data.id;

	var s = this.getSlidebrowser().getStore();
	if(s.getProxy().url != newurl) {
	    s.setProxy({
		type: "ajax",
		url: newurl
	    });
	    s.load();
	}
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