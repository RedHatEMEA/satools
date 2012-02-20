Ext.define("Juno.controller.SlidesController", {
    extend: "Ext.app.Controller",

    stores: [
	"PresosStore",
	"SlidesStore"
    ],

    views: [
	"PresoBrowserView",
	"PresoBrowserMenuView",
	"SlideBrowserView",
	"SlideBrowserMenuView",
	"SlideZoomView"
    ],

    refs: [{
	ref: "slidebrowser",
	selector: "slidebrowser"
    }, {
	ref: "treepanel",
	selector: "treepanel"
    }, {
	ref: "viewport",
	selector: "#myviewport"
    }],

    init: function() {
        this.control({
            "slidebrowser": {
		containerkeydown: this.selectall,
		itemclick: this.click,
                itemcontextmenu: this.rclick,
                itemdblclick: this.idblclick,
		itemkeydown: this.sb_iselectall,
		render: this.setupdragzone
            },
	    "presobrowser": {
		containerkeydown: this.selectall,
		itemclick: this.click,
                itemcontextmenu: this.rclick2,
                containercontextmenu: this.rclick3,
                itemdblclick: this.idblclick,
		itemkeydown: this.pb_iselectall,
		render: this.setupdragzone
	    },
	    "menuitem[itemid = 'sbmv_selectall']": {
		click: this.sbmv_selectall
	    },
	    "menuitem[itemid = 'sbmv_zoom']": {
		click: this.sbmv_zoom
	    },
	    "menuitem[itemid = 'sbmv_find']": {
		click: this.sbmv_find
	    },
	    "menuitem[itemid = 'pbmv_new']": {
		click: this.pbmv_new
	    },
	    "menuitem[itemid = 'pbmv_save']": {
		click: this.pbmv_save
	    },
	    "menuitem[itemid = 'pbmv_saveas']": {
		click: this.pbmv_saveas
	    },
	    "menuitem[itemid = 'pbmv_download']": {
		click: this.pbmv_download
	    },
	    "menuitem[itemid = 'pbmv_selectall']": {
		click: this.sbmv_selectall
	    },
	    "menuitem[itemid = 'pbmv_zoom']": {
		click: this.sbmv_zoom
	    },
	    "menuitem[itemid = 'pbmv_remove']": {
		click: this.pbmv_remove
	    }
        });
        this.control({
	    "presobrowser": {
		render: this.setupdropzone
	    }
        });
    },

    click: function(dv, rec, item, index, e, options) {
	dv.focus();
    },

    setupdragzone: function(dv) {
	dv.dragZone = new Ext.dd.DragZone(dv.el, {
	    onStartDrag: function(x, y) {
		if(!dv.isSelected(this.dragData.ddel)) {
		    dv.select(this.dragData.rec, false);
		}
	    },
	    
	    getDragData: function(e) {
		var elem = e.getTarget(dv.itemSelector);
		
		if(elem) {
		    return {
			rec: dv.getRecord(elem),
			ddel: elem,
			dv: dv,
			repairXY: Ext.fly(elem).getXY()
		    };
		}
		
		return null;
	    },
	    
	    getRepairXY: function() {
		return this.dragData.repairXY;
	    }
	});
    },

    setupdropzone: function(dv) {
	dv.dropZone = new Ext.dd.DropZone(dv.el, {
	    getTargetFromEvent: function(e) {
		return dv;
	    },
		
	    onNodeOver: function(nodeData, source, e, data) { 
		return this.dropAllowed;
	    },
	    
	    onNodeDrop: function(nodeData, source, e, data) {
		var x = e.getX() - dv.getPosition()[0];
		
		var nodes = dv.getNodes();
		for(var insert = 0; insert < nodes.length && nodes[insert].offsetLeft + nodes[insert].offsetWidth < x; insert++) true;
		
		var newnodes = source.dragData.dv.getSelectionModel().selected.items;
		for(var i = 0; i < newnodes.length; i++) {
		    dv.store.insert(insert, newnodes[i].data);
		    insert++;
		}
		
		if(source.dragData.dv == dv) {
		    dv.store.remove([source.dragData.rec]);
		} else {
		    dv.setSize((nodes.length + newnodes.length + 1) * 268, 205);
		}
		
		return true;
	    }
	});
    },

    selectall: function(dv, e, options) {
	if(e.getCharCode() == 65 && e.ctrlKey) {
	    this.selectall(dv);
	    e.preventDefault();
	}
    },

    pb_iselectall: function(dv, rec, item, index, e, options) {
	if(e.getCharCode() == 65 && e.ctrlKey) {
	    this.selectall(dv);
	    e.preventDefault();
	}

	if(e.keyCode == e.DELETE) { // TODO: handle press delete when no item selected
	    this.remove(dv, rec, item);
	    e.preventDefault();
	}
    },

    sb_iselectall: function(dv, rec, item, index, e, options) {
	if(e.getCharCode() == 65 && e.ctrlKey) {
	    this.selectall(dv);
	    e.preventDefault();
	}
    },

    idblclick: function(dv, rec, item, index, e, options) {
	this.zoom(rec);
    },

    rclick: function(dv, rec, item, index, e) {
	var menu = Ext.ComponentManager.create({
	    xtype: "slidebrowsermenu",
	    dv: dv,
	    rec: rec
	});

	menu.showAt(e.getXY());
	e.stopEvent();
    },

    sbmv_find: function(item, e, options) {
	var tree = this.getTreepanel();
	tree.selectPath("/root" + item.parentMenu.rec.data.preso, "text");
    },

    sbmv_zoom: function(item, e, options) {
	this.zoom(item.parentMenu.rec);
    },

    sbmv_selectall: function(item, e, options) {
	this.selectall(item.parentMenu.dv);
    },

    rclick3: function(dv, e, options) {
	return this.rclick2(dv, null, null, null, e);
    },

    rclick2: function(dv, rec, item, index, e) {
	var menu = Ext.ComponentManager.create({
	    xtype: "presobrowsermenu",
	    dv: dv,
	    rec: rec,
	    item: item
	});

	menu.showAt(e.getXY());
	e.stopEvent();
    },

    pbmv_download: function(item, e, options) {
	var data = item.parentMenu.dv.store.data;
	var a = [];
	for(var i in data.items) {
	    a.push(data.items[i].data.preso + "[" + data.items[i].data.slide + "]");
	}
	postToURL("/odp", {slides: a});
    },

    pbmv_remove: function(item, e, options) {
	this.remove(item.parentMenu.dv, item.parentMenu.rec,
		    item.parentMenu.item);
    },

    remove: function(dv, rec, item) {
	if(!dv.isSelected(item))
	    dv.select(rec, false);
		
	var nodes = dv.getSelectionModel().selected.items;
	dv.store.remove(nodes.slice());
	
	dv.setSize((dv.store.getCount() + 1) * 268, 205);
    },

    selectall: function(dv) {
	dv.getSelectionModel().selectAll();
    },

    zoom: function(rec) {
	Ext.ComponentManager.create({
	    xtype: "slidezoom",
	    title: rec.data.preso + " (" + rec.data.slide + ")",
	    png: rec.data.png
	}).show();
    }
});