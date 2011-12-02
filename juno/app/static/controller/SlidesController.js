Ext.define("Juno.controller.SlidesController", {
    extend: "Ext.app.Controller",

    stores: [
	"PresosStore",
	"SlidesStore"
    ],

    views: [
	"PresoBrowserView",
	"SlideBrowserView"
    ],

    init: function() {
        this.control({
            "slidebrowser": {
		containerkeydown: this.selectall,
		itemclick: this.click,
                itemcontextmenu: this.rclick,
                itemdblclick: this.zoom,
		itemkeydown: this.iselectall,
		render: this.setupdragzone
            },
	    "presobrowser": {
		containerkeydown: this.selectall,
		itemclick: this.click,
                itemcontextmenu: this.rclick2,
                itemdblclick: this.zoom,
		itemkeydown: this.iselectall,
		render: this.setupdragzone
	    }
        });
        this.control({
	    "presobrowser": {
		itemkeydown: this.idel,
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
		for(var insert = 0; insert < nodes.length && nodes[insert].offsetLeft + nodes[insert].offsetWidth < x; insert++);
		
		var newnodes = source.dragData.dv.getSelectionModel().selected.items;
		for(var i = 0; i < newnodes.length; i++) {
		    dv.store.insert(insert++, newnodes[i].data);
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
	    dv.getSelectionModel().selectAll();
	    e.preventDefault();
	}
    },

    idel: function(dv, rec, item, index, e, options) {
	if(e.keyCode == e.DELETE) {
	    if(!dv.isSelected(item)) {
		dv.select(rec, false);
	    }
	    
	    var nodes = dv.getSelectionModel().selected.items;
	    dv.store.remove(nodes.slice());
	    
	    dv.setSize((dv.store.getCount() + 1) * 268, 205);
	    e.preventDefault();
	}
    },

    iselectall: function(dv, rec, item, index, e, options) {
	if(e.getCharCode() == 65 && e.ctrlKey) {
	    dv.getSelectionModel().selectAll();
	    e.preventDefault();
	}
    },

    rclick: function(dv, rec, item, index, e) {
	var menu = new Ext.menu.Menu({
	    plain: true,
	    items: [{
		text: "Find in tree",
		handler: function() {
		    var tree = Ext.ComponentQuery.query("treepanel")[0];
		    tree.expand();
		    tree.selectPath("/Filesystem" + rec.data.preso, "text");
		}
	    }]
	});
	menu.showAt(e.getXY());
	e.stopEvent();
    },

    rclick2: function(dv, rec, item, index, e) {
	var menu = new Ext.menu.Menu({
	    plain: true,
	    items: [{
		text: dv.getSelectionModel().selected.items.length <= 1 ? "Delete Slide" : "Delete Slides",
		handler: function() {
		    if(!dv.isSelected(item)) {
			dv.select(rec, false);
		    }
		    
		    var nodes = dv.getSelectionModel().selected.items;
		    dv.store.remove(nodes.slice());
		    
		    dv.setSize((dv.store.getCount() + 1) * 268, 205);
		}
	    },{
		text: "Create presentation",
		handler: function() {
		    var a = [];
		    for(var i in dv.store.data.items) {
			a.push(dv.store.data.items[i].data.preso + "[" + dv.store.data.items[i].data.slide + "]");
		    }
		    postToURL("/odp", {slides: a});
		}
	    }]
	});
	menu.showAt(e.getXY());
	e.stopEvent();
    },

    zoom: function(dv, rec, item, index, e, options) {
	var vp = Ext.ComponentManager.get("myviewport");
	var picaspect = 4 / 3; // units w/h
	var sz = 0.75; // 75% of screen
	var vph = vp.getHeight();
	var vpw = vp.getWidth();
	var w;
	if(vpw/vph >= picaspect) {
	    //screen letterbox, h is constraining factor;
	    w = vph * picaspect * sz;
	} else {
	    w = vpw * sz;
	}

	var win = Ext.create("Ext.window.Window", {
	    title: rec.data.preso,
	    width: w,
	    modal: true,
	    layout: "anchor",
	    resizable: false,
	    items: {
		anchor: "100%",
		xtype: "image",
		src: rec.data.png,
		listeners: {
		    click: {
			element: "el",
			fn: function(){ win.close(); }
		    },
		    afterrender: function(ths, opt){
			win.setHeight(w / picaspect + 25);
		    }
		}
	    }
	});
	win.show();
    }
});