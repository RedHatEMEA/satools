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
	ref: "presobrowser",
	selector: "presobrowser"
    }, {
	ref: "treepanel",
	selector: "treepanel"
    }, {
	ref: "viewport",
	selector: "#myviewport"
    }, {
	ref: "zoomimage",
	selector: "#myimage"
    }, {
	ref: "slidezoom",
	selector: "slidezoom"
    }],

    init: function() {
        this.control({
            "slidebrowser": {
		containerkeydown: this.keydown,
		containerclick: this.click,
		itemclick: this.iclick,
                itemcontextmenu: this.irclick,
                itemdblclick: this.idblclick,
		itemkeydown: this.ikeydown,
		render: this.setupdragzone
            },
	    "presobrowser": {
		containerkeydown: this.keydown,
		containerclick: this.click,
		itemclick: this.iclick,
                itemcontextmenu: this.irclick,
                containercontextmenu: this.rclick,
                itemdblclick: this.idblclick,
		itemkeydown: this.ikeydown,
		render: this.setupdragzone,
		resize: this.resize
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
	    "menuitem[itemid = 'sbmv_show']": {
		click: this.sbmv_show
	    },
	    "menuitem[itemid = 'pbmv_new']": {
		click: this.pbmv_new
	    },
	    "menuitem[itemid = 'pbmv_saveas']": {
		click: not_implemented
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

    setupdragzone: function(dv) {
	dv.dragZone = new Ext.dd.DragZone(dv.el, {
	    onStartDrag: function(x, y) {
		if(!dv.isSelected(this.dragData.ddel))
		    dv.select(this.dragData.rec);
	    },
	    
	    getDragData: function(e) {
		var elem = e.getTarget(dv.itemSelector);
		
		if(elem)
		    return {
			rec: dv.getRecord(elem),
			ddel: elem,
			dv: dv,
			repairXY: Ext.fly(elem).getXY()
		    };
		
		return null;
	    },
	    
	    getRepairXY: function() {
		return this.dragData.repairXY;
	    }
	});
    },

    setupdropzone: function(dv) {
	var controller = this;

	dv.dropZone = new Ext.dd.DropZone(dv.el, {
	    getTargetFromEvent: function(e) {
		return dv;
	    },
		
	    onNodeOver: function(nodeData, source, e, data) { 
		return this.dropAllowed;
	    },
	    
	    onNodeDrop: function(nodeData, source, e, data) {
		var nodes = dv.getNodes();
		var srcnodes = source.dragData.dv.getSelectedNodes();
		var srcrecs = source.dragData.dv.getSelectionModel().getSelection();
		var x = e.getX() - dv.el.getLeft();
		var i;

		for(var insert = 0; insert < nodes.length && nodes[insert].offsetLeft + nodes[insert].offsetWidth < x; insert++);

		if(source.dragData.dv == dv) {
		    for(i = 0; i < srcnodes.length; i++) {
			if(srcnodes[i].offsetLeft < x) {
			    insert++;
			    break;
			}
		    }
		}

		for(i = 0; i < srcrecs.length; i++)
		    dv.store.insert(insert++, srcrecs[i].data);
		
		if(source.dragData.dv == dv)
		    dv.store.remove(srcrecs);
		else
		    controller.resize(dv);
		
		return true;
	    }
	});
    },

    click: function(dv, rec, item, index, e, options) {
	dv.select([]);
    },

    iclick: function(dv, rec, item, index, e, options) {
	dv.focus();
    },

    idblclick: function(dv, rec, item, index, e, options) {
	this.zoom(rec);
    },

    rclick: function(dv, e, options) {
	dv.select([]);
	return this.irclick(dv, null, null, null, e);
    },

    irclick: function(dv, rec, item, index, e) {
	if(rec && !dv.isSelected(rec))
	    dv.select(rec);
	
	var menu = Ext.ComponentManager.create({
	    xtype: dv == this.getSlidebrowser() ? "slidebrowsermenu" : "presobrowsermenu",
	    dv: dv,
	    rec: rec
	});

	menu.showAt(e.getXY());
	e.stopEvent();
    },

    keydown: function(dv, e, options) {
	if(e.getCharCode() == 65 && e.ctrlKey) {
	    this.selectall(dv);
	    e.preventDefault();
	}
    },

    ikeydown: function(dv, rec, item, index, e, options) {
	this.keydown(dv, e, options);

	if(e.keyCode == e.DELETE && !this.getSlidezoom() &&
	   dv == this.getPresobrowser()) {
	    this.removeselected(dv);
	    e.preventDefault();
	}

	if(e.keyCode == e.ESC && this.getSlidezoom()) {
	    this.getSlidezoom().close();
	    e.preventDefault();
	}

	if(e.keyCode == e.ENTER && !this.getSlidezoom()) {
	    this.zoom(rec);
	    e.preventDefault();
	}

	if(e.keyCode == e.LEFT || e.keyCode == e.RIGHT ||
	   e.keyCode == e.UP || e.keyCode == e.DOWN) {
	    item.scrollIntoViewIfNeeded();

	    if(this.getSlidezoom()) {
		this.getZoomimage().setSrc(rec.data.png);
		this.getSlidezoom().setTitle(rec.data.preso + " (slide " + (rec.data.slide + 1) + ")");
	    }

	    e.preventDefault();
	}
    },

    resize: function(dv, w, h, options) {
	w = dv.el.parent().getWidth(true);
	h = dv.el.parent().getHeight(true);

	if(dv.store.getCount()) {
	    var _w = (dv.store.getCount() + 1) * dv.el.first().getWidth();
	    var _h = dv.el.first().getHeight();

	    if(_w > w) {
		w = _w;
		h = _h;
	    }
	}
	dv.setSize(w, h);
    },

    sbmv_find: function(item, e, options) {
	var tree = this.getTreepanel();
	tree.selectPath("/root" + item.parentMenu.rec.data.preso, "text");
    },

    sbmv_show: function(item, e, options) {
	this.sbmv_find(item, e, options);
	this.getController("SearchController").search("is:\"" + item.parentMenu.rec.data.preso + "\"");
    },

    sbmv_zoom: function(item, e, options) {
	item.parentMenu.dv.focus();
	this.zoom(item.parentMenu.rec);
    },

    sbmv_selectall: function(item, e, options) {
	this.selectall(item.parentMenu.dv);
    },

    pbmv_download: function(item, e, options) {
	// TODO: not linked currently
	var data = item.parentMenu.dv.store.data;
	var a = [];
	for(var i in data.items) {
	    a.push(data.items[i].data.preso + "[" + data.items[i].data.slide + "]");
	}
	postToURL("../odp", {slides: a});
    },

    pbmv_new: function(item, e, options) {
	if(!item.parentMenu.dv.store.getCount())
	    return;

	Ext.Msg.show({
	    title: _["title"],
	    msg: "This will remove the slides you have selected. Are you sure?",
	    buttons: Ext.Msg.YESNOCANCEL,
	    icon: Ext.Msg.WARNING,
	    scope: this,
	    fn: function(buttonId) {
		if(buttonId == "yes") {
		    var pb = this.getPresobrowser();
		    this.selectall(pb);
		    this.removeselected(pb);
		}
	    }
	});
    },

    pbmv_remove: function(item, e, options) {
	this.removeselected(item.parentMenu.dv);
    },

    removeselected: function(dv) {
	var nodes = dv.getSelectionModel().getSelection();
	if(!nodes.length)
	    return;

	var idx = dv.store.indexOf(nodes[0]);
	for(var n in nodes)
	    idx = Math.min(idx, dv.store.indexOf(nodes[n]));
	dv.store.remove(nodes);
	this.resize(dv);
	if(dv.store.getCount() != 0) {
	    idx = Math.min(idx, dv.store.getCount() - 1);
	    dv.select(dv.store.getAt(idx));
	}
    },
    
    selectall: function(dv) {
	dv.getSelectionModel().selectAll();
    },

    zoom: function(rec) {
	Ext.ComponentManager.create({
	    xtype: "slidezoom",
	    title: rec.data.preso + " (slide " + (rec.data.slide + 1) + ")",
	    png: rec.data.png
	}).show();
    }
});
